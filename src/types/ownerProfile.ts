import { Timestamp } from "firebase/firestore";

export interface OwnerSubscription {
    active: boolean;
    planId: string;
    propertyLimit: number;
}

export interface OwnerPayment {
    status: string;
    transactionId: string;
}

export interface OwnerProfile {
    uid: string;

    role: "owner";

    subscription: OwnerSubscription;

    payment: OwnerPayment;

    createdAt: Timestamp;

    updatedAt: Timestamp;
}