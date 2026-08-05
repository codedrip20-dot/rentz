"use client";

import { motion } from "framer-motion";

import {
    ArrowRight,
    CreditCard,
    Loader2,
    Lock,
    ShieldCheck,
} from "lucide-react";

interface BookingButtonProps {
    loading?: boolean;

    disabled?: boolean;

    onClick: () => void;
}

export default function BookingButton({
    loading = false,
    disabled = false,
    onClick,
}: BookingButtonProps) {
    return (
        <motion.div
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
                delay: 0.6,
            }}
            className="space-y-5"
        >
            <motion.button
                type="button"
                onClick={onClick}
                disabled={
                    disabled || loading
                }
                whileHover={
                    !disabled &&
                    !loading
                        ? {
                              scale: 1.02,
                          }
                        : {}
                }
                whileTap={
                    !disabled &&
                    !loading
                        ? {
                              scale: 0.98,
                          }
                        : {}
                }
                className={`
                    group
                    relative
                    w-full
                    overflow-hidden
                    rounded-[30px]
                    px-8
                    py-5
                    font-semibold
                    text-white
                    transition-all
                    duration-300

                    ${
                        disabled
                            ? `
                                cursor-not-allowed
                                bg-slate-700/60
                                opacity-60
                              `
                            : `
                                bg-gradient-to-r
                                from-blue-600
                                via-cyan-500
                                to-blue-700

                                shadow-[0_20px_70px_rgba(37,99,235,.45)]

                                hover:shadow-[0_30px_90px_rgba(37,99,235,.60)]
                              `
                    }
                `}
            >
                {/* Shine */}

                {!disabled && (
                    <div
                        className="
                            absolute
                            inset-0
                            -translate-x-full
                            bg-gradient-to-r
                            from-transparent
                            via-white/10
                            to-transparent
                            transition-transform
                            duration-1000
                            group-hover:translate-x-full
                        "
                    />
                )}

                <div className="relative flex items-center justify-center gap-4">
                    {loading ? (
                        <>
                            <Loader2
                                size={22}
                                className="animate-spin"
                            />

                            <span className="text-lg font-semibold">
                                Preparing Payment...
                            </span>
                        </>
                    ) : (
                        <>
                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-white/15
                                "
                            >
                                <CreditCard
                                    size={22}
                                />
                            </div>

                            <span className="text-lg font-bold tracking-wide">
                                Continue to Payment
                            </span>

                            <ArrowRight
                                size={22}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-2
                                "
                            />
                        </>
                    )}
                </div>
            </motion.button>

            {/* Trust Footer */}

            <div
                className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    text-sm
                    text-slate-300
                "
            >
                <ShieldCheck
                    size={16}
                    className="text-green-400"
                />

                <Lock
                    size={15}
                    className="text-cyan-300"
                />

                <span>
                    Secure checkout • Your booking will be created after successful payment.
                </span>
            </div>
        </motion.div>
    );
}