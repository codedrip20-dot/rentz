"use client";

import AddressForm from "./locationSteps/AddressForm";
import MapSelector from "./locationSteps/MapSelector";

import { usePropertyWizard } from "@/context/PropertyWizardContext";

export default function LocationStep() {
    const { propertyData } =
        usePropertyWizard();

    return (
        <div className="space-y-8">

            <section className="space-y-2">
                <h2 className="text-2xl font-semibold text-slate-900">
                    Property Location
                </h2>

                <p className="text-sm text-slate-500">
                    Search your propertys address using Google Places.
                    You can review and edit the address details before
                    continuing.
                </p>
            </section>

            <AddressForm />

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