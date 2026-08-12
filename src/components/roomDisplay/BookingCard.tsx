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

const currencyFormatter = new Intl.NumberFormat(
    "en-IN",
    {
        maximumFractionDigits: 0,
    }
);

function formatCurrency(amount: number) {
    return currencyFormatter.format(amount);
}

export default function BookingCard({
    data,
}: BookingCardProps) {
    const { room, booking } = data;

    const canBook = booking.canBook;

    const {
        rent,
        securityDeposit,
        maintenanceCharge,
        billingType,
        electricityIncluded,
        waterIncluded,
    } = room.pricing;

    const totalUpfront =
        rent +
        securityDeposit +
        maintenanceCharge;

    const formattedBillingType =
        billingType.charAt(0).toUpperCase() +
        billingType.slice(1);

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
                margin: "0px 0px -80px 0px",
            }}
            transition={{
                duration: 0.45,
            }}
            className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                shadow-2xl
                backdrop-blur-xl

                sm:rounded-3xl
            "
        >
            {/* ==================================================
                Header
            ================================================== */}

            <div
                className="
                    border-b
                    border-white/10
                    bg-gradient-to-r
                    from-blue-600/15
                    to-cyan-500/10
                    px-4
                    py-5

                    sm:px-6
                    sm:py-6
                "
            >
                <div
                    className="
                        flex
                        items-start
                        justify-between
                        gap-4
                    "
                >
                    <div className="min-w-0">
                        <p
                            className="
                                text-xs
                                text-blue-300

                                sm:text-sm
                            "
                        >
                            Monthly Rent
                        </p>

                        <div
                            className="
                                mt-1.5
                                flex
                                flex-wrap
                                items-baseline
                                gap-1.5

                                sm:mt-2
                                sm:gap-2
                            "
                        >
                            <IndianRupee
                                size={20}
                                className="
                                    shrink-0
                                    text-blue-400

                                    sm:h-6
                                    sm:w-6
                                "
                            />

                            <h2
                                className="
                                    break-all
                                    text-3xl
                                    font-black
                                    leading-none
                                    text-white

                                    sm:text-4xl
                                "
                            >
                                {formatCurrency(rent)}
                            </h2>

                            <span
                                className="
                                    text-xs
                                    text-white/60

                                    sm:text-sm
                                "
                            >
                                /month
                            </span>
                        </div>
                    </div>

                    <BadgeCheck
                        size={28}
                        className="
                            shrink-0
                            text-emerald-400

                            sm:h-[34px]
                            sm:w-[34px]
                        "
                    />
                </div>
            </div>

            {/* ==================================================
                Content
            ================================================== */}

            <div
                className="
                    space-y-4
                    p-4

                    sm:space-y-5
                    sm:p-6
                "
            >
                {/* ==================================================
                    Pricing Details
                ================================================== */}

                <div className="space-y-4">
                    {/* Monthly Rent */}

                    <div
                        className="
                            flex
                            items-start
                            justify-between
                            gap-4
                            text-sm
                            text-white/70
                        "
                    >
                        <span>
                            Monthly Rent
                        </span>

                        <span
                            className="
                                shrink-0
                                text-right
                                font-semibold
                                text-white
                            "
                        >
                            ₹{formatCurrency(rent)}
                        </span>
                    </div>

                    {/* Security Deposit */}

                    <div
                        className="
                            flex
                            items-start
                            justify-between
                            gap-4
                            text-sm
                            text-white/70
                        "
                    >
                        <span>
                            Security Deposit
                        </span>

                        <span
                            className="
                                shrink-0
                                text-right
                                font-semibold
                                text-white
                            "
                        >
                            ₹
                            {formatCurrency(
                                securityDeposit
                            )}
                        </span>
                    </div>

                    {/* Maintenance */}

                    <div
                        className="
                            flex
                            items-start
                            justify-between
                            gap-4
                            text-sm
                            text-white/70
                        "
                    >
                        <span>
                            Maintenance
                        </span>

                        <span
                            className="
                                shrink-0
                                text-right
                                font-semibold
                                text-white
                            "
                        >
                            ₹
                            {formatCurrency(
                                maintenanceCharge
                            )}
                        </span>
                    </div>
                </div>

                {/* ==================================================
                    Total Upfront
                ================================================== */}

                <div
                    className="
                        border-t
                        border-white/10
                        pt-4

                        sm:pt-5
                    "
                >
                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            gap-4
                        "
                    >
                        <span
                            className="
                                text-base
                                font-semibold
                                text-white

                                sm:text-lg
                            "
                        >
                            Total Upfront
                        </span>

                        <span
                            className="
                                text-xl
                                font-black
                                text-blue-400

                                sm:text-2xl
                            "
                        >
                            ₹{formatCurrency(totalUpfront)}
                        </span>
                    </div>
                </div>

                {/* ==================================================
                    Booking Status
                ================================================== */}

                <div
                    className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        p-4

                        sm:rounded-2xl
                        sm:p-5
                    "
                >
                    <div
                        className="
                            flex
                            items-start
                            gap-3
                        "
                    >
                        <CalendarDays
                            size={20}
                            className="
                                mt-0.5
                                shrink-0
                                text-blue-400
                            "
                        />

                        <div className="min-w-0">
                            <p
                                className="
                                    text-xs
                                    text-white/60

                                    sm:text-sm
                                "
                            >
                                Booking Status
                            </p>

                            <p
                                className={`
                                    mt-1
                                    text-sm
                                    font-semibold
                                    leading-5

                                    sm:text-base

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

                {/* ==================================================
                    Trust Message
                ================================================== */}

                <div
                    className="
                        flex
                        items-start
                        gap-3
                        rounded-xl
                        border
                        border-blue-500/20
                        bg-blue-500/10
                        p-3.5

                        sm:rounded-2xl
                        sm:p-4
                    "
                >
                    <ShieldCheck
                        size={21}
                        className="
                            mt-0.5
                            shrink-0
                            text-blue-400
                        "
                    />

                    <p
                        className="
                            text-xs
                            leading-6
                            text-white/75

                            sm:text-sm
                        "
                    >
                        Every booking is securely
                        managed through Rentz.
                        Pricing is transparent and
                        verified before confirmation.
                    </p>
                </div>

                {/* ==================================================
                    Billing Information
                ================================================== */}

                <div
                    className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        p-4

                        sm:rounded-2xl
                        sm:p-5
                    "
                >
                    {/* Billing Cycle */}

                    <div
                        className="
                            flex
                            items-start
                            justify-between
                            gap-4
                            text-xs

                            sm:text-sm
                        "
                    >
                        <span className="text-white/60">
                            Billing Cycle
                        </span>

                        <span
                            className="
                                max-w-[55%]
                                text-right
                                font-medium
                                break-words
                                text-white
                            "
                        >
                            {formattedBillingType}
                        </span>
                    </div>

                    {/* Electricity */}

                    <div
                        className="
                            mt-4
                            flex
                            items-start
                            justify-between
                            gap-4
                            text-xs

                            sm:text-sm
                        "
                    >
                        <span className="text-white/60">
                            Electricity
                        </span>

                        <span
                            className="
                                max-w-[55%]
                                text-right
                                font-medium
                                text-white
                            "
                        >
                            {electricityIncluded
                                ? "Included"
                                : "Charged Separately"}
                        </span>
                    </div>

                    {/* Water */}

                    <div
                        className="
                            mt-4
                            flex
                            items-start
                            justify-between
                            gap-4
                            text-xs

                            sm:text-sm
                        "
                    >
                        <span className="text-white/60">
                            Water
                        </span>

                        <span
                            className="
                                max-w-[55%]
                                text-right
                                font-medium
                                text-white
                            "
                        >
                            {waterIncluded
                                ? "Included"
                                : "Charged Separately"}
                        </span>
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
                    tabIndex={canBook ? 0 : -1}
                    className={`
                        flex
                        min-h-12
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-xl
                        px-5
                        py-3
                        text-sm
                        font-bold
                        transition-all
                        duration-300

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

                                    hover:scale-[1.02]
                                    hover:shadow-xl
                                    hover:shadow-blue-500/30

                                    active:scale-[0.98]
                                  `
                                : `
                                    cursor-not-allowed
                                    bg-slate-700
                                    text-slate-400
                                    pointer-events-none
                                  `
                        }
                    `}
                >
                    <span>
                        {canBook
                            ? "Book This Room"
                            : "Room Unavailable"}
                    </span>

                    {canBook && (
                        <ArrowRight
                            size={20}
                            className="shrink-0"
                        />
                    )}
                </Link>

                {/* ==================================================
                    Disclaimer
                ================================================== */}

                <p
                    className="
                        px-1
                        text-center
                        text-[11px]
                        leading-5
                        text-white/50

                        sm:text-xs
                        sm:leading-6
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