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
        <div className="space-y-5 sm:space-y-6">

            {/* Header */}
            <div className="flex items-start justify-between gap-3">

                <div className="min-w-0 space-y-2">

                    <div className="flex items-start gap-2 sm:gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <Square className="h-4 w-4" />
                        </div>

                        <div className="min-w-0">

                            <label
                                htmlFor="roomArea"
                                className="text-sm font-semibold text-slate-900 sm:text-base"
                            >
                                Room Area
                            </label>

                            <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                                Enter the approximate usable floor area of this
                                room.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="shrink-0 rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 sm:px-3">
                    <span className="text-[10px] font-semibold text-blue-700 sm:text-xs">
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
                        left-4
                        top-1/2
                        h-5
                        w-5
                        -translate-y-1/2
                        text-slate-400
                        transition-all
                        duration-300
                        group-focus-within:text-blue-600
                        sm:left-5
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
                        h-14
                        w-full
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        pl-12
                        pr-24

                        text-base
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

                        sm:h-16
                        sm:rounded-3xl
                        sm:pl-14
                        sm:pr-28
                        sm:text-lg
                    "
                />

                {/* Unit Badge */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        rounded-lg
                        border
                        border-slate-200
                        bg-slate-50
                        px-2.5
                        py-1.5
                        text-xs
                        font-semibold
                        text-slate-600
                        sm:right-4
                        sm:rounded-xl
                        sm:px-4
                        sm:py-2
                        sm:text-sm
                    "
                >
                    sq ft
                </div>

            </div>

            {/* Footer */}
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">

                <div className="min-w-0">

                    <p className="text-sm font-medium text-slate-700">
                        Floor Space
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                        This helps tenants compare rooms by size.
                    </p>

                </div>

                {room.area > 0 ? (
                    <div className="self-start rounded-xl bg-emerald-100 px-3 py-2 sm:self-auto sm:px-4">

                        <p className="text-xs font-bold text-emerald-700 sm:text-sm">
                            {room.area.toLocaleString()} sq ft
                        </p>

                    </div>
                ) : (
                    <div className="self-start rounded-xl bg-slate-200 px-3 py-2 sm:self-auto sm:px-4">

                        <p className="text-xs font-semibold text-slate-500 sm:text-sm">
                            Not Set
                        </p>

                    </div>
                )}

            </div>

        </div>
    );
}