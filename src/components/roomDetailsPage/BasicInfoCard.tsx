"use client";

import {
    BedDouble,
    Building2,
    CookingPot,
    DoorOpen,
    Home,
    Ruler,
    Users,
} from "lucide-react";

import { Room } from "@/types/roomTypes";

interface BasicInfoCardProps {
    room: Room;
}

interface InfoItemProps {
    icon: React.ReactNode;
    label: string;
    value: string | number;
}

function InfoItem({
    icon,
    label,
    value,
}: InfoItemProps) {
    return (
        <div
            className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-4
                transition-all
                duration-300
                hover:bg-white/10
            "
        >
            <div className="flex items-center gap-2 text-blue-200">
                {icon}

                <span className="text-xs font-medium uppercase tracking-wide">
                    {label}
                </span>
            </div>

            <p className="mt-3 text-lg font-semibold text-white">
                {value}
            </p>
        </div>
    );
}

export default function BasicInfoCard({
    room,
}: BasicInfoCardProps) {
    return (
        <section
            className="
                overflow-hidden
                rounded-3xl
                border
                border-white/20
                bg-white/10
                backdrop-blur-2xl
                shadow-2xl
            "
        >
            {/* Header */}

            <div
                className="
                    border-b
                    border-white/10
                    px-5
                    py-5
                    sm:px-6
                "
            >
                <h2 className="text-xl font-bold text-white">
                    Basic Information
                </h2>

                <p className="mt-1 text-sm text-blue-100">
                    General information about this room.
                </p>
            </div>

            {/* Content */}

            <div
                className="
                    grid
                    gap-4
                    p-5
                    sm:grid-cols-2
                    lg:grid-cols-4
                    sm:p-6
                "
            >
                <InfoItem
                    icon={<Home size={18} />}
                    label="Room Type"
                    value={room.roomType}
                />

                <InfoItem
                    icon={<DoorOpen size={18} />}
                    label="Room Number"
                    value={room.roomNumber}
                />

                <InfoItem
                    icon={<Building2 size={18} />}
                    label="Floor"
                    value={room.floor}
                />

                <InfoItem
                    icon={<Ruler size={18} />}
                    label="Area"
                    value={`${room.area} sq ft`}
                />

                <InfoItem
                    icon={<Users size={18} />}
                    label="Adults"
                    value={room.capacity.adults}
                />

                <InfoItem
                    icon={<Users size={18} />}
                    label="Children"
                    value={room.capacity.children}
                />

                <InfoItem
                    icon={<BedDouble size={18} />}
                    label="Bed Type"
                    value={room.bedType}
                />

                <InfoItem
                    icon={<Building2 size={18} />}
                    label="Bathrooms"
                    value={`${room.bathrooms} (${room.bathroomType})`}
                />

                <InfoItem
                    icon={<CookingPot size={18} />}
                    label="Kitchen"
                    value={room.kitchen}
                />

                <InfoItem
                    icon={<Home size={18} />}
                    label="Furnishing"
                    value={room.furnishing}
                />

                <InfoItem
                    icon={<Users size={18} />}
                    label="Gender Preference"
                    value={room.genderPreference}
                />
            </div>
        </section>
    );
}