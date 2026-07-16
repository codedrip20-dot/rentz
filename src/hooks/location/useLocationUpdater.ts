"use client";

import { useCallback } from "react";

import { usePropertyWizard } from "@/context/PropertyWizardContext";

import { reverseGeocode } from "@/lib/location/reverseGeocode";

import { parsePlace } from "@/lib/google/placeParser";
import mapParsedPlaceToLocation from "@/lib/google/placeMapper";

import type { ParsedPlace } from "@/types/google";

export default function useLocationUpdater() {
    const { updateProperty } = usePropertyWizard();

    /**
     * Updates the Property Wizard using
     * an already parsed Google Place.
     */
    const updateLocation = useCallback(
        (place: ParsedPlace) => {
            updateProperty({
                location: mapParsedPlaceToLocation(place),
            });
        },
        [updateProperty]
    );

    /**
     * Converts coordinates into a
     * Google Place and updates
     * the Property Wizard.
     */
    const updateLocationFromCoordinates =
        useCallback(
            async (
                latitude: number,
                longitude: number
            ) => {
                const result =
                    await reverseGeocode(
                        latitude,
                        longitude
                    );

                const parsedPlace =
                    parsePlace(result);

                updateLocation(parsedPlace);

                return parsedPlace;
            },
            [updateLocation]
        );

    return {
        updateLocation,
        updateLocationFromCoordinates,
    };
}