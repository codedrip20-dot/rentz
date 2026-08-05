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
   Quick Information
========================================================== */

export default function QuickInfo({
    data,
}: QuickInfoProps) {
    const {
        room,
        property,
    } = data;

    const availableFrom =
        room.availability.availableFrom
            ? room.availability.availableFrom
                  .toDate()
                  .toLocaleDateString("en-IN")
            : "Immediately";

    const infoCards: InfoCard[] = [
        {
            title: "Occupancy",

            value: `${room.capacity.adults} Adult${
                room.capacity.adults > 1
                    ? "s"
                    : ""
            }${
                room.capacity.children > 0
                    ? `, ${room.capacity.children} Child${
                          room.capacity.children >
                          1
                              ? "ren"
                              : ""
                      }`
                    : ""
            }`,

            icon: (
                <Users
                    size={22}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Available From",

            value: availableFrom,

            icon: (
                <CalendarDays
                    size={22}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Bathroom",

            value: `${room.bathrooms} ${
                room.bathroomType
            } Bathroom${
                room.bathrooms > 1
                    ? "s"
                    : ""
            }`,

            icon: (
                <Bath
                    size={22}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Kitchen",

            value:
                room.kitchen
                    .charAt(0)
                    .toUpperCase() +
                room.kitchen.slice(1),

            icon: (
                <CookingPot
                    size={22}
                    className="text-blue-400"
                />
            ),
        },
        {
            title: "Bed Type",

            value:
                room.bedType
                    .charAt(0)
                    .toUpperCase() +
                room.bedType.slice(1),

            icon: (
                <BedDouble
                    size={22}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Furnishing",

            value:
                room.furnishing
                    .split("-")
                    .map(
                        (word) =>
                            word
                                .charAt(0)
                                .toUpperCase() +
                            word.slice(1)
                    )
                    .join(" "),

            icon: (
                <Home
                    size={22}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Room Area",

            value: `${room.area} sq ft`,

            icon: (
                <Ruler
                    size={22}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Property Type",

            value: property.propertyType,

            icon: (
                <Home
                    size={22}
                    className="text-blue-400"
                />
            ),
        },

        {
            title: "Location",

            value: `${property.location.address.city}, ${property.location.address.state}`,

            icon: (
                <MapPinned
                    size={22}
                    className="text-blue-400"
                />
            ),
        },
    ];

    return (
        <section className="mt-8">
            <div
                className="
                    mb-6
                    flex
                    items-center
                    justify-between
                "
            >
                <div>
                    <h2
                        className="
                            text-2xl
                            font-black
                            text-white
                        "
                    >
                        Quick Information
                    </h2>

                    <p
                        className="
                            mt-1
                            text-white/60
                        "
                    >
                        Everything you need to know
                        at a glance.
                    </p>
                </div>
            </div>

            <div
                className="
                    grid
                    gap-4

                    sm:grid-cols-2

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
                            }}
                            transition={{
                                delay:
                                    index * 0.05,
                            }}
                            className="
                                group
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/[0.04]
                                p-5
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-blue-500/30
                                hover:bg-white/[0.06]
                                hover:shadow-xl
                                hover:shadow-blue-500/10
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-start
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
                                    "
                                >
                                    {item.icon}
                                </div>

                                <div className="flex-1">
                                    <p
                                        className="
                                            text-sm
                                            font-medium
                                            text-white/60
                                        "
                                    >
                                        {item.title}
                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            break-words
                                            text-base
                                            font-bold
                                            text-white
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