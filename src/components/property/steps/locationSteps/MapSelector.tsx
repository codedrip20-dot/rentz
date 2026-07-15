"use client";

import { MapPin } from "lucide-react";

interface MapSelectorProps {
    latitude: number;
    longitude: number;
}

export default function MapSelector({
    latitude,
    longitude,
}: MapSelectorProps) {
    return (
        <section className="space-y-6">

            <div>
                <h2 className="text-xl font-semibold text-slate-900">
                    Property Location on Map
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Verify the propertys location before publishing.
                    Interactive Google Maps will be integrated here.
                </p>
            </div>

            <div
                className="
                    flex
                    h-[420px]
                    w-full
                    flex-col
                    items-center
                    justify-center
                    rounded-2xl
                    border-2
                    border-dashed
                    border-slate-300
                    bg-slate-100
                    text-center
                    transition-colors
                    hover:border-blue-500
                "
            >

                <div
                    className="
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-100
                    "
                >
                    <MapPin
                        size={38}
                        className="text-blue-600"
                    />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                    Interactive Google Map
                </h3>

                <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-500">
                    Google Maps will appear here after integration.
                    Owners will be able to drag the pin or search
                    for a different location.
                </p>

                <div
                    className="
                        mt-8
                        w-full
                        max-w-sm
                        rounded-xl
                        bg-white
                        p-4
                        shadow-sm
                    "
                >

                    <div className="flex justify-between text-sm">
                        <span className="font-medium text-slate-600">
                            Latitude
                        </span>

                        <span className="font-mono text-slate-900">
                            {latitude.toFixed(6)}
                        </span>
                    </div>

                    <div className="mt-3 flex justify-between text-sm">
                        <span className="font-medium text-slate-600">
                            Longitude
                        </span>

                        <span className="font-mono text-slate-900">
                            {longitude.toFixed(6)}
                        </span>
                    </div>

                </div>

            </div>

        </section>
    );
}