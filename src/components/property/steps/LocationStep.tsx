"use client";

import AddressForm from "./locationSteps/AddressForm";
import MapSelector from "./locationSteps/MapSelector";

import { usePropertyWizard } from "@/context/PropertyWizardContext";
import useScrollToTop from "@/hooks/google/useScroolToTop";

export default function LocationStep() {
    useScrollToTop();

    const { propertyData } = usePropertyWizard();

    return (
        <div className="space-y-8">
            {/* Step Header */}
            <section className="space-y-2">
                <h2 className="text-2xl font-semibold text-slate-900">
                    Property Location
                </h2>

                <p className="text-sm leading-6 text-slate-500">
                    Search for your property using Google Places,
                    use your current location, or fine-tune the
                    location directly on the map.
                </p>
            </section>

            {/* 
                AddressForm handles:
                1. Google Places address search
                2. Current location
                3. Address/location updates
            */}
            <AddressForm />

            {/* 
                MapSelector handles:
                4. Viewing the selected location
                5. Dragging the marker
                6. Reverse geocoding after marker movement
            */}
            <MapSelector
                latitude={
                    propertyData.location.coordinates.latitude
                }
                longitude={
                    propertyData.location.coordinates.longitude
                }
            />
        </div>
    );
}