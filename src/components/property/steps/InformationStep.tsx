"use client";

import {
    BuildingAmenities,
    ParkingSection,
    SecuritySection,
    UtilitiesSection,
} from "./informationSteps";
import useScrollToTop from "@/hooks/google/useScroolToTop";

export default function InformationStep() {
    useScrollToTop();
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