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
            <div className="p-4 text-center text-sm text-slate-500">
                No locations found.
            </div>
        );
    }

    return (
        <ul
            className="
                max-h-80
                overflow-y-auto
                divide-y
                divide-slate-100
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
                            w-full
                            items-start
                            gap-3
                            px-4
                            py-3
                            text-left
                            transition-colors
                            hover:bg-slate-50
                            focus:bg-blue-50
                            focus:outline-none
                        "
                    >
                        <MapPin
                            className="
                                mt-1
                                h-5
                                w-5
                                shrink-0
                                text-blue-600
                            "
                        />

                        <div className="flex flex-col">
                            <span
                                className="
                                    text-sm
                                    font-medium
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