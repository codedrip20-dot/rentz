"use client";

import { motion } from "framer-motion";

import {
    AlignLeft,
    Building2,
    Home,
    Sparkles,
} from "lucide-react";

import { RoomDisplayData } from "@/types/roomDisplayTypes";

interface DescriptionProps {
    data: RoomDisplayData;
}

export default function Description({
    data,
}: DescriptionProps) {
    const {
        room,
        property,
    } = data;

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
                                bg-blue-500/10
                                border
                                border-blue-500/20
                            "
                        >
                            <AlignLeft
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
                                Description
                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-white/60
                                "
                            >
                                Learn more about this room
                                and its property.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="
                        grid
                        gap-6
                        p-6

                        sm:p-8
                    "
                >
                    {/* ==========================================
                        Room Description
                    ========================================== */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/[0.04]
                            p-6
                        "
                    >
                        <div
                            className="
                                mb-4
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <Home
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
                                About this Room
                            </h3>
                        </div>

                        <p
                            className="
                                whitespace-pre-line
                                leading-8
                                text-white/75
                            "
                        >
                            {property.details.description}
                        </p>
                    </div>

                    {/* ==========================================
                        Property Details
                    ========================================== */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/[0.04]
                            p-6
                        "
                    >
                        <div
                            className="
                                mb-5
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <Building2
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
                                Property Details
                            </h3>
                        </div>

                        <div
                            className="
                                grid
                                gap-4

                                sm:grid-cols-2
                            "
                        >
                            <div>
                                <p className="text-sm text-white/50">
                                    Property Type
                                </p>

                                <p className="mt-1 font-semibold text-white">
                                    {property.propertyType}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-white/50">
                                    Furnishing
                                </p>

                                <p className="mt-1 font-semibold text-white">
                                    {property.details.furnishing}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-white/50">
                                    Built-up Area
                                </p>

                                <p className="mt-1 font-semibold text-white">
                                    {property.details.builtUpArea} sq ft
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-white/50">
                                    Carpet Area
                                </p>

                                <p className="mt-1 font-semibold text-white">
                                    {property.details.carpetArea} sq ft
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-white/50">
                                    Floor
                                </p>

                                <p className="mt-1 font-semibold text-white">
                                    {property.details.floorNumber} / {property.details.totalFloors}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-white/50">
                                    Facing
                                </p>

                                <p className="mt-1 font-semibold text-white">
                                    {property.details.facing}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ==========================================
                        Why You'll Love It
                    ========================================== */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-blue-500/20
                            bg-gradient-to-br
                            from-blue-500/10
                            via-slate-900/40
                            to-cyan-500/10
                            p-6
                        "
                    >
                        <div
                            className="
                                mb-5
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <Sparkles
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
                                Why Youll Love This Place
                            </h3>
                        </div>

                        <div
                            className="
                                grid
                                gap-4

                                sm:grid-cols-2
                            "
                        >
                            <div
                                className="
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-4
                                "
                            >
                                <h4 className="font-semibold text-white">
                                    Comfortable Living
                                </h4>

                                <p className="mt-2 text-sm leading-7 text-white/70">
                                    A well-maintained room with modern
                                    furnishing, comfortable living
                                    space and everyday essentials.
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-4
                                "
                            >
                                <h4 className="font-semibold text-white">
                                    Great Location
                                </h4>

                                <p className="mt-2 text-sm leading-7 text-white/70">
                                    Located in{" "}
                                    {property.location.address.city},
                                    providing convenient access to
                                    nearby shops, transport and daily
                                    necessities.
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-4
                                "
                            >
                                <h4 className="font-semibold text-white">
                                    Flexible Move In
                                </h4>

                                <p className="mt-2 text-sm leading-7 text-white/70">
                                    Move in{" "}
                                    {room.availability.availableNow
                                        ? "immediately"
                                        : "from the available date"}
                                    , making planning much easier.
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-4
                                "
                            >
                                <h4 className="font-semibold text-white">
                                    Premium Rentz Listing
                                </h4>

                                <p className="mt-2 text-sm leading-7 text-white/70">
                                    Verified property information,
                                    transparent pricing and a secure
                                    booking experience through Rentz.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}