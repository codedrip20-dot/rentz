"use client";

import {
    ArrowUpRight,
    MapPin,
} from "lucide-react";

import { PlaceSuggestion } from "@/types/google";

interface SearchSuggestionsProps {
    suggestions: PlaceSuggestion[];
    visible: boolean;
    onSelect: (suggestion: PlaceSuggestion) => void;
}

export default function SearchSuggestions({
    suggestions,
    visible,
    onSelect,
}: SearchSuggestionsProps) {

    if (!visible || suggestions.length === 0) {
        return null;
    }

    return (

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-3xl sm:rounded-3xl">

            {suggestions.map((suggestion, index) => (

                <button
                    key={suggestion.placeId}
                    type="button"
                    onClick={() => onSelect(suggestion)}
                    className={`
                        group
                        flex
                        min-h-16
                        w-full
                        items-center
                        gap-3
                        px-4
                        py-3.5
                        text-left
                        transition-all
                        duration-300
                        hover:bg-white/5

                        sm:gap-4
                        sm:px-5
                        sm:py-4

                        ${
                            index !== suggestions.length - 1
                                ? "border-b border-white/5"
                                : ""
                        }
                    `}
                >

                    {/* ======================================================
                        Icon
                    ====================================================== */}

                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/10 transition-all duration-300 group-hover:bg-blue-500/20 sm:h-11 sm:w-11 sm:rounded-2xl">

                        <MapPin
                            size={19}
                            className="text-cyan-300 sm:h-5 sm:w-5"
                        />

                    </div>

                    {/* ======================================================
                        Location
                    ====================================================== */}

                    <div className="min-w-0 flex-1">

                        <p className="truncate text-sm font-semibold text-white">

                            {suggestion.description}

                        </p>

                        <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">

                            Google Places

                        </p>

                    </div>

                    {/* ======================================================
                        Arrow
                    ====================================================== */}

                    <ArrowUpRight
                        size={17}
                        className="shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-300 sm:h-[18px] sm:w-[18px]"
                    />

                </button>

            ))}

        </div>

    );

}