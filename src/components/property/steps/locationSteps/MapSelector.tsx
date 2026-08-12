"use client";

import { useEffect, useRef } from "react";

import { loadGoogleMaps } from "@/lib/google/maps";

import useLocationUpdater from "@/hooks/location/useLocationUpdater";

interface MapSelectorProps {
    latitude: number;
    longitude: number;
}

export default function MapSelector({
    latitude,
    longitude,
}: MapSelectorProps) {
    const {
        updateLocationFromCoordinates,
    } = useLocationUpdater();

    /**
     * DOM element that hosts Google Maps.
     */
    const mapRef =
        useRef<HTMLDivElement | null>(null);

    /**
     * Google Map instance.
     */
    const mapInstance =
        useRef<google.maps.Map | null>(null);

    /**
     * Advanced Marker instance.
     */
    const markerInstance =
        useRef<
            google.maps.marker.AdvancedMarkerElement | null
        >(null);

    /**
     * Prevents feedback loops while
     * dragging the marker.
     */
    const dragging =
        useRef(false);

    /**
     * Initializes Google Maps only once.
     */
    useEffect(() => {
        let cancelled = false;

        async function initializeMap() {
            if (!mapRef.current) return;

            if (mapInstance.current) return;

            try {
                await loadGoogleMaps();

                if (
                    cancelled ||
                    !mapRef.current
                ) {
                    return;
                }

                const {
                    AdvancedMarkerElement,
                    PinElement,
                } =
                    (await google.maps.importLibrary(
                        "marker"
                    )) as google.maps.MarkerLibrary;

                const center = {
                    lat: latitude,
                    lng: longitude,
                };

                mapInstance.current =
                    new google.maps.Map(
                        mapRef.current,
                        {
                            center,
                            zoom: 17,
                            mapId:
                                process.env
                                    .NEXT_PUBLIC_GOOGLE_MAP_ID,

                            mapTypeControl: false,
                            streetViewControl: false,
                            fullscreenControl: false,
                            rotateControl: false,
                            scaleControl: true,
                            clickableIcons: false,
                            gestureHandling: "greedy",
                        }
                    );

                const pin =
                    new PinElement({
                        glyph: "🏠",
                        scale: 1.1,
                    });

                markerInstance.current =
                    new AdvancedMarkerElement({
                        map: mapInstance.current,
                        position: center,
                        gmpDraggable: true,
                        content: pin.element,
                    });

                /**
                 * Register drag events immediately
                 * after creating the marker.
                 */
                markerInstance.current.addListener(
                    "dragstart",
                    () => {
                        dragging.current = true;
                    }
                );

                markerInstance.current.addListener(
                    "dragend",
                    async () => {
                        try {
                            console.log(
                                "Drag ended"
                            );

                            const position =
                                markerInstance
                                    .current
                                    ?.position;

                            if (!position) {
                                return;
                            }

                            let latitude: number;
                            let longitude: number;

                            if (
                                position instanceof
                                google.maps.LatLng
                            ) {
                                latitude =
                                    position.lat();

                                longitude =
                                    position.lng();
                            } else {
                                latitude =
                                    position.lat;

                                longitude =
                                    position.lng;
                            }

                            await updateLocationFromCoordinates(
                                latitude,
                                longitude
                            );
                        } catch (error) {
                            console.error(
                                "Failed to update dragged location.",
                                error
                            );
                        } finally {
                            dragging.current =
                                false;
                        }
                    }
                );
            } catch (error) {
                console.error(
                    "Failed to initialize Google Maps:",
                    error
                );
            }
        }

        initializeMap();

        return () => {
            cancelled = true;
        };
    }, []);

    /**
     * Synchronizes the map whenever the
     * property coordinates change.
     */
    useEffect(() => {
        if (
            !mapInstance.current ||
            !markerInstance.current
        ) {
            return;
        }

        /**
         * Ignore updates while the
         * user is actively dragging
         * the marker.
         */
        if (dragging.current) {
            return;
        }

        const position = {
            lat: latitude,
            lng: longitude,
        };

        mapInstance.current.panTo(
            position
        );

        markerInstance.current.position =
            position;
    }, [latitude, longitude]);

    return (
        <section className="w-full space-y-5 sm:space-y-6">
            <div>
                <h2
                    className="
                        text-lg
                        font-semibold
                        text-slate-900

                        sm:text-xl
                    "
                >
                    Property Location on Map
                </h2>

                <p
                    className="
                        mt-1
                        max-w-3xl
                        text-sm
                        leading-6
                        text-slate-500
                    "
                >
                    Verify the propertys
                    location before
                    publishing. Drag the
                    marker to fine-tune the
                    exact property location
                    if necessary.
                </p>
            </div>

            <div
                className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                "
            >
                <div
                    ref={mapRef}
                    className="
                        h-[300px]
                        w-full

                        sm:h-[360px]
                        md:h-[420px]
                    "
                />

                <div
                    className="
                        border-t
                        border-slate-200
                        bg-slate-50
                        p-4
                        sm:p-5
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            gap-1

                            min-[400px]:flex-row
                            min-[400px]:items-center
                            min-[400px]:justify-between
                        "
                    >
                        <span
                            className="
                                text-sm
                                font-medium
                                text-slate-600
                            "
                        >
                            Latitude
                        </span>

                        <span
                            className="
                                max-w-full
                                break-all
                                font-mono
                                text-xs
                                text-slate-900

                                sm:text-sm
                            "
                        >
                            {latitude.toFixed(6)}
                        </span>
                    </div>

                    <div
                        className="
                            mt-4
                            flex
                            flex-col
                            gap-1

                            min-[400px]:flex-row
                            min-[400px]:items-center
                            min-[400px]:justify-between
                        "
                    >
                        <span
                            className="
                                text-sm
                                font-medium
                                text-slate-600
                            "
                        >
                            Longitude
                        </span>

                        <span
                            className="
                                max-w-full
                                break-all
                                font-mono
                                text-xs
                                text-slate-900

                                sm:text-sm
                            "
                        >
                            {longitude.toFixed(6)}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}