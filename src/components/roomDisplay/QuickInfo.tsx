"use client";

import { ReactNode } from "react";

import { motion } from "framer-motion";

import {
    Bath,
    BedDouble,
    CalendarDays,
    CookingPot,
    Home,
    MapPinned,
    Ruler,
    Users,
} from "lucide-react";

import { RoomDisplayData } from "@/types/roomDisplayTypes";

interface QuickInfoProps {
    data: RoomDisplayData;
}

interface InfoCard {
    title: string;
    value: string;
    icon: ReactNode;
}

/* ==========================================================
   Helpers
========================================================== */

function capitalize(value: string) {
    if (!value) return "";

    return (
        value.charAt(0).toUpperCase() +
        value.slice(1)
    );
}

function formatWords(value: string) {
    return value
        .split("-")
        .map(capitalize)
        .join(" ");
}

/* ==========================================================
   Quick Information
========================================================== */

export default function QuickInfo({
    data,
}: QuickInfoProps) {
    const { room, property } = data;

    const {
        adults,
        children,
    } = room.capacity;

    const availableFrom =
        room.availability.availableFrom
            ? room.availability.availableFrom
                  .toDate()
                  .toLocaleDateString("en-IN")
            : "Immediately";

    const occupancy = `${adults} Adult${
        adults > 1 ? "s" : ""
    }${
        children > 0
            ? `, ${children} Child${
                  children > 1 ? "ren" : ""
              }`
            : ""
    }`;

    const infoCards: InfoCard[] = [
        {
            title: "Occupancy",
            value: occupancy,
            icon: (
                <Users
                    size={20}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Available From",
            value: availableFrom,
            icon: (
                <CalendarDays
                    size={20}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Bathroom",
            value: `${room.bathrooms} ${
                room.bathroomType
            } Bathroom${
                room.bathrooms > 1 ? "s" : ""
            }`,
            icon: (
                <Bath
                    size={20}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Kitchen",
            value: capitalize(room.kitchen),
            icon: (
                <CookingPot
                    size={20}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Bed Type",
            value: capitalize(room.bedType),
            icon: (
                <BedDouble
                    size={20}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Furnishing",
            value: formatWords(room.furnishing),
            icon: (
                <Home
                    size={20}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Room Area",
            value: `${room.area} sq ft`,
            icon: (
                <Ruler
                    size={20}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Property Type",
            value: property.propertyType,
            icon: (
                <Home
                    size={20}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Location",
            value: `${property.location.address.city}, ${property.location.address.state}`,
            icon: (
                <MapPinned
                    size={20}
                    className="text-blue-400"
                />
            ),
        },
    ];

    return (
        <section className="mt-6 w-full sm:mt-8">
            {/* ==================================================
                Section Header
            ================================================== */}

            <div className="mb-4 sm:mb-6">
                <h2
                    className="
                        text-xl
                        font-black
                        leading-tight
                        text-white

                        sm:text-2xl
                    "
                >
                    Quick Information
                </h2>

                <p
                    className="
                        mt-1
                        text-xs
                        leading-5
                        text-white/60

                        sm:text-sm
                    "
                >
                    Everything you need to know
                    at a glance.
                </p>
            </div>

            {/* ==================================================
                Information Grid
            ================================================== */}

            <div
                className="
                    grid
                    grid-cols-[repeat(2,minmax(0,1fr))]
                    gap-2.5

                    sm:gap-4

                    xl:grid-cols-3
                "
            >
                {infoCards.map(
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
                            className={`
                                group
                                min-w-0
                                overflow-hidden
                                rounded-xl
                                border
                                border-white/10
                                bg-white/[0.04]
                                p-3
                                transition-all
                                duration-300

                                sm:rounded-2xl
                                sm:p-5

                                sm:hover:-translate-y-1
                                sm:hover:border-blue-500/30
                                sm:hover:bg-white/[0.06]
                                sm:hover:shadow-xl
                                sm:hover:shadow-blue-500/10

                                ${
                                    item.title ===
                                    "Location"
                                        ? "col-span-2 xl:col-span-1"
                                        : ""
                                }
                            `}
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
                                        border
                                        border-blue-500/20
                                        bg-blue-500/10

                                        sm:h-12
                                        sm:w-12
                                        sm:rounded-2xl
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
                                            font-medium
                                            leading-4
                                            text-white/60

                                            sm:text-sm
                                        "
                                    >
                                        {item.title}
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            break-words
                                            text-xs
                                            font-bold
                                            leading-5
                                            text-white

                                            sm:mt-2
                                            sm:text-base
                                            sm:leading-6
                                        "
                                    >
                                        {item.value}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )
                )}
            </div>
        </section>
    );
}