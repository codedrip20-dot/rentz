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
        <div className="space-y-8">

            {/* Header */}
            <div className="flex items-start justify-between">

                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900">
                        Bed Type
                    </h3>

                    <p className="max-w-2xl text-sm leading-6 text-slate-500">
                        Choose the primary bed available in this room. This
                        information is displayed on the marketplace listing.
                    </p>
                </div>

                <div className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
                    <span className="text-xs font-semibold text-blue-700">
                        Required
                    </span>
                </div>

            </div>

            {/* Cards */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

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
                                overflow-hidden
                                rounded-3xl
                                border
                                bg-white
                                p-6
                                text-left
                                transition-all
                                duration-300

                                ${
                                    selected
                                        ? "border-blue-600 bg-gradient-to-br from-blue-50 via-white to-white shadow-xl ring-2 ring-blue-100"
                                        : "border-slate-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                                }
                            `}
                        >

                            {/* Selection Badge */}

                            {selected && (
                                <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow">

                                    <CheckCircle2 className="h-4 w-4" />

                                    Selected

                                </div>
                            )}

                            {/* Icon */}

                            <div
                                className={`
                                    flex
                                    h-18
                                    w-18
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    transition-all
                                    duration-300

                                    ${
                                        selected
                                            ? "bg-blue-600 text-white"
                                            : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                                    }
                                `}
                            >
                                <Icon className="h-9 w-9" />
                            </div>

                            {/* Content */}

                            <div className="mt-6 space-y-3">

                                <h4 className="text-lg font-semibold text-slate-900">
                                    {item.title}
                                </h4>

                                <p className="text-sm leading-6 text-slate-500">
                                    {item.description}
                                </p>

                            </div>

                            {/* Footer */}

                            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4">

                                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                                    Sleeping Setup
                                </span>

                                <span
                                    className={`
                                        rounded-full
                                        px-3
                                        py-1
                                        text-xs
                                        font-semibold

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

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-6">

                <div className="flex items-start gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">

                        <BedDouble className="h-7 w-7" />

                    </div>

                    <div>

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