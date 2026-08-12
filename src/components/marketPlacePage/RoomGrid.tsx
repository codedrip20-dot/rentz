"use client";

import { Property } from "@/types/property";
import { Room } from "@/types/roomTypes";

import RoomCard from "./RoomCard";

interface RoomGridProps {
    rooms: Room[];
    properties: Record<
        string,
        Pick<Property, "location" | "propertyType">
    >;
}

export default function RoomGrid({
    rooms,
    properties,
}: RoomGridProps) {

    if (!rooms.length) {
        return null;
    }

    return (
        <section className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {rooms.map((room) => {
                const property = properties[room.propertyId];

                if (!property) {
                    return null;
                }

                return (
                    <RoomCard
                        key={room.roomId}
                        room={room}
                        property={property}
                    />
                );
            })}
        </section>
    );
}