import {
    collection,
    documentId,
    getDocs,
    query,
    where,
} from "firebase/firestore";

import { db } from "./firebase";

import { Property } from "@/types/property";

const PROPERTIES_COLLECTION = "properties";

/* ==========================================================
   Get Properties By IDs
========================================================== */

export async function getPropertiesByIds(
    propertyIds: string[]
): Promise<
    Record<
        string,
        Pick<Property, "location" | "propertyType">
    >
> {
    try {
        if (propertyIds.length === 0) {
            return {};
        }

        // Firestore "in" query supports max 10 values
        const ids = [...new Set(propertyIds)].slice(0, 10);

        const propertiesRef = collection(
            db,
            PROPERTIES_COLLECTION
        );

        const propertiesQuery = query(
            propertiesRef,
            where(documentId(), "in", ids)
        );

        const snapshot = await getDocs(
            propertiesQuery
        );

        const properties: Record<
            string,
            Pick<Property, "location" | "propertyType">
        > = {};

        snapshot.docs.forEach((doc) => {
            const property = doc.data() as Property;

            properties[doc.id] = {
                location: property.location,
                propertyType: property.propertyType,
            };
        });

        return properties;
    } catch (error) {
        console.error(
            "[PropertyService] Failed to fetch properties:",
            error
        );

        throw error;
    }
}

/* ==========================================================
   Get Single Property
========================================================== */

export async function getPropertyById(
    propertyId: string
): Promise<Property | null> {
    try {
        const properties = await getPropertiesByIds([
            propertyId,
        ]);

        if (!properties[propertyId]) {
            return null;
        }

        const propertyRef = collection(
            db,
            PROPERTIES_COLLECTION
        );

        const propertyQuery = query(
            propertyRef,
            where(documentId(), "==", propertyId)
        );

        const snapshot = await getDocs(
            propertyQuery
        );

        if (snapshot.empty) {
            return null;
        }

        return {
            id: snapshot.docs[0].id,
            ...(snapshot.docs[0].data() as Omit<
                Property,
                "id"
            >),
        };
    } catch (error) {
        console.error(
            "[PropertyService] Failed to fetch property:",
            error
        );

        throw error;
    }
}