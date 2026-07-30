import {
    doc,
    getDoc,
    updateDoc,
} from "firebase/firestore";

import { db } from "./firebase";

import { UserData } from "@/types/user";

/* -------------------------------------------------------------------------- */
/*                              Get User Data                                 */
/* -------------------------------------------------------------------------- */

export const getUserData = async (
    uid: string
): Promise<UserData | null> => {
    const userRef = doc(
        db,
        "users",
        uid
    );

    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
        return null;
    }

    return snapshot.data() as UserData;
};

/* -------------------------------------------------------------------------- */
/*                            Update User Data                                */
/* -------------------------------------------------------------------------- */

export const updateUserData = async (
    uid: string,
    data: Partial<UserData>
): Promise<void> => {
    const userRef = doc(
        db,
        "users",
        uid
    );

    await updateDoc(
        userRef,
        data
    );
};

/* -------------------------------------------------------------------------- */
/*                            Update User Role                                */
/* -------------------------------------------------------------------------- */

export const updateUserRole = async (
    uid: string,
    role: UserData["role"]
): Promise<void> => {
    const userRef = doc(
        db,
        "users",
        uid
    );

    await updateDoc(userRef, {
        role,
    });
};

/* -------------------------------------------------------------------------- */
/*                       Update Profile Completion                            */
/* -------------------------------------------------------------------------- */

export const updateProfileCompletion = async (
    uid: string,
    profileComplete: boolean
): Promise<void> => {
    const userRef = doc(
        db,
        "users",
        uid
    );

    await updateDoc(userRef, {
        profileComplete,
    });
};