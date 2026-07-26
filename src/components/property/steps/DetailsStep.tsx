"use client";

import {
    AreaSection,
    FacingSelector,
    FloorSection,
    FurnishingSelector,
    PropertyDescription,
    PropertyTitle,
} from "./detailsSteps";
import useScrollToTop from "@/hooks/google/useScroolToTop";

export default function DetailsStep() {
   useScrollToTop();

    return (

        <section
            className="
                mx-auto
                max-w-5xl
                space-y-8
            "
        >

            <PropertyTitle />

            <PropertyDescription />

            <FurnishingSelector />

            <AreaSection />

            <FloorSection />

            <FacingSelector />

        </section>

    );

}