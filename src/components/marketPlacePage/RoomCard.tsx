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
                overflow-hidden
                rounded-[26px]
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
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* Availability */}

                <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-xl ${
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
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 backdrop-blur-xl transition hover:bg-black/50"
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

            <div className="space-y-3 p-5">

                {/* Price */}

                <h3 className="text-3xl font-black text-white">

                    ₹{room.pricing.rent.toLocaleString()}

                    <span className="ml-1 text-sm font-medium text-slate-400">

                        /month

                    </span>

                </h3>

                {/* Room Name */}

                <h4 className="truncate text-lg font-semibold text-white">

                    {room.roomName}

                </h4>

                {/* Location */}

                <div className="flex items-center gap-2 text-slate-400">

                    <MapPin
                        size={15}
                        className="text-cyan-300"
                    />

                    <span className="truncate text-sm">

                        {property.location.address.city}

                    </span>

                </div>

                {/* Property Type */}

                <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">

                    {property.propertyType}

                </div>

            </div>

        </Link>

    );

}