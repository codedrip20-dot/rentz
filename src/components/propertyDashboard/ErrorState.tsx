"use client";

import { motion } from "framer-motion";
import {
    AlertTriangle,
    ArrowRight,
    RefreshCw,
} from "lucide-react";

interface ErrorStateProps {
    message: string;
    onRetry: () => void;
}

const ErrorState = ({
    message,
    onRetry,
}: ErrorStateProps) => {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="relative mx-auto flex w-full max-w-4xl overflow-hidden rounded-[24px] border border-white/10 bg-white/5 px-4 py-12 backdrop-blur-2xl sm:rounded-[28px] sm:px-6 sm:py-16 md:rounded-[32px] md:px-8 md:py-20"
        >
            {/* Background */}

            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-slate-950/40 to-blue-500/10" />

            <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-red-500/15 blur-[100px] sm:h-72 sm:w-72 sm:blur-[120px]" />

            <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-blue-500/15 blur-[100px] sm:h-72 sm:w-72 sm:blur-[120px]" />

            {/* Content */}

            <div className="relative z-10 flex w-full flex-col items-center text-center">

                {/* Icon */}

                <motion.div
                    animate={{
                        scale: [1, 1.08, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className="relative mb-6 sm:mb-8"
                >
                    <div className="absolute inset-0 rounded-full bg-red-500/30 blur-3xl" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 shadow-[0_0_60px_rgba(239,68,68,0.45)] sm:h-24 sm:w-24 sm:rounded-3xl md:h-28 md:w-28">
                        <AlertTriangle className="h-10 w-10 text-white sm:h-12 sm:w-12 md:h-14 md:w-14" />
                    </div>
                </motion.div>

                {/* Badge */}

                <div className="mb-5 rounded-full border border-red-400/20 bg-red-500/10 px-3.5 py-1.5 text-xs font-semibold text-red-300 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
                    System Error
                </div>

                {/* Heading */}

                <h2 className="max-w-full text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                    Something Went Wrong
                </h2>

                {/* Description */}

                <p className="mt-4 max-w-2xl break-words text-sm leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-7 md:mt-6 md:text-lg md:leading-8">
                    {message}
                </p>

                {/* CTA */}

                <motion.button
                    whileHover={{
                        scale: 1.04,
                    }}
                    whileTap={{
                        scale: 0.97,
                    }}
                    onClick={onRetry}
                    className="group mt-8 inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-6 py-3.5 font-semibold text-white shadow-[0_0_45px_rgba(37,99,235,0.45)] transition-all hover:shadow-[0_0_65px_rgba(37,99,235,0.65)] sm:mt-10 sm:w-auto sm:max-w-none sm:gap-3 sm:px-8 sm:py-4 md:mt-12"
                >
                    <RefreshCw className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:rotate-180" />

                    <span>Try Again</span>

                    <ArrowRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>

                {/* Tips */}

                <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 sm:mt-12 sm:gap-4 md:mt-14 md:grid-cols-3">

                    {[
                        "Check your internet connection",
                        "Refresh the dashboard",
                        "Try again in a few seconds",
                    ].map((tip) => (
                        <div
                            key={tip}
                            className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-5"
                        >
                            <p className="text-sm font-medium leading-5 text-slate-300">
                                {tip}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </motion.section>
    );
};

export default ErrorState;