// src/lib/cloudinary/room/roomConstants.ts

/**
 * ============================================================================
 * Room Image Upload Configuration
 * ============================================================================
 */

export const ROOM_UPLOAD_CONFIG = {
    /**
     * Image Limits
     */
    MIN_IMAGES: 2,
    MAX_IMAGES: 10,

    /**
     * Maximum File Size (10 MB)
     */
    MAX_FILE_SIZE: 10 * 1024 * 1024,

    /**
     * Allowed Image Types
     */
    ALLOWED_TYPES: [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
    ] as const,

    /**
     * Cloudinary Folder
     */
    FOLDER: "rentz/rooms",

    /**
     * Cloudinary Optimizations
     */
    QUALITY: "auto",
    FORMAT: "auto",
    FETCH_FORMAT: "auto",

    /**
     * Maximum Images Uploaded At Once
     */
    MAX_BATCH_UPLOAD: 10,
} as const;

/**
 * ============================================================================
 * Room Image Upload Error Messages
 * ============================================================================
 */

export const ROOM_UPLOAD_ERRORS = {
    MIN_IMAGES: `Please upload at least ${ROOM_UPLOAD_CONFIG.MIN_IMAGES} room images.`,

    MAX_IMAGES: `You can upload a maximum of ${ROOM_UPLOAD_CONFIG.MAX_IMAGES} room images.`,

    FILE_TOO_LARGE: `Each image must be smaller than ${
        ROOM_UPLOAD_CONFIG.MAX_FILE_SIZE / (1024 * 1024)
    } MB.`,

    INVALID_TYPE:
        "Only JPG, JPEG, PNG, and WEBP image formats are supported.",

    UPLOAD_FAILED:
        "Failed to upload one or more room images. Please try again.",

    DELETE_FAILED:
        "Failed to delete the room image. Please try again.",

    NETWORK_ERROR:
        "Network error. Please check your internet connection.",

    UNKNOWN_ERROR:
        "Something went wrong while processing your images.",
} as const;
export {};