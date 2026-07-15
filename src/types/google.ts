export interface ParsedPlace {
    placeId: string;

    name: string;

    formattedAddress: string;

    streetAddress: string;

    landmark: string;

    city: string;

    district: string;

    state: string;

    country: string;

    postalCode: string;

    latitude: number;

    longitude: number;
}

export interface PlaceSuggestion {
    placeId: string;

    description: string;
}

export interface UsePlacesAutocompleteReturn {

    error: Error | null ;
    query: string;

    setQuery: (value: string) => void;

    suggestions: PlaceSuggestion[];

    loading: boolean;

    selectedPlace: ParsedPlace | null;

    selectSuggestion: (
        suggestion: PlaceSuggestion
    ) => Promise<void>;

    clearSuggestions: () => void;
}