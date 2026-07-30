"use client";

import { Room } from "@/types/roomTypes";

import RoomCard from "./RoomCard";

interface RoomGridProps {
    rooms: Room[];
    onRefresh: () => void;
}

const RoomGrid = ({
    rooms,
    onRefresh,
}: RoomGridProps) => {
    return (
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {rooms.map((room) => (
                <RoomCard
                    key={room.roomId}
                    room={room}
                    onRefresh={onRefresh}
                />
            ))}
        </section>
    );
};

export default RoomGrid;