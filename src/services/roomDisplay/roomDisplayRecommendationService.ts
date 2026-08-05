import { getRoomsByPropertyId } from "@/lib/firebase/room";

import {
    RoomDisplayRecommendations,
} from "@/types/roomDisplayTypes";

import {
    Room,
} from "@/types/roomTypes";

/* ==========================================================
   Get Room Recommendations
========================================================== */

export async function getRoomRecommendations(
    room: Room
): Promise<RoomDisplayRecommendations> {
    try {
        const propertyRooms =
            await getRoomsByPropertyId(room.propertyId);

        const recommendedRooms =
            propertyRooms.filter(
                (propertyRoom) =>
                    propertyRoom.roomId !== room.roomId
            );

        return {
            rooms: recommendedRooms,
        };
    } catch (error) {
        console.error(
            "Failed to fetch room recommendations:",
            error
        );

        return {
            rooms: [],
        };
    }
}