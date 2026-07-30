"use client";

import { ChangeEvent } from "react";
import { Ruler, Square } from "lucide-react";

import { useRoomWizard } from "@/hooks/useRoomWizard";

const MAX_AREA = 100000;

export default function AreaInput() {
    const { room, updateRoom } = useRoomWizard();

    const handleChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const value = Number(event.target.value);

        updateRoom({
            area: isNaN(value) ? 0 : value,
        });
    };

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="flex items-start justify-between">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <Square className="h-4 w-4" />
                        </div>

                        <div>
                            <label
                                htmlFor="roomArea"
                                className="text-base font-semibold text-slate-900"
                            >
                                Room Area
                            </label>

                            <p className="mt-1 text-sm leading-6 text-slate-500">
                                Enter the approximate usable floor area of this
                                room.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1">
                    <span className="text-xs font-semibold text-blue-700">
                        Required
                    </span>
                </div>
            </div>

            {/* Input */}
            <div className="group relative">

                <Ruler
                    className="
                        pointer-events-none
                        absolute
                        left-5
                        top-1/2
                        h-5
                        w-5
                        -translate-y-1/2
                        text-slate-400
                        transition-all
                        duration-300
                        group-focus-within:text-blue-600
                    "
                />

                <input
                    id="roomArea"
                    type="number"
                    min={0}
                    max={MAX_AREA}
                    value={room.area || ""}
                    onChange={handleChange}
                    placeholder="250"
                    className="
                        h-16
                        w-full
                        rounded-3xl
                        border
                        border-slate-200
                        bg-white
                        pl-14
                        pr-28

                        text-lg
                        font-semibold
                        text-slate-900

                        shadow-sm
                        transition-all
                        duration-300

                        placeholder:font-normal
                        placeholder:text-slate-400

                        hover:border-slate-300
                        hover:shadow-md

                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                        focus:outline-none

                        [appearance:textfield]
                        [&::-webkit-inner-spin-button]:appearance-none
                        [&::-webkit-outer-spin-button]:appearance-none
                    "
                />

                {/* Unit Badge */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-slate-600
                    "
                >
                    sq ft
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">

                <div>
                    <p className="text-sm font-medium text-slate-700">
                        Floor Space
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                        This helps tenants compare rooms by size.
                    </p>
                </div>

                {room.area > 0 ? (
                    <div className="rounded-xl bg-emerald-100 px-4 py-2">
                        <p className="text-sm font-bold text-emerald-700">
                            {room.area.toLocaleString()} sq ft
                        </p>
                    </div>
                ) : (
                    <div className="rounded-xl bg-slate-200 px-4 py-2">
                        <p className="text-sm font-semibold text-slate-500">
                            Not Set
                        </p>
                    </div>
                )}
            </div>

        </div>
    );
}