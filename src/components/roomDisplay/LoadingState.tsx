"use client";

import { motion } from "framer-motion";

import {
    Loader2,
    BedDouble,
} from "lucide-react";

const skeletonWidths = [
    "w-full",
    "w-[85%]",
    "w-[65%]",
];

export default function LoadingState() {
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
                    max-w-lg
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
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
                    Loading Icon
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
                        bg-blue-500/10
                        ring-8
                        ring-blue-500/5

                        sm:h-20
                        sm:w-20

                        lg:h-24
                        lg:w-24
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
                            size={32}
                            className="
                                text-blue-400

                                sm:h-10
                                sm:w-10

                                lg:h-12
                                lg:w-12
                            "
                        />
                    </motion.div>
                </div>

                {/* ==================================================
                    Title
                ================================================== */}

                <div
                    className="
                        mt-6
                        flex
                        items-center
                        justify-center
                        gap-2.5

                        sm:mt-8
                        sm:gap-3
                    "
                >
                    <BedDouble
                        size={24}
                        className="
                            shrink-0
                            text-blue-400

                            sm:h-[30px]
                            sm:w-[30px]
                        "
                    />

                    <h2
                        className="
                            text-xl
                            font-black
                            leading-tight
                            text-white

                            sm:text-3xl
                        "
                    >
                        Loading Room
                    </h2>
                </div>

                {/* ==================================================
                    Description
                ================================================== */}

                <p
                    className="
                        mx-auto
                        mt-4
                        max-w-md
                        text-sm
                        leading-6
                        text-white/70

                        sm:mt-5
                        sm:text-base
                        sm:leading-7
                    "
                >
                    We're preparing the room details,
                    images, amenities and booking
                    information for you.
                </p>

                {/* ==================================================
                    Skeleton
                ================================================== */}

                <div
                    className="
                        mt-7
                        space-y-3

                        sm:mt-10
                        sm:space-y-4
                    "
                    aria-hidden="true"
                >
                    {skeletonWidths.map(
                        (width, index) => (
                            <motion.div
                                key={width}
                                animate={{
                                    opacity: [
                                        0.35,
                                        0.9,
                                        0.35,
                                    ],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                    delay:
                                        (index + 1) *
                                        0.2,
                                }}
                                className={`
                                    h-3
                                    rounded-full
                                    bg-white/10

                                    sm:h-4

                                    ${width}
                                `}
                            />
                        )
                    )}
                </div>

                {/* ==================================================
                    Status
                ================================================== */}

                <p
                    className="
                        mt-6
                        text-xs
                        text-white/50

                        sm:mt-8
                        sm:text-sm
                    "
                >
                    Please wait a few seconds...
                </p>
            </motion.div>
        </section>
    );
}