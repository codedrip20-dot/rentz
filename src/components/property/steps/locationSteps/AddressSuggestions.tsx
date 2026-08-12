"use client";

import { MapPin } from "lucide-react";

import type { PlaceSuggestion } from "@/types/google";

interface AddressSuggestionsProps {
    suggestions: PlaceSuggestion[];
    onSelect: (
        suggestion: PlaceSuggestion
    ) => Promise<void>;
    visible: boolean;
}

export default function AddressSuggestions({
    suggestions,
    onSelect,
    visible,
}: AddressSuggestionsProps) {
    console.log("AddressSuggestions");
    console.log("visible:", visible);
    console.log("suggestions:", suggestions);

    if (!visible) {
        return null;
    }

    if (suggestions.length === 0) {
        return (
            <div
                className="
                    px-4
                    py-5
                    text-center
                    text-sm
                    leading-5
                    text-slate-500
                "
            >
                No locations found.
            </div>
        );
    }

    return (
        <ul
            className="
                max-h-72
                overflow-x-hidden
                overflow-y-auto
                overscroll-contain
                divide-y
                divide-slate-100

                sm:max-h-80
            "
        >
            {suggestions.map((suggestion) => (
                <li key={suggestion.placeId}>
                    <button
                        type="button"
                        onClick={() =>
                            void onSelect(suggestion)
                        }
                        className="
                            flex
                            min-h-14
                            w-full
                            items-start
                            gap-3
                            px-3
                            py-3
                            text-left
                            transition-colors

                            hover:bg-slate-50
                            focus:bg-blue-50
                            focus:outline-none

                            sm:px-4
                        "
                    >
                        <MapPin
                            className="
                                mt-0.5
                                h-5
                                w-5
                                shrink-0
                                text-blue-600
                            "
                        />

                        <div
                            className="
                                min-w-0
                                flex-1
                            "
                        >
                            <span
                                className="
                                    block
                                    break-words
                                    text-sm
                                    font-medium
                                    leading-5
                                    text-slate-900
                                "
                            >
                                {suggestion.description}
                            </span>
                        </div>
                    </button>
                </li>
            ))}
        </ul>
    );
}