// src/lib/cloudinary/room/deleteRoomImage.ts

import { ROOM_UPLOAD_ERRORS } from "./roomConstants";

/**
 * Deletes a room image from Cloudinary.
 */
export async function deleteRoomImage(
    publicId: string
): Promise<void> {
    const response = await fetch("/api/cloudinary/room/delete", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            publicId,
        }),
    });

    if (!response.ok) {
        throw new Error(ROOM_UPLOAD_ERRORS.DELETE_FAILED);
    }
}