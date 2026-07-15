"use client";

import { MapPin } from "lucide-react";

import type { PlaceSuggestion } from "@/types/google";

interface AddressSuggestionsProps {
    suggestions: PlaceSuggestion[];
    visible: boolean;
    onSelect: (
        suggestion: PlaceSuggestion
    ) => void | Promise<void>;
}

export default function AddressSuggestions({
    suggestions,
    visible,
    onSelect,
}: AddressSuggestionsProps) {
    if (!visible || suggestions.length === 0) {
        return null;
    }

    return (
        <ul
            role="listbox"
            className="
                absolute
                top-full
                left-0
                right-0
                z-50
                mt-2
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-white
                shadow-xl
                divide-y
                divide-slate-100
            "
        >
            {suggestions.map((suggestion) => (
                <li
                    key={suggestion.placeId}
                    role="option"
                    tabIndex={0}
                    className="
                        flex
                        cursor-pointer
                        items-start
                        gap-3
                        px-4
                        py-3
                        transition-colors
                        duration-150
                        hover:bg-blue-50
                        focus:bg-blue-50
                        focus:outline-none
                    "
                    onClick={() =>
                        void onSelect(suggestion)
                    }
                    onKeyDown={(event) => {
                        if (
                            event.key === "Enter" ||
                            event.key === " "
                        ) {
                            event.preventDefault();
                            void onSelect(suggestion);
                        }
                    }}
                >
                    <MapPin
                        size={18}
                        className="
                            mt-1
                            shrink-0
                            text-blue-600
                        "
                    />

                    <div className="flex-1">
                        <p
                            className="
                                text-sm
                                font-medium
                                text-slate-900
                            "
                        >
                            {suggestion.description}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
}