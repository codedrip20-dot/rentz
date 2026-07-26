"use client";

import ReviewHeader from "./ReviewSteps/ReviewHeader";
import OverviewCard from "./ReviewSteps/OverviewCard";
import LocationCard from "./ReviewSteps/LocationCard";
import DetailsCard from "./ReviewSteps/DetailsCard";
import AmenitiesCard from "./ReviewSteps/AmenitiesCard";
import ImagesCard from "./ReviewSteps/ImagesCard";

import useScrollToTop from "@/hooks/google/useScroolToTop";

export default function ReviewStep() {
  useScrollToTop();
    return (
        <div className="space-y-8">

            <ReviewHeader />

            <OverviewCard />

            <LocationCard />

            <DetailsCard />

            <AmenitiesCard />

            <ImagesCard />

            {/* <ChecklistCard /> */}

        </div>
    );
}