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

    const formattedStatus =
        room.status.charAt(0).toUpperCase() +
        room.status.slice(1);

    const statusClass =
        room.status === "available"
            ? "border-emerald-500/20 bg-emerald-500/15 text-emerald-400"
            : room.status === "occupied"
              ? "border-red-500/20 bg-red-500/15 text-red-400"
              : "border-yellow-500/20 bg-yellow-500/15 text-yellow-400";

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
                w-full
                border-b
                border-white/10
                bg-slate-950/70
                backdrop-blur-2xl
            "
        >
            <div
                className="
                    mx-auto
                    w-full
                    max-w-7xl
                    px-3
                    py-3

                    sm:px-6
                    sm:py-4
                "
            >
                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >
                    {/* ==================================================
                        Back Button
                    ================================================== */}

                    <Link
                        href="/marketplace"
                        aria-label="Back to Marketplace"
                        className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            text-white
                            transition-all
                            duration-300

                            active:scale-95

                            sm:h-11
                            sm:w-11
                            sm:hover:border-blue-500/40
                            sm:hover:bg-blue-500/10
                        "
                    >
                        <ArrowLeft
                            size={19}
                            className="sm:h-5 sm:w-5"
                        />
                    </Link>

                    {/* ==================================================
                        Main Information
                    ================================================== */}

                    <div
                        className="
                            min-w-0
                            flex-1
                        "
                    >
                        {/* Breadcrumb */}

                        <div
                            className="
                                hidden
                                items-center
                                gap-1.5
                                overflow-hidden
                                text-xs
                                text-white/60

                                sm:flex
                                sm:text-sm
                            "
                        >
                            <Home
                                size={14}
                                className="shrink-0"
                            />

                            <Link
                                href="/marketplace"
                                className="
                                    shrink-0
                                    transition-colors

                                    hover:text-white
                                "
                            >
                                Marketplace
                            </Link>

                            <ChevronRight
                                size={14}
                                className="shrink-0"
                            />

                            <span className="shrink-0">
                                {property.propertyType}
                            </span>

                            <ChevronRight
                                size={14}
                                className="shrink-0"
                            />

                            <span
                                className="
                                    min-w-0
                                    truncate
                                    text-blue-400
                                "
                            >
                                {room.roomName}
                            </span>
                        </div>

                        {/* Room Name */}

                        <h1
                            className="
                                truncate
                                text-base
                                font-black
                                leading-tight
                                text-white

                                sm:mt-2
                                sm:text-2xl
                            "
                        >
                            {room.roomName}
                        </h1>

                        {/* Property + Location */}

                        <div
                            className="
                                mt-1
                                flex
                                min-w-0
                                items-center
                                gap-1.5
                                overflow-hidden
                                text-[11px]
                                text-white/60

                                sm:mt-2
                                sm:gap-2
                                sm:text-sm
                            "
                        >
                            <Building2
                                size={13}
                                className="
                                    shrink-0
                                    text-blue-400

                                    sm:h-[15px]
                                    sm:w-[15px]
                                "
                            />

                            <span
                                className="
                                    min-w-0
                                    max-w-[42%]
                                    truncate
                                "
                            >
                                {property.details.title}
                            </span>

                            <span className="shrink-0">
                                •
                            </span>

                            <MapPin
                                size={13}
                                className="
                                    shrink-0
                                    text-blue-400

                                    sm:h-[15px]
                                    sm:w-[15px]
                                "
                            />

                            <span
                                className="
                                    min-w-0
                                    truncate
                                "
                            >
                                {
                                    property.location
                                        .address.city
                                }
                                {", "}
                                {
                                    property.location
                                        .address.state
                                }
                            </span>
                        </div>
                    </div>

                    {/* ==================================================
                        Status
                    ================================================== */}

                    <div
                        className="
                            flex
                            shrink-0
                            items-center
                            gap-2
                        "
                    >
                        <div
                            className={`
                                rounded-full
                                border
                                px-2.5
                                py-1.5
                                text-[10px]
                                font-semibold
                                leading-none

                                sm:px-4
                                sm:py-2
                                sm:text-sm

                                ${statusClass}
                            `}
                        >
                            {formattedStatus}
                        </div>

                        {/* Availability */}

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
                                    h-2
                                    w-2
                                    shrink-0
                                    animate-pulse
                                    rounded-full
                                    bg-emerald-400

                                    sm:h-2.5
                                    sm:w-2.5
                                "
                            />

                            <span
                                className="
                                    whitespace-nowrap
                                    text-sm
                                    font-medium
                                    text-white
                                "
                            >
                                {room.availability
                                    .availableNow
                                    ? "Available Now"
                                    : "Available Soon"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}