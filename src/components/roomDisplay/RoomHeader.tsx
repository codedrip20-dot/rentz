"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
    ArrowLeft,
    Building2,
    ChevronRight,
    Home,
    MapPin,
} from "lucide-react";

import { RoomDisplayData } from "@/types/roomDisplayTypes";

interface RoomHeaderProps {
    data: RoomDisplayData;
}

export default function RoomHeader({
    data,
}: RoomHeaderProps) {
    const { room, property } = data;

    return (
        <motion.header
            initial={{
                opacity: 0,
                y: -20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.4,
            }}
            className="
                sticky
                top-0
                z-40
                border-b
                border-white/10
                bg-slate-950/70
                backdrop-blur-2xl
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    max-w-7xl
                    items-center
                    justify-between
                    px-6
                    py-4
                "
            >
                <div
                    className="
                        flex
                        items-center
                        gap-5
                    "
                >
                    <Link
                        href="/marketplace"
                        className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            text-white
                            transition-all
                            duration-300

                            hover:border-blue-500/40
                            hover:bg-blue-500/10
                        "
                    >
                        <ArrowLeft size={20} />
                    </Link>

                    <div>
                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                text-sm
                                text-white/60
                            "
                        >
                            <Home size={15} />

                            <Link href="/marketplace">
                                Marketplace
                            </Link>

                            <ChevronRight size={15} />

                            <span>
                                {property.propertyType}
                            </span>

                            <ChevronRight size={15} />

                            <span className="text-blue-400">
                                {room.roomName}
                            </span>
                        </div>
                        <h1
                            className="
                                mt-2
                                text-2xl
                                font-black
                                text-white
                            "
                        >
                            {room.roomName}
                        </h1>

                        <div
                            className="
                                mt-2
                                flex
                                items-center
                                gap-2
                                text-sm
                                text-white/60
                            "
                        >
                            <Building2
                                size={15}
                                className="text-blue-400"
                            />

                            <span>
                                {property.details.title}
                            </span>

                            <span>•</span>

                            <MapPin
                                size={15}
                                className="text-blue-400"
                            />

                            <span>
                                {property.location.address.city}
                                {", "}
                                {property.location.address.state}
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >
                    <div
                        className={`
                            rounded-full
                            px-4
                            py-2
                            text-sm
                            font-semibold

                            ${
                                room.status ===
                                "available"
                                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                                    : room.status ===
                                      "occupied"
                                    ? "bg-red-500/15 text-red-400 border border-red-500/20"
                                    : "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20"
                            }
                        `}
                    >
                        {room.status
                            .charAt(0)
                            .toUpperCase() +
                            room.status.slice(1)}
                    </div>
                    <div
                        className="
                            hidden
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-blue-500/20
                            bg-blue-500/10
                            px-4
                            py-2

                            md:flex
                        "
                    >
                        <span
                            className="
                                h-2.5
                                w-2.5
                                rounded-full
                                bg-emerald-400
                                animate-pulse
                            "
                        />

                        <span
                            className="
                                text-sm
                                font-medium
                                text-white
                            "
                        >
                            {room.availability.availableNow
                                ? "Available Now"
                                : "Available Soon"}
                        </span>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}