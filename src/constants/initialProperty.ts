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

    amenities: {

        lift: false,

        gym: false,

        swimmingPool: false,

        garden: false,

        visitorParking: false,

    },

    parking: {

        available: false,

        covered: false,

        open: false,

        totalSpaces: 0,

    },

    utilities: {

        powerBackup: false,

        waterSupply: false,

        internetReady: false,

        gasPipeline: false,

    },

    security: {

        cctv: false,

        securityGuard: false,

        gatedCommunity: false,

        intercom: false,

        fireSafety: false,

    },

},

    images: [],

    createdAt: undefined,

    updatedAt: undefined,
};