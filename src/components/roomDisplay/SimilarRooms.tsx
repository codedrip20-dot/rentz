"use client";

import Link from "next/link";

import Image from "next/image";

import { motion } from "framer-motion";

import {
    ArrowRight,
    BedDouble,
    Building2,
    ImageIcon,
    IndianRupee,
    MapPin,
    Users,
} from "lucide-react";

import { RoomDisplayData } from "@/types/roomDisplayTypes";

interface SimilarRoomsProps {
    data: RoomDisplayData;
}

function formatCurrency(amount: number) {
    return new Intl.NumberFormat("en-IN", {
        maximumFractionDigits: 0,
    }).format(amount);
}

export default function SimilarRooms({
    data,
}: SimilarRoomsProps) {
    const rooms = data.recommendations.rooms;

    if (!rooms.length) {
        return (
            <section className="mt-6 w-full sm:mt-8">
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
                        margin:
                            "0px 0px -60px 0px",
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                    className="
                        w-full
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        px-4
                        py-8
                        text-center
                        backdrop-blur-xl

                        sm:rounded-3xl
                        sm:p-10
                    "
                >
                    <ImageIcon
                        size={40}
                        className="
                            mx-auto
                            mb-4
                            text-blue-400

                            sm:h-[52px]
                            sm:w-[52px]
                            sm:mb-5
                        "
                    />

                    <h2
                        className="
                            text-xl
                            font-black
                            text-white

                            sm:text-2xl
                        "
                    >
                        No Similar Rooms
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-2
                            max-w-md
                            text-sm
                            leading-6
                            text-white/60

                            sm:mt-3
                            sm:text-base
                            sm:leading-7
                        "
                    >
                        We couldn't find any recommended
                        rooms for this property yet.
                    </p>
                </motion.div>
            </section>
        );
    }

    return (
        <section className="mt-6 w-full sm:mt-8">
            {/* ==================================================
                Section Header
            ================================================== */}

            <div className="mb-5 sm:mb-8">
                <h2
                    className="
                        text-2xl
                        font-black
                        leading-tight
                        text-white

                        sm:text-3xl
                    "
                >
                    Similar Rooms
                </h2>

                <p
                    className="
                        mt-1.5
                        text-sm
                        leading-6
                        text-white/60

                        sm:mt-2
                        sm:text-base
                        sm:leading-7
                    "
                >
                    You may also like these available
                    rooms.
                </p>
            </div>

            {/* ==================================================
                Room Grid
            ================================================== */}

            <div
                className="
                    grid
                    grid-cols-1
                    gap-4

                    sm:gap-5

                    lg:grid-cols-3
                    lg:gap-6
                "
            >
                {rooms.map(
                    (room, index) => (
                        <motion.div
                            key={room.roomId}
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
                                margin:
                                    "0px 0px -50px 0px",
                            }}
                            transition={{
                                delay:
                                    index * 0.08,
                                duration: 0.4,
                            }}
                            className="
                                group
                                min-w-0
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                backdrop-blur-xl
                                transition-all
                                duration-300

                                sm:rounded-3xl

                                sm:hover:-translate-y-2
                                sm:hover:border-blue-500/30
                                sm:hover:shadow-2xl
                                sm:hover:shadow-blue-500/10
                            "
                        >
                            {/* ==================================================
                                Image
                            ================================================== */}

                            <div
                                className="
                                    relative
                                    h-48
                                    overflow-hidden

                                    sm:h-56
                                "
                            >
                                {room.images.length > 0 ? (
                                    <Image
                                        src={
                                            room
                                                .images[0]
                                                .url
                                        }
                                        alt={
                                            room.roomName
                                        }
                                        fill
                                        sizes="
                                            (max-width: 640px) 100vw,
                                            (max-width: 1024px) 50vw,
                                            400px
                                        "
                                        className="
                                            object-cover
                                            transition-transform
                                            duration-500

                                            sm:group-hover:scale-110
                                        "
                                    />
                                ) : (
                                    <div
                                        className="
                                            flex
                                            h-full
                                            items-center
                                            justify-center
                                            bg-slate-800
                                        "
                                    >
                                        <ImageIcon
                                            size={40}
                                            className="
                                                text-slate-500

                                                sm:h-12
                                                sm:w-12
                                            "
                                        />
                                    </div>
                                )}

                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-black/70
                                        via-black/10
                                        to-transparent
                                    "
                                />

                                {/* Room Type */}

                                <div
                                    className="
                                        absolute
                                        bottom-3
                                        left-3
                                        max-w-[calc(100%-24px)]
                                        truncate
                                        rounded-full
                                        bg-blue-600
                                        px-3
                                        py-1
                                        text-[11px]
                                        font-semibold
                                        text-white

                                        sm:bottom-4
                                        sm:left-4
                                        sm:text-xs
                                    "
                                >
                                    {room.roomType}
                                </div>
                            </div>

                            {/* ==================================================
                                Card Content
                            ================================================== */}

                            <div
                                className="
                                    p-4

                                    sm:p-6
                                "
                            >
                                {/* Room Name */}

                                <h3
                                    className="
                                        truncate
                                        text-lg
                                        font-bold
                                        text-white

                                        sm:text-xl
                                    "
                                >
                                    {room.roomName}
                                </h3>

                                {/* Property */}

                                <div
                                    className="
                                        mt-2.5
                                        flex
                                        min-w-0
                                        items-center
                                        gap-2
                                        text-white/60

                                        sm:mt-3
                                    "
                                >
                                    <MapPin
                                        size={15}
                                        className="
                                            shrink-0
                                            text-blue-400
                                        "
                                    />

                                    <span
                                        className="
                                            min-w-0
                                            truncate
                                            text-xs

                                            sm:text-sm
                                        "
                                    >
                                        {
                                            room.propertyName
                                        }
                                    </span>
                                </div>

                                {/* ==================================================
                                    Price
                                ================================================== */}

                                <div
                                    className="
                                        mt-4
                                        flex
                                        items-baseline
                                        justify-between
                                        gap-2

                                        sm:mt-5
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            min-w-0
                                            items-center
                                            gap-0.5
                                        "
                                    >
                                        <IndianRupee
                                            size={17}
                                            className="
                                                shrink-0
                                                text-blue-400
                                            "
                                        />

                                        <span
                                            className="
                                                truncate
                                                text-xl
                                                font-black
                                                text-white

                                                sm:text-2xl
                                            "
                                        >
                                            {formatCurrency(
                                                room
                                                    .pricing
                                                    .rent
                                            )}
                                        </span>
                                    </div>

                                    <span
                                        className="
                                            shrink-0
                                            text-xs
                                            text-white/60

                                            sm:text-sm
                                        "
                                    >
                                        /month
                                    </span>
                                </div>

                                {/* ==================================================
                                    Room Features
                                ================================================== */}

                                <div
                                    className="
                                        mt-4
                                        grid
                                        grid-cols-2
                                        gap-2

                                        sm:mt-6
                                        sm:gap-3
                                    "
                                >
                                    {/* Adults */}

                                    <div
                                        className="
                                            flex
                                            min-w-0
                                            items-center
                                            gap-2
                                            rounded-xl
                                            bg-white/5
                                            p-2.5

                                            sm:p-3
                                        "
                                    >
                                        <Users
                                            size={17}
                                            className="
                                                shrink-0
                                                text-blue-400
                                            "
                                        />

                                        <span
                                            className="
                                                truncate
                                                text-xs
                                                text-white

                                                sm:text-sm
                                            "
                                        >
                                            {
                                                room
                                                    .capacity
                                                    .adults
                                            }{" "}
                                            Adult
                                            {room
                                                .capacity
                                                .adults >
                                            1
                                                ? "s"
                                                : ""}
                                        </span>
                                    </div>

                                    {/* Furnishing */}

                                    <div
                                        className="
                                            flex
                                            min-w-0
                                            items-center
                                            gap-2
                                            rounded-xl
                                            bg-white/5
                                            p-2.5

                                            sm:p-3
                                        "
                                    >
                                        <BedDouble
                                            size={17}
                                            className="
                                                shrink-0
                                                text-blue-400
                                            "
                                        />

                                        <span
                                            className="
                                                truncate
                                                text-xs
                                                text-white

                                                sm:text-sm
                                            "
                                        >
                                            {
                                                room.furnishing
                                            }
                                        </span>
                                    </div>

                                    {/* Room Type */}

                                    <div
                                        className="
                                            col-span-2
                                            flex
                                            min-w-0
                                            items-center
                                            gap-2
                                            rounded-xl
                                            bg-white/5
                                            p-2.5

                                            sm:p-3
                                        "
                                    >
                                        <Building2
                                            size={17}
                                            className="
                                                shrink-0
                                                text-blue-400
                                            "
                                        />

                                        <span
                                            className="
                                                truncate
                                                text-xs
                                                text-white

                                                sm:text-sm
                                            "
                                        >
                                            {
                                                room.roomType
                                            }
                                        </span>
                                    </div>
                                </div>

                                {/* ==================================================
                                    View Details
                                ================================================== */}

                                <Link
                                    href={`/rooms/${room.roomId}`}
                                    className="
                                        mt-4
                                        flex
                                        min-h-11
                                        w-full
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-xl
                                        bg-gradient-to-r
                                        from-blue-600
                                        to-cyan-500
                                        px-4
                                        text-sm
                                        font-semibold
                                        text-white
                                        transition-all
                                        duration-300

                                        active:scale-[0.98]

                                        sm:mt-6
                                        sm:h-12
                                        sm:rounded-2xl

                                        sm:hover:scale-[1.02]
                                        sm:hover:shadow-xl
                                        sm:hover:shadow-blue-500/30
                                    "
                                >
                                    View Details

                                    <ArrowRight
                                        size={17}
                                    />
                                </Link>
                            </div>
                        </motion.div>
                    )
                )}
            </div>

            {/* ==================================================
                Marketplace CTA
            ================================================== */}

            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                viewport={{
                    once: true,
                    margin:
                        "0px 0px -50px 0px",
                }}
                transition={{
                    delay: 0.25,
                    duration: 0.4,
                }}
                className="
                    mt-5
                    rounded-2xl
                    border
                    border-blue-500/20
                    bg-blue-500/10
                    px-4
                    py-6
                    text-center

                    sm:mt-8
                    sm:rounded-3xl
                    sm:p-6
                "
            >
                <h3
                    className="
                        text-lg
                        font-bold
                        text-white

                        sm:text-xl
                    "
                >
                    Looking for more options?
                </h3>

                <p
                    className="
                        mx-auto
                        mt-2
                        max-w-xl
                        text-sm
                        leading-6
                        text-white/70

                        sm:mt-3
                        sm:text-base
                        sm:leading-7
                    "
                >
                    Explore more verified rooms on
                    Rentz and discover the perfect
                    place that matches your budget,
                    location and lifestyle.
                </p>

                <Link
                    href="/marketplace"
                    className="
                        mt-5
                        inline-flex
                        min-h-11
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-gradient-to-r
                        from-blue-600
                        to-cyan-500
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        duration-300

                        active:scale-[0.98]

                        sm:mt-6
                        sm:rounded-2xl
                        sm:px-6
                        sm:py-3

                        sm:hover:scale-105
                        sm:hover:shadow-xl
                        sm:hover:shadow-blue-500/30
                    "
                >
                    Browse Marketplace

                    <ArrowRight
                        size={18}
                    />
                </Link>
            </motion.div>
        </section>
    );
}