"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
    ArrowRight,
    BadgeCheck,
    CalendarDays,
    IndianRupee,
    ShieldCheck,
} from "lucide-react";

import { RoomDisplayData } from "@/types/roomDisplayTypes";

interface BookingCardProps {
    data: RoomDisplayData;
}

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

export default function BookingCard({
    data,
}: BookingCardProps) {
    const {
        room,
        booking,
    } = data;

    const canBook =
        booking.canBook;

    return (
        <motion.aside
            initial={{
                opacity: 0,
                x: 30,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.45,
            }}
            className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                shadow-2xl
                backdrop-blur-xl
            "
        >
            {/* ===========================
                Header
            ============================ */}

            <div
                className="
                    border-b
                    border-white/10
                    bg-gradient-to-r
                    from-blue-600/15
                    to-cyan-500/10
                    p-6
                "
            >
                <div
                    className="
                        flex
                        items-center
                        justify-between
                    "
                >
                    <div>
                        <p
                            className="
                                text-sm
                                text-blue-300
                            "
                        >
                            Monthly Rent
                        </p>

                        <div
                            className="
                                mt-2
                                flex
                                items-center
                                gap-2
                            "
                        >
                            <IndianRupee
                                size={24}
                                className="text-blue-400"
                            />

                            <h2
                                className="
                                    text-4xl
                                    font-black
                                    text-white
                                "
                            >
                                {formatCurrency(
                                    room.pricing.rent
                                )}
                            </h2>

                            <span className="text-white/60">
                                /month
                            </span>
                        </div>
                    </div>

                    <BadgeCheck
                        size={34}
                        className="
                            text-emerald-400
                        "
                    />
                </div>
            </div>
            {/* ===========================
                Pricing Details
            ============================ */}

            <div className="space-y-5 p-6">
                <div
                    className="
                        flex
                        items-center
                        justify-between
                        text-white/70
                    "
                >
                    <span>Monthly Rent</span>

                    <span className="font-semibold text-white">
                        ₹
                        {formatCurrency(
                            room.pricing.rent
                        )}
                    </span>
                </div>

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        text-white/70
                    "
                >
                    <span>
                        Security Deposit
                    </span>

                    <span className="font-semibold text-white">
                        ₹
                        {formatCurrency(
                            room.pricing
                                .securityDeposit
                        )}
                    </span>
                </div>

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        text-white/70
                    "
                >
                    <span>
                        Maintenance
                    </span>

                    <span className="font-semibold text-white">
                        ₹
                        {formatCurrency(
                            room.pricing
                                .maintenanceCharge
                        )}
                    </span>
                </div>

                <div
                    className="
                        border-t
                        border-white/10
                        pt-5
                    "
                >
                    <div
                        className="
                            flex
                            items-center
                            justify-between
                        "
                    >
                        <span
                            className="
                                text-lg
                                font-semibold
                                text-white
                            "
                        >
                            Total Upfront
                        </span>

                        <span
                            className="
                                text-2xl
                                font-black
                                text-blue-400
                            "
                        >
                            ₹
                            {formatCurrency(
                                room.pricing.rent +
                                    room.pricing
                                        .securityDeposit +
                                    room.pricing
                                        .maintenanceCharge
                            )}
                        </span>
                    </div>
                </div>

                {/* ===========================
                    Booking Status
                ============================ */}

                <div
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-5
                    "
                >
                    <div
                        className="
                            flex
                            items-center
                            gap-3
                        "
                    >
                        <CalendarDays
                            size={20}
                            className="text-blue-400"
                        />

                        <div>
                            <p
                                className="
                                    text-sm
                                    text-white/60
                                "
                            >
                                Booking Status
                            </p>

                            <p
                                className={`
                                    mt-1
                                    font-semibold

                                    ${
                                        canBook
                                            ? "text-emerald-400"
                                            : "text-red-400"
                                    }
                                `}
                            >
                                {canBook
                                    ? "Available for Booking"
                                    : "Currently Unavailable"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* ===========================
                    Trust Message
                ============================ */}

                <div
                    className="
                        flex
                        items-start
                        gap-3
                        rounded-2xl
                        border
                        border-blue-500/20
                        bg-blue-500/10
                        p-4
                    "
                >
                    <ShieldCheck
                        size={22}
                        className="
                            mt-0.5
                            text-blue-400
                        "
                    />

                    <p
                        className="
                            text-sm
                            leading-6
                            text-white/75
                        "
                    >
                        Every booking is securely
                        managed through Rentz.
                        Pricing is transparent and
                        verified before confirmation.
                    </p>
                </div>
                {/* ===========================
                    Billing Information
                ============================ */}

                <div
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-5
                    "
                >
                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            text-sm
                        "
                    >
                        <span className="text-white/60">
                            Billing Cycle
                        </span>

                        <span className="font-medium text-white">
                            {room.pricing.billingType
                                .charAt(0)
                                .toUpperCase() +
                                room.pricing.billingType.slice(
                                    1
                                )}
                        </span>
                    </div>

                    <div
                        className="
                            mt-4
                            flex
                            items-center
                            justify-between
                            text-sm
                        "
                    >
                        <span className="text-white/60">
                            Electricity
                        </span>

                        <span className="font-medium text-white">
                            {room.pricing
                                .electricityIncluded
                                ? "Included"
                                : "Charged Separately"}
                        </span>
                    </div>

                    <div
                        className="
                            mt-4
                            flex
                            items-center
                            justify-between
                            text-sm
                        "
                    >
                        <span className="text-white/60">
                            Water
                        </span>

                        <span className="font-medium text-white">
                            {room.pricing
                                .waterIncluded
                                ? "Included"
                                : "Charged Separately"}
                        </span>
                    </div>
                </div>

                <Link
                    href={
                        canBook
                            ? `/booking/${room.roomId}`
                            : "#"
                    }
                    className={`
                        flex
                        h-14
                        w-full
                        items-center
                        justify-center
                        gap-3
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

                    {canBook && (
                        <ArrowRight
                            size={20}
                        />
                    )}
                </Link>

                <p
                    className="
                        text-center
                        text-xs
                        leading-6
                        text-white/50
                    "
                >
                    You wont be charged until
                    your booking request is
                    reviewed and confirmed by the
                    property owner.
                </p>
            </div>
        </motion.aside>
    );
}