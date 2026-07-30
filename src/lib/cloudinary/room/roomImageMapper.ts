// src/lib/cloudinary/room/roomImageMapper.ts

import { RoomImage } from "@/types/roomTypes";
import { UploadedRoomImage } from "./uploadRoomImage";

/**
 * Converts a Cloudinary uploaded image into a RoomImage.
 */
export function mapUploadedImageToRoomImage(
    image: UploadedRoomImage
): RoomImage {
    return {
        url: image.url,
        publicId: image.publicId,
        width: image.width,
        height: image.height,
    };
}

/**
 * Converts a RoomImage back into an UploadedRoomImage.
 */
export function mapRoomImageToUploadedImage(
    image: RoomImage
): UploadedRoomImage {
    return {
        url: image.url,
        publicId: image.publicId,
        width: image.width,
        height: image.height,
        format: "",
        bytes: 0,
    };
}