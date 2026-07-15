import { Property } from "@/types/property";

export const initialProperty: Property = {
    ownerId: "",

    propertyType: "Apartment",

    status: "draft",

    location: {
        address: {
            street: "",
            area: "",
            city: "",
            state: "",
            country: "India",
            pincode: "",
        },

        coordinates: {
            latitude: 0,
            longitude: 0,
        },

        placeId: "",

        nearbyLandmark: "",

        directions: "",
    },

    details: {
        title: "",
        description: "",

        furnishing: "",

        builtUpArea: 0,

        carpetArea: 0,

        totalFloors: 0,

        floorNumber: 0,

        facing: "",
    },

    information: {
        pricing: {
            monthlyRent: 0,

            securityDeposit: 0,

            maintenanceCharge: 0,
        },

        availability: {
            availableFrom: "",

            leaseDuration: "",

            preferredTenant: "",
        },
    },

    images: [],

    createdAt: undefined,

    updatedAt: undefined,
};