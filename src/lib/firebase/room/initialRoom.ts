import { Room } from "@/types/roomTypes";

export const initialRoom: Room = {
    // ==========================================================
    // Identity
    // ==========================================================

    roomId: "",

    // ==========================================================
    // Relationships
    // ==========================================================

    propertyId: "",
    propertyName: "",
    ownerId: "",
    tenantId: "",

    // ==========================================================
    // Basic Information
    // ==========================================================

    roomName: "",
    roomNumber: "",

    roomType: "single",

    floor: 0,
    area: 0,

    capacity: {
        adults: 1,
        children: 0,
    },

    bedType: "single",

    bathrooms: 1,
    bathroomType: "shared",

    kitchen: "none",

    furnishing: "unfurnished",

    genderPreference: "any",

    // ==========================================================
    // Pricing
    // ==========================================================

    pricing: {
        rent: 0,
        securityDeposit: 0,
        maintenanceCharge: 0,

        billingType: "monthly",

        electricityIncluded: false,
        waterIncluded: false,
    },

    // ==========================================================
    // Amenities
    // ==========================================================

    amenities: {
        amenities: [],
    },

    // ==========================================================
    // Images
    // ==========================================================

    images: [],

    // ==========================================================
    // Availability
    // ==========================================================

    availability: {
        availableNow: true,
        availableFrom: null,

        minimumStay: 1,
        maximumStay: 12,
    },

    // ==========================================================
    // Status
    // ==========================================================

    status: "available",

    // ==========================================================
    // Metadata
    // ==========================================================

    createdAt: null,
    updatedAt: null,
};