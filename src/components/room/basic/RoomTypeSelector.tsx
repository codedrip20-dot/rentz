"use client";

import {
    BedDouble,
    BedSingle,
    Building2,
    Check,
    Crown,
    Home,
    Users,
} from "lucide-react";

import { useRoomWizard } from "@/hooks/useRoomWizard";
import { ROOM_TYPES } from "@/lib/firebase/room/constants";
import { RoomType } from "@/types/roomTypes";

const roomTypeConfig: Record<
    RoomType,
    {
        label: string;
        description: string;
        icon: React.ElementType;
    }
> = {
    single: {
        label: "Single Room",
        description: "Ideal for one occupant seeking a private space.",
        icon: BedSingle,
    },
    double: {
        label: "Double Room",
        description: "Comfortably accommodates two occupants.",
        icon: BedDouble,
    },
    triple: {
        label: "Triple Room",
        description: "Designed for three people sharing a room.",
        icon: Users,
    },
    dormitory: {
        label: "Dormitory",
        description: "Shared accommodation with multiple beds.",
        icon: Building2,
    },
    studio: {
        label: "Studio",
        description: "Self-contained room with living essentials.",
        icon: Home,
    },
    suite: {
        label: "Suite",
        description: "Premium accommodation with enhanced comfort.",
        icon: Crown,
    },
};

export default function RoomTypeSelector() {
    const { room, updateRoom } = useRoomWizard();

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">
                    Room Type
                </h3>

                <p className="max-w-2xl text-sm leading-6 text-slate-500">
                    Choose the category that best describes this room. This
                    helps tenants discover the right accommodation.
                </p>
            </div>

            {/* Cards */}
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {ROOM_TYPES.map((type) => {
                    const config = roomTypeConfig[type];
                    const Icon = config.icon;

                    const isSelected = room.roomType === type;

                    return (
                        <button
                            key={type}
                            type="button"
                            onClick={() =>
                                updateRoom({
                                    roomType: type,
                                })
                            }
                            className={`
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                bg-white
                                p-6
                                text-left
                                transition-all
                                duration-300

                                ${
                                    isSelected
                                        ? "border-blue-600 bg-gradient-to-br from-blue-50 to-white shadow-xl ring-2 ring-blue-100"
                                        : "border-slate-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                                }
                            `}
                        >
                            {/* Selected Badge */}
                            {isSelected && (
                                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
                                    <Check className="h-3.5 w-3.5" />
                                    Selected
                                </div>
                            )}

                            {/* Icon */}
                            <div
                                className={`
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    transition-all

                                    ${
                                        isSelected
                                            ? "bg-blue-600 text-white"
                                            : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                                    }
                                `}
                            >
                                <Icon className="h-8 w-8" />
                            </div>

                            {/* Content */}
                            <div className="mt-6 space-y-3">
                                <h4 className="text-lg font-semibold text-slate-900">
                                    {config.label}
                                </h4>

                                <p className="text-sm leading-6 text-slate-500">
                                    {config.description}
                                </p>
                            </div>

                            {/* Bottom Indicator */}
                            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
                                <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                                    Accommodation
                                </span>

                                {isSelected ? (
                                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                                        Active
                                    </span>
                                ) : (
                                    <span className="text-xs font-medium text-slate-400">
                                        Click to Select
                                    </span>
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Footer */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm leading-6 text-slate-600">
                    💡 The selected room type will be displayed on the marketplace
                    and helps tenants filter rooms based on their accommodation
                    preferences.
                </p>
            </div>
        </div>
    );
}