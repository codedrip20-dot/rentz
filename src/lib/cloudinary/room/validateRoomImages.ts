// src/lib/cloudinary/room/validateRoomImages.ts

import {
    ROOM_UPLOAD_CONFIG,
    ROOM_UPLOAD_ERRORS,
} from "./roomConstants";

export interface RoomImageValidationResult {
    valid: boolean;
    errors: string[];
}

/**
 * Validates selected room images before upload.
 */
export function validateRoomImages(
    files: File[],
    existingImages = 0
): RoomImageValidationResult {
    const errors: string[] = [];

    const totalImages = existingImages + files.length;

    /**
     * Minimum Image Count
     */
    if (totalImages < ROOM_UPLOAD_CONFIG.MIN_IMAGES) {
        errors.push(ROOM_UPLOAD_ERRORS.MIN_IMAGES);
    }

    /**
     * Maximum Image Count
     */
    if (totalImages > ROOM_UPLOAD_CONFIG.MAX_IMAGES) {
        errors.push(ROOM_UPLOAD_ERRORS.MAX_IMAGES);
    }

    /**
     * Validate Every File
     */
    for (const file of files) {
        /**
         * File Size
         */
        if (file.size > ROOM_UPLOAD_CONFIG.MAX_FILE_SIZE) {
            errors.push(
                `${file.name}: ${ROOM_UPLOAD_ERRORS.FILE_TOO_LARGE}`
            );
        }

        /**
         * File Type
         */
        if (
            !ROOM_UPLOAD_CONFIG.ALLOWED_TYPES.includes(
                file.type as (typeof ROOM_UPLOAD_CONFIG.ALLOWED_TYPES)[number]
            )
        ) {
            errors.push(
                `${file.name}: ${ROOM_UPLOAD_ERRORS.INVALID_TYPE}`
            );
        }
    }

    /**
     * Remove duplicate error messages.
     */
    const uniqueErrors = [...new Set(errors)];

    return {
        valid: uniqueErrors.length === 0,
        errors: uniqueErrors,
    };
}