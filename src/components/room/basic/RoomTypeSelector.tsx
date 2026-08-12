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
                <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                    Room Type
                </h3>

                <p className="max-w-2xl text-sm leading-6 text-slate-500">
                    Choose the category that best describes this room. This
                    helps tenants discover the right accommodation.
                </p>
            </div>

            {/* Cards */}
            <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3">

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
                                rounded-2xl
                                border
                                bg-white
                                p-5
                                text-left
                                transition-all
                                duration-300
                                active:scale-[0.99]
                                sm:rounded-3xl
                                sm:p-6

                                ${
                                    isSelected
                                        ? "border-blue-600 bg-gradient-to-br from-blue-50 to-white shadow-xl ring-2 ring-blue-100"
                                        : "border-slate-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                                }
                            `}
                        >

                            {/* Selected Badge */}
                            {isSelected && (
                                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-semibold text-white shadow-md sm:right-4 sm:top-4 sm:px-3 sm:text-xs">

                                    <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" />

                                    Selected

                                </div>
                            )}

                            {/* Icon */}
                            <div
                                className={`
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-xl
                                    transition-all
                                    sm:h-16
                                    sm:w-16
                                    sm:rounded-2xl

                                    ${
                                        isSelected
                                            ? "bg-blue-600 text-white"
                                            : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                                    }
                                `}
                            >
                                <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                            </div>

                            {/* Content */}
                            <div className="mt-5 space-y-3 sm:mt-6">

                                <h4 className="pr-20 text-base font-semibold text-slate-900 sm:text-lg">
                                    {config.label}
                                </h4>

                                <p className="text-sm leading-6 text-slate-500">
                                    {config.description}
                                </p>

                            </div>

                            {/* Bottom Indicator */}
                            <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-2">

                                <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400 sm:text-xs sm:tracking-wide">
                                    Accommodation
                                </span>

                                {isSelected ? (
                                    <span className="w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
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
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:rounded-2xl">

                <p className="text-sm leading-6 text-slate-600">
                    💡 The selected room type will be displayed on the marketplace
                    and helps tenants filter rooms based on their accommodation
                    preferences.
                </p>

            </div>

        </div>
    );
}