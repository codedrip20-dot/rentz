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
        "group flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-2xl transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-slate-900/60";

    return (
        <div className="flex flex-wrap items-center justify-between gap-4">

            <div className="flex flex-wrap items-center gap-3">

                {location.trim() !== "" && (
                    <button
                        type="button"
                        onClick={onRemoveLocation}
                        className={chipClass}
                    >
                        <MapPin
                            size={16}
                            className="text-cyan-300"
                        />

                        <span className="max-w-[220px] truncate">
                            {location}
                        </span>

                        <X
                            size={16}
                            className="text-slate-400 transition-colors group-hover:text-white"
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
                            className="text-green-400"
                        />

                        <span>
                            Min ₹{minBudget.toLocaleString()}
                        </span>

                        <X
                            size={16}
                            className="text-slate-400 transition-colors group-hover:text-white"
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
                            className="text-green-400"
                        />

                        <span>
                            Max ₹{maxBudget.toLocaleString()}
                        </span>

                        <X
                            size={16}
                            className="text-slate-400 transition-colors group-hover:text-white"
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
                    items-center
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
                "
            >
                <RotateCcw
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-180"
                />

                Clear All
            </button>

        </div>
    );
}