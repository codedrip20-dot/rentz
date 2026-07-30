"use client";

import AmenitiesHeader from "./AmenitiesHeader";
import AmenityGrid from "./AmenityGrid";
import FurnishingSelector from "./FurnishinigSelector";

const AmenitiesStep = () => {
    return (
        <section className="relative isolate">
            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />

                <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-indigo-100/25 blur-3xl" />

                <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-100/25 blur-3xl" />

                <div className="absolute bottom-24 right-24 h-56 w-56 rounded-full bg-cyan-100/20 blur-3xl" />
            </div>

            <div className="mx-auto flex max-w-7xl flex-col gap-8">
                {/* Header */}
                <AmenitiesHeader />

                {/* Content */}
                <div className="space-y-8">
                    {/* Furnishing */}
                    <div className="relative">
                        <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-50/40 via-transparent to-indigo-50/30 blur-2xl" />

                        <FurnishingSelector />
                    </div>

                    {/* Amenities */}
                    <div className="relative">
                        <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-slate-100/30 via-transparent to-blue-50/30 blur-2xl" />

                        <AmenityGrid />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AmenitiesStep;