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

    const detailCards: DetailCard[] = [
        {
            title: "Property Type",

            value: property.propertyType,

            icon: (
                <Building2
                    size={22}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Furnishing",

            value: property.details.furnishing,

            icon: (
                <Home
                    size={22}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Built-up Area",

            value: `${property.details.builtUpArea} sq ft`,

            icon: (
                <Maximize2
                    size={22}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Carpet Area",

            value: `${property.details.carpetArea} sq ft`,

            icon: (
                <Ruler
                    size={22}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Floor",

            value: `${property.details.floorNumber} / ${property.details.totalFloors}`,

            icon: (
                <Layers3
                    size={22}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Facing",

            value: property.details.facing,

            icon: (
                <Compass
                    size={22}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Parking",

            value: property.information.parking
                .available
                ? "Available"
                : "Not Available",

            icon: (
                <Car
                    size={22}
                    className="text-blue-400"
                />
            ),
        },
    ];

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
                className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                "
            >
                <div
                    className="
                        border-b
                        border-white/10
                        p-8
                    "
                >
                    <h2
                        className="
                            text-3xl
                            font-black
                            text-white
                        "
                    >
                        Property Details
                    </h2>

                    <p
                        className="
                            mt-3
                            text-white/60
                            leading-7
                        "
                    >
                        Essential information about
                        the property including its
                        size, furnishing and layout.
                    </p>
                </div>

                <div
                    className="
                        grid
                        gap-5
                        p-8

                        md:grid-cols-2

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
                                }}
                                transition={{
                                    delay:
                                        index * 0.05,
                                }}
                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-5
                                    transition-all
                                    duration-300

                                    hover:border-blue-500/30
                                    hover:bg-white/10
                                "
                            >
                                <div
                                    className="
                                        mb-4
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-blue-500/10
                                    "
                                >
                                    {item.icon}
                                </div>

                                <p
                                    className="
                                        text-sm
                                        text-white/60
                                    "
                                >
                                    {item.title}
                                </p>

                                <h3
                                    className="
                                        mt-2
                                        text-lg
                                        font-bold
                                        text-white
                                    "
                                >
                                    {item.value}
                                </h3>
                            </motion.div>
                        )
                    )}
                </div>

                <div
                    className="
                        border-t
                        border-white/10
                        p-8
                    "
                >
                    <h3
                        className="
                            text-2xl
                            font-bold
                            text-white
                        "
                    >
                        Building Features
                    </h3>

                    <div
                        className="
                            mt-6
                            grid
                            gap-6

                            lg:grid-cols-3
                        "
                    >
                        <div
                            className="
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                p-6
                            "
                        >
                            <h4
                                className="
                                    text-lg
                                    font-semibold
                                    text-blue-400
                                "
                            >
                                Parking
                            </h4>

                            <div
                                className="
                                    mt-5
                                    space-y-3
                                    text-white/80
                                "
                            >
                                <p>
                                    • Available :
                                    {" "}
                                    {property.information.parking.available
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Covered :
                                    {" "}
                                    {property.information.parking.covered
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Open :
                                    {" "}
                                    {property.information.parking.open
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Total Spaces :
                                    {" "}
                                    {property.information.parking.totalSpaces}
                                </p>
                            </div>
                        </div>

                        <div
                            className="
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                p-6
                            "
                        >
                            <h4
                                className="
                                    text-lg
                                    font-semibold
                                    text-blue-400
                                "
                            >
                                Utilities
                            </h4>

                            <div
                                className="
                                    mt-5
                                    space-y-3
                                    text-white/80
                                "
                            >
                            <p>
                                    • Power Backup :
                                    {" "}
                                    {property.information.utilities.powerBackup
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Water Supply :
                                    {" "}
                                    {property.information.utilities.waterSupply
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Internet Ready :
                                    {" "}
                                    {property.information.utilities.internetReady
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Gas Pipeline :
                                    {" "}
                                    {property.information.utilities.gasPipeline
                                        ? "Yes"
                                        : "No"}
                                </p>
                            </div>
                        </div>

                        <div
                            className="
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                p-6
                            "
                        >
                            <h4
                                className="
                                    text-lg
                                    font-semibold
                                    text-blue-400
                                "
                            >
                                Security
                            </h4>

                            <div
                                className="
                                    mt-5
                                    space-y-3
                                    text-white/80
                                "
                            >
                                <p>
                                    • CCTV :
                                    {" "}
                                    {property.information.security.cctv
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Security Guard :
                                    {" "}
                                    {property.information.security.securityGuard
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Gated Community :
                                    {" "}
                                    {property.information.security.gatedCommunity
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Intercom :
                                    {" "}
                                    {property.information.security.intercom
                                        ? "Yes"
                                        : "No"}
                                </p>

                                <p>
                                    • Fire Safety :
                                    {" "}
                                    {property.information.security.fireSafety
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