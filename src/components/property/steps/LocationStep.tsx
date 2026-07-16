"use client";

import { useCallback } from "react";

import AddressForm from "./locationSteps/AddressForm";
import MapSelector from "./locationSteps/MapSelector";

import { usePropertyWizard } from "@/context/PropertyWizardContext";
import { reverseGeocode } from "@/lib/location/reverseGeocode";

export default function LocationStep() {
    const {
        propertyData,
        setPropertyData,
    } = usePropertyWizard();

    /**
     * Called whenever the user changes the
     * property location directly from the map.
     */
    const handleLocationChange = useCallback(
        async (
            latitude: number,
            longitude: number
        ) => {
            try {
                const location =
                    await reverseGeocode(
                        latitude,
                        longitude
                    );

                setPropertyData((previous) => ({
                    ...previous,

                    location: {
                        ...previous.location,
                        ...location,

                        coordinates: {
                            latitude,
                            longitude,
                        },
                    },
                }));
            } catch (error) {
                console.error(
                    "Reverse geocoding failed:",
                    error
                );

                // Still update coordinates even if
                // reverse geocoding fails.
                setPropertyData((previous) => ({
                    ...previous,

                    location: {
                        ...previous.location,

                        coordinates: {
                            latitude,
                            longitude,
                        },
                    },
                }));
            }
        },
        [setPropertyData]
    );

    return (
        <div className="space-y-8">
            <section className="space-y-2">
                <h2 className="text-2xl font-semibold text-slate-900">
                    Property Location
                </h2>

                <p className="text-sm text-slate-500">
                    Search your property's address using
                    Google Places. You can review and edit
                    the address details before continuing.
                </p>
            </section>

            <AddressForm />

            <MapSelector
                latitude={
                    propertyData.location.coordinates
                        .latitude
                }
                longitude={
                    propertyData.location.coordinates
                        .longitude
                }
                onLocationChange={
                    handleLocationChange
                }
            />
        </div>
    );
}