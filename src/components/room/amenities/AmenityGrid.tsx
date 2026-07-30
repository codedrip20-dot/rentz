"use client";

import {
    Armchair,
    BadgeCheck,
    Bed,
    Car,
    ChefHat,
    DoorOpen,
    Fan,
    Refrigerator,
    ShieldCheck,
    Sparkles,
    Tv,
    WashingMachine,
    Wifi,
    Zap,
} from "lucide-react";

import AmenityCard from "./AmenityCard";

import { useRoomWizard } from "@/context/RoomWizardContext";

import type { Amenity } from "@/types/roomTypes";

interface AmenityGroup {
    title: string;
    description: string;
    icon: React.ElementType;
    amenities: {
        value: Amenity;
        title: string;
        description: string;
        icon: React.ElementType;
    }[];
}

const amenityGroups: AmenityGroup[] = [
    {
        title: "Room Essentials",
        description:
            "Basic amenities that every tenant expects for a comfortable stay.",
        icon: Bed,
        amenities: [
            {
                value: "wifi",
                title: "High-Speed Wi-Fi",
                description:
                    "Reliable internet connection for work, study, and entertainment.",
                icon: Wifi,
            },
            {
                value: "ac",
                title: "Air Conditioning",
                description:
                    "Maintain a cool and comfortable room throughout the year.",
                icon: Fan,
            },
            {
                value: "fan",
                title: "Ceiling Fan",
                description:
                    "Provides additional ventilation and airflow.",
                icon: Fan,
            },
            {
                value: "tv",
                title: "Television",
                description:
                    "Entertainment for movies, news, and streaming services.",
                icon: Tv,
            },
        ],
    },

    {
        title: "Furniture",
        description:
            "Essential furniture provided inside the room.",
        icon: Armchair,
        amenities: [
            {
                value: "wardrobe",
                title: "Wardrobe",
                description:
                    "Spacious storage for clothes and personal belongings.",
                icon: DoorOpen,
            },
            {
                value: "studyTable",
                title: "Study Table",
                description:
                    "Dedicated workspace for students and professionals.",
                icon: Armchair,
            },
            {
                value: "desk",
                title: "Desk",
                description:
                    "Functional desk suitable for work or study.",
                icon: Armchair,
            },
            {
                value: "chair",
                title: "Chair",
                description:
                    "Comfortable seating for everyday use.",
                icon: Armchair,
            },
        ],
    },

    {
        title: "Appliances",
        description:
            "Modern appliances that enhance everyday convenience.",
        icon: Refrigerator,
        amenities: [
            {
                value: "refrigerator",
                title: "Refrigerator",
                description:
                    "Store food and beverages conveniently.",
                icon: Refrigerator,
            },
            {
                value: "washingMachine",
                title: "Washing Machine",
                description:
                    "In-house laundry facility for tenants.",
                icon: WashingMachine,
            },
            {
                value: "geyser",
                title: "Water Geyser",
                description:
                    "Hot water available whenever needed.",
                icon: Zap,
            },
            {
                value: "kitchenAppliances",
                title: "Kitchen Appliances",
                description:
                    "Basic cooking appliances included.",
                icon: ChefHat,
            },
        ],
    },

    {
        title: "Building & Safety",
        description:
            "Facilities that improve safety, accessibility, and convenience.",
        icon: ShieldCheck,
        amenities: [
            {
                value: "parking",
                title: "Parking",
                description:
                    "Dedicated or shared parking space available.",
                icon: Car,
            },
            {
                value: "lift",
                title: "Lift",
                description:
                    "Easy access to upper floors.",
                icon: BadgeCheck,
            },
            {
                value: "powerBackup",
                title: "Power Backup",
                description:
                    "Uninterrupted electricity during outages.",
                icon: Zap,
            },
            {
                value: "cctv",
                title: "CCTV Security",
                description:
                    "24×7 surveillance for improved security.",
                icon: ShieldCheck,
            },
        ],
    },

    {
        title: "Extra Services",
        description:
            "Additional facilities that improve the tenant experience.",
        icon: Sparkles,
        amenities: [
            {
                value: "laundry",
                title: "Laundry Service",
                description:
                    "Laundry service available for tenants.",
                icon: WashingMachine,
            },
            {
                value: "balcony",
                title: "Private Balcony",
                description:
                    "Outdoor space with natural light and fresh air.",
                icon: Sparkles,
            },
            {
                value: "housekeeping",
                title: "Housekeeping",
                description:
                    "Regular room cleaning and maintenance.",
                icon: BadgeCheck,
            },
        ],
    },
];

const AmenityGrid = () => {
    const { room, updateAmenities } = useRoomWizard();

    const selectedAmenities =
        room.amenities.amenities.length;

    const totalAmenities = amenityGroups.reduce(
        (total, group) =>
            total + group.amenities.length,
        0
    );

    const progress =
        totalAmenities === 0
            ? 0
            : Math.round(
                  (selectedAmenities /
                      totalAmenities) *
                      100
              );

    const toggleAmenity = (
        amenity: Amenity
    ) => {
        const current =
            room.amenities.amenities;

        const exists =
            current.includes(amenity);

        if (exists) {
            updateAmenities({
                amenities: current.filter(
                    (item) => item !== amenity
                ),
            });

            return;
        }

        updateAmenities({
            amenities: [
                ...current,
                amenity,
            ],
        });
    };

    return (
        <div className="space-y-8">
            {/* Overview */}
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 shadow-sm">
                <div className="relative overflow-hidden p-6">
                    <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-100/40 blur-3xl" />
                    <div className="absolute -bottom-20 left-0 h-48 w-48 rounded-full bg-indigo-100/30 blur-3xl" />

                    <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Sparkles className="h-5 w-5 text-blue-600" />

                                <h3 className="text-xl font-bold text-slate-900">
                                    Amenities Overview
                                </h3>
                            </div>

                            <p className="max-w-2xl text-sm leading-6 text-slate-600">
                                Select every amenity available in
                                your room. A detailed listing helps
                                tenants compare properties, improves
                                search visibility, and builds trust
                                before inquiries.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-blue-100 bg-white/90 px-8 py-6 shadow-sm backdrop-blur">
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                                Completion
                            </p>

                            <div className="mt-2 flex items-end gap-2">
                                <span className="text-4xl font-bold text-blue-600">
                                    {selectedAmenities}
                                </span>

                                <span className="pb-1 text-sm text-slate-500">
                                    / {totalAmenities}
                                </span>
                            </div>

                            <p className="mt-1 text-sm text-slate-600">
                                Amenities Selected
                            </p>
                        </div>
                    </div>

                    <div className="relative mt-8">
                        <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 transition-all duration-500"
                                style={{
                                    width: `${progress}%`,
                                }}
                            />
                        </div>

                        <div className="mt-2 flex justify-between text-xs text-slate-500">
                            <span>0%</span>
                            <span>{progress}% Complete</span>
                            <span>100%</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Amenity Categories */}
            {amenityGroups.map((group) => {
                const GroupIcon = group.icon;

                return (
                    <section
                        key={group.title}
                        className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                    >
                        {/* Category Header */}
                        <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-blue-50/40 px-6 py-5">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
                                    <GroupIcon className="h-6 w-6" />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {group.title}
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        {group.description}
                                    </p>
                                </div>

                                <div className="hidden rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm md:block">
                                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                        Amenities
                                    </p>

                                    <p className="mt-1 text-lg font-bold text-slate-900">
                                        {group.amenities.length}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Cards */}
                        <div className="grid gap-6 p-6 md:grid-cols-2 xl:grid-cols-3">
                            {group.amenities.map((amenity) => (
                                <AmenityCard
                                    key={amenity.value}
                                    title={amenity.title}
                                    description={amenity.description}
                                    icon={amenity.icon}
                                    selected={room.amenities.amenities.includes(
                                        amenity.value
                                    )}
                                    onClick={() =>
                                        toggleAmenity(
                                            amenity.value
                                        )
                                    }
                                />
                            ))}
                        </div>
                    </section>
                );
            })}

            {/* Footer */}
            <section className="overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-green-50 p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                        <Sparkles className="h-6 w-6" />
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-emerald-900">
                            Pro Tip
                        </h3>

                        <p className="text-sm leading-7 text-emerald-800">
                            Listings with complete amenity information help
                            tenants make faster decisions and reduce repetitive
                            questions before scheduling a visit. Be sure to
                            select every amenity that is actually available in
                            your room.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AmenityGrid;