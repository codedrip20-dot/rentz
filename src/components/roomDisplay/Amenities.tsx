"use client";

import { motion } from "framer-motion";

import {
    CheckCircle2,
    Sparkles,
    Wifi,
    Snowflake,
    Fan,
    Tv,
    Home,
    LampDesk,
    Shirt,
    Refrigerator,
    WashingMachine,
    Car,
    Building2,
    ShieldCheck,
    Zap,
    CookingPot,
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

const amenityMap: Record<Amenity, AmenityItem> = {
    wifi: {
        label: "High-Speed WiFi",
        icon: <Wifi size={20} />,
    },

    ac: {
        label: "Air Conditioning",
        icon: <Snowflake size={20} />,
    },

    fan: {
        label: "Ceiling Fan",
        icon: <Fan size={20} />,
    },

    tv: {
        label: "Television",
        icon: <Tv size={20} />,
    },

    wardrobe: {
        label: "Wardrobe",
        icon: <Home size={20} />,
    },

    studyTable: {
        label: "Study Table",
        icon: <LampDesk size={20} />,
    },

    desk: {
        label: "Desk",
        icon: <LampDesk size={20} />,
    },

    chair: {
        label: "Chair",
        icon: <LampDesk size={20} />,
    },

    geyser: {
        label: "Geyser",
        icon: <Zap size={20} />,
    },

    refrigerator: {
        label: "Refrigerator",
        icon: <Refrigerator size={20} />,
    },

    washingMachine: {
        label: "Washing Machine",
        icon: <WashingMachine size={20} />,
    },

    laundry: {
        label: "Laundry Service",
        icon: <Shirt size={20} />,
    },

    parking: {
        label: "Parking",
        icon: <Car size={20} />,
    },

    balcony: {
        label: "Private Balcony",
        icon: <Home size={20} />,
    },

    lift: {
        label: "Lift Access",
        icon: <Building2 size={20} />,
    },

    powerBackup: {
        label: "Power Backup",
        icon: <Zap size={20} />,
    },

    cctv: {
        label: "CCTV Security",
        icon: <ShieldCheck size={20} />,
    },

    housekeeping: {
        label: "Housekeeping",
        icon: <Sparkles size={20} />,
    },

    kitchenAppliances: {
        label: "Kitchen Appliances",
        icon: <CookingPot size={20} />,
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

    const hasAmenities = amenities.length > 0;

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
                        lg:py-7
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
                            <Sparkles
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
                                Amenities
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
                                Everything included with
                                this room.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ==================================================
                    Amenities Grid
                ================================================== */}

                <div
                    className="
                        grid
                        grid-cols-2
                        gap-2.5
                        p-3

                        sm:gap-4
                        sm:p-6
                        sm:grid-cols-2

                        lg:grid-cols-3
                        lg:p-8

                        xl:grid-cols-4
                    "
                >
                    {hasAmenities &&
                        amenities.map(
                            (amenity, index) => {
                                const item =
                                    amenityMap[
                                        amenity
                                    ];

                                if (!item) {
                                    return null;
                                }

                                return (
                                    <motion.div
                                        key={`${amenity}-${index}`}
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
                                                index *
                                                0.04,
                                            duration: 0.35,
                                        }}
                                        className="
                                            group
                                            min-w-0
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-white/5
                                            p-3
                                            transition-all
                                            duration-300

                                            sm:rounded-2xl
                                            sm:p-5

                                            sm:hover:-translate-y-1
                                            sm:hover:border-blue-500/30
                                            sm:hover:bg-white/[0.08]
                                            sm:hover:shadow-xl
                                            sm:hover:shadow-blue-500/10
                                        "
                                    >
                                        {/* Card Top */}

                                        <div
                                            className="
                                                flex
                                                items-start
                                                justify-between
                                                gap-2

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
                                                    border
                                                    border-blue-500/20
                                                    bg-blue-500/10
                                                    text-blue-400
                                                    transition-colors
                                                    duration-300

                                                    sm:h-12
                                                    sm:w-12
                                                    sm:rounded-2xl

                                                    sm:group-hover:bg-blue-500/20
                                                "
                                            >
                                                {item.icon}
                                            </div>

                                            {/* Check */}

                                            <CheckCircle2
                                                size={18}
                                                className="
                                                    mt-0.5
                                                    shrink-0
                                                    text-emerald-400

                                                    sm:h-[22px]
                                                    sm:w-[22px]
                                                "
                                            />
                                        </div>

                                        {/* Card Content */}

                                        <div
                                            className="
                                                mt-3

                                                sm:mt-5
                                            "
                                        >
                                            <h3
                                                className="
                                                    break-words
                                                    text-xs
                                                    font-bold
                                                    leading-5
                                                    text-white

                                                    sm:text-base
                                                "
                                            >
                                                {item.label}
                                            </h3>

                                            <p
                                                className="
                                                    mt-1.5
                                                    hidden
                                                    text-xs
                                                    leading-5
                                                    text-white/60

                                                    sm:mt-2
                                                    sm:block
                                                    sm:text-sm
                                                    sm:leading-6
                                                "
                                            >
                                                Included with
                                                this room at
                                                no additional
                                                cost.
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            }
                        )}

                    {/* ==================================================
                        Empty State
                    ================================================== */}

                    {!hasAmenities && (
                        <div
                            className="
                                col-span-full
                                rounded-xl
                                border
                                border-dashed
                                border-white/10
                                bg-white/5
                                px-4
                                py-10
                                text-center

                                sm:rounded-2xl
                                sm:py-12
                            "
                        >
                            <Sparkles
                                size={34}
                                className="
                                    mx-auto
                                    mb-3
                                    text-blue-400

                                    sm:h-10
                                    sm:w-10
                                "
                            />

                            <h3
                                className="
                                    text-base
                                    font-semibold
                                    text-white

                                    sm:text-lg
                                "
                            >
                                No Amenities Added
                            </h3>

                            <p
                                className="
                                    mx-auto
                                    mt-2
                                    max-w-sm
                                    text-xs
                                    leading-6
                                    text-white/60

                                    sm:text-sm
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