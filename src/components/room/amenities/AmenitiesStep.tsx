"use client";

import AmenitiesHeader from "./AmenitiesHeader";
import AmenityGrid from "./AmenityGrid";
import FurnishingSelector from "./FurnishinigSelector";

const AmenitiesStep = () => {
    return (
        <section className="relative isolate">

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10 overflow-hidden">

                <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-blue-100/30 blur-3xl sm:-left-32 sm:h-80 sm:w-80" />

                <div className="absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-indigo-100/25 blur-3xl sm:right-0 sm:h-96 sm:w-96" />

                <div className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-sky-100/25 blur-3xl sm:h-72 sm:w-72" />

                <div className="absolute bottom-20 right-8 h-44 w-44 rounded-full bg-cyan-100/20 blur-3xl sm:bottom-24 sm:right-24 sm:h-56 sm:w-56" />

            </div>

            <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:gap-6 md:gap-8">

                {/* Header */}
                <AmenitiesHeader />

                {/* Content */}
                <div className="space-y-5 sm:space-y-6 md:space-y-8">

                    {/* Furnishing */}
                    <div className="relative">

                        <div className="absolute inset-0 -z-10 rounded-[1.5rem] bg-gradient-to-br from-blue-50/40 via-transparent to-indigo-50/30 blur-2xl sm:rounded-[2rem]" />

                        <FurnishingSelector />

                    </div>

                    {/* Amenities */}
                    <div className="relative">

                        <div className="absolute inset-0 -z-10 rounded-[1.5rem] bg-gradient-to-br from-slate-100/30 via-transparent to-blue-50/30 blur-2xl sm:rounded-[2rem]" />

                        <AmenityGrid />

                    </div>

                </div>

            </div>
        </section>
    );
};

export default AmenitiesStep;