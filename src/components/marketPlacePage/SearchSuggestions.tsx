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

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-3xl">

            {suggestions.map((suggestion, index) => (

                <button
                    key={suggestion.placeId}
                    type="button"
                    onClick={() => onSelect(suggestion)}
                    className={`
                        group
                        flex
                        w-full
                        items-center
                        gap-4
                        px-5
                        py-4
                        text-left
                        transition-all
                        duration-300
                        hover:bg-white/5

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

                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 transition-all duration-300 group-hover:bg-blue-500/20">

                        <MapPin
                            size={20}
                            className="text-cyan-300"
                        />

                    </div>

                    {/* ======================================================
                        Location
                    ====================================================== */}

                    <div className="min-w-0 flex-1">

                        <p className="truncate text-sm font-semibold text-white">

                            {suggestion.description}

                        </p>

                        <p className="mt-1 text-xs text-slate-400">

                            Google Places

                        </p>

                    </div>

                    {/* ======================================================
                        Arrow
                    ====================================================== */}

                    <ArrowUpRight
                        size={18}
                        className="text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-300"
                    />

                </button>

            ))}

        </div>

    );

}