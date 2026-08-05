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
                items-center
                justify-center
                px-6
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
                    rounded-3xl
                    border
                    border-red-500/20
                    bg-white/5
                    p-10
                    text-center
                    shadow-2xl
                    backdrop-blur-2xl
                "
            >
                <div
                    className="
                        mx-auto
                        flex
                        h-24
                        w-24
                        items-center
                        justify-center
                        rounded-full
                        bg-red-500/10
                        ring-8
                        ring-red-500/5
                    "
                >
                    <AlertTriangle
                        size={46}
                        className="text-red-400"
                    />
                </div>

                <h2
                    className="
                        mt-8
                        text-3xl
                        font-black
                        text-white
                    "
                >
                    {title}
                </h2>

                <p
                    className="
                        mt-4
                        leading-7
                        text-white/70
                    "
                >
                    {message}
                </p>
                <div
                    className="
                        mt-10
                        flex
                        flex-col
                        gap-4

                        sm:flex-row
                        sm:justify-center
                    "
                >
                    <Link
                        href="/marketplace"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/5
                            px-6
                            py-3
                            font-semibold
                            text-white
                            transition-all
                            duration-300

                            hover:bg-white/10
                        "
                    >
                        <ArrowLeft
                            size={18}
                        />

                        Back to Marketplace
                    </Link>

                    <button
                        onClick={() =>
                            window.location.reload()
                        }
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-2xl
                            bg-gradient-to-r
                            from-blue-600
                            to-cyan-500
                            px-6
                            py-3
                            font-semibold
                            text-white
                            transition-all
                            duration-300

                            hover:scale-105
                            hover:shadow-xl
                            hover:shadow-blue-500/30
                        "
                    >
                        <RefreshCw
                            size={18}
                        />

                        Try Again
                    </button>
                </div>
            </motion.div>
        </section>
    );
}