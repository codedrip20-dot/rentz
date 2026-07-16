"use client";

import { useCallback, useEffect, useState } from "react";

import AddressInput from "./AddressInput";
import AddressLoader from "./AddressLoader";
import AddressSuggestions from "./AddressSuggestions";
import CurrentLocationButton from "./CurrentLocationButton";
import Dropdown from "./dropdown";

import usePlacesAutocomplete from "@/hooks/google/usePlacesAutocomplete";
import {getCurrentLocation} from "@/lib/location/getCurrentLocation";
import useLocationUpdater from "@/hooks/location/useLocationUpdater";
export default function AddressSearch() {
    const {
        query,
        setQuery,
        suggestions,
        loading,
        selectedPlace,
        selectSuggestion,
        clearSuggestions,
    } = usePlacesAutocomplete();

  const { updateLocation, updateLocationFromCoordinates } = useLocationUpdater();

    const [locating, setLocating] =
        useState(false);

    /**
     * Updates the Property Wizard
     * with a parsed Google location.
     */
   

    /**
     * Synchronizes the selected
     * Google Place with the
     * Property Wizard.
     */
    useEffect(() => {
        if (!selectedPlace) {
            return;
        }

        updateLocation(selectedPlace);
    }, [
        selectedPlace,
        updateLocation,
    ]);

    /**
     * Uses the owner's current
     * GPS location and converts
     * it into a Google Place.
     */
    const handleCurrentLocation =
        async () => {
            try {
                setLocating(true);

                const {
                    latitude,
                    longitude,
                } =
                    await getCurrentLocation();

               const parsedPlace = await updateLocationFromCoordinates(
                    latitude,
                    longitude
                );
                setQuery(parsedPlace.formattedAddress);
                clearSuggestions();
            } catch (error) {
                console.error(
                    "Failed to retrieve current location.",
                    error
                );
            } finally {
                setLocating(false);
            }
        };

    const showLoader =
        loading &&
        query.trim().length >= 3;

    const showSuggestions =
        !loading &&
        suggestions.length > 0;

    return (
        <div className="space-y-5">
            {/* Google Address Search */}

            <div className="space-y-2">
                <AddressInput
                    value={query}
                    onChange={setQuery}
                    loading={loading}
                />

                <p
                    className="
                        text-xs
                        text-slate-500
                    "
                >
                    Search your property
                    using Google Places.
                    Some address details
                    may still need to be
                    reviewed or completed
                    manually before
                    continuing.
                </p>
            </div>

            {/* Search Suggestions */}

            <div className="relative">
                <Dropdown
                    open={
                        showLoader ||
                        showSuggestions
                    }
                >
                    {showLoader ? (
                        <AddressLoader />
                    ) : (
                        <AddressSuggestions
                            suggestions={
                                suggestions
                            }
                            visible={
                                showSuggestions
                            }
                            onSelect={
                                selectSuggestion
                            }
                        />
                    )}
                </Dropdown>
            </div>

            {/* Divider */}

            <div
                className="
                    flex
                    items-center
                    gap-4
                "
            >
                <div
                    className="
                        h-px
                        flex-1
                        bg-slate-200
                    "
                />

                <span
                    className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        text-slate-400
                    "
                >
                    OR
                </span>

                <div
                    className="
                        h-px
                        flex-1
                        bg-slate-200
                    "
                />
            </div>

            {/* Current Location */}

            <div className="space-y-2">
                <CurrentLocationButton
                    loading={locating}
                    onClick={
                        handleCurrentLocation
                    }
                />

                <p
                    className="
                        text-xs
                        text-slate-500
                    "
                >
                    Use your devices
                    current location.
                    This option is
                    recommended only
                    when you are
                    physically present
                    at the property you
                    are registering.
                </p>
            </div>
        </div>
    );
}