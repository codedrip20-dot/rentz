// src/services/booking/bookingService.ts

import { Timestamp } from "firebase/firestore";

import {
    createBooking,
    CreateBookingInput,
    getBookingsByRoom,
} from "@/lib/firebase/booking";

import { getProperty } from "@/lib/firebase/property";

import { getRoom } from "@/lib/firebase/room";

import {
    Booking,
    CreateBookingRequest,
} from "@/types/bookingTypes";

import { bookingAvailabilityService } from "./bookingAvailabilityService";
import { bookingPaymentService } from "./bookingPaymentService";
import { bookingPricingService } from "./bookingPricingService";
import { bookingValidationService } from "./bookingValidationService";

/* ============================================================================
   Booking Service Result
============================================================================ */

export interface BookingServiceResult {
    success: boolean;

    booking: Booking | null;

    message: string | null;
}

/* ============================================================================
   Booking Service
============================================================================ */

class BookingService {
    /* ------------------------------------------------------------------------
       Create Booking
    ------------------------------------------------------------------------ */

    public async createBooking(
        request: CreateBookingRequest
    ): Promise<BookingServiceResult> {
        try {
            /* --------------------------------------------------------------
               Fetch Room
            -------------------------------------------------------------- */

            const room = await getRoom(
                request.roomId
            );

            if (!room) {
                return {
                    success: false,
                    booking: null,
                    message: "Room not found.",
                };
            }

            /* --------------------------------------------------------------
               Fetch Property
            -------------------------------------------------------------- */

            const property =
                await getProperty(
                    room.propertyId
                );

            if (!property) {
                return {
                    success: false,
                    booking: null,
                    message:
                        "Property not found.",
                };
            }

            /* --------------------------------------------------------------
               Fetch Existing Bookings
            -------------------------------------------------------------- */

            const bookings =
                await getBookingsByRoom(
                    room.roomId
                );

            /* --------------------------------------------------------------
               Validate Booking
            -------------------------------------------------------------- */

            const validation =
                bookingValidationService.validateBooking(
                    room,
                    bookings,
                    request.tenantId,
                    request.checkIn,
                    request.checkOut,
                    request.adults,
                    request.children
                );

            if (!validation.valid) {
                return {
                    success: false,
                    booking: null,
                    message:
                        validation.message ??
                        "Booking validation failed.",
                };
            }

            /* --------------------------------------------------------------
               Check Availability
            -------------------------------------------------------------- */

            const availability =
                bookingAvailabilityService.canBookRoom(
                    room,
                    bookings,
                    request.checkIn,
                    request.checkOut
                );

            if (!availability.available) {
                return {
                    success: false,
                    booking: null,
                    message:
                        availability.reason ??
                        "Room is unavailable.",
                };
            }

            /* --------------------------------------------------------------
               Calculate Pricing
            -------------------------------------------------------------- */

            const pricing =
                bookingPricingService.calculatePricing(
                    room
                );

            if (
                !pricing.valid ||
                !pricing.pricing
            ) {
                return {
                    success: false,
                    booking: null,
                    message:
                        pricing.message ??
                        "Unable to calculate booking price.",
                };
            }
/* --------------------------------------------------------------
               Process Payment
            -------------------------------------------------------------- */

            const payment =
                await bookingPaymentService.processPayment(
                    {
                        amount:
                            pricing.pricing.totalAmount,

                        paymentMethod:
                            request.paymentMethod,
                    }
                );

            if (!payment.success) {
                return {
                    success: false,
                    booking: null,
                    message:
                        payment.message ??
                        "Payment failed.",
                };
            }

            /* --------------------------------------------------------------
               Create Reservation Expiry
            -------------------------------------------------------------- */

            const expiresAt =
                Timestamp.fromDate(
                    new Date(
                        Date.now() +
                            30 * 60 * 1000
                    )
                );

            /* --------------------------------------------------------------
               Prepare Booking Data
            -------------------------------------------------------------- */

            const bookingData: CreateBookingInput =
                {
                    roomId: room.roomId,

                    propertyId:
                        room.propertyId,

                    ownerId: room.ownerId,

                    tenantId:
                        request.tenantId,

                    status: "confirmed",

                    dates: {
                        checkIn:
                            Timestamp.fromDate(
                                request.checkIn
                            ),

                        checkOut:
                            Timestamp.fromDate(
                                request.checkOut
                            ),
                    },

                    pricing:
                        pricing.pricing,

                    payment:
                        payment.payment,

                    metadata: {
                        specialRequest:
                            request.specialRequest,

                        adults:
                            request.adults,

                        children:
                            request.children,
                    },

                    expiresAt,
                };

            /* --------------------------------------------------------------
               Save Booking
            -------------------------------------------------------------- */

            const booking =
                await createBooking(
                    bookingData
                );

            /* --------------------------------------------------------------
               Return Success
            -------------------------------------------------------------- */

            return {
                success: true,
                booking,
                message: null,
            };
        } catch (error) {
            console.error(
                "Booking Service Error:",
                error
            );

            return {
                success: false,
                booking: null,
                message:
                    error instanceof Error
                        ? error.message
                        : "Failed to create booking.",
            };
        }
    }
}

/* ============================================================================
   Export Singleton
============================================================================ */

export const bookingService =
    new BookingService();