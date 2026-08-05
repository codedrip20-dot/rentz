"use client";

import { motion } from "framer-motion";

import {
    BadgeCheck,
    CreditCard,
    Receipt,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

/* ==========================================================
   Props
========================================================== */

interface PaymentSummaryProps {
    monthlyRent: number;

    securityDeposit: number;

    maintenanceCharge: number;

    billingType: string;

    electricityIncluded: boolean;

    waterIncluded: boolean;
}

/* ==========================================================
   Component
========================================================== */

export default function PaymentSummary({
    monthlyRent,
    securityDeposit,
    maintenanceCharge,
    billingType,
    electricityIncluded,
    waterIncluded,
}: PaymentSummaryProps) {
    const total =
        monthlyRent +
        securityDeposit +
        maintenanceCharge;

    const formatCurrency = (
        amount: number
    ) =>
        new Intl.NumberFormat(
            "en-IN",
            {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
            }
        ).format(amount);

    return (
        <motion.section
            initial={{
                opacity: 0,
                y: 30,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
                delay: 0.4,
            }}
            className="
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/10
                backdrop-blur-2xl
                shadow-[0_25px_90px_rgba(37,99,235,0.20)]
            "
        >
            {/* ======================================================
                Header
            ====================================================== */}

            <div className="border-b border-white/10 px-8 py-7">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
                            <Receipt
                                size={26}
                                className="text-cyan-300"
                            />

                            Payment Summary
                        </h2>

                        <p className="mt-2 text-sm leading-7 text-slate-300">
                            Review your payment
                            before proceeding to
                            the secure checkout.
                        </p>
                    </div>

                    <div
                        className="
                            rounded-full
                            border
                            border-cyan-400/20
                            bg-cyan-500/10
                            px-4
                            py-2
                            text-xs
                            font-semibold
                            tracking-wide
                            text-cyan-200
                        "
                    >
                        Development Mode
                    </div>
                </div>
            </div>

            {/* ======================================================
                Charges
            ====================================================== */}

            <div className="space-y-4 p-8">
                <PriceRow
                    label="Monthly Rent"
                    value={formatCurrency(
                        monthlyRent
                    )}
                />

                <PriceRow
                    label="Security Deposit"
                    value={formatCurrency(
                        securityDeposit
                    )}
                />

                <PriceRow
                    label="Maintenance Charge"
                    value={formatCurrency(
                        maintenanceCharge
                    )}
                />

                <PriceRow
                    label="Billing Cycle"
                    value={billingType}
                />

                {/* ==============================================
                    Included Utilities
                ============================================== */}

                <div
                    className="
                        rounded-2xl
                        border
                        border-white/5
                        bg-white/5
                        p-5
                    "
                >
                    <h3 className="mb-4 text-base font-semibold text-white">
                        Included Utilities
                    </h3>

                    <div className="space-y-3">
                        <UtilityRow
                            label="Electricity"
                            included={
                                electricityIncluded
                            }
                        />

                        <UtilityRow
                            label="Water"
                            included={
                                waterIncluded
                            }
                        />
                    </div>
                </div>
            </div>

            {/* ======================================================
                Total Payable
            ====================================================== */}

            <div className="px-8 pb-8">
                <div
                    className="
                        rounded-3xl
                        border
                        border-cyan-400/20
                        bg-gradient-to-br
                        from-cyan-500/15
                        via-blue-500/10
                        to-slate-900/20
                        p-7
                        shadow-[0_0_45px_rgba(34,211,238,.18)]
                    "
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                                <Sparkles
                                    size={18}
                                    className="text-cyan-300"
                                />

                                <span
                                    className="
                                        text-sm
                                        font-semibold
                                        uppercase
                                        tracking-widest
                                        text-cyan-200
                                    "
                                >
                                    Total Payable Today
                                </span>
                            </div>

                            <p className="mt-2 text-sm text-slate-300">
                                Initial payment
                                required to confirm
                                your booking.
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-4xl font-black tracking-tight text-white">
                                {formatCurrency(
                                    total
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ======================================================
                Part 2
            ====================================================== */}
            {/* ======================================================
                Footer
            ====================================================== */}

            <div
                className="
                    border-t
                    border-white/10
                    bg-gradient-to-r
                    from-blue-500/10
                    via-transparent
                    to-cyan-500/10
                    px-8
                    py-7
                "
            >
                <div className="flex gap-4">
                    <div
                        className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-cyan-500/15
                        "
                    >
                        <ShieldCheck
                            size={24}
                            className="text-cyan-300"
                        />
                    </div>

                    <div className="flex-1">
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-white">
                            Secure Checkout

                            <BadgeCheck
                                size={18}
                                className="text-green-400"
                            />
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-slate-300">
                            Your payment is securely processed by Rentz.
                            Once payment is successful, your booking
                            will be confirmed instantly, your tenant
                            profile will be created automatically,
                            and the room will be reserved for you.
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-cyan-300">
                            <CreditCard
                                size={18}
                            />

                            <span className="text-sm font-medium">
                                Simulated Payment Gateway
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

/* ==========================================================
   Price Row
========================================================== */

interface PriceRowProps {
    label: string;

    value: string;
}

function PriceRow({
    label,
    value,
}: PriceRowProps) {
    return (
        <div
            className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-white/5
                bg-white/5
                px-5
                py-4
                transition-all
                duration-300
                hover:border-cyan-400/20
                hover:bg-white/10
            "
        >
            <span className="font-medium text-slate-300">
                {label}
            </span>

            <span className="text-lg font-bold text-white">
                {value}
            </span>
        </div>
    );
}

/* ==========================================================
   Utility Row
========================================================== */

interface UtilityRowProps {
    label: string;

    included: boolean;
}

function UtilityRow({
    label,
    included,
}: UtilityRowProps) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-slate-300">
                {label}
            </span>

            <span
                className={`
                    rounded-full
                    px-3
                    py-1
                    text-xs
                    font-semibold

                    ${
                        included
                            ? "bg-green-500/15 text-green-400"
                            : "bg-red-500/15 text-red-400"
                    }
                `}
            >
                {included
                    ? "Included"
                    : "Not Included"}
            </span>
        </div>
    );
}