/* ==========================================================
   Property Types
========================================================== */

export type PropertyType =
    | "Apartment"
    | "House"
    | "Villa"
    | "Hostel"
    | "Commercial"
    | "Office"
    | "Warehouse"
    | "Land";

export type PropertyStatus =
    | "draft"
    | "published"
    | "archived";

export type FurnishingType =
    | "Unfurnished"
    | "Semi Furnished"
    | "Fully Furnished";

export type ImageStatus =
    | "uploading"
    | "uploaded"
    | "failed";

/* ==========================================================
   Location
========================================================== */

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface Address {
    street: string;
    area: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
}

export interface Location {
    address: Address;

    coordinates: Coordinates;

    placeId: string;

    nearbyLandmark: string;

    directions: string;
}

/* ==========================================================
   Details
========================================================== */

export interface PropertyDetails {
    title: string;

    description: string;

    furnishing: FurnishingType;

    builtUpArea: number;

    carpetArea: number;

    totalFloors: number;

    floorNumber: number;

    facing: string;
}

/* ==========================================================
   Information
========================================================== */
export interface Information {

    amenities: BuildingAmenities;

    parking: Parking;

    utilities: Utilities;

    security: Security;

}
export interface BuildingAmenities {

    lift: boolean;

    gym: boolean;

    swimmingPool: boolean;

    garden: boolean;

    visitorParking: boolean;

}
export interface Parking {

    available: boolean;

    covered: boolean;

    open: boolean;

    totalSpaces: number;

}

export interface Utilities {

    powerBackup: boolean;

    waterSupply: boolean;

    internetReady: boolean;

    gasPipeline: boolean;

}

export interface Security {

    cctv: boolean;

    securityGuard: boolean;

    gatedCommunity: boolean;

    intercom: boolean;

    fireSafety: boolean;

}

/* ==========================================================
   Images
========================================================== */

export interface PropertyImage {
    id: string;

    url: string;

    publicId: string;

    isCover: boolean;

    status: ImageStatus;
}

/* ==========================================================
   Draft Progress
========================================================== */

export interface DraftProgress {
    location: boolean;

    details: boolean;

    information: boolean;

    images: boolean;
}

/* ==========================================================
   Main Property Interface
========================================================== */

export interface Property {
    id?: string;

    ownerId: string;

    propertyType: PropertyType;

    status: PropertyStatus;

    location: Location;

    details: PropertyDetails;

    information: Information;

    images: PropertyImage[];

    draftProgress: DraftProgress;

    createdAt?: Date;

    updatedAt?: Date;
}