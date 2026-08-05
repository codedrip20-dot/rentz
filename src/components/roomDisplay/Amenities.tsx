"use client";

import { motion } from "framer-motion";

import {
    CheckCircle2,
    Sparkles,
    Wifi,
    Snowflake,
    Fan,
    Tv,
    Shirt,
    Refrigerator,
    WashingMachine,
    Car,
    Building2,
    ShieldCheck,
    Zap,
    CookingPot,
    Home,
    LampDesk,
} from "lucide-react";

import { RoomDisplayData } from "@/types/roomDisplayTypes";
import { Amenity } from "@/types/roomTypes";

interface AmenitiesProps {
    data: RoomDisplayData;
}

interface AmenityItem {
    label: string;
    icon: React.ReactNode;
}

/* ==========================================================
   Amenity Config
========================================================== */

const amenityMap: Record<
    Amenity,
    AmenityItem
> = {
    wifi: {
        label: "High-Speed WiFi",
        icon: <Wifi size={22} />,
    },

    ac: {
        label: "Air Conditioning",
        icon: <Snowflake size={22} />,
    },

    fan: {
        label: "Ceiling Fan",
        icon: <Fan size={22} />,
    },

    tv: {
        label: "Television",
        icon: <Tv size={22} />,
    },

    wardrobe: {
        label: "Wardrobe",
        icon: <Home size={22} />,
    },

    studyTable: {
        label: "Study Table",
        icon: <LampDesk size={22} />,
    },

    desk: {
        label: "Desk",
        icon: <LampDesk size={22} />,
    },

    chair: {
        label: "Chair",
        icon: <LampDesk size={22} />,
    },

    geyser: {
        label: "Geyser",
        icon: <Zap size={22} />,
    },

    refrigerator: {
        label: "Refrigerator",
        icon: <Refrigerator size={22} />,
    },

    washingMachine: {
        label: "Washing Machine",
        icon: <WashingMachine size={22} />,
    },

    laundry: {
        label: "Laundry Service",
        icon: <Shirt size={22} />,
    },
    parking: {
        label: "Parking",
        icon: <Car size={22} />,
    },

    balcony: {
        label: "Private Balcony",
        icon: <Home size={22} />,
    },

    lift: {
        label: "Lift Access",
        icon: <Building2 size={22} />,
    },

    powerBackup: {
        label: "Power Backup",
        icon: <Zap size={22} />,
    },

    cctv: {
        label: "CCTV Security",
        icon: <ShieldCheck size={22} />,
    },

    housekeeping: {
        label: "Housekeeping",
        icon: <Sparkles size={22} />,
    },

    kitchenAppliances: {
        label: "Kitchen Appliances",
        icon: <CookingPot size={22} />,
    },
};

/* ==========================================================
   Amenities
========================================================== */

export default function Amenities({
    data,
}: AmenitiesProps) {
    const amenities =
        data.room.amenities.amenities;

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
                                border
                                border-blue-500/20
                                bg-blue-500/10
                            "
                        >
                            <Sparkles
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
                                Amenities
                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-white/60
                                "
                            >
                                Everything included
                                with this room.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className="
                        grid
                        gap-4
                        p-6

                        sm:grid-cols-2
                        sm:p-8

                        lg:grid-cols-3

                        xl:grid-cols-4
                    "
                >
                    {amenities.map(
                        (amenity, index) => {
                            const item =
                                amenityMap[
                                    amenity
                                ];

                            if (!item)
                                return null;

                            return (
                                <motion.div
                                    key={amenity}
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
                                            index *
                                            0.04,
                                    }}
                                    className="
                                        group
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        p-5
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-blue-500/30
                                        hover:bg-white/[0.08]
                                        hover:shadow-xl
                                        hover:shadow-blue-500/10
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            items-start
                                            justify-between
                                            gap-4
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
                                                text-blue-400
                                                transition-colors
                                                duration-300

                                                group-hover:bg-blue-500/20
                                            "
                                        >
                                            {item.icon}
                                        </div>

                                        <CheckCircle2
                                            size={22}
                                            className="
                                                text-emerald-400
                                            "
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <h3
                                            className="
                                                text-base
                                                font-bold
                                                text-white
                                            "
                                        >
                                            {item.label}
                                        </h3>

                                        <p
                                            className="
                                                mt-2
                                                text-sm
                                                leading-6
                                                text-white/60
                                            "
                                        >
                                            Included with this
                                            room at no additional
                                            cost.
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        }
                    )}

                    {amenities.length === 0 && (
                        <div
                            className="
                                col-span-full
                                rounded-2xl
                                border
                                border-dashed
                                border-white/10
                                bg-white/5
                                py-12
                                text-center
                            "
                        >
                            <Sparkles
                                size={40}
                                className="
                                    mx-auto
                                    mb-4
                                    text-blue-400
                                "
                            />

                            <h3
                                className="
                                    text-lg
                                    font-semibold
                                    text-white
                                "
                            >
                                No Amenities Added
                            </h3>

                            <p
                                className="
                                    mt-2
                                    text-white/60
                                "
                            >
                                The owner hasnt listed any
                                amenities for this room yet.
                            </p>
                        </div>
                    )}
                </div>
            </motion.div>
        </section>
    );
}