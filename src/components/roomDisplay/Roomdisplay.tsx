"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import whyUsbg from "@/assets/whyUsbg.png";

import {
    Amenities,
    BookingCard,
    Description,
    ErrorState,
    ImageGallery,
    LoadingState,
    LocationMap,
    OwnerCard,
    PropertyDetails,
    QuickInfo,
    RoomHeader,
    RoomHero,
    SimilarRooms,
} from "@/components/roomDisplay";

import { RoomDisplayData } from "@/types/roomDisplayTypes";

interface RoomDisplayProps {
    data?: RoomDisplayData;

    loading?: boolean;

    error?: string | null;
}

export default function RoomDisplay({
    data,
    loading = false,
    error = null,
}: RoomDisplayProps) {
    if (loading) {
        return <LoadingState />;
    }

    if (error || !data) {
        return (
            <ErrorState
                title="Unable to Load Room"
                message={
                    error ??
                    "Something went wrong while loading this room."
                }
            />
        );
    }

    return (
        <main
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-slate-950
            "
        >
            {/* Background */}

            <div className="absolute inset-0">
                <Image
                    src={whyUsbg}
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                />

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-b
                        from-slate-950/80
                        via-slate-950/75
                        to-slate-950
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        bg-blue-950/20
                    "
                />
            </div>

            {/* Content */}

            <div className="relative z-10">
                <RoomHeader data={data} />

                <div
                    className="
                        mx-auto
                        max-w-7xl
                        px-4
                        py-8

                        sm:px-6

                        lg:px-8
                    "
                >
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.4,
                        }}
                    >
                        <RoomHero data={data} />
                    </motion.div>
                    <div
                        className="
                            mt-8
                            grid
                            gap-8

                            lg:grid-cols-12
                        "
                    >
                        {/* ==================================================
                            Left Content
                        ================================================== */}

                        <div
                            className="
                                space-y-8

                                lg:col-span-8
                            "
                        >
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                            >
                                <ImageGallery
                                    images={data.room.images}
                                />
                            </motion.div>

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.05,
                                }}
                            >
                                <Description
                                    data={data}
                                />
                            </motion.div>

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.1,
                                }}
                            >
                                <Amenities
                                    data={data}
                                />
                            </motion.div>

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.15,
                                }}
                            >
                                <QuickInfo
                                    data={data}
                                />
                            </motion.div>

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.2,
                                }}
                            >
                                <PropertyDetails
                                    data={data}
                                />
                            </motion.div>

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.25,
                                }}
                            >
                                <LocationMap
                                    data={data}
                                />
                            </motion.div>
                        </div>

                        {/* ==================================================
                            Right Sidebar
                        ================================================== */}

                        <div
                            className="
                                space-y-8

                                lg:sticky
                                lg:top-28
                                lg:col-span-4
                                lg:self-start
                            "
                        >
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                            >
                                <BookingCard
                                    data={data}
                                />
                            </motion.div>

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.1,
                                }}
                            >
                                <OwnerCard
                                    data={data}
                                />
                            </motion.div>
                        </div>
                    </div>
                    {/* ==========================================
                        Similar Rooms
                    ========================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.2,
                        }}
                    >
                        <SimilarRooms
                            data={data}
                        />
                    </motion.div>

                    {/* ==========================================
                        Bottom CTA
                    ========================================== */}

                    <motion.section
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.3,
                        }}
                        className="
                            mt-16
                            overflow-hidden
                            rounded-[32px]
                            border
                            border-blue-500/20
                            bg-gradient-to-r
                            from-blue-600/15
                            via-slate-900/60
                            to-cyan-500/15
                            p-10
                            backdrop-blur-2xl
                        "
                    >
                        <div
                            className="
                                mx-auto
                                max-w-3xl
                                text-center
                            "
                        >
                            <h2
                                className="
                                    text-3xl
                                    font-black
                                    text-white

                                    lg:text-4xl
                                "
                            >
                                Find Your Perfect
                                Stay with Rentz
                            </h2>

                            <p
                                className="
                                    mx-auto
                                    mt-5
                                    max-w-2xl
                                    text-lg
                                    leading-8
                                    text-white/70
                                "
                            >
                                Thousands of verified
                                rooms, premium
                                properties, trusted
                                owners and a seamless
                                booking experience—
                                all in one place.
                            </p>
                        </div>
                    </motion.section>
                    </div>
            </div>
        </main>
    );
}