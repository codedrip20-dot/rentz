// src/lib/cloudinary/room/uploadRoomImage.ts

import { ROOM_UPLOAD_CONFIG } from "./roomConstants";

export interface UploadedRoomImage {
    url: string;
    publicId: string;
    width: number;
    height: number;
    format: string;
    bytes: number;
}

interface UploadRoomImageResponse {
    success: boolean;
    image: UploadedRoomImage;
}

/**
 * Upload a single room image to Cloudinary.
 */
export async function uploadRoomImage(
    file: File
): Promise<UploadedRoomImage> {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("folder", ROOM_UPLOAD_CONFIG.FOLDER);

    const response = await fetch("/api/cloudinary/upload", {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || "Failed to upload room image.");
    }

    const data: UploadRoomImageResponse = await response.json();

    if (!data.success) {
        throw new Error("Cloudinary upload failed.");
    }

    return data.image;
}