// src/hooks/useRoomImages.ts

import { useState } from "react";

import { RoomImage } from "@/types/roomTypes";

import { uploadRoomImages } from "@/lib/cloudinary/room/uploadRoomImages";
import { validateRoomImages } from "@/lib/cloudinary/room/validateRoomImages";
import { deleteRoomImage } from "@/lib/cloudinary/room/deleteRoomImage";
import { mapUploadedImageToRoomImage } from "@/lib/cloudinary/room/roomImageMapper";

export function useRoomImages(
    initialImages: RoomImage[] = [],
    onImagesChange?: (images: RoomImage[]) => void
) {
    const [images, setImages] = useState<RoomImage[]>(initialImages);

    const [uploading, setUploading] = useState(false);

    const [progress, setProgress] = useState(0);

    const [errors, setErrors] = useState<string[]>([]);

    /**
     * Upload Images
     */
    async function upload(files: File[]) {
        setErrors([]);

        const validation = validateRoomImages(
            files,
            images.length
        );

        if (!validation.valid) {
            setErrors(validation.errors);
            return;
        }

        try {
            setUploading(true);
            setProgress(0);

            const uploadedImages = await uploadRoomImages(
                files,
                {
                    onProgress(completed, total) {
                        setProgress(
                            Math.round(
                                (completed / total) * 100
                            )
                        );
                    },
                }
            );

            const mappedImages = uploadedImages.map(
                mapUploadedImageToRoomImage
            );

            const updatedImages = [
                ...images,
                ...mappedImages,
            ];

            setImages(updatedImages);

            onImagesChange?.(updatedImages);
        } catch (error) {
            console.error(error);

            setErrors([
                "Failed to upload room images.",
            ]);
        } finally {
            setUploading(false);
            setProgress(0);
        }
    }

    /**
     * Delete Image
     */
    async function remove(publicId: string) {
        try {
            await deleteRoomImage(publicId);

            const updatedImages = images.filter(
                (image) =>
                    image.publicId !== publicId
            );

            setImages(updatedImages);

            onImagesChange?.(updatedImages);
        } catch (error) {
            console.error(error);

            setErrors([
                "Failed to delete image.",
            ]);
        }
    }

    /**
     * Clear Errors
     */
    function clearErrors() {
        setErrors([]);
    }

    /**
     * Replace Images
     */
    function setRoomImages(
        roomImages: RoomImage[]
    ) {
        setImages(roomImages);

        onImagesChange?.(roomImages);
    }

    return {
        images,

        uploading,

        progress,

        errors,

        upload,

        remove,

        clearErrors,

        setRoomImages,
    };
}