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
                min-w-0
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
                Price Header
            ================================================== */}

            <div
                className="
                    border-b
                    border-white/10
                    bg-gradient-to-br
                    from-blue-600/15
                    via-blue-500/5
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
                        min-w-0
                        items-center
                        justify-between
                        gap-3
                    "
                >
                    <div className="min-w-0">
                        <p
                            className="
                                text-xs
                                font-medium
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
                                min-w-0
                                items-baseline
                                gap-1

                                sm:mt-2
                                sm:gap-1.5
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
                                    min-w-0
                                    truncate
                                    text-3xl
                                    font-black
                                    leading-none
                                    tracking-tight
                                    text-white

                                    sm:text-4xl
                                "
                            >
                                {formatCurrency(rent)}
                            </h2>

                            <span
                                className="
                                    shrink-0
                                    text-xs
                                    text-white/50

                                    sm:text-sm
                                "
                            >
                                /month
                            </span>
                        </div>
                    </div>

                    <div
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-emerald-500/10

                            sm:h-11
                            sm:w-11
                        "
                    >
                        <BadgeCheck
                            size={22}
                            className="
                                text-emerald-400

                                sm:h-7
                                sm:w-7
                            "
                        />
                    </div>
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
                    Pricing Breakdown
                ================================================== */}

                <div
                    className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.025]
                        px-4
                        py-1

                        sm:rounded-2xl
                        sm:px-5
                    "
                >
                    {/* Monthly Rent */}

                    <div
                        className="
                            flex
                            min-w-0
                            items-center
                            justify-between
                            gap-4
                            py-3

                            sm:py-3.5
                        "
                    >
                        <span
                            className="
                                min-w-0
                                text-sm
                                text-white/65

                                sm:text-base
                            "
                        >
                            Monthly Rent
                        </span>

                        <span
                            className="
                                shrink-0
                                text-sm
                                font-semibold
                                text-white

                                sm:text-base
                            "
                        >
                            ₹{formatCurrency(rent)}
                        </span>
                    </div>

                    {/* Security Deposit */}

                    <div
                        className="
                            flex
                            min-w-0
                            items-center
                            justify-between
                            gap-4
                            border-t
                            border-white/5
                            py-3

                            sm:py-3.5
                        "
                    >
                        <span
                            className="
                                min-w-0
                                text-sm
                                text-white/65

                                sm:text-base
                            "
                        >
                            Security Deposit
                        </span>

                        <span
                            className="
                                shrink-0
                                text-sm
                                font-semibold
                                text-white

                                sm:text-base
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
                            min-w-0
                            items-center
                            justify-between
                            gap-4
                            border-t
                            border-white/5
                            py-3

                            sm:py-3.5
                        "
                    >
                        <span
                            className="
                                min-w-0
                                text-sm
                                text-white/65

                                sm:text-base
                            "
                        >
                            Maintenance
                        </span>

                        <span
                            className="
                                shrink-0
                                text-sm
                                font-semibold
                                text-white

                                sm:text-base
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
                        rounded-xl
                        border
                        border-blue-500/20
                        bg-blue-500/10
                        px-4
                        py-4

                        sm:rounded-2xl
                        sm:px-5
                        sm:py-5
                    "
                >
                    <div
                        className="
                            flex
                            min-w-0
                            items-center
                            justify-between
                            gap-4
                        "
                    >
                        <div className="min-w-0">
                            <p
                                className="
                                    text-sm
                                    font-semibold
                                    text-white

                                    sm:text-base
                                "
                            >
                                Total Upfront
                            </p>

                            <p
                                className="
                                    mt-0.5
                                    text-[11px]
                                    text-white/50

                                    sm:text-xs
                                "
                            >
                                Before move-in
                            </p>
                        </div>

                        <span
                            className="
                                shrink-0
                                text-xl
                                font-black
                                text-blue-400

                                sm:text-2xl
                            "
                        >
                            ₹
                            {formatCurrency(
                                totalUpfront
                            )}
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
                            min-w-0
                            items-center
                            gap-3
                        "
                    >
                        <div
                            className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-blue-500/10

                                sm:h-10
                                sm:w-10
                            "
                        >
                            <CalendarDays
                                size={19}
                                className="text-blue-400"
                            />
                        </div>

                        <div className="min-w-0">
                            <p
                                className="
                                    text-xs
                                    text-white/55

                                    sm:text-sm
                                "
                            >
                                Booking Status
                            </p>

                            <p
                                className={`
                                    mt-0.5
                                    truncate
                                    text-sm
                                    font-semibold

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
                        rounded-xl
                        border
                        border-blue-500/20
                        bg-blue-500/10
                        p-4

                        sm:rounded-2xl
                        sm:p-5
                    "
                >
                    <div
                        className="
                            flex
                            min-w-0
                            items-start
                            gap-3
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
                                min-w-0
                                text-xs
                                leading-6
                                text-white/70

                                sm:text-sm
                                sm:leading-7
                            "
                        >
                            Every booking is securely
                            managed through Rentz.
                            Pricing is transparent and
                            verified before confirmation.
                        </p>
                    </div>
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
                        px-4
                        py-2

                        sm:rounded-2xl
                        sm:px-5
                    "
                >
                    {/* Billing Cycle */}

                    <div
                        className="
                            flex
                            min-w-0
                            items-center
                            justify-between
                            gap-4
                            py-2.5

                            sm:py-3
                        "
                    >
                        <span className="text-xs text-white/55 sm:text-sm">
                            Billing Cycle
                        </span>

                        <span
                            className="
                                max-w-[55%]
                                truncate
                                text-right
                                text-xs
                                font-medium
                                text-white

                                sm:text-sm
                            "
                        >
                            {formattedBillingType}
                        </span>
                    </div>

                    {/* Electricity */}

                    <div
                        className="
                            flex
                            min-w-0
                            items-center
                            justify-between
                            gap-4
                            border-t
                            border-white/5
                            py-2.5

                            sm:py-3
                        "
                    >
                        <span className="text-xs text-white/55 sm:text-sm">
                            Electricity
                        </span>

                        <span
                            className="
                                max-w-[55%]
                                truncate
                                text-right
                                text-xs
                                font-medium
                                text-white

                                sm:text-sm
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
                            flex
                            min-w-0
                            items-center
                            justify-between
                            gap-4
                            border-t
                            border-white/5
                            py-2.5

                            sm:py-3
                        "
                    >
                        <span className="text-xs text-white/55 sm:text-sm">
                            Water
                        </span>

                        <span
                            className="
                                max-w-[55%]
                                truncate
                                text-right
                                text-xs
                                font-medium
                                text-white

                                sm:text-sm
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
                                    pointer-events-none
                                    cursor-not-allowed
                                    bg-slate-700
                                    text-slate-400
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
                        text-white/45

                        sm:text-xs
                        sm:leading-6
                    "
                >
                    You wont be charged until your
                    booking request is reviewed and
                    confirmed by the property owner.
                </p>
            </div>
        </motion.aside>
    );
}