"use client";

import {
    AlertCircle,
    Loader2,
    MapPin,
} from "lucide-react";

import SearchSuggestions from "./SearchSuggestions";

import { PlaceSuggestion } from "@/types/google";

interface SearchDropdownProps {
    isOpen: boolean;
    isLoading: boolean;
    error?: string | null;

    suggestions: PlaceSuggestion[];

    onSelect: (suggestion: PlaceSuggestion) => void;
}

export default function SearchDropdown({
    isOpen,
    isLoading,
    error,
    suggestions,
    onSelect,
}: SearchDropdownProps) {

    if (!isOpen) {
        return null;
    }

    return (

        <div className="absolute left-0 right-0 top-full z-50 mt-3">

            {/* ======================================================
                Loading
            ====================================================== */}

            {isLoading && (

                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-[0_25px_60px_rgba(0,0,0,.45)] backdrop-blur-3xl">

                    <div className="flex flex-col items-center justify-center gap-4">

                        <Loader2
                            size={30}
                            className="animate-spin text-blue-400"
                        />

                        <p className="text-sm font-medium text-slate-300">

                            Searching locations...

                        </p>

                    </div>

                </div>

            )}

            {/* ======================================================
                Error
            ====================================================== */}

            {!isLoading && error && (

                <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-6 shadow-[0_25px_60px_rgba(0,0,0,.45)] backdrop-blur-3xl">

                    <div className="flex items-center gap-3">

                        <AlertCircle
                            size={20}
                            className="text-red-400"
                        />

                        <p className="text-sm font-medium text-red-200">

                            {error}

                        </p>

                    </div>

                </div>

            )}

            {/* ======================================================
                Suggestions
            ====================================================== */}

            {!isLoading &&
                !error &&
                suggestions.length > 0 && (

                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-[0_25px_60px_rgba(0,0,0,.45)] backdrop-blur-3xl">

                        <SearchSuggestions
                            suggestions={suggestions}
                            visible={true}
                            onSelect={onSelect}
                        />

                    </div>

                )}

            {/* ======================================================
                Empty
            ====================================================== */}

            {!isLoading &&
                !error &&
                suggestions.length === 0 && (

                    <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-[0_25px_60px_rgba(0,0,0,.45)] backdrop-blur-3xl">

                        <div className="flex flex-col items-center gap-4">

                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10">

                                <MapPin
                                    size={26}
                                    className="text-cyan-300"
                                />

                            </div>

                            <div className="text-center">

                                <h3 className="font-semibold text-white">

                                    No Locations Found

                                </h3>

                                <p className="mt-2 text-sm text-slate-400">

                                    Try searching for another city,
                                    locality or landmark.

                                </p>

                            </div>

                        </div>

                    </div>

                )}

        </div>

    );

}