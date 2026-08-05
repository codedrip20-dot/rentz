"use client";

import { motion } from "framer-motion";
import {
    ArrowLeft,
    Lock,
    ShieldCheck,
} from "lucide-react";

import { useRouter } from "next/navigation";

/* ============================================================================
   Props
============================================================================ */

interface BookingHeaderProps {
    title?: string;

    subtitle?: string;

    showBackButton?: boolean;
}

/* ============================================================================
   Component
============================================================================ */

export default function BookingHeader({
    title = "Complete Your Booking",

    subtitle = "You're just one step away from confirming your stay. Review your booking details, complete the payment securely, and enjoy a seamless check-in experience with Rentz.",

    showBackButton = true,
}: BookingHeaderProps) {
    const router = useRouter();

    return (
        <motion.header
            initial={{
                opacity: 0,
                y: -25,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
            }}
            className="w-full"
        >
            {/* ==========================================================
                Back Button
            ========================================================== */}

            {showBackButton && (
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="
                        group
                        mb-8
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/10
                        px-5
                        py-3
                        text-white
                        backdrop-blur-2xl
                        transition-all
                        duration-300
                        hover:border-blue-400/40
                        hover:bg-white/15
                    "
                >
                    <ArrowLeft
                        size={20}
                        className="
                            transition-transform
                            duration-300
                            group-hover:-translate-x-1
                        "
                    />

                    <span className="font-medium">
                        Back
                    </span>
                </button>
            )}

            {/* ==========================================================
                Secure Badge
            ========================================================== */}

            <div
                className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-cyan-400/20
                    bg-cyan-500/10
                    px-5
                    py-2.5
                    backdrop-blur-xl
                "
            >
                <Lock
                    size={16}
                    className="text-cyan-300"
                />

                <span
                    className="
                        text-sm
                        font-semibold
                        tracking-wider
                        uppercase
                        text-cyan-200
                    "
                >
                    Secure Booking
                </span>
            </div>

            {/* ==========================================================
                Heading
            ========================================================== */}

            <motion.h1
                initial={{
                    opacity: 0,
                    y: 15,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 0.1,
                }}
                className="
                    mt-6
                    max-w-4xl
                    text-5xl
                    font-black
                    leading-tight
                    tracking-tight
                    text-white
                    lg:text-6xl
                "
            >
                {title}
            </motion.h1>

            {/* ==========================================================
                Subtitle
            ========================================================== */}

            <motion.p
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: 0.2,
                }}
                className="
                    mt-5
                    max-w-3xl
                    text-lg
                    leading-8
                    text-slate-300
                "
            >
                {subtitle}
            </motion.p>

            {/* ==========================================================
                Trust Indicators
            ========================================================== */}

            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: 0.3,
                }}
                className="
                    mt-10
                    flex
                    flex-wrap
                    items-center
                    gap-6
                    text-sm
                    text-slate-300
                "
            >
                <div className="flex items-center gap-2">
                    <ShieldCheck
                        size={18}
                        className="text-green-400"
                    />

                    <span>
                        Secure Checkout
                    </span>
                </div>

                <div className="h-1 w-1 rounded-full bg-slate-500" />

                <span>
                    Instant Booking Confirmation
                </span>

                <div className="h-1 w-1 rounded-full bg-slate-500" />

                <span>
                    Encrypted Payment Processing
                </span>

                <div className="h-1 w-1 rounded-full bg-slate-500" />

                <span>
                    No Hidden Charges
                </span>
            </motion.div>
        </motion.header>
    );
}