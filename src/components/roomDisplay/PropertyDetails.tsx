"use client";

import { motion } from "framer-motion";

import {
    Building2,
    Car,
    Compass,
    Home,
    Layers3,
    Maximize2,
    Ruler,
} from "lucide-react";

import { RoomDisplayData } from "@/types/roomDisplayTypes";

interface PropertyDetailsProps {
    data: RoomDisplayData;
}

interface DetailCard {
    title: string;
    value: string;
    icon: React.ReactNode;
}

export default function PropertyDetails({
    data,
}: PropertyDetailsProps) {
    const { property } = data;

    const { details, information } = property;

    const {
        parking,
        utilities,
        security,
    } = information;

    const detailCards: DetailCard[] = [
        {
            title: "Property Type",
            value: property.propertyType,
            icon: (
                <Building2
                    size={20}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Furnishing",
            value: details.furnishing,
            icon: (
                <Home
                    size={20}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Built-up Area",
            value: `${details.builtUpArea} sq ft`,
            icon: (
                <Maximize2
                    size={20}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Carpet Area",
            value: `${details.carpetArea} sq ft`,
            icon: (
                <Ruler
                    size={20}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Floor",
            value: `${details.floorNumber} / ${details.totalFloors}`,
            icon: (
                <Layers3
                    size={20}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Facing",
            value: details.facing,
            icon: (
                <Compass
                    size={20}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Parking",
            value: parking.available
                ? "Available"
                : "Not Available",
            icon: (
                <Car
                    size={20}
                    className="text-blue-400"
                />
            ),
        },
    ];

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
                    bg-white/5
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
                        sm:py-7

                        lg:px-8
                    "
                >
                    <h2
                        className="
                            text-xl
                            font-black
                            leading-tight
                            text-white

                            sm:text-2xl

                            lg:text-3xl
                        "
                    >
                        Property Details
                    </h2>

                    <p
                        className="
                            mt-2
                            max-w-2xl
                            text-sm
                            leading-6
                            text-white/60

                            sm:mt-3
                            sm:text-base
                            sm:leading-7
                        "
                    >
                        Essential information about the
                        property including its size,
                        furnishing and layout.
                    </p>
                </div>

                {/* ==================================================
                    Detail Cards
                ================================================== */}

                <div
                    className="
                        grid
                        grid-cols-[repeat(2,minmax(0,1fr))]
                        gap-2.5
                        p-3

                        sm:gap-4
                        sm:p-6

                        lg:gap-5
                        lg:p-8

                        xl:grid-cols-3
                    "
                >
                    {detailCards.map(
                        (item, index) => (
                            <motion.div
                                key={item.title}
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
                                    margin:
                                        "0px 0px -40px 0px",
                                }}
                                transition={{
                                    delay:
                                        index * 0.05,
                                    duration: 0.35,
                                }}
                                className="
                                    group
                                    min-w-0
                                    overflow-hidden
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-3
                                    py-3.5
                                    transition-all
                                    duration-300

                                    sm:rounded-2xl
                                    sm:p-5

                                    sm:hover:border-blue-500/30
                                    sm:hover:bg-white/10
                                "
                            >
                                <div
                                    className="
                                        flex
                                        min-w-0
                                        items-center
                                        gap-2.5

                                        sm:items-start
                                        sm:gap-4
                                    "
                                >
                                    {/* Icon */}

                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-blue-500/10

                                            sm:h-12
                                            sm:w-12
                                            sm:rounded-xl
                                        "
                                    >
                                        {item.icon}
                                    </div>

                                    {/* Content */}

                                    <div
                                        className="
                                            min-w-0
                                            flex-1
                                        "
                                    >
                                        <p
                                            className="
                                                truncate
                                                text-[11px]
                                                leading-4
                                                text-white/60

                                                sm:text-sm
                                            "
                                        >
                                            {item.title}
                                        </p>

                                        <h3
                                            className="
                                                mt-1
                                                break-words
                                                text-xs
                                                font-bold
                                                leading-5
                                                text-white

                                                sm:mt-2
                                                sm:text-lg
                                                sm:leading-6
                                            "
                                        >
                                            {item.value}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    )}
                </div>

                {/* ==================================================
                    Building Features
                ================================================== */}

                <div
                    className="
                        border-t
                        border-white/10
                        px-4
                        py-5

                        sm:px-6
                        sm:py-7

                        lg:px-8
                        lg:py-8
                    "
                >
                    <h3
                        className="
                            text-xl
                            font-bold
                            text-white

                            sm:text-2xl
                        "
                    >
                        Building Features
                    </h3>

                    <div
                        className="
                            mt-4
                            grid
                            grid-cols-1
                            gap-3

                            sm:mt-6
                            sm:gap-4

                            lg:grid-cols-3
                            lg:gap-6
                        "
                    >
                        {/* ==================================================
                            Parking
                        ================================================== */}

                        <div
                            className="
                                min-w-0
                                rounded-xl
                                border
                                border-white/10
                                bg-white/5
                                p-4

                                sm:rounded-2xl
                                sm:p-6
                            "
                        >
                            <h4
                                className="
                                    text-base
                                    font-semibold
                                    text-blue-400

                                    sm:text-lg
                                "
                            >
                                Parking
                            </h4>

                            <div
                                className="
                                    mt-3
                                    space-y-2
                                    text-sm
                                    leading-6
                                    text-white/80

                                    sm:mt-5
                                    sm:space-y-3
                                "
                            >
                                <p>
                                    • Available:{" "}
                                    {parking.available
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Covered:{" "}
                                    {parking.covered
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Open:{" "}
                                    {parking.open
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Total Spaces:{" "}
                                    {parking.totalSpaces}
                                </p>
                            </div>
                        </div>

                        {/* ==================================================
                            Utilities
                        ================================================== */}

                        <div
                            className="
                                min-w-0
                                rounded-xl
                                border
                                border-white/10
                                bg-white/5
                                p-4

                                sm:rounded-2xl
                                sm:p-6
                            "
                        >
                            <h4
                                className="
                                    text-base
                                    font-semibold
                                    text-blue-400

                                    sm:text-lg
                                "
                            >
                                Utilities
                            </h4>

                            <div
                                className="
                                    mt-3
                                    space-y-2
                                    text-sm
                                    leading-6
                                    text-white/80

                                    sm:mt-5
                                    sm:space-y-3
                                "
                            >
                                <p>
                                    • Power Backup:{" "}
                                    {utilities.powerBackup
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Water Supply:{" "}
                                    {utilities.waterSupply
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Internet Ready:{" "}
                                    {utilities.internetReady
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Gas Pipeline:{" "}
                                    {utilities.gasPipeline
                                        ? "Yes"
                                        : "No"}
                                </p>
                            </div>
                        </div>

                        {/* ==================================================
                            Security
                        ================================================== */}

                        <div
                            className="
                                min-w-0
                                rounded-xl
                                border
                                border-white/10
                                bg-white/5
                                p-4

                                sm:rounded-2xl
                                sm:p-6
                            "
                        >
                            <h4
                                className="
                                    text-base
                                    font-semibold
                                    text-blue-400

                                    sm:text-lg
                                "
                            >
                                Security
                            </h4>

                            <div
                                className="
                                    mt-3
                                    space-y-2
                                    text-sm
                                    leading-6
                                    text-white/80

                                    sm:mt-5
                                    sm:space-y-3
                                "
                            >
                                <p>
                                    • CCTV:{" "}
                                    {security.cctv
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Security Guard:{" "}
                                    {security.securityGuard
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Gated Community:{" "}
                                    {security.gatedCommunity
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Intercom:{" "}
                                    {security.intercom
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Fire Safety:{" "}
                                    {security.fireSafety
                                        ? "Yes"
                                        : "No"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}