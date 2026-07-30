import {
    Amenity,
    BathroomType,
    BedType,
    BillingType,
    FurnishingType,
    GenderPreference,
    KitchenType,
    RoomStatus,
    RoomType,
} from "@/types/roomTypes";

/* ==========================================================
   Room Types
========================================================== */

export const ROOM_TYPES: RoomType[] = [
    "single",
    "double",
    "triple",
    "dormitory",
    "studio",
    "suite",
];

/* ==========================================================
   Room Status
========================================================== */

export const ROOM_STATUSES: RoomStatus[] = [
    "available",
    "occupied",
    "maintenance",
];

/* ==========================================================
   Furnishing
========================================================== */

export const FURNISHING_TYPES: FurnishingType[] = [
    "unfurnished",
    "semi-furnished",
    "fully-furnished",
];

/* ==========================================================
   Billing
========================================================== */

export const BILLING_TYPES: BillingType[] = [
    "daily",
    "weekly",
    "monthly",
];

/* ==========================================================
   Bed Types
========================================================== */

export const BED_TYPES: BedType[] = [
    "single",
    "double",
    "queen",
    "king",
    "bunk",
];

/* ==========================================================
   Bathroom
========================================================== */

export const BATHROOM_TYPES: BathroomType[] = [
    "private",
    "shared",
];

/* ==========================================================
   Kitchen
========================================================== */

export const KITCHEN_TYPES: KitchenType[] = [
    "none",
    "shared",
    "private",
];

/* ==========================================================
   Gender Preference
========================================================== */

export const GENDER_PREFERENCES: GenderPreference[] = [
    "male",
    "female",
    "any",
];

/* ==========================================================
   Amenities
========================================================== */

export const AMENITIES: Amenity[] = [
    "wifi",
    "ac",
    "fan",
    "tv",
    "wardrobe",
    "studyTable",
    "desk",
    "chair",
    "geyser",
    "refrigerator",
    "washingMachine",
    "laundry",
    "parking",
    "balcony",
    "lift",
    "powerBackup",
    "cctv",
    "housekeeping",
    "kitchenAppliances",
];

/* ==========================================================
   Image Constraints
========================================================== */

export const MIN_ROOM_IMAGES = 2;

export const MAX_ROOM_IMAGES = 10;

export const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10 MB

export const ALLOWED_IMAGE_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
];

/* ==========================================================
   Room Constraints
========================================================== */

export const MIN_RENT = 1;

export const MIN_SECURITY_DEPOSIT = 0;

export const MIN_MAINTENANCE_CHARGE = 0;

export const MIN_AREA = 1;

export const MIN_FLOOR = 0;

export const MAX_ADULT_CAPACITY = 20;

export const MAX_CHILD_CAPACITY = 20;

export const MINIMUM_STAY = 1;

export const MAXIMUM_STAY = 365;