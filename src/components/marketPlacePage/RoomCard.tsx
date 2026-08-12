"use client";

import Image from "next/image";
import Link from "next/link";

import {
    Heart,
    MapPin,
} from "lucide-react";

import { RoomCardProps } from "@/types/roomCardTypes";

export default function RoomCard({
    room,
    property,
}: RoomCardProps) {

    const image =
        room.images[0]?.url ??
        "/images/room-placeholder.jpg";

    return (

        <Link
            href={`/rooms/${room.roomId}`}
            className="
                group
                block
                overflow-hidden
                rounded-[24px]
                border
                border-white/10
                bg-slate-900/35
                backdrop-blur-2xl
                shadow-[0_15px_40px_rgba(0,0,0,.35)]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-400/40
                hover:shadow-[0_25px_60px_rgba(37,99,235,.20)]
                sm:rounded-[26px]
            "
        >

            {/* ======================================================
                Image
            ====================================================== */}

            <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                    src={image}
                    alt={room.roomName}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* Availability */}

                <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1.5 text-[11px] font-semibold backdrop-blur-xl sm:left-4 sm:top-4 sm:text-xs ${
                        room.availability.availableNow
                            ? "bg-green-500/90 text-white"
                            : "bg-orange-500/90 text-white"
                    }`}
                >

                    {room.availability.availableNow
                        ? "Available"
                        : "Booked"}

                </span>

                {/* Wishlist */}

                <button
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    aria-label="Add room to wishlist"
                    className="
                        absolute
                        right-3
                        top-3
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-black/30
                        backdrop-blur-xl
                        transition
                        hover:bg-black/50
                        sm:right-4
                        sm:top-4
                    "
                >

                    <Heart
                        size={18}
                        className="text-white"
                    />

                </button>

            </div>

            {/* ======================================================
                Content
            ====================================================== */}

            <div className="space-y-2.5 p-4 sm:space-y-3 sm:p-5">

                {/* Price */}

                <h3 className="text-[1.65rem] font-black leading-tight text-white sm:text-3xl">

                    ₹{room.pricing.rent.toLocaleString()}

                    <span className="ml-1 text-xs font-medium text-slate-400 sm:text-sm">

                        /month

                    </span>

                </h3>

                {/* Room Name */}

                <h4 className="truncate text-base font-semibold text-white sm:text-lg">

                    {room.roomName}

                </h4>

                {/* Location */}

                <div className="flex min-w-0 items-center gap-2 text-slate-400">

                    <MapPin
                        size={15}
                        className="shrink-0 text-cyan-300"
                    />

                    <span className="truncate text-sm">

                        {property.location.address.city}

                    </span>

                </div>

                {/* Property Type */}

                <div className="inline-flex max-w-full rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">

                    <span className="truncate">

                        {property.propertyType}

                    </span>

                </div>

            </div>

        </Link>

    );

}