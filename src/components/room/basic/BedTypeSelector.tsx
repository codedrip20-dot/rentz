"use client";

import {
    BedDouble,
    BedSingle,
    Bed,
    CheckCircle2,
    Crown,
    Hotel,
} from "lucide-react";

import { useRoomWizard } from "@/hooks/useRoomWizard";
import { BED_TYPES } from "@/lib/firebase/room/constants";
import { BedType } from "@/types/roomTypes";

const bedTypes: Record<
    BedType,
    {
        title: string;
        description: string;
        icon: React.ElementType;
    }
> = {
    single: {
        title: "Single Bed",
        description: "Comfortable sleeping arrangement for one guest.",
        icon: BedSingle,
    },
    double: {
        title: "Double Bed",
        description: "Suitable for two guests sharing one bed.",
        icon: BedDouble,
    },
    queen: {
        title: "Queen Bed",
        description: "Extra space with premium comfort.",
        icon: Hotel,
    },
    king: {
        title: "King Bed",
        description: "Luxury oversized bed with maximum comfort.",
        icon: Crown,
    },
    bunk: {
        title: "Bunk Bed",
        description: "Perfect for shared rooms and hostels.",
        icon: Bed,
    },
};

export default function BedTypeSelector() {
    const { room, updateRoom } = useRoomWizard();

    return (
        <div className="space-y-6 sm:space-y-8">

            {/* Header */}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                <div className="min-w-0 space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900">
                        Bed Type
                    </h3>

                    <p className="max-w-2xl text-sm leading-6 text-slate-500">
                        Choose the primary bed available in this room. This
                        information is displayed on the marketplace listing.
                    </p>
                </div>

                <div className="self-start rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 sm:px-4 sm:py-2">
                    <span className="text-[11px] font-semibold text-blue-700 sm:text-xs">
                        Required
                    </span>
                </div>

            </div>

            {/* Cards */}

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">

                {BED_TYPES.map((type) => {
                    const item = bedTypes[type];
                    const Icon = item.icon;

                    const selected = room.bedType === type;

                    return (
                        <button
                            key={type}
                            type="button"
                            onClick={() =>
                                updateRoom({
                                    bedType: type,
                                })
                            }
                            className={`
                                group
                                relative
                                w-full
                                overflow-hidden
                                rounded-3xl
                                border
                                bg-white
                                p-5
                                text-left
                                transition-all
                                duration-300
                                sm:p-6

                                ${
                                    selected
                                        ? "border-blue-600 bg-gradient-to-br from-blue-50 via-white to-white shadow-xl ring-2 ring-blue-100"
                                        : "border-slate-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                                }
                            `}
                        >

                            {/* Selection Badge */}

                            {selected && (
                                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-blue-600 px-2.5 py-1 text-[11px] font-semibold text-white shadow sm:right-5 sm:top-5 sm:px-3 sm:text-xs">

                                    <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />

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
                                    duration-300
                                    sm:h-[72px]
                                    sm:w-[72px]

                                    ${
                                        selected
                                            ? "bg-blue-600 text-white"
                                            : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                                    }
                                `}
                            >
                                <Icon className="h-8 w-8 sm:h-9 sm:w-9" />
                            </div>

                            {/* Content */}

                            <div className="mt-5 space-y-3 sm:mt-6">

                                <h4 className="text-base font-semibold text-slate-900 sm:text-lg">
                                    {item.title}
                                </h4>

                                <p className="text-sm leading-6 text-slate-500">
                                    {item.description}
                                </p>

                            </div>

                            {/* Footer */}

                            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 sm:mt-8">

                                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-xs sm:tracking-widest">
                                    Sleeping Setup
                                </span>

                                <span
                                    className={`
                                        rounded-full
                                        px-3
                                        py-1
                                        text-[11px]
                                        font-semibold
                                        sm:text-xs

                                        ${
                                            selected
                                                ? "bg-emerald-100 text-emerald-700"
                                                : "bg-slate-100 text-slate-600"
                                        }
                                    `}
                                >
                                    {selected ? "Active" : "Select"}
                                </span>

                            </div>

                        </button>
                    );
                })}

            </div>

            {/* Bottom Information */}

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-5 sm:p-6">

                <div className="flex items-start gap-3 sm:gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 sm:h-14 sm:w-14">

                        <BedDouble className="h-6 w-6 sm:h-7 sm:w-7" />

                    </div>

                    <div className="min-w-0">

                        <h4 className="text-base font-semibold text-slate-900">
                            Sleeping Arrangement
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            Selecting the correct bed type improves your rooms
                            listing quality and helps tenants quickly find rooms
                            that match their sleeping preferences.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}