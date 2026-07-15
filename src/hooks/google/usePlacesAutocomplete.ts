"use client";

import { useState, useEffect } from "react";

import useDebounce from "./useDebounce";

import { getPredictions } from "@/lib/google/getPredictions";
import { getPlaceDetails } from "@/lib/google/getPlaceDetails";

import type {
    ParsedPlace,
    PlaceSuggestion,
    UsePlacesAutocompleteReturn,
} from "@/types/google";

const MINIMUM_QUERY_LENGTH = 3;

const DEBOUNCE_DELAY = 300;

export function usePlacesAutocomplete(): UsePlacesAutocompleteReturn {

    const [query, setQuery] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const [suggestions, setSuggestions] =
        useState<PlaceSuggestion[]>([]);

    const [selectedPlace, setSelectedPlace] =
        useState<ParsedPlace | null>(null);

    const [error, setError] =
        useState<Error | null>(null);

    const debouncedQuery =
        useDebounce(
            query,
            DEBOUNCE_DELAY
        );
        useEffect(() => {

        let cancelled = false;

        async function searchPlaces() {

            const searchQuery =
                debouncedQuery.trim();

            if (
                searchQuery.length <
                MINIMUM_QUERY_LENGTH
            ) {

                if (!cancelled) {

                    setSuggestions([]);

                    setLoading(false);

                    setError(null);

                }

                return;

            }

            try {

                if (!cancelled) {

                    setLoading(true);

                    setError(null);

                }

                const predictions =
                    await getPredictions(
                        searchQuery
                    );
                    console.log("predictions:", predictions);

                if (cancelled) {

                    return;

                }

                setSuggestions(
                    predictions
                );
                console.log("suggestions: ", predictions);

            } catch (err) {

                if (cancelled) {

                    return;

                }

                setSuggestions([]);

                setError(

                    err instanceof Error
                        ? err
                        : new Error(
                              "Failed to fetch place predictions."
                          )

                );

            } finally {

                if (!cancelled) {

                    setLoading(false);

                }

            }

        }

        void searchPlaces();

        return () => {

            cancelled = true;

        };

    }, [debouncedQuery]);
    const selectSuggestion =
        async (
            suggestion: PlaceSuggestion
        ): Promise<void> => {

            try {

                setLoading(true);

                setError(null);

                const place =
                    await getPlaceDetails(
                        suggestion.placeId
                    );

                setSelectedPlace(
                    place
                );

                setQuery(
                    place.formattedAddress
                );

                setSuggestions([]);

            } catch (err) {

                setError(

                    err instanceof Error
                        ? err
                        : new Error(
                              "Failed to fetch place details."
                          )

                );

            } finally {

                setLoading(false);

            }

        };

    const clearSuggestions =
        (): void => {

            setSuggestions([]);

        };


    return {

        query,

        setQuery,

        suggestions,

        loading,

        selectedPlace,

        error,

        selectSuggestion,

        clearSuggestions,

    };

}

export default usePlacesAutocomplete;