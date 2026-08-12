"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
    AlertTriangle,
    ArrowLeft,
    RefreshCw,
} from "lucide-react";

interface ErrorStateProps {
    title?: string;
    message?: string;
}

export default function ErrorState({
    title = "Something Went Wrong",
    message = "We couldn't load this room. Please try again in a moment.",
}: ErrorStateProps) {
    return (
        <section
            className="
                flex
                min-h-[70vh]
                w-full
                items-center
                justify-center
                px-4
                py-10

                sm:px-6
                sm:py-12
            "
        >
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.95,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 0.4,
                }}
                className="
                    w-full
                    max-w-xl
                    overflow-hidden
                    rounded-2xl
                    border
                    border-red-500/20
                    bg-white/5
                    p-5
                    text-center
                    shadow-2xl
                    backdrop-blur-2xl

                    sm:rounded-3xl
                    sm:p-8

                    lg:p-10
                "
            >
                {/* ==================================================
                    Error Icon
                ================================================== */}

                <div
                    className="
                        mx-auto
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        bg-red-500/10
                        ring-8
                        ring-red-500/5

                        sm:h-20
                        sm:w-20

                        lg:h-24
                        lg:w-24
                    "
                >
                    <AlertTriangle
                        size={32}
                        className="text-red-400 sm:h-10 sm:w-10 lg:h-[46px] lg:w-[46px]"
                    />
                </div>

                {/* ==================================================
                    Title
                ================================================== */}

                <h2
                    className="
                        mt-6
                        break-words
                        text-2xl
                        font-black
                        leading-tight
                        text-white

                        sm:mt-7
                        sm:text-3xl
                    "
                >
                    {title}
                </h2>

                {/* ==================================================
                    Message
                ================================================== */}

                <p
                    className="
                        mx-auto
                        mt-3
                        max-w-md
                        break-words
                        text-sm
                        leading-6
                        text-white/70

                        sm:mt-4
                        sm:text-base
                        sm:leading-7
                    "
                >
                    {message}
                </p>

                {/* ==================================================
                    Actions
                ================================================== */}

                <div
                    className="
                        mt-7
                        flex
                        w-full
                        flex-col
                        gap-3

                        sm:mt-10
                        sm:flex-row
                        sm:justify-center
                        sm:gap-4
                    "
                >
                    {/* Back */}

                    <Link
                        href="/marketplace"
                        className="
                            inline-flex
                            min-h-12
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            px-5
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            transition-all
                            duration-300

                            hover:bg-white/10

                            active:scale-[0.98]

                            sm:w-auto
                            sm:rounded-2xl
                            sm:px-6
                            sm:text-base
                        "
                    >
                        <ArrowLeft
                            size={18}
                            className="shrink-0"
                        />

                        <span>Back to Marketplace</span>
                    </Link>

                    {/* Retry */}

                    <button
                        type="button"
                        onClick={() =>
                            window.location.reload()
                        }
                        className="
                            inline-flex
                            min-h-12
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-gradient-to-r
                            from-blue-600
                            to-cyan-500
                            px-5
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            transition-all
                            duration-300

                            hover:scale-[1.02]
                            hover:shadow-xl
                            hover:shadow-blue-500/30

                            active:scale-[0.98]

                            sm:w-auto
                            sm:rounded-2xl
                            sm:px-6
                            sm:text-base
                        "
                    >
                        <RefreshCw
                            size={18}
                            className="shrink-0"
                        />

                        <span>Try Again</span>
                    </button>
                </div>
            </motion.div>
        </section>
    );
}