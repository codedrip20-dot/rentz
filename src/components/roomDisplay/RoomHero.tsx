"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
    BadgeCheck,
    BedDouble,
    Building2,
    CalendarDays,
    Heart,
    IndianRupee,
    MapPin,
    Share2,
    Sparkles,
    Star,
    Users,
} from "lucide-react";

import { RoomDisplayData } from "@/types/roomDisplayTypes";

interface RoomHeroProps {
    data: RoomDisplayData;
}

/* ==========================================================
   Helpers
========================================================== */

function formatCurrency(amount: number) {
    return new Intl.NumberFormat("en-IN", {
        maximumFractionDigits: 0,
    }).format(amount);
}

function getStatusColor(status: string) {
    switch (status) {
        case "available":
            return "border-emerald-500/30 bg-emerald-500/20 text-emerald-300";

        case "occupied":
            return "border-red-500/30 bg-red-500/20 text-red-300";

        case "reserved":
            return "border-amber-500/30 bg-amber-500/20 text-amber-300";

        default:
            return "border-slate-500/30 bg-slate-500/20 text-slate-300";
    }
}

/* ==========================================================
   Room Hero
========================================================== */

export default function RoomHero({
    data,
}: RoomHeroProps) {
    const {
        room,
        property,
        booking,
        reviews,
    } = data;

    const location = [
        property.location.address.city,
        property.location.address.state,
    ]
        .filter(Boolean)
        .join(", ");

    const monthlyRent = room.pricing.rent;
    const deposit = room.pricing.securityDeposit;
    const maintenance =
        room.pricing.maintenanceCharge;

    const totalGuests =
        room.capacity.adults +
        room.capacity.children;

    const canBook = booking.canBook;

    const formattedStatus =
        room.status.charAt(0).toUpperCase() +
        room.status.slice(1);

    const rating =
        reviews?.averageRating ?? 0;

    const totalReviews =
        reviews?.totalReviews ?? 0;

    return (
        <motion.section
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.45,
            }}
            className="
                mt-6
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/5
                shadow-2xl
                backdrop-blur-2xl

                sm:mt-8
                sm:rounded-3xl
            "
        >
            <div
                className="
                    p-4

                    sm:p-7

                    lg:p-10
                "
            >
                {/* ==================================================
                    Main Hero Content
                ================================================== */}

                <div
                    className="
                        flex
                        flex-col
                        gap-6

                        lg:flex-row
                        lg:items-start
                        lg:justify-between
                        lg:gap-10
                    "
                >
                    {/* ==================================================
                        Left Content
                    ================================================== */}

                    <div className="min-w-0 flex-1">
                        {/* Status Tags */}

                        <div
                            className="
                                mb-4
                                flex
                                flex-wrap
                                items-center
                                gap-2
                            "
                        >
                            <span
                                className={`
                                    rounded-full
                                    border
                                    px-3
                                    py-1.5
                                    text-[11px]
                                    font-semibold
                                    backdrop-blur-xl

                                    sm:px-4
                                    sm:text-xs

                                    ${getStatusColor(
                                        room.status
                                    )}
                                `}
                            >
                                {formattedStatus}
                            </span>

                            <span
                                className="
                                    rounded-full
                                    border
                                    border-blue-500/30
                                    bg-blue-500/15
                                    px-3
                                    py-1.5
                                    text-[11px]
                                    font-semibold
                                    text-blue-200

                                    sm:px-4
                                    sm:text-xs
                                "
                            >
                                {room.roomType}
                            </span>

                            <span
                                className="
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-3
                                    py-1.5
                                    text-[11px]
                                    text-white/80

                                    sm:px-4
                                    sm:text-xs
                                "
                            >
                                {property.propertyType}
                            </span>
                        </div>

                        {/* Room Name */}

                        <h1
                            className="
                                break-words
                                text-2xl
                                font-black
                                leading-tight
                                text-white

                                sm:text-4xl

                                lg:text-5xl
                            "
                        >
                            {room.roomName}
                        </h1>

                        {/* Location + Rating */}

                        <div
                            className="
                                mt-4
                                flex
                                flex-col
                                gap-2.5
                                text-sm
                                text-white/70

                                sm:mt-5
                                sm:flex-row
                                sm:flex-wrap
                                sm:items-center
                                sm:gap-4
                            "
                        >
                            {/* Location */}

                            <div
                                className="
                                    flex
                                    min-w-0
                                    items-center
                                    gap-2
                                "
                            >
                                <MapPin
                                    size={17}
                                    className="
                                        shrink-0
                                        text-blue-400
                                    "
                                />

                                <span
                                    className="
                                        min-w-0
                                        break-words
                                    "
                                >
                                    {location ||
                                        "Location unavailable"}
                                </span>
                            </div>

                            {/* Rating */}

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-1.5
                                "
                            >
                                <Star
                                    size={17}
                                    className="
                                        shrink-0
                                        fill-yellow-400
                                        text-yellow-400
                                    "
                                />

                                <span>
                                    {rating.toFixed(1)}
                                </span>

                                <span className="text-white/40">
                                    ({totalReviews}{" "}
                                    {totalReviews === 1
                                        ? "review"
                                        : "reviews"}
                                    )
                                </span>
                            </div>
                        </div>

                        {/* ==================================================
                            Feature Pills
                        ================================================== */}

                        <div
                            className="
                                mt-5
                                grid
                                grid-cols-1
                                gap-2.5

                                sm:flex
                                sm:flex-wrap
                                sm:gap-3
                            "
                        >
                            {/* Guests */}

                            <div
                                className="
                                    flex
                                    min-w-0
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-3
                                    py-2.5

                                    sm:rounded-2xl
                                    sm:px-4
                                    sm:py-3
                                "
                            >
                                <Users
                                    size={17}
                                    className="
                                        shrink-0
                                        text-blue-400
                                    "
                                />

                                <span
                                    className="
                                        text-xs
                                        text-white

                                        sm:text-sm
                                    "
                                >
                                    {totalGuests}{" "}
                                    {totalGuests === 1
                                        ? "Guest"
                                        : "Guests"}
                                </span>
                            </div>

                            {/* Furnishing */}

                            <div
                                className="
                                    flex
                                    min-w-0
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-3
                                    py-2.5

                                    sm:rounded-2xl
                                    sm:px-4
                                    sm:py-3
                                "
                            >
                                <BedDouble
                                    size={17}
                                    className="
                                        shrink-0
                                        text-blue-400
                                    "
                                />

                                <span
                                    className="
                                        truncate
                                        text-xs
                                        text-white

                                        sm:text-sm
                                    "
                                >
                                    {room.furnishing}
                                </span>
                            </div>

                            {/* Premium */}

                            <div
                                className="
                                    flex
                                    min-w-0
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-3
                                    py-2.5

                                    sm:rounded-2xl
                                    sm:px-4
                                    sm:py-3
                                "
                            >
                                <Sparkles
                                    size={17}
                                    className="
                                        shrink-0
                                        text-blue-400
                                    "
                                />

                                <span
                                    className="
                                        text-xs
                                        text-white

                                        sm:text-sm
                                    "
                                >
                                    Premium Listing
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ==================================================
                        Pricing / Booking Panel
                    ================================================== */}

                    <div
                        className="
                            w-full
                            min-w-0
                            rounded-2xl
                            border
                            border-blue-500/20
                            bg-gradient-to-br
                            from-blue-600/15
                            to-slate-900/40
                            p-4
                            backdrop-blur-xl

                            sm:rounded-3xl
                            sm:p-6

                            lg:max-w-sm
                            lg:shrink-0
                        "
                    >
                        {/* Price */}

                        <div
                            className="
                                flex
                                flex-wrap
                                items-baseline
                                gap-1.5
                            "
                        >
                            <IndianRupee
                                size={20}
                                className="
                                    text-blue-300

                                    sm:h-6
                                    sm:w-6
                                "
                            />

                            <span
                                className="
                                    text-3xl
                                    font-black
                                    text-white

                                    sm:text-4xl
                                "
                            >
                                {formatCurrency(
                                    monthlyRent
                                )}
                            </span>

                            <span
                                className="
                                    text-sm
                                    text-white/70

                                    sm:text-base
                                "
                            >
                                /month
                            </span>
                        </div>

                        {/* Additional Charges */}

                        <p
                            className="
                                mt-2
                                text-xs
                                leading-5
                                text-white/60

                                sm:text-sm
                            "
                        >
                            Deposit ₹
                            {formatCurrency(
                                deposit
                            )}
                            {" • "}
                            Maintenance ₹
                            {formatCurrency(
                                maintenance
                            )}
                        </p>

                        {/* ==================================================
                            Actions
                        ================================================== */}

                        <div
                            className="
                                mt-5
                                flex
                                gap-2.5

                                sm:mt-6
                                sm:gap-3
                            "
                        >
                            <button
                                type="button"
                                aria-label="Save room"
                                className="
                                    flex
                                    h-11
                                    w-11
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    text-white
                                    transition-all
                                    duration-300

                                    active:scale-95

                                    sm:h-12
                                    sm:w-12
                                    sm:rounded-2xl
                                    sm:hover:bg-white/10
                                "
                            >
                                <Heart
                                    size={19}
                                />
                            </button>

                            <button
                                type="button"
                                aria-label="Share room"
                                className="
                                    flex
                                    h-11
                                    w-11
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    text-white
                                    transition-all
                                    duration-300

                                    active:scale-95

                                    sm:h-12
                                    sm:w-12
                                    sm:rounded-2xl
                                    sm:hover:bg-white/10
                                "
                            >
                                <Share2
                                    size={19}
                                />
                            </button>
                        </div>

                        {/* ==================================================
                            Booking Details
                        ================================================== */}

                        <div
                            className="
                                mt-5
                                space-y-3

                                sm:mt-6
                            "
                        >
                            {/* Booking Status */}

                            <div
                                className="
                                    flex
                                    items-start
                                    justify-between
                                    gap-4
                                    text-xs
                                    text-white/70

                                    sm:text-sm
                                "
                            >
                                <span>
                                    Booking Status
                                </span>

                                <span
                                    className={
                                        canBook
                                            ? "text-right font-semibold text-emerald-400"
                                            : "text-right font-semibold text-red-400"
                                    }
                                >
                                    {canBook
                                        ? "Available Now"
                                        : "Currently Unavailable"}
                                </span>
                            </div>

                            {/* Instant Booking */}

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    gap-4
                                    text-xs
                                    text-white/70

                                    sm:text-sm
                                "
                            >
                                <span>
                                    Instant Booking
                                </span>

                                <BadgeCheck
                                    size={18}
                                    className="
                                        shrink-0
                                        text-blue-400
                                    "
                                />
                            </div>

                            {/* Move In */}

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    gap-4
                                    text-xs
                                    text-white/70

                                    sm:text-sm
                                "
                            >
                                <span>
                                    Move In
                                </span>

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-1.5
                                    "
                                >
                                    <CalendarDays
                                        size={16}
                                        className="
                                            shrink-0
                                            text-blue-400
                                        "
                                    />

                                    <span>
                                        Flexible
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* ==================================================
                            Booking Button
                        ================================================== */}

                        <Link
                            href={
                                canBook
                                    ? `/booking/${room.roomId}`
                                    : "#"
                            }
                            aria-disabled={!canBook}
                            onClick={(event) => {
                                if (!canBook) {
                                    event.preventDefault();
                                }
                            }}
                            className={`
                                mt-6
                                flex
                                min-h-12
                                w-full
                                items-center
                                justify-center
                                rounded-xl
                                px-4
                                text-sm
                                font-bold
                                transition-all
                                duration-300

                                sm:mt-8
                                sm:h-14
                                sm:rounded-2xl
                                sm:text-base

                                ${
                                    canBook
                                        ? `
                                            bg-gradient-to-r
                                            from-blue-600
                                            to-cyan-500
                                            text-white

                                            active:scale-[0.98]

                                            sm:hover:scale-[1.02]
                                            sm:hover:shadow-xl
                                            sm:hover:shadow-blue-500/30
                                          `
                                        : `
                                            cursor-not-allowed
                                            bg-slate-700
                                            text-slate-400
                                          `
                                }
                            `}
                        >
                            {canBook
                                ? "Book This Room"
                                : "Room Unavailable"}
                        </Link>
                    </div>
                </div>

                {/* ==================================================
                    Quick Highlights
                ================================================== */}

                <div
                    className="
                        mt-6
                        grid
                        grid-cols-2
                        gap-2.5

                        sm:mt-8
                        sm:gap-4

                        lg:grid-cols-4
                    "
                >
                    {/* Monthly Rent */}

                    <div
                        className="
                            min-w-0
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            p-3

                            sm:rounded-2xl
                            sm:p-5
                        "
                    >
                        <p
                            className="
                                text-[11px]
                                text-white/60

                                sm:text-sm
                            "
                        >
                            Monthly Rent
                        </p>

                        <p
                            className="
                                mt-1.5
                                truncate
                                text-lg
                                font-bold
                                text-white

                                sm:mt-2
                                sm:text-2xl
                            "
                        >
                            ₹
                            {formatCurrency(
                                monthlyRent
                            )}
                        </p>
                    </div>

                    {/* Security Deposit */}

                    <div
                        className="
                            min-w-0
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            p-3

                            sm:rounded-2xl
                            sm:p-5
                        "
                    >
                        <p
                            className="
                                text-[11px]
                                text-white/60

                                sm:text-sm
                            "
                        >
                            Security Deposit
                        </p>

                        <p
                            className="
                                mt-1.5
                                truncate
                                text-lg
                                font-bold
                                text-white

                                sm:mt-2
                                sm:text-2xl
                            "
                        >
                            ₹
                            {formatCurrency(
                                deposit
                            )}
                        </p>
                    </div>

                    {/* Maintenance */}

                    <div
                        className="
                            min-w-0
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            p-3

                            sm:rounded-2xl
                            sm:p-5
                        "
                    >
                        <p
                            className="
                                text-[11px]
                                text-white/60

                                sm:text-sm
                            "
                        >
                            Maintenance
                        </p>

                        <p
                            className="
                                mt-1.5
                                truncate
                                text-lg
                                font-bold
                                text-white

                                sm:mt-2
                                sm:text-2xl
                            "
                        >
                            ₹
                            {formatCurrency(
                                maintenance
                            )}
                        </p>
                    </div>

                    {/* Property */}

                    <div
                        className="
                            min-w-0
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            p-3

                            sm:rounded-2xl
                            sm:p-5
                        "
                    >
                        <p
                            className="
                                text-[11px]
                                text-white/60

                                sm:text-sm
                            "
                        >
                            Property
                        </p>

                        <div
                            className="
                                mt-1.5
                                flex
                                min-w-0
                                items-center
                                gap-2

                                sm:mt-2
                            "
                        >
                            <Building2
                                size={17}
                                className="
                                    shrink-0
                                    text-blue-400
                                "
                            />

                            <span
                                className="
                                    min-w-0
                                    truncate
                                    text-sm
                                    font-semibold
                                    text-white

                                    sm:text-base
                                "
                            >
                                {property.propertyType}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}