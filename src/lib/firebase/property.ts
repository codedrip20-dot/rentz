import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    serverTimestamp,
    setDoc,
    updateDoc,
    where,
} from "firebase/firestore";

import { db } from "./firebase";

import { Property } from "@/types/property";

/* -------------------------------------------------------------------------- */
/*                           Collection Reference                             */
/* -------------------------------------------------------------------------- */

const propertiesCollection = collection(db, "properties");

/* -------------------------------------------------------------------------- */
/*                              Create Property                               */
/* -------------------------------------------------------------------------- */

export const createProperty = async (
    property: Property
): Promise<string> => {
    try {
        const propertyRef = doc(propertiesCollection);

        await setDoc(propertyRef, {
            ...property,
            id: propertyRef.id,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        });

        return propertyRef.id;
    } catch (error) {
        console.error("Failed to create property:", error);

        throw new Error("Unable to create property.");
    }
};

/* -------------------------------------------------------------------------- */
/*                               Get Property                                 */
/* -------------------------------------------------------------------------- */

export const getProperty = async (
    propertyId: string
): Promise<Property | null> => {
    try {
        const snapshot = await getDoc(doc(db, "properties", propertyId));

        if (!snapshot.exists()) {
            return null;
        }

        return snapshot.data() as Property;
    } catch (error) {
        console.error("Failed to get property:", error);

        throw new Error("Unable to fetch property.");
    }
};

/* -------------------------------------------------------------------------- */
/*                           Property Exists                                  */
/* -------------------------------------------------------------------------- */

export const propertyExists = async (
    propertyId: string
): Promise<boolean> => {
    try {
        const snapshot = await getDoc(doc(db, "properties", propertyId));

        return snapshot.exists();
    } catch (error) {
        console.error("Failed to check property:", error);

        throw new Error("Unable to verify property.");
    }
};

/* -------------------------------------------------------------------------- */
/*                              Update Property                               */
/* -------------------------------------------------------------------------- */

export const updateProperty = async (
    propertyId: string,
    data: Partial<Property>
): Promise<void> => {
    try {
        await updateDoc(doc(db, "properties", propertyId), {
            ...data,
            updatedAt: serverTimestamp(),
        });
    } catch (error) {
        console.error("Failed to update property:", error);

        throw new Error("Unable to update property.");
    }
};

/* -------------------------------------------------------------------------- */
/*                              Delete Property                               */
/* -------------------------------------------------------------------------- */

export const deleteProperty = async (
    propertyId: string
): Promise<void> => {
    try {
        await deleteDoc(doc(db, "properties", propertyId));
    } catch (error) {
        console.error("Failed to delete property:", error);

        throw new Error("Unable to delete property.");
    }
};

/* -------------------------------------------------------------------------- */
/*                         Get Owner Properties                               */
/* -------------------------------------------------------------------------- */

export const getOwnerProperties = async (
    ownerId: string
): Promise<Property[]> => {
    try {
        const q = query(
            propertiesCollection,
            where("ownerId", "==", ownerId),
            orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc) => ({
            ...(doc.data() as Property),
            id: doc.id,
        }));
    } catch (error) {
        console.error("Failed to fetch owner properties:", error);

        throw new Error("Unable to fetch owner properties.");
    }
};