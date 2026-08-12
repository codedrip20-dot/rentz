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
        <section className="mt-6 w-full sm:mt-8">
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
                    margin: "0px 0px -80px 0px",
                }}
                transition={{
                    duration: 0.45,
                }}
                className="
                    w-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    shadow-2xl
                    backdrop-blur-xl

                    sm:rounded-3xl
                "
            >
                {/* ==================================================
                    Header
                ================================================== */}

                <div
                    className="
                        border-b
                        border-white/10
                        px-4
                        py-5

                        sm:px-6
                        sm:py-6

                        lg:px-8
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
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-blue-500/20
                                bg-blue-500/10

                                sm:h-12
                                sm:w-12
                                sm:rounded-2xl
                            "
                        >
                            <MapPin
                                size={20}
                                className="
                                    text-blue-400

                                    sm:h-6
                                    sm:w-6
                                "
                            />
                        </div>

                        <div className="min-w-0">
                            <h2
                                className="
                                    text-xl
                                    font-black
                                    leading-tight
                                    text-white

                                    sm:text-2xl
                                "
                            >
                                Location
                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-xs
                                    leading-relaxed
                                    text-white/60

                                    sm:text-sm
                                "
                            >
                                View the property location
                                and nearby area.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ==================================================
                    Map & Address
                ================================================== */}

                <div
                    className="
                        grid
                        gap-4
                        p-4

                        sm:gap-6
                        sm:p-6

                        lg:grid-cols-[1.4fr_0.8fr]
                        lg:p-8
                    "
                >
                    {/* ==================================================
                        Map
                    ================================================== */}

                    <div
                        className="
                            min-w-0
                            overflow-hidden
                            rounded-2xl
                            border
                            border-white/10
                            bg-slate-900

                            sm:rounded-3xl
                        "
                    >
                        <iframe
                            title="Property Location"
                            src={`https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}&z=16&output=embed`}
                            className="
                                block
                                h-[260px]
                                w-full
                                border-0

                                xs:h-[300px]
                                sm:h-[380px]
                                lg:h-[420px]
                            "
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* ==================================================
                        Address Card
                    ================================================== */}

                    <div
                        className="
                            min-w-0
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/[0.04]
                            p-4

                            sm:rounded-3xl
                            sm:p-6
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
                                size={20}
                                className="
                                    shrink-0
                                    text-blue-400

                                    sm:h-[22px]
                                    sm:w-[22px]
                                "
                            />

                            <h3
                                className="
                                    text-lg
                                    font-bold
                                    text-white

                                    sm:text-xl
                                "
                            >
                                Address
                            </h3>
                        </div>

                        <div
                            className="
                                mt-5
                                space-y-4

                                sm:mt-6
                                sm:space-y-5
                            "
                        >
                            {/* Street */}

                            <div className="min-w-0">
                                <p className="text-xs text-white/50 sm:text-sm">
                                    Street
                                </p>

                                <p
                                    className="
                                        mt-1
                                        break-words
                                        text-sm
                                        leading-6
                                        text-white

                                        sm:text-base
                                    "
                                >
                                    {address.street}
                                </p>
                            </div>

                            {/* Area */}

                            <div className="min-w-0">
                                <p className="text-xs text-white/50 sm:text-sm">
                                    Area
                                </p>

                                <p
                                    className="
                                        mt-1
                                        break-words
                                        text-sm
                                        leading-6
                                        text-white

                                        sm:text-base
                                    "
                                >
                                    {address.area}
                                </p>
                            </div>

                            {/* City */}

                            <div className="min-w-0">
                                <p className="text-xs text-white/50 sm:text-sm">
                                    City
                                </p>

                                <p
                                    className="
                                        mt-1
                                        break-words
                                        text-sm
                                        leading-6
                                        text-white

                                        sm:text-base
                                    "
                                >
                                    {address.city}
                                </p>
                            </div>

                            {/* State */}

                            <div className="min-w-0">
                                <p className="text-xs text-white/50 sm:text-sm">
                                    State
                                </p>

                                <p
                                    className="
                                        mt-1
                                        break-words
                                        text-sm
                                        leading-6
                                        text-white

                                        sm:text-base
                                    "
                                >
                                    {address.state}
                                </p>
                            </div>

                            {/* Pincode */}

                            <div className="min-w-0">
                                <p className="text-xs text-white/50 sm:text-sm">
                                    Pincode
                                </p>

                                <p
                                    className="
                                        mt-1
                                        break-words
                                        text-sm
                                        leading-6
                                        text-white

                                        sm:text-base
                                    "
                                >
                                    {address.pincode}
                                </p>
                            </div>

                            {/* Google Maps */}

                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    mt-2
                                    inline-flex
                                    min-h-12
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    bg-gradient-to-r
                                    from-blue-600
                                    to-cyan-500
                                    px-4
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition-all
                                    duration-300

                                    active:scale-[0.98]

                                    sm:mt-6
                                    sm:rounded-2xl
                                    sm:px-5
                                    sm:py-4
                                    sm:text-base

                                    sm:hover:scale-[1.02]
                                    sm:hover:shadow-xl
                                    sm:hover:shadow-blue-500/30
                                "
                            >
                                <ExternalLink
                                    size={18}
                                    className="shrink-0"
                                />

                                <span>
                                    Open in Google Maps
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* ==================================================
                    Location Highlights
                ================================================== */}

                <div
                    className="
                        border-t
                        border-white/10
                        bg-gradient-to-r
                        from-blue-500/5
                        via-transparent
                        to-cyan-500/5
                        px-4
                        py-5

                        sm:px-6
                        sm:py-6

                        lg:px-8
                        lg:py-8
                    "
                >
                    <h3
                        className="
                            text-lg
                            font-bold
                            text-white

                            sm:text-xl
                        "
                    >
                        Location Highlights
                    </h3>

                    <div
                        className="
                            mt-4
                            grid
                            grid-cols-1
                            gap-3

                            sm:mt-6
                            sm:grid-cols-3
                            sm:gap-4
                        "
                    >
                        {/* Nearby Landmark */}

                        <div
                            className="
                                min-w-0
                                rounded-xl
                                border
                                border-white/10
                                bg-white/5
                                p-4

                                sm:rounded-2xl
                                sm:p-5
                            "
                        >
                            <p className="text-xs text-white/50 sm:text-sm">
                                Nearby Landmark
                            </p>

                            <p
                                className="
                                    mt-2
                                    break-words
                                    text-sm
                                    font-semibold
                                    leading-6
                                    text-white

                                    sm:text-base
                                "
                            >
                                {property.location
                                    .nearbyLandmark ||
                                    "Not specified"}
                            </p>
                        </div>

                        {/* Latitude */}

                        <div
                            className="
                                min-w-0
                                rounded-xl
                                border
                                border-white/10
                                bg-white/5
                                p-4

                                sm:rounded-2xl
                                sm:p-5
                            "
                        >
                            <p className="text-xs text-white/50 sm:text-sm">
                                Latitude
                            </p>

                            <p
                                className="
                                    mt-2
                                    break-all
                                    text-sm
                                    font-semibold
                                    leading-6
                                    text-white

                                    sm:text-base
                                "
                            >
                                {coordinates.latitude.toFixed(
                                    6
                                )}
                            </p>
                        </div>

                        {/* Longitude */}

                        <div
                            className="
                                min-w-0
                                rounded-xl
                                border
                                border-white/10
                                bg-white/5
                                p-4

                                sm:rounded-2xl
                                sm:p-5
                            "
                        >
                            <p className="text-xs text-white/50 sm:text-sm">
                                Longitude
                            </p>

                            <p
                                className="
                                    mt-2
                                    break-all
                                    text-sm
                                    font-semibold
                                    leading-6
                                    text-white

                                    sm:text-base
                                "
                            >
                                {coordinates.longitude.toFixed(
                                    6
                                )}
                            </p>
                        </div>
                    </div>

                    {/* ==================================================
                        Directions
                    ================================================== */}

                    {property.location.directions && (
                        <div
                            className="
                                mt-4
                                rounded-xl
                                border
                                border-blue-500/20
                                bg-blue-500/10
                                p-4

                                sm:mt-6
                                sm:rounded-2xl
                                sm:p-5
                            "
                        >
                            <h4
                                className="
                                    text-sm
                                    font-semibold
                                    text-blue-300

                                    sm:text-base
                                "
                            >
                                Directions
                            </h4>

                            <p
                                className="
                                    mt-2
                                    break-words
                                    text-sm
                                    leading-6
                                    text-white/80

                                    sm:text-base
                                    sm:leading-7
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