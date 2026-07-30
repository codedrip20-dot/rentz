// src/lib/cloudinary/room/uploadRoomImages.ts

import {
    uploadRoomImage,
    UploadedRoomImage,
} from "./uploadRoomImage";

export interface UploadRoomImagesOptions {
    onProgress?: (completed: number, total: number) => void;
}

/**
 * Upload multiple room images.
 */
export async function uploadRoomImages(
    files: File[],
    options?: UploadRoomImagesOptions
): Promise<UploadedRoomImage[]> {
    const uploadedImages: UploadedRoomImage[] = [];

    const total = files.length;

    for (let i = 0; i < total; i++) {
        const uploadedImage = await uploadRoomImage(files[i]);

        uploadedImages.push(uploadedImage);

        options?.onProgress?.(i + 1, total);
    }

    return uploadedImages;
}