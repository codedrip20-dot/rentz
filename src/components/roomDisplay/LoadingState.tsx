"use client";

import { motion } from "framer-motion";

import {
    Loader2,
    BedDouble,
} from "lucide-react";

export default function LoadingState() {
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
                    max-w-lg
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
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
                        bg-blue-500/10
                        ring-8
                        ring-blue-500/5
                    "
                >
                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.2,
                            ease: "linear",
                        }}
                    >
                        <Loader2
                            size={48}
                            className="text-blue-400"
                        />
                    </motion.div>
                </div>

                <div
                    className="
                        mt-8
                        flex
                        items-center
                        justify-center
                        gap-3
                    "
                >
                    <BedDouble
                        size={30}
                        className="text-blue-400"
                    />

                    <h2
                        className="
                            text-3xl
                            font-black
                            text-white
                        "
                    >
                        Loading Room
                    </h2>
                </div>

                <p
                    className="
                        mt-5
                        leading-7
                        text-white/70
                    "
                >
                    We re preparing the room details,
                    images, amenities and booking
                    information for you.
                </p>
                <div className="mt-10 space-y-4">
                    {[1, 2, 3].map(
                        (item) => (
                            <motion.div
                                key={item}
                                animate={{
                                    opacity: [
                                        0.35,
                                        0.9,
                                        0.35,
                                    ],
                                }}
                                transition={{
                                    repeat:
                                        Infinity,
                                    duration: 1.5,
                                    delay:
                                        item *
                                        0.2,
                                }}
                                className="
                                    h-4
                                    rounded-full
                                    bg-white/10
                                "
                                style={{
                                    width:
                                        item ===
                                        1
                                            ? "100%"
                                            : item ===
                                                2
                                              ? "85%"
                                              : "65%",
                                }}
                            />
                        )
                    )}
                </div>

                <p
                    className="
                        mt-8
                        text-sm
                        text-white/50
                    "
                >
                    Please wait a few
                    seconds...
                </p>
            </motion.div>
        </section>
    );
}