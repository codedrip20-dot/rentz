import {
    doc,
    serverTimestamp,
    setDoc,
    updateDoc,
} from "firebase/firestore";

import { db } from "./firebase";

export interface RegisterOwnerData {
    uid: string;
    planId: string;
    transactionId: string;
}

export async function registerOwner({
    uid,
    planId,
    transactionId,
}: RegisterOwnerData) {
    try {
        const ownerRef = doc(db, "ownerProfiles", uid);
        const userRef = doc(db, "users", uid);

        const propertyLimit =
            planId === "basic"
                ? 1
                : planId === "pro"
                ? 3
                : 5;

        await setDoc(ownerRef, {
            uid,
            role: "owner",

            subscription: {
                planId,
                propertyLimit,
                active: true,
            },

            payment: {
                transactionId,
                status: "success",
            },

            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        });

        await updateDoc(userRef, {
            role: "owner",
            updatedAt: serverTimestamp(),
        });

        return {
            success: true,
        };
    } catch (error) {
        console.error("Owner registration failed:", error);

        return {
            success: false,
            error,
        };
    }
}