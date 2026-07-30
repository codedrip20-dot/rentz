"use client";

import {
    Building2,
    Minus,
    Plus,
    ArrowUpCircle,
} from "lucide-react";

import { useRoomWizard } from "@/hooks/useRoomWizard";

const MIN_FLOOR = 0;
const MAX_FLOOR = 100;

export default function FloorInput() {
    const { room, updateRoom } = useRoomWizard();

    const updateFloor = (value: number) => {
        updateRoom({
            floor: Math.max(MIN_FLOOR, Math.min(MAX_FLOOR, value)),
        });
    };

    return (
        <div className="space-y-8">

            {/* Header */}

            <div className="flex items-start justify-between">

                <div className="space-y-2">

                    <div className="flex items-center gap-2">

                        <ArrowUpCircle className="h-5 w-5 text-blue-600" />

                        <h3 className="text-lg font-semibold text-slate-900">
                            Floor Number
                        </h3>

                    </div>

                    <p className="max-w-2xl text-sm leading-6 text-slate-500">
                        Choose the floor where this room is located within the
                        property.
                    </p>

                </div>

                <div className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
                    <span className="text-xs font-semibold text-blue-700">
                        Required
                    </span>
                </div>

            </div>

            {/* Main Card */}

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">

                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                    {/* Left */}

                    <div className="flex items-center gap-5">

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600">

                            <Building2 className="h-8 w-8" />

                        </div>

                        <div>

                            <h4 className="text-lg font-semibold text-slate-900">
                                Floor Level
                            </h4>

                            <p className="mt-1 text-sm leading-6 text-slate-500">
                                This information helps tenants understand the
                                rooms accessibility and location.
                            </p>

                        </div>

                    </div>

                    {/* Counter */}

                    <div className="flex items-center gap-5 self-center">

                        <button
                            type="button"
                            onClick={() =>
                                updateFloor(room.floor - 1)
                            }
                            disabled={room.floor <= MIN_FLOOR}
                            className="
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                transition-all
                                hover:border-blue-300
                                hover:bg-blue-50
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                            "
                        >
                            <Minus className="h-5 w-5" />
                        </button>

                        <div className="min-w-[120px] rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-center">

                            <p className="text-5xl font-bold tracking-tight text-slate-900">
                                {room.floor}
                            </p>

                            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                                Floor
                            </p>

                        </div>

                        <button
                            type="button"
                            onClick={() =>
                                updateFloor(room.floor + 1)
                            }
                            disabled={room.floor >= MAX_FLOOR}
                            className="
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-2xl
                                bg-blue-600
                                text-white
                                transition-all
                                hover:bg-blue-700
                                hover:shadow-lg
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                            "
                        >
                            <Plus className="h-5 w-5" />
                        </button>

                    </div>

                </div>

            </div>

            {/* Summary */}

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-6">

                <div className="flex items-start justify-between gap-6">

                    <div className="flex items-start gap-4">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">

                            <Building2 className="h-7 w-7" />

                        </div>

                        <div>

                            <h4 className="text-base font-semibold text-slate-900">
                                Floor Summary
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Displaying the floor number helps tenants
                                understand accessibility and where the room is
                                located inside the building.
                            </p>

                        </div>

                    </div>

                    <div className="rounded-2xl bg-blue-600 px-5 py-3 text-center text-white">

                        <p className="text-3xl font-bold">
                            {room.floor}
                        </p>

                        <p className="text-xs uppercase tracking-widest text-blue-100">
                            Floor
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}