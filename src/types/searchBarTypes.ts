import { PlaceSuggestion } from "./google";

export interface SearchInputProps {
    value: string;
    loading?: boolean;
    placeholder?: string;
    onChange: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

export interface SearchDropdownProps {
    isOpen: boolean;
    isLoading: boolean;
    error?: string | null;

    suggestions: PlaceSuggestion[];

    onSelect: (suggestion: PlaceSuggestion) => void;
}

export interface SearchBarProps {
    suggestions: PlaceSuggestion[];
    isLoading: boolean;
    error?: string | null;

    placeholder?: string;

    onSearch: (query: string) => void;
    onSelect: (suggestion: PlaceSuggestion) => void;
}

export interface FilterSidebarProps {
    locationSuggestions: PlaceSuggestion[];
    locationLoading: boolean;
    locationError?: string | null;

    minBudget: number;
    maxBudget: number;

    onLocationSearch: (query: string) => void;
    onLocationSelect: (suggestion: PlaceSuggestion) => void;

    onMinBudgetChange: (value: number) => void;
    onMaxBudgetChange: (value: number) => void;

    onClearFilters: () => void;
}