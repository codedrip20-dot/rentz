"use client";

import { useState } from "react";

import SearchInput from "./SearchInput";
import SearchDropdown from "./SearchDropdown";

import { PlaceSuggestion } from "@/types/google";

interface SearchBarProps {
    suggestions: PlaceSuggestion[];
    isLoading: boolean;
    error?: string | null;

    onSearch: (query: string) => void;
    onSelect: (suggestion: PlaceSuggestion) => void;

    placeholder?: string;
}

export default function SearchBar({
    suggestions,
    isLoading,
    error,
    onSearch,
    onSelect,
    placeholder,
}: SearchBarProps) {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (value: string) => {
        setQuery(value);

        if (value.trim().length === 0) {
            setIsOpen(false);
            return;
        }

        setIsOpen(true);
        onSearch(value);
    };

    const handleSelect = (suggestion: PlaceSuggestion) => {
        setQuery(suggestion.description);
        setIsOpen(false);
        onSelect(suggestion);
    };

    const handleFocus = () => {
        if (suggestions.length > 0) {
            setIsOpen(true);
        }
    };

    const handleBlur = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 150);
    };

    return (
        <div className="relative w-full">
            <SearchInput
                value={query}
                loading={isLoading}
                placeholder={placeholder}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />

            <SearchDropdown
                isOpen={isOpen}
                isLoading={isLoading}
                error={error}
                suggestions={suggestions}
                onSelect={handleSelect}
            />
        </div>
    );
}