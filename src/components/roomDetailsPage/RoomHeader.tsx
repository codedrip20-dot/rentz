"use client";

import { ArrowLeft, Building2, DoorOpen } from "lucide-react";
import { useRouter } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Room } from "@/types/roomTypes";

interface RoomHeaderProps {
    room: Room;
}

export default function RoomHeader({
    room,
}: RoomHeaderProps) {
    const router = useRouter();

    const statusStyles = {
        available: "bg-emerald-500 text-white",
        occupied: "bg-rose-500 text-white",
        maintenance: "bg-amber-500 text-white",
    };

    const statusLabel = {
        available: "Available",
        occupied: "Occupied",
        maintenance: "Maintenance",
    };

    return (
        <header
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
            <div className="p-6 md:p-8">

                {/* Back Button */}

                <button
                    onClick={() => router.back()}
                    className="
                        mb-8
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-white/20
                        bg-white/10
                        px-4
                        py-2.5
                        text-sm
                        font-medium
                        text-white
                        transition-all
                        duration-200
                        hover:bg-white/20
                    "
                >
                    <ArrowLeft size={18} />
                    Back to Rooms
                </button>

                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                    {/* Left */}

                    <div className="flex items-start gap-5">

                        <div
                            className="
                                flex
                                h-16
                                w-16
                                items-center
                                justify-center
                                rounded-2xl
                                bg-white/15
                                ring-1
                                ring-white/20
                            "
                        >
                            <DoorOpen
                                size={32}
                                className="text-white"
                            />
                        </div>

                        <div className="space-y-3">

                            <h1
                                className="
                                    text-3xl
                                    font-bold
                                    tracking-tight
                                    text-white
                                "
                            >
                                {room.roomName}
                            </h1>

                            <div className="flex flex-wrap items-center gap-4 text-blue-100">

                                <span className="font-medium">
                                    Room #{room.roomNumber}
                                </span>

                                <span className="hidden h-1.5 w-1.5 rounded-full bg-blue-200 md:block" />

                                <div className="flex items-center gap-2">

                                    <Building2 size={16} />

                                    <span>
                                        {room.propertyName}
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="flex justify-start lg:justify-end">

                        <Badge
                            className={`
                                rounded-full
                                px-5
                                py-2
                                text-sm
                                font-semibold
                                shadow-lg
                                ${statusStyles[room.status]}
                            `}
                        >
                            {statusLabel[room.status]}
                        </Badge>

                    </div>

                </div>

            </div>
        </header>
    );
}