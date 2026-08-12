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
    const { room, property } = data;

    const details = property.details;

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
                            <AlignLeft
                                size={20}
                                className="text-blue-400 sm:h-6 sm:w-6"
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
                                Description
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
                                Learn more about this room
                                and its property.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ==================================================
                    Content
                ================================================== */}

                <div
                    className="
                        grid
                        gap-4
                        p-4

                        sm:gap-6
                        sm:p-6

                        lg:p-8
                    "
                >
                    {/* ==================================================
                        Room Description
                    ================================================== */}

                    <div
                        className="
                            min-w-0
                            rounded-xl
                            border
                            border-white/10
                            bg-white/[0.04]
                            p-4

                            sm:rounded-2xl
                            sm:p-6
                        "
                    >
                        <div
                            className="
                                mb-3
                                flex
                                items-center
                                gap-3

                                sm:mb-4
                            "
                        >
                            <Home
                                size={20}
                                className="shrink-0 text-blue-400 sm:h-[22px] sm:w-[22px]"
                            />

                            <h3
                                className="
                                    text-lg
                                    font-bold
                                    leading-tight
                                    text-white

                                    sm:text-xl
                                "
                            >
                                About this Room
                            </h3>
                        </div>

                        <p
                            className="
                                break-words
                                whitespace-pre-line
                                text-sm
                                leading-7
                                text-white/75

                                sm:text-base
                                sm:leading-8
                            "
                        >
                            {details.description}
                        </p>
                    </div>

                    {/* ==================================================
                        Property Details
                    ================================================== */}

                    <div
                        className="
                            min-w-0
                            rounded-xl
                            border
                            border-white/10
                            bg-white/[0.04]
                            p-4

                            sm:rounded-2xl
                            sm:p-6
                        "
                    >
                        <div
                            className="
                                mb-4
                                flex
                                items-center
                                gap-3

                                sm:mb-5
                            "
                        >
                            <Building2
                                size={20}
                                className="shrink-0 text-blue-400 sm:h-[22px] sm:w-[22px]"
                            />

                            <h3
                                className="
                                    text-lg
                                    font-bold
                                    leading-tight
                                    text-white

                                    sm:text-xl
                                "
                            >
                                Property Details
                            </h3>
                        </div>

                        <div
                            className="
                                grid
                                grid-cols-1
                                gap-x-6
                                gap-y-4

                                sm:grid-cols-2
                                sm:gap-y-5
                            "
                        >
                            {/* Property Type */}

                            <div className="min-w-0">
                                <p className="text-xs text-white/50 sm:text-sm">
                                    Property Type
                                </p>

                                <p
                                    className="
                                        mt-1
                                        break-words
                                        text-sm
                                        font-semibold
                                        leading-6
                                        text-white

                                        sm:text-base
                                    "
                                >
                                    {property.propertyType}
                                </p>
                            </div>

                            {/* Furnishing */}

                            <div className="min-w-0">
                                <p className="text-xs text-white/50 sm:text-sm">
                                    Furnishing
                                </p>

                                <p
                                    className="
                                        mt-1
                                        break-words
                                        text-sm
                                        font-semibold
                                        leading-6
                                        text-white

                                        sm:text-base
                                    "
                                >
                                    {details.furnishing}
                                </p>
                            </div>

                            {/* Built-up Area */}

                            <div className="min-w-0">
                                <p className="text-xs text-white/50 sm:text-sm">
                                    Built-up Area
                                </p>

                                <p
                                    className="
                                        mt-1
                                        break-words
                                        text-sm
                                        font-semibold
                                        leading-6
                                        text-white

                                        sm:text-base
                                    "
                                >
                                    {details.builtUpArea} sq ft
                                </p>
                            </div>

                            {/* Carpet Area */}

                            <div className="min-w-0">
                                <p className="text-xs text-white/50 sm:text-sm">
                                    Carpet Area
                                </p>

                                <p
                                    className="
                                        mt-1
                                        break-words
                                        text-sm
                                        font-semibold
                                        leading-6
                                        text-white

                                        sm:text-base
                                    "
                                >
                                    {details.carpetArea} sq ft
                                </p>
                            </div>

                            {/* Floor */}

                            <div className="min-w-0">
                                <p className="text-xs text-white/50 sm:text-sm">
                                    Floor
                                </p>

                                <p
                                    className="
                                        mt-1
                                        break-words
                                        text-sm
                                        font-semibold
                                        leading-6
                                        text-white

                                        sm:text-base
                                    "
                                >
                                    {details.floorNumber} /{" "}
                                    {details.totalFloors}
                                </p>
                            </div>

                            {/* Facing */}

                            <div className="min-w-0">
                                <p className="text-xs text-white/50 sm:text-sm">
                                    Facing
                                </p>

                                <p
                                    className="
                                        mt-1
                                        break-words
                                        text-sm
                                        font-semibold
                                        leading-6
                                        text-white

                                        sm:text-base
                                    "
                                >
                                    {details.facing}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ==================================================
                        Why You'll Love It
                    ================================================== */}

                    <div
                        className="
                            min-w-0
                            rounded-xl
                            border
                            border-blue-500/20
                            bg-gradient-to-br
                            from-blue-500/10
                            via-slate-900/40
                            to-cyan-500/10
                            p-4

                            sm:rounded-2xl
                            sm:p-6
                        "
                    >
                        <div
                            className="
                                mb-4
                                flex
                                items-center
                                gap-3

                                sm:mb-5
                            "
                        >
                            <Sparkles
                                size={20}
                                className="shrink-0 text-blue-400 sm:h-[22px] sm:w-[22px]"
                            />

                            <h3
                                className="
                                    text-lg
                                    font-bold
                                    leading-tight
                                    text-white

                                    sm:text-xl
                                "
                            >
                                Why Youll Love This Place
                            </h3>
                        </div>

                        <div
                            className="
                                grid
                                grid-cols-1
                                gap-3

                                sm:grid-cols-2
                                sm:gap-4
                            "
                        >
                            {/* Comfortable Living */}

                            <div
                                className="
                                    min-w-0
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-4
                                "
                            >
                                <h4 className="text-sm font-semibold text-white sm:text-base">
                                    Comfortable Living
                                </h4>

                                <p
                                    className="
                                        mt-2
                                        text-xs
                                        leading-6
                                        text-white/70

                                        sm:text-sm
                                        sm:leading-7
                                    "
                                >
                                    A well-maintained room with
                                    modern furnishing, comfortable
                                    living space and everyday
                                    essentials.
                                </p>
                            </div>

                            {/* Great Location */}

                            <div
                                className="
                                    min-w-0
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-4
                                "
                            >
                                <h4 className="text-sm font-semibold text-white sm:text-base">
                                    Great Location
                                </h4>

                                <p
                                    className="
                                        mt-2
                                        break-words
                                        text-xs
                                        leading-6
                                        text-white/70

                                        sm:text-sm
                                        sm:leading-7
                                    "
                                >
                                    Located in{" "}
                                    {
                                        property.location
                                            .address.city
                                    }
                                    , providing convenient
                                    access to nearby shops,
                                    transport and daily
                                    necessities.
                                </p>
                            </div>

                            {/* Flexible Move In */}

                            <div
                                className="
                                    min-w-0
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-4
                                "
                            >
                                <h4 className="text-sm font-semibold text-white sm:text-base">
                                    Flexible Move In
                                </h4>

                                <p
                                    className="
                                        mt-2
                                        text-xs
                                        leading-6
                                        text-white/70

                                        sm:text-sm
                                        sm:leading-7
                                    "
                                >
                                    Move in{" "}
                                    {room.availability
                                        .availableNow
                                        ? "immediately"
                                        : "from the available date"}
                                    , making planning much
                                    easier.
                                </p>
                            </div>

                            {/* Premium Rentz Listing */}

                            <div
                                className="
                                    min-w-0
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-4
                                "
                            >
                                <h4 className="text-sm font-semibold text-white sm:text-base">
                                    Premium Rentz Listing
                                </h4>

                                <p
                                    className="
                                        mt-2
                                        text-xs
                                        leading-6
                                        text-white/70

                                        sm:text-sm
                                        sm:leading-7
                                    "
                                >
                                    Verified property information,
                                    transparent pricing and a
                                    secure booking experience
                                    through Rentz.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}