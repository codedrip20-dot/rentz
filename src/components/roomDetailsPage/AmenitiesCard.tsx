"use client";

import { CheckCircle2 } from "lucide-react";

import { Room, Amenity } from "@/types/roomTypes";

interface AmenitiesCardProps {
    room: Room;
}

const amenityLabels: Record<Amenity, string> = {
    wifi: "Wi-Fi",
    ac: "Air Conditioner",
    fan: "Fan",
    tv: "Television",
    wardrobe: "Wardrobe",
    studyTable: "Study Table",
    desk: "Desk",
    chair: "Chair",
    geyser: "Geyser",
    refrigerator: "Refrigerator",
    washingMachine: "Washing Machine",
    laundry: "Laundry",
    parking: "Parking",
    balcony: "Balcony",
    lift: "Lift",
    powerBackup: "Power Backup",
    cctv: "CCTV",
    housekeeping: "Housekeeping",
    kitchenAppliances: "Kitchen Appliances",
};

export default function AmenitiesCard({
    room,
}: AmenitiesCardProps) {
    const amenities = room.amenities.amenities;

    return (
        <section
            className="
                overflow-hidden
                rounded-3xl
                border
                border-white/20
                bg-white/10
                backdrop-blur-2xl
                shadow-2xl
            "
        >
            {/* Header */}

            <div
                className="
                    border-b
                    border-white/10
                    px-5
                    py-5
                    sm:px-6
                "
            >
                <h2 className="text-xl font-bold text-white">
                    Amenities
                </h2>

                <p className="mt-1 text-sm text-blue-100">
                    Facilities and features available in this room.
                </p>
            </div>

            {/* Content */}

            <div className="p-5 sm:p-6">
                {amenities.length === 0 ? (
                    <div
                        className="
                            rounded-2xl
                            border
                            border-dashed
                            border-white/20
                            bg-white/5
                            py-10
                            text-center
                        "
                    >
                        <p className="text-blue-100">
                            No amenities have been added for this room.
                        </p>
                    </div>
                ) : (
                    <div
                        className="
                            grid
                            gap-3
                            sm:grid-cols-2
                            lg:grid-cols-3
                        "
                    >
                        {amenities.map((amenity) => (
                            <div
                                key={amenity}
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-4
                                    transition-all
                                    duration-300
                                    hover:bg-white/10
                                "
                            >
                                <CheckCircle2
                                    size={20}
                                    className="text-emerald-400"
                                />

                                <span className="font-medium text-white">
                                    {amenityLabels[amenity]}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}