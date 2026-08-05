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

function formatCurrency(
    amount: number
) {
    return new Intl.NumberFormat(
        "en-IN",
        {
            maximumFractionDigits: 0,
        }
    ).format(amount);
}

export default function SimilarRooms({
    data,
}: SimilarRoomsProps) {
    const rooms =
        data.recommendations.rooms;

    if (!rooms.length) {
        return (
            <section className="mt-8">
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
                    className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/5
                        p-10
                        text-center
                        backdrop-blur-xl
                    "
                >
                    <ImageIcon
                        size={52}
                        className="
                            mx-auto
                            mb-5
                            text-blue-400
                        "
                    />

                    <h2
                        className="
                            text-2xl
                            font-black
                            text-white
                        "
                    >
                        No Similar Rooms
                    </h2>

                    <p
                        className="
                            mt-3
                            text-white/60
                        "
                    >
                        We couldnt find any
                        recommended rooms for
                        this property yet.
                    </p>
                </motion.div>
            </section>
        );
    }

    return (
        <section className="mt-8">
            <div
                className="
                    mb-8
                    flex
                    items-center
                    justify-between
                "
            >
                <div>
                    <h2
                        className="
                            text-3xl
                            font-black
                            text-white
                        "
                    >
                        Similar Rooms
                    </h2>

                    <p
                        className="
                            mt-2
                            text-white/60
                        "
                    >
                        You may also like these
                        available rooms.
                    </p>
                </div>
            </div>

            <div
                className="
                    grid
                    gap-6

                    lg:grid-cols-3
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
                            }}
                            transition={{
                                delay:
                                    index * 0.08,
                            }}
                            className="
                                overflow-hidden
                                rounded-3xl
                                border
                                border-white/10
                                bg-white/5
                                backdrop-blur-xl
                                transition-all
                                duration-300

                                hover:border-blue-500/30
                                hover:-translate-y-2
                                hover:shadow-2xl
                                hover:shadow-blue-500/10
                            "
                        >
                        <div
                                className="
                                    relative
                                    h-56
                                    overflow-hidden
                                "
                            >
                                {room.images.length >
                                0 ? (
                                    <Image
                                        src={
                                            room.images[0]
                                                .url
                                        }
                                        alt={
                                            room.roomName
                                        }
                                        fill
                                        sizes="400px"
                                        className="
                                            object-cover
                                            transition-transform
                                            duration-500
                                            group-hover:scale-110
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
                                            size={48}
                                            className="text-slate-500"
                                        />
                                    </div>
                                )}

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-black/70
                                        via-transparent
                                        to-transparent
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        bottom-4
                                        left-4
                                        rounded-full
                                        bg-blue-600
                                        px-3
                                        py-1
                                        text-xs
                                        font-semibold
                                        text-white
                                    "
                                >
                                    {room.roomType}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3
                                    className="
                                        line-clamp-1
                                        text-xl
                                        font-bold
                                        text-white
                                    "
                                >
                                    {room.roomName}
                                </h3>

                                <div
                                    className="
                                        mt-3
                                        flex
                                        items-center
                                        gap-2
                                        text-white/60
                                    "
                                >
                                    <MapPin
                                        size={16}
                                        className="text-blue-400"
                                    />

                                    <span>
                                        {
                                            room.propertyName
                                        }
                                    </span>
                                </div>

                                <div
                                    className="
                                        mt-5
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-1
                                        "
                                    >
                                        <IndianRupee
                                            size={18}
                                            className="text-blue-400"
                                        />

                                        <span
                                            className="
                                                text-2xl
                                                font-black
                                                text-white
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
                                            text-sm
                                            text-white/60
                                        "
                                    >
                                        /month
                                    </span>
                                </div>

                                <div
                                    className="
                                        mt-6
                                        grid
                                        grid-cols-2
                                        gap-3
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            rounded-xl
                                            bg-white/5
                                            p-3
                                        "
                                    >
                                        <Users
                                            size={18}
                                            className="text-blue-400"
                                        />

                                        <span
                                            className="
                                                text-sm
                                                text-white
                                            "
                                        >
                                            {room.capacity.adults}
                                            {" "}
                                            Adults
                                        </span>
                                    </div>

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            rounded-xl
                                            bg-white/5
                                            p-3
                                        "
                                    >
                                        <BedDouble
                                            size={18}
                                            className="text-blue-400"
                                        />

                                        <span
                                            className="
                                                text-sm
                                                text-white
                                            "
                                        >
                                            {room.furnishing}
                                        </span>
                                    </div>

                                    <div
                                        className="
                                            col-span-2
                                            flex
                                            items-center
                                            gap-2
                                            rounded-xl
                                            bg-white/5
                                            p-3
                                        "
                                    >
                                        <Building2
                                            size={18}
                                            className="text-blue-400"
                                        />

                                        <span
                                            className="
                                                text-sm
                                                text-white
                                            "
                                        >
                                            {room.roomType}
                                        </span>
                                    </div>
                                </div>
                                <Link
                                    href={`/rooms/${room.roomId}`}
                                    className="
                                        mt-6
                                        flex
                                        h-12
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-2xl
                                        bg-gradient-to-r
                                        from-blue-600
                                        to-cyan-500
                                        font-semibold
                                        text-white
                                        transition-all
                                        duration-300

                                        hover:scale-[1.02]
                                        hover:shadow-xl
                                        hover:shadow-blue-500/30
                                    "
                                >
                                    View Details

                                    <ArrowRight
                                        size={18}
                                    />
                                </Link>
                            </div>
                        </motion.div>
                    )
                )}
            </div>

            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    delay: 0.25,
                }}
                className="
                    mt-8
                    rounded-3xl
                    border
                    border-blue-500/20
                    bg-blue-500/10
                    p-6
                    text-center
                "
            >
                <h3
                    className="
                        text-xl
                        font-bold
                        text-white
                    "
                >
                    Looking for more options?
                </h3>

                <p
                    className="
                        mt-3
                        text-white/70
                        leading-7
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
                        mt-6
                        inline-flex
                        items-center
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
                    Browse Marketplace

                    <ArrowRight
                        size={18}
                    />
                </Link>
            </motion.div>
        </section>
    );
}