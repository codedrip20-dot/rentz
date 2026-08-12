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

        <div className="absolute left-0 right-0 top-full z-50 mt-2 sm:mt-3">

            {/* ======================================================
                Loading
            ====================================================== */}

            {isLoading && (

                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_25px_60px_rgba(0,0,0,.45)] backdrop-blur-3xl sm:rounded-3xl sm:p-8">

                    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4">

                        <Loader2
                            size={27}
                            className="animate-spin text-blue-400 sm:h-[30px] sm:w-[30px]"
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

                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-5 shadow-[0_25px_60px_rgba(0,0,0,.45)] backdrop-blur-3xl sm:rounded-3xl sm:p-6">

                    <div className="flex items-start gap-3">

                        <AlertCircle
                            size={20}
                            className="mt-0.5 shrink-0 text-red-400"
                        />

                        <p className="min-w-0 text-sm font-medium leading-6 text-red-200">

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

                    <div className="max-h-[60vh] overflow-x-hidden overflow-y-auto rounded-2xl border border-white/10 bg-slate-900/80 shadow-[0_25px_60px_rgba(0,0,0,.45)] backdrop-blur-3xl sm:max-h-[500px] sm:rounded-3xl">

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

                    <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_25px_60px_rgba(0,0,0,.45)] backdrop-blur-3xl sm:rounded-3xl sm:p-8">

                        <div className="flex flex-col items-center gap-3 sm:gap-4">

                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 sm:h-14 sm:w-14">

                                <MapPin
                                    size={24}
                                    className="text-cyan-300 sm:h-[26px] sm:w-[26px]"
                                />

                            </div>

                            <div className="text-center">

                                <h3 className="font-semibold text-white">

                                    No Locations Found

                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-400">

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