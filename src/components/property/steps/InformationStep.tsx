"use client";

import {
    BuildingAmenities,
    ParkingSection,
    SecuritySection,
    UtilitiesSection,
} from "./informationSteps";

export default function InformationStep() {

    return (

        <section
            className="
                mx-auto
                max-w-5xl
                space-y-8
            "
        >

            <BuildingAmenities />

            <ParkingSection />

            <UtilitiesSection />

            <SecuritySection />

        </section>

    );

}