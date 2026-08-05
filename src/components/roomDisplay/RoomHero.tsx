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

function formatCurrency(
    amount: number
) {
    return new Intl.NumberFormat(
        "en-IN",
        {
            maximumFractionDigits: 0,
        }
    ).format(amount);
}

function getStatusColor(
    status: string
) {
    switch (status) {
        case "available":
            return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";

        case "occupied":
            return "bg-red-500/20 text-red-300 border-red-500/30";

        case "reserved":
            return "bg-amber-500/20 text-amber-300 border-amber-500/30";

        default:
            return "bg-slate-500/20 text-slate-300 border-slate-500/30";
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

    const monthlyRent =
        room.pricing.rent;

    const deposit =
        room.pricing.securityDeposit;

    const maintenance =
        room.pricing.maintenanceCharge;

    const totalGuests =
        room.capacity.adults +
        room.capacity.children;

    const canBook =
        booking.canBook;

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
                mt-8
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                shadow-2xl
                backdrop-blur-2xl
            "
        >
            <div
                className="
                    p-5
                    sm:p-7
                    lg:p-10
                "
            >
          

                <div
                    className="
                        flex
                        flex-col
                        gap-6

                        lg:flex-row
                        lg:items-start
                        lg:justify-between
                    "
                >
                    {/* Left */}

                    <div className="flex-1">
                        <div
                            className="
                                mb-4
                                flex
                                flex-wrap
                                items-center
                                gap-3
                            "
                        >
                            <span
                                className={`
                                    rounded-full
                                    border
                                    px-4
                                    py-1.5
                                    text-xs
                                    font-semibold
                                    backdrop-blur-xl
                                    ${getStatusColor(
                                        room.status
                                    )}
                                `}
                            >
                                {room.status
                                    .charAt(0)
                                    .toUpperCase() +
                                    room.status.slice(1)}
                            </span>

                            <span
                                className="
                                    rounded-full
                                    border
                                    border-blue-500/30
                                    bg-blue-500/15
                                    px-4
                                    py-1.5
                                    text-xs
                                    font-semibold
                                    text-blue-200
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
                                    px-4
                                    py-1.5
                                    text-xs
                                    text-white/80
                                "
                            >
                                {property
                                    .propertyType}
                            </span>
                        </div>

                        <h1
                            className="
                                text-3xl
                                font-black
                                leading-tight
                                text-white

                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            {room.roomName}
                        </h1>

                        <div
                            className="
                                mt-5
                                flex
                                flex-wrap
                                items-center
                                gap-4
                                text-white/70
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >
                                <MapPin
                                    size={18}
                                    className="text-blue-400"
                                />

                                <span>
                                    {location}
                                </span>
                            </div>

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >
                                <Star
                                    size={18}
                                    className="
                                        fill-yellow-400
                                        text-yellow-400
                                    "
                                />

                                <span>
                                    {reviews?.averageRating.toFixed(
                                        1
                                    )}
                                </span>

                                <span className="text-white/40">
                                    (
                                    {
                                        reviews?.totalReviews
                                    }{" "}
                                    reviews)
                                </span>
                            </div>
                        </div>

                        <div
                            className="
                                mt-6
                                flex
                                flex-wrap
                                gap-3
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-4
                                    py-3
                                "
                            >
                                <Users
                                    size={18}
                                    className="text-blue-400"
                                />

                                <span className="text-sm text-white">
                                    {totalGuests} Guests
                                </span>
                            </div>

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-4
                                    py-3
                                "
                            >
                                <BedDouble
                                    size={18}
                                    className="text-blue-400"
                                />

                                <span className="text-sm text-white">
                                    {room.furnishing}
                                </span>
                            </div>

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-4
                                    py-3
                                "
                            >
                                <Sparkles
                                    size={18}
                                    className="text-blue-400"
                                />

                                <span className="text-sm text-white">
                                    Premium Listing
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right */}

                    <div
                        className="
                            w-full
                            rounded-3xl
                            border
                            border-blue-500/20
                            bg-gradient-to-br
                            from-blue-600/15
                            to-slate-900/40
                            p-6
                            backdrop-blur-xl

                            lg:max-w-sm
                        "
                    >
                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                text-blue-300
                            "
                        >
                            <IndianRupee size={24} />

                            <span
                                className="
                                    text-4xl
                                    font-black
                                    text-white
                                "
                            >
                                {formatCurrency(
                                    monthlyRent
                                )}
                            </span>

                            <span className="text-white/70">
                                /month
                            </span>
                        </div>

                        <p className="mt-2 text-white/60">
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

                        <div
                            className="
                                mt-6
                                flex
                                gap-3
                            "
                        >
                            <button
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    text-white
                                    transition-all
                                    hover:bg-white/10
                                "
                            >
                                <Heart size={20} />
                            </button>

                            <button
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    text-white
                                    transition-all
                                    hover:bg-white/10
                                "
                            >
                                <Share2 size={20} />
                            </button>
                            </div>

                        <div className="mt-6 space-y-3">
                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    text-sm
                                    text-white/70
                                "
                            >
                                <span>
                                    Booking Status
                                </span>

                                <span
                                    className={
                                        canBook
                                            ? "text-emerald-400 font-semibold"
                                            : "text-red-400 font-semibold"
                                    }
                                >
                                    {canBook
                                        ? "Available Now"
                                        : "Currently Unavailable"}
                                </span>
                            </div>

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    text-sm
                                    text-white/70
                                "
                            >
                                <span>
                                    Instant Booking
                                </span>

                                <BadgeCheck
                                    size={18}
                                    className="text-blue-400"
                                />
                            </div>

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    text-sm
                                    text-white/70
                                "
                            >
                                <span>
                                    Move In
                                </span>

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                    "
                                >
                                    <CalendarDays
                                        size={16}
                                        className="text-blue-400"
                                    />

                                    <span>
                                        Flexible
                                    </span>
                                </div>
                            </div>
                        </div>

                        <Link
                            href={
                                canBook
                                    ? `/booking/${room.roomId}`
                                    : "#"
                            }
                            className={`
                                mt-8
                                flex
                                h-14
                                w-full
                                items-center
                                justify-center
                                rounded-2xl
                                font-bold
                                transition-all
                                duration-300

                                ${
                                    canBook
                                        ? `
                                            bg-gradient-to-r
                                            from-blue-600
                                            to-cyan-500
                                            text-white
                                            hover:scale-[1.02]
                                            hover:shadow-xl
                                            hover:shadow-blue-500/30
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

                {/* ==========================================
                    Quick Highlights
                ========================================== */}

                <div
                    className="
                        mt-8
                        grid
                        grid-cols-2
                        gap-4

                        lg:grid-cols-4
                    "
                >
                    <div
                        className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/5
                            p-5
                        "
                    >
                        <p className="text-sm text-white/60">
                            Monthly Rent
                        </p>

                        <p
                            className="
                                mt-2
                                text-2xl
                                font-bold
                                text-white
                            "
                        >
                            ₹
                            {formatCurrency(
                                monthlyRent
                            )}
                        </p>
                    </div>

                    <div
                        className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/5
                            p-5
                        "
                    >
                        <p className="text-sm text-white/60">
                            Security Deposit
                        </p>

                        <p
                            className="
                                mt-2
                                text-2xl
                                font-bold
                                text-white
                            "
                        >
                            ₹
                            {formatCurrency(
                                deposit
                            )}
                        </p>
                    </div>

                    <div
                        className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/5
                            p-5
                        "
                    >
                        <p className="text-sm text-white/60">
                            Maintenance
                        </p>

                        <p
                            className="
                                mt-2
                                text-2xl
                                font-bold
                                text-white
                            "
                        >
                            ₹
                            {formatCurrency(
                                maintenance
                            )}
                        </p>
                    </div>

                    <div
                        className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/5
                            p-5
                        "
                    >
                        <p className="text-sm text-white/60">
                            Property
                        </p>

                        <div
                            className="
                                mt-2
                                flex
                                items-center
                                gap-2
                            "
                        >
                            <Building2
                                size={18}
                                className="text-blue-400"
                            />

                            <span
                                className="
                                    font-semibold
                                    text-white
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