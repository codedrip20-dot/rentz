import { Timestamp } from "firebase/firestore";

/* ==========================================================
   Room Status
========================================================== */

export type RoomStatus =
    | "available"
    | "occupied"
    | "maintenance";

/* ==========================================================
   Room Type
========================================================== */

export type RoomType =
    | "single"
    | "double"
    | "triple"
    | "dormitory"
    | "studio"
    | "suite";

/* ==========================================================
   Furnishing
========================================================== */

export type FurnishingType =
    | "unfurnished"
    | "semi-furnished"
    | "fully-furnished";

/* ==========================================================
   Billing
========================================================== */

export type BillingType =
    | "daily"
    | "weekly"
    | "monthly";

/* ==========================================================
   Bed Type
========================================================== */

export type BedType =
    | "single"
    | "double"
    | "queen"
    | "king"
    | "bunk";

/* ==========================================================
   Bathroom
========================================================== */

export type BathroomType =
    | "private"
    | "shared";

/* ==========================================================
   Kitchen
========================================================== */

export type KitchenType =
    | "none"
    | "shared"
    | "private";

/* ==========================================================
   Gender Preference
========================================================== */

export type GenderPreference =
    | "male"
    | "female"
    | "any";

/* ==========================================================
   Amenities
========================================================== */

export type Amenity =
    | "wifi"
    | "ac"
    | "fan"
    | "tv"
    | "wardrobe"
    | "studyTable"
    | "desk"
    | "chair"
    | "geyser"
    | "refrigerator"
    | "washingMachine"
    | "laundry"
    | "parking"
    | "balcony"
    | "lift"
    | "powerBackup"
    | "cctv"
    | "housekeeping"
    | "kitchenAppliances";

/* ==========================================================
   Images
========================================================== */

export interface RoomImage {
    url: string;
    publicId: string;
    width: number;
    height: number;
}

/* ==========================================================
   Capacity
========================================================== */

export interface RoomCapacity {
    adults: number;
    children: number;
}

/* ==========================================================
   Pricing
========================================================== */

export interface RoomPricing {
    rent: number;
    securityDeposit: number;
    maintenanceCharge: number;

    billingType: BillingType;

    electricityIncluded: boolean;
    waterIncluded: boolean;
}

/* ==========================================================
   Amenities Object
========================================================== */

export interface RoomAmenities {
    amenities: Amenity[];
}

/* ==========================================================
   Availability
========================================================== */

export interface RoomAvailability {
    availableNow: boolean;

    availableFrom: Timestamp | null;

    minimumStay: number;

    maximumStay: number;
}

/* ==========================================================
   Main Room Interface
========================================================== */

export interface Room {
    roomId: string;

    // Relationships
    propertyId: string;
    ownerId: string;
    propertyName: string;

    // Basic Information
    roomName: string;
    roomNumber: string;

    roomType: RoomType;

    floor: number;

    area: number;

    capacity: RoomCapacity;

    bedType: BedType;

    bathrooms: number;
    bathroomType: BathroomType;

    kitchen: KitchenType;

    furnishing: FurnishingType;

    genderPreference: GenderPreference;

    // Pricing
    pricing: RoomPricing;

    // Amenities
    amenities: RoomAmenities;

    // Images
    images: RoomImage[];

    // Availability
    availability: RoomAvailability;

    // Status
    status: RoomStatus;

    // Metadata
    createdAt: Timestamp | null;
    updatedAt: Timestamp | null;
}