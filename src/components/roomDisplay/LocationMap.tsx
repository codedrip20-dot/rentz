"use client";

import { motion } from "framer-motion";

import {
    ExternalLink,
    MapPin,
    Navigation,
} from "lucide-react";

import { RoomDisplayData } from "@/types/roomDisplayTypes";

interface LocationMapProps {
    data: RoomDisplayData;
}

export default function LocationMap({
    data,
}: LocationMapProps) {
    const { property } = data;

    const {
        address,
        coordinates,
    } = property.location;

    const googleMapsUrl = `https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}`;

    return (
        <section className="mt-8">
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 0.45,
                }}
                className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    shadow-2xl
                    backdrop-blur-xl
                "
            >
                {/* ==========================================
                    Header
                ========================================== */}

                <div
                    className="
                        border-b
                        border-white/10
                        p-6

                        sm:p-8
                    "
                >
                    <div
                        className="
                            flex
                            items-center
                            gap-3
                        "
                    >
                        <div
                            className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-blue-500/20
                                bg-blue-500/10
                            "
                        >
                            <MapPin
                                size={24}
                                className="text-blue-400"
                            />
                        </div>

                        <div>
                            <h2
                                className="
                                    text-2xl
                                    font-black
                                    text-white
                                "
                            >
                                Location
                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-white/60
                                "
                            >
                                View the property location
                                and nearby area.
                            </p>
                        </div>
                    </div>
                </div>
                {/* ==========================================
                    Map & Address
                ========================================== */}

                <div
                    className="
                        grid
                        gap-6
                        p-6

                        lg:grid-cols-[1.4fr_0.8fr]

                        sm:p-8
                    "
                />
                    {/* Map */}

                    <div
                        className="
                            overflow-hidden
                            rounded-3xl
                            border
                            border-white/10
                            bg-slate-900
                        "
                    >
                        <iframe
                            title="Property Location"
                            src={`https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}&z=16&output=embed`}
                            className="
                                h-[420px]
                                w-full
                                border-0
                            "
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Address Card */}

                    <div
                        className="
                            rounded-3xl
                            border
                            border-white/10
                            bg-white/[0.04]
                            p-6
                        "
                    >
                        <div
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <Navigation
                                size={22}
                                className="text-blue-400"
                            />

                            <h3
                                className="
                                    text-xl
                                    font-bold
                                    text-white
                                "
                            >
                                Address
                            </h3>
                        </div>

                        <div
                            className="
                                mt-6
                                space-y-5
                            "
                        >
                            <div>
                                <p className="text-sm text-white/50">
                                    Street
                                </p>

                                <p className="mt-1 text-white">
                                    {address.street}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-white/50">
                                    Area
                                </p>

                                <p className="mt-1 text-white">
                                    {address.area}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-white/50">
                                    City
                                </p>

                                <p className="mt-1 text-white">
                                    {address.city}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-white/50">
                                    State
                                </p>

                                <p className="mt-1 text-white">
                                    {address.state}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-white/50">
                                    Pincode
                                </p>

                                <p className="mt-1 text-white">
                                    {address.pincode}
                                </p>
                            </div>

                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    mt-6
                                    inline-flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-2xl
                                    bg-gradient-to-r
                                    from-blue-600
                                    to-cyan-500
                                    px-5
                                    py-4
                                    font-semibold
                                    text-white
                                    transition-all
                                    duration-300

                                    hover:scale-[1.02]
                                    hover:shadow-xl
                                    hover:shadow-blue-500/30
                                "
                            >
                                <ExternalLink
                                    size={18}
                                />

                                Open in Google Maps
                            </a>
                        </div>
                    </div>
                    {/* ==========================================
                    Location Highlights
                ========================================== */}

                <div
                    className="
                        border-t
                        border-white/10
                        bg-gradient-to-r
                        from-blue-500/5
                        via-transparent
                        to-cyan-500/5
                        p-6

                        sm:p-8
                    "
                >
                    <h3
                        className="
                            text-xl
                            font-bold
                            text-white
                        "
                    >
                        Location Highlights
                    </h3>

                    <div
                        className="
                            mt-6
                            grid
                            gap-4

                            sm:grid-cols-3
                        "
                    >
                        <div
                            className="
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                p-5
                            "
                        >
                            <p className="text-sm text-white/50">
                                Nearby Landmark
                            </p>

                            <p
                                className="
                                    mt-2
                                    font-semibold
                                    text-white
                                "
                            >
                                {property.location
                                    .nearbyLandmark ||
                                    "Not specified"}
                            </p>
                        </div>

                        <div
                            className="
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                p-5
                            "
                        >
                            <p className="text-sm text-white/50">
                                Latitude
                            </p>

                            <p
                                className="
                                    mt-2
                                    font-semibold
                                    text-white
                                "
                            >
                                {coordinates.latitude.toFixed(
                                    6
                                )}
                            </p>
                        </div>

                        <div
                            className="
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                p-5
                            "
                        >
                            <p className="text-sm text-white/50">
                                Longitude
                            </p>

                            <p
                                className="
                                    mt-2
                                    font-semibold
                                    text-white
                                "
                            >
                                {coordinates.longitude.toFixed(
                                    6
                                )}
                            </p>
                        </div>
                    </div>

                    {property.location
                        .directions && (
                        <div
                            className="
                                mt-6
                                rounded-2xl
                                border
                                border-blue-500/20
                                bg-blue-500/10
                                p-5
                            "
                        >
                            <h4
                                className="
                                    font-semibold
                                    text-blue-300
                                "
                            >
                                Directions
                            </h4>

                            <p
                                className="
                                    mt-2
                                    leading-7
                                    text-white/80
                                "
                            >
                                {
                                    property.location
                                        .directions
                                }
                            </p>
                        </div>
                    )}
                </div>
            </motion.div>
        </section>
    );
}