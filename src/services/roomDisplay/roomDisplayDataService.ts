import { getProperty } from "@/lib/firebase/property";
import { getRoom } from "@/lib/firebase/room";

import {
    RoomDisplayData,
} from "@/types/roomDisplayTypes";

import { getRoomDisplayBooking } from "./roomDisplayBookingService";
import { getRoomDisplayOwner } from "./roomDisplayOwnerService";
import { getRoomRecommendations } from "./roomDisplayRecommendationService";

/* ==========================================================
   Get Room Display Data
========================================================== */

export async function getRoomDisplayData(
    roomId: string
): Promise<RoomDisplayData | null> {
    try {
        /* --------------------------------------------------
           Fetch Room
        -------------------------------------------------- */

        const room = await getRoom(roomId);

        if (!room) {
            return null;
        }

        /* --------------------------------------------------
           Fetch Property
        -------------------------------------------------- */

        const property = await getProperty(
            room.propertyId
        );

        if (!property) {
            return null;
        }

        /* --------------------------------------------------
           Fetch Owner
        -------------------------------------------------- */

        const owner =
            await getRoomDisplayOwner(
                room.ownerId
            );

        if (!owner) {
            return null;
        }

        /* --------------------------------------------------
           Fetch Recommendations
        -------------------------------------------------- */

        const recommendations =
            await getRoomRecommendations(
                room
            );

        /* --------------------------------------------------
           Fetch Booking Display
        -------------------------------------------------- */

        const booking =
            await getRoomDisplayBooking(
                room
            );

        /* --------------------------------------------------
           Return Display Data
        -------------------------------------------------- */

        return {
            room,

            property,

            owner,

            recommendations,

            booking,

            reviews: {
                totalReviews: 0,

                averageRating: 0,
            },
        };
    } catch (error) {
        console.error(
            "Failed to fetch room display data:",
            error
        );

        return null;
    }
}