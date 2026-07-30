"use client";

import { Room } from "@/types/propertyManagementTypes";

import RoomEmptyState from "./RoomEmptyState";
import RoomGrid from "./RoomGrid";

interface PropertyContentProps {
    propertyId: string | null;
    rooms: Room[];
    onRefresh: () => void;
}

const PropertyContent = ({
    propertyId,
    rooms,
    onRefresh,
}: PropertyContentProps) => {
    if (!propertyId) {
        return (
            <RoomEmptyState
                propertyId={null}
                onRefresh={onRefresh}
            />
        );
    }

    if (rooms.length === 0) {
        return (
            <RoomEmptyState
                propertyId={propertyId}
                onRefresh={onRefresh}
            />
        );
    }

    return (
        <RoomGrid
            rooms={rooms}
            onRefresh={onRefresh}
        />
    );
};

export default PropertyContent;