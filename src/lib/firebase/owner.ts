import {
    doc,
    serverTimestamp,
    setDoc,
    updateDoc,
    getDoc
} from "firebase/firestore";

import {OwnerProfile} from "@/types/ownerProfile"
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


export async function getOwnerProfile(uid: string) {
    try {
        const ownerRef = doc(db, "ownerProfiles", uid);

        const ownerSnap = await getDoc(ownerRef);

        if (!ownerSnap.exists()) {
            return {
                success: false,
                error: "Owner profile not found",
            };
        }

        return {
            success: true,
            data: ownerSnap.data() as OwnerProfile,
        };
    } catch (error) {
        console.error("Failed to fetch owner profile:", error);

        return {
            success: false,
            error,
        };
    }
}
export async function isOwner(uid: string) {
    try {
        const ownerRef = doc(db, "ownerProfiles", uid);

        const ownerSnap = await getDoc(ownerRef);

        return ownerSnap.exists();
    } catch (error) {
        console.error("Failed to check owner status:", error);

        return false;
    }
}
export async function updateOwnerProfile(
    uid: string,
    data: Partial<OwnerProfile>
) {
    try {
        const ownerRef = doc(db, "ownerProfiles", uid);

        await updateDoc(ownerRef, {
            ...data,
            updatedAt: serverTimestamp(),
        });

        return {
            success: true,
        };
    } catch (error) {
        console.error("Failed to update owner profile:", error);

        return {
            success: false,
            error,
        };
    }
}