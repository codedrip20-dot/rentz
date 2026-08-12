"use client";

import { MapPin, IndianRupee, RotateCcw, X } from "lucide-react";

interface ActiveFiltersProps {
    location: string;

    minBudget: number;
    maxBudget: number;

    onRemoveLocation: () => void;
    onRemoveMinBudget: () => void;
    onRemoveMaxBudget: () => void;

    onClearAll: () => void;
}

export default function ActiveFilters({
    location,
    minBudget,
    maxBudget,

    onRemoveLocation,
    onRemoveMinBudget,
    onRemoveMaxBudget,

    onClearAll,
}: ActiveFiltersProps) {
    const hasFilters =
        location.trim() !== "" ||
        minBudget > 0 ||
        maxBudget > 0;

    if (!hasFilters) {
        return null;
    }

    const chipClass =
        "group flex min-h-11 items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-2xl transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-slate-900/60";

    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">

            <div className="flex min-w-0 flex-wrap items-center gap-2.5 sm:gap-3">

                {location.trim() !== "" && (
                    <button
                        type="button"
                        onClick={onRemoveLocation}
                        className={chipClass}
                    >
                        <MapPin
                            size={16}
                            className="shrink-0 text-cyan-300"
                        />

                        <span className="min-w-0 max-w-[calc(100vw-110px)] truncate sm:max-w-[220px]">
                            {location}
                        </span>

                        <X
                            size={16}
                            className="shrink-0 text-slate-400 transition-colors group-hover:text-white"
                        />
                    </button>
                )}

                {minBudget > 0 && (
                    <button
                        type="button"
                        onClick={onRemoveMinBudget}
                        className={chipClass}
                    >
                        <IndianRupee
                            size={16}
                            className="shrink-0 text-green-400"
                        />

                        <span className="whitespace-nowrap">
                            Min ₹{minBudget.toLocaleString()}
                        </span>

                        <X
                            size={16}
                            className="shrink-0 text-slate-400 transition-colors group-hover:text-white"
                        />
                    </button>
                )}

                {maxBudget > 0 && (
                    <button
                        type="button"
                        onClick={onRemoveMaxBudget}
                        className={chipClass}
                    >
                        <IndianRupee
                            size={16}
                            className="shrink-0 text-green-400"
                        />

                        <span className="whitespace-nowrap">
                            Max ₹{maxBudget.toLocaleString()}
                        </span>

                        <X
                            size={16}
                            className="shrink-0 text-slate-400 transition-colors group-hover:text-white"
                        />
                    </button>
                )}

            </div>

            <button
                type="button"
                onClick={onClearAll}
                className="
                    group
                    inline-flex
                    min-h-11
                    w-full
                    shrink-0
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    border
                    border-red-500/20
                    bg-red-500/10
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-red-200
                    backdrop-blur-2xl
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-red-400/40
                    hover:bg-red-500/20
                    sm:w-auto
                "
            >
                <RotateCcw
                    size={16}
                    className="shrink-0 transition-transform duration-300 group-hover:rotate-180"
                />

                Clear All
            </button>

        </div>
    );
}