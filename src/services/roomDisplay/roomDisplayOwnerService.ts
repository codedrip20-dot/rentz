import { getOwnerProfile } from "@/lib/firebase/owner";

import {
    RoomDisplayOwner,
} from "@/types/roomDisplayTypes";

/* ==========================================================
   Get Room Display Owner
========================================================== */

export async function getRoomDisplayOwner(
    ownerId: string
): Promise<RoomDisplayOwner | null> {
    try {
        const response =
            await getOwnerProfile(ownerId);

        if (!response.success || !response.data) {
            return null;
        }

        return {
            profile: response.data,
        };
    } catch (error) {
        console.error(
            "Failed to fetch room display owner:",
            error
        );

        return null;
    }
}