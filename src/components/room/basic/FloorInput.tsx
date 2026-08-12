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
        <div className="space-y-6 sm:space-y-8">

            {/* Header */}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div className="min-w-0 space-y-2">

                    <div className="flex items-center gap-2">

                        <ArrowUpCircle className="h-5 w-5 shrink-0 text-blue-600" />

                        <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                            Floor Number
                        </h3>

                    </div>

                    <p className="max-w-2xl text-sm leading-6 text-slate-500">
                        Choose the floor where this room is located within the
                        property.
                    </p>

                </div>

                <div className="w-fit shrink-0 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
                    <span className="text-xs font-semibold text-blue-700">
                        Required
                    </span>
                </div>

            </div>

            {/* Main Card */}

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:rounded-3xl sm:p-6 lg:p-8">

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">

                    {/* Left */}

                    <div className="flex min-w-0 items-center gap-3 sm:gap-5">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 sm:h-16 sm:w-16 sm:rounded-2xl">

                            <Building2 className="h-6 w-6 sm:h-8 sm:w-8" />

                        </div>

                        <div className="min-w-0">

                            <h4 className="text-base font-semibold text-slate-900 sm:text-lg">
                                Floor Level
                            </h4>

                            <p className="mt-1 text-sm leading-6 text-slate-500">
                                This information helps tenants understand the
                                rooms accessibility and location.
                            </p>

                        </div>

                    </div>

                    {/* Counter */}

                    <div className="flex w-full items-center justify-center gap-3 sm:gap-5 lg:w-auto lg:shrink-0">

                        <button
                            type="button"
                            onClick={() =>
                                updateFloor(room.floor - 1)
                            }
                            disabled={room.floor <= MIN_FLOOR}
                            className="
                                flex
                                h-12
                                w-12
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                transition-all
                                hover:border-blue-300
                                hover:bg-blue-50
                                active:scale-95
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                                sm:h-14
                                sm:w-14
                                sm:rounded-2xl
                            "
                        >
                            <Minus className="h-5 w-5" />
                        </button>

                        <div className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center sm:min-w-[120px] sm:flex-none sm:rounded-2xl sm:px-6 sm:py-4">

                            <p className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                                {room.floor}
                            </p>

                            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:mt-2 sm:text-xs sm:tracking-[0.25em]">
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
                                h-12
                                w-12
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-blue-600
                                text-white
                                transition-all
                                hover:bg-blue-700
                                hover:shadow-lg
                                active:scale-95
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                                sm:h-14
                                sm:w-14
                                sm:rounded-2xl
                            "
                        >
                            <Plus className="h-5 w-5" />
                        </button>

                    </div>

                </div>

            </div>

            {/* Summary */}

            <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-4 sm:rounded-3xl sm:p-6">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">

                    <div className="flex min-w-0 items-start gap-3 sm:gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 sm:h-14 sm:w-14 sm:rounded-2xl">

                            <Building2 className="h-6 w-6 sm:h-7 sm:w-7" />

                        </div>

                        <div className="min-w-0">

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

                    <div className="w-full shrink-0 rounded-2xl bg-blue-600 px-5 py-3 text-center text-white sm:w-auto">

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