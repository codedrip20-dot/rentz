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
            className="relative mx-auto flex w-full max-w-4xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 px-8 py-20 backdrop-blur-2xl"
        >
            {/* Background */}

            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-slate-950/40 to-blue-500/10" />

            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-red-500/15 blur-[120px]" />

            <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/15 blur-[120px]" />

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
                    className="relative mb-8"
                >
                    <div className="absolute inset-0 rounded-full bg-red-500/30 blur-3xl" />

                    <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500 to-rose-600 shadow-[0_0_60px_rgba(239,68,68,0.45)]">
                        <AlertTriangle className="h-14 w-14 text-white" />
                    </div>
                </motion.div>

                {/* Badge */}

                <div className="mb-6 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300">
                    System Error
                </div>

                {/* Heading */}

                <h2 className="text-5xl font-black tracking-tight text-white">
                    Something Went Wrong
                </h2>

                {/* Description */}

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
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
                    className="group mt-12 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-4 font-semibold text-white shadow-[0_0_45px_rgba(37,99,235,0.45)] transition-all hover:shadow-[0_0_65px_rgba(37,99,235,0.65)]"
                >
                    <RefreshCw className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />

                    Try Again

                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>

                {/* Tips */}

                <div className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">

                    {[
                        "Check your internet connection",
                        "Refresh the dashboard",
                        "Try again in a few seconds",
                    ].map((tip) => (
                        <div
                            key={tip}
                            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                        >
                            <p className="text-sm font-medium text-slate-300">
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