"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import {
    useParams,
    useRouter,
} from "next/navigation";

import whyUsbg from "@/assets/whyUsbg.png";

import { useAuth } from "@/context/AuthContext";

import { getRoom, updateRoom } from "@/lib/firebase/room";
import { getProperty } from "@/lib/firebase/property";
import { generateTenantId } from "@/lib/firebase/tenant";

import { bookingService } from "@/services/booking/bookingService";
import { tenantService } from "@/services/tenant/tenantService";

import { Room } from "@/types/roomTypes";
import { Property } from "@/types/property";

import BookingButton from "./BookingButton";
import BookingHeader from "./BookingHeader";
import BookingLoading from "./BookingLoading";
import BookingPolicies from "./BookingPolicies";
import MoveInDate from "./MoveInDate";
import PaymentSummary from "./PaymentSummary";
import TenantInformation from "./TenantInformation";

export default function BookingPage() {
    /* ==========================================================
       Navigation
    ========================================================== */

    const router = useRouter();

    const params = useParams();

    const roomId = params.bookingId as string;

    const { currentUser } = useAuth();

    /* ==========================================================
       Firestore State
    ========================================================== */

    const [room, setRoom] =
        useState<Room | null>(null);

    const [property, setProperty] =
        useState<Property | null>(null);

    const [loading, setLoading] =
        useState(true);

    const [processing, setProcessing] =
        useState(false);

    const [error, setError] =
        useState<string | null>(null);

    /* ==========================================================
       Form State
    ========================================================== */

    const [officialName, setOfficialName] =
        useState("");

    const [phoneNumber, setPhoneNumber] =
        useState("");

    const [moveInDate, setMoveInDate] =
        useState("");

    const [acceptedTerms, setAcceptedTerms] =
        useState(false);

    const [
        acceptedCancellation,
        setAcceptedCancellation,
    ] = useState(false);

    const [
    confirmedInformation,
    setConfirmedInformation,
] = useState(false);

const [policyError, setPolicyError] =
    useState("");

    /* ==========================================================
       Load Room
    ========================================================== */

    useEffect(() => {
        async function loadData() {
            try {
                setLoading(true);

                const roomData =
                    await getRoom(roomId);

                if (!roomData) {
                    setError(
                        "Room not found."
                    );

                    return;
                }

                setRoom(roomData);

                const propertyData =
                    await getProperty(
                        roomData.propertyId
                    );

                if (!propertyData) {
                    setError(
                        "Property not found."
                    );

                    return;
                }

                setProperty(propertyData);
            } catch (error) {
                console.error(error);

                setError(
                    "Failed to load booking details."
                );
            } finally {
                setLoading(false);
            }
        }

        if (roomId) {
            loadData();
        }
    }, [roomId]);

    /* ==========================================================
       Loading
    ========================================================== */

    if (loading) {
        return <BookingLoading />;
    }

    /* ==========================================================
       Error
    ========================================================== */

    if (!room || !property || error) {
        return (
            <BookingHeader
                title="Booking Unavailable"
                subtitle={
                    error ??
                    "Unable to continue booking."
                }
                showBackButton
            />
        );
    }

    /* ==========================================================
       Validation
    ========================================================== */

   const canProceed =
    !!currentUser &&
    officialName.trim().length > 0 &&
    phoneNumber.trim().length === 10 &&
    moveInDate.length > 0 &&
    confirmedInformation &&
    acceptedTerms &&
    acceptedCancellation;

    /* ==========================================================
       Continue To Payment
       (Part 2)
    ========================================================== */

    async function handleProceedToPayment() {
        if(!room || !property || !currentUser){
            return;
        }
        if (!canProceed) {
            alert(
                "Please complete all required fields."
            );

            return;
        }

        try {
            setProcessing(true);

            /* ======================================================
               Fake Payment API
            ====================================================== */

            const paymentResponse =
                await fetch(
                    "/api/payment/create",
                    {
                        method: "POST",
                    }
                );

            const paymentResult =
                await paymentResponse.json();

            if (!paymentResult.success) {
                throw new Error(
                    paymentResult.message ??
                        "Payment failed."
                );
            }

            /* ======================================================
               Generate Tenant Id
            ====================================================== */

            const tenantId =
                generateTenantId();

            /* ======================================================
               Create Booking
            ====================================================== */
            const checkIn = new Date(moveInDate);

            const checkOut = new Date(moveInDate);
            checkOut.setFullYear(checkOut.getFullYear() + 10);
          const bookingResult =
    await bookingService.createBooking({
        roomId: room.roomId,

        tenantId,

        checkIn,

        checkOut,

        adults: 1,

        children: 0,

        specialRequest: "",

        paymentMethod: "upi",
    });
            if (
                !bookingResult.success ||
                !bookingResult.booking
            ) {
                throw new Error(
                    bookingResult.message ??
                        "Unable to create booking."
                );
            }

            /* ======================================================
               Create Tenant
            ====================================================== */

            const tenantResult =
                await tenantService.createTenant(
                    {
                        tenantId,

                        userId:
                            currentUser.uid,

                        bookingId:
                            bookingResult
                                .booking
                                .bookingId,

                        roomId:
                            room.roomId,

                        propertyId:
                            room.propertyId,

                        ownerId:
                            room.ownerId,

                        officialName,

                        phoneNumber,

                        email:
                            currentUser.email ??
                            "",

                        monthlyRent:
                            room.pricing
                                .rent,

                        securityDeposit:
                            room.pricing
                                .securityDeposit,

                        moveInDate:
                            new Date(
                                moveInDate
                            ),
                    }
                );

            if (
                !tenantResult.success
            ) {
                throw new Error(
                    tenantResult.message ??
                        "Unable to create tenant."
                );
            }

            /* ======================================================
               Update Room
            ====================================================== */

            await updateRoom(
                room.roomId,
                {
                    tenantId,

                    status:
                        "occupied",

                    availability:
                        {
                            ...room.availability,

                            availableNow:
                                false,
                        },
                }
            );

            /* ======================================================
               Success
            ====================================================== */

            router.push(
                `/tenant/${tenantId}`
            );
        } catch (error) {
            console.error(
                "Booking Error:",
                error
            );

            alert(
                error instanceof Error
                    ? error.message
                    : "Booking failed."
            );
        } finally {
            setProcessing(false);
        }
    }

    return (
        <div className="relative min-h-screen overflow-hidden">

            {/* Background */}

            <Image
                src={whyUsbg}
                alt="Booking Background"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]" />

            {/* Content */}

            <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">

                <BookingHeader />

                <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_.85fr]">

                    <div className="space-y-8">

                        <TenantInformation
                            officialName={
                                officialName
                            }
                            phoneNumber={
                                phoneNumber
                            }
                            onNameChange={
                                setOfficialName
                            }
                            onPhoneChange={
                                setPhoneNumber
                            }
                        />

                        <MoveInDate
                            moveInDate={
                                moveInDate
                            }
                            onChange={
                                setMoveInDate
                            }
                        />

                    </div>

                    <div className="space-y-8">
                        <PaymentSummary
                            monthlyRent={room.pricing.rent}
                            securityDeposit={room.pricing.securityDeposit}
                            maintenanceCharge={room.pricing.maintenanceCharge}
                            billingType={room.pricing.billingType}
                            electricityIncluded={room.pricing.electricityIncluded}
                            waterIncluded={room.pricing.waterIncluded}
                        />

                      <BookingPolicies
    acceptedTerms={acceptedTerms}
    acceptedCancellation={acceptedCancellation}
    confirmedInformation={confirmedInformation}
    onTermsChange={setAcceptedTerms}
    onCancellationChange={setAcceptedCancellation}
    onConfirmationChange={setConfirmedInformation}
    error={policyError}
/>

                        <BookingButton
                            loading={
                                processing
                            }
                            disabled={
                                !canProceed
                            }
                            onClick={
                                handleProceedToPayment
                            }
                        />

                    </div>

                </div>

            </div>

        </div>
    );
}