import {Timestamp} from "firebase/firestore"

export interface PropertyDashboardState {
    loading: boolean;
    error: string | null;
}
export interface Room {
    roomId: string;

    // Relationships
    propertyId: string;
    propertyName: string;
    ownerId: string;

    // Basic Info
    roomNumber: string;

    // Pricing
    rent: number;

    // Status
    status: "available" | "occupied" | "maintenance";

    // Metadata
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
export interface PropertyTab {
    propertyId: string;
    propertyName: string;
    roomCount: number;
}