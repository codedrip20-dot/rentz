import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
    documentId,
    DocumentData,
} from "firebase/firestore";

import { db } from "@/lib/firebase/firebase";

import { Property } from "@/types/property";

/* ==========================================================
   Collection
========================================================== */

const PROPERTIES_COLLECTION = "properties";

/* ==========================================================
   Helpers
========================================================== */

function mapProperty(
    document: DocumentData
): Property {

    const data = document.data();

    return {

        id: document.id,

        ...data,

        createdAt:
            data.createdAt?.toDate?.() ??
            data.createdAt,

        updatedAt:
            data.updatedAt?.toDate?.() ??
            data.updatedAt,

    } as Property;

}

/* ==========================================================
   Get Property By Id
========================================================== */

export async function getPropertyById(
    propertyId: string
): Promise<Property | null> {

    try {

        const propertyRef = doc(
            db,
            PROPERTIES_COLLECTION,
            propertyId
        );

        const snapshot =
            await getDoc(propertyRef);

        if (!snapshot.exists()) {

            return null;

        }

        return mapProperty(snapshot);

    } catch (error) {

        console.error(
            "[PropertyService] Failed to fetch property:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Get All Properties
========================================================== */

export async function getAllProperties(): Promise<
    Property[]
> {

    try {

        const snapshot =
            await getDocs(
                collection(
                    db,
                    PROPERTIES_COLLECTION
                )
            );

        return snapshot.docs.map(
            mapProperty
        );

    } catch (error) {

        console.error(
            "[PropertyService] Failed to fetch properties:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Get Properties By Ids
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

        const snapshot =
            await getDocs(
                query(
                    collection(
                        db,
                        PROPERTIES_COLLECTION
                    ),
                    where(
                        documentId(),
                        "in",
                        propertyIds.slice(0, 10)
                    )
                )
            );

        const properties: Record<
            string,
            Pick<
                Property,
                "location" | "propertyType"
            >
        > = {};

        snapshot.docs.forEach(
            (document) => {

                const property =
                    mapProperty(
                        document
                    );

                properties[
                    document.id
                ] = {

                    location:
                        property.location,

                    propertyType:
                        property.propertyType,

                };

            }
        );

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
   Get Owner Properties
========================================================== */

export async function getOwnerProperties(
    ownerId: string
): Promise<Property[]> {

    try {

        const propertiesQuery = query(
            collection(
                db,
                PROPERTIES_COLLECTION
            ),
            where(
                "ownerId",
                "==",
                ownerId
            )
        );

        const snapshot =
            await getDocs(
                propertiesQuery
            );

        return snapshot.docs.map(
            mapProperty
        );

    } catch (error) {

        console.error(
            "[PropertyService] Failed to fetch owner properties:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Get Published Properties
========================================================== */

export async function getPublishedProperties(): Promise<
    Property[]
> {

    try {

        const propertiesQuery = query(
            collection(
                db,
                PROPERTIES_COLLECTION
            ),
            where(
                "status",
                "==",
                "published"
            )
        );

        const snapshot =
            await getDocs(
                propertiesQuery
            );

        return snapshot.docs.map(
            mapProperty
        );

    } catch (error) {

        console.error(
            "[PropertyService] Failed to fetch published properties:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Check Property Exists
========================================================== */

export async function propertyExists(
    propertyId: string
): Promise<boolean> {

    try {

        const property =
            await getPropertyById(
                propertyId
            );

        return property !== null;

    } catch (error) {

        console.error(
            "[PropertyService] Failed to check property existence:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Count Owner Properties
========================================================== */

export async function countOwnerProperties(
    ownerId: string
): Promise<number> {

    try {

        const properties =
            await getOwnerProperties(
                ownerId
            );

        return properties.length;

    } catch (error) {

        console.error(
            "[PropertyService] Failed to count owner properties:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Get Property Locations
========================================================== */

export async function getPropertyLocations(
    ownerId: string
): Promise<Property["location"][]> {

    try {

        const properties =
            await getOwnerProperties(
                ownerId
            );

        return properties.map(
            (
                property
            ) => property.location
        );

    } catch (error) {

        console.error(
            "[PropertyService] Failed to fetch property locations:",
            error
        );

        throw error;

    }

}
/* ==========================================================
   Search Properties
========================================================== */

export async function searchProperties(
    keyword: string
): Promise<Property[]> {

    try {

        const properties =
            await getPublishedProperties();

        const search =
            keyword
                .trim()
                .toLowerCase();

        return properties.filter(
            (property) => {

                const title =
                    property.details.title
                        ?.toLowerCase() ?? "";

                const city =
                    property.location.address.city
                        ?.toLowerCase() ?? "";

                const state =
                    property.location.address.state
                        ?.toLowerCase() ?? "";

                const country =
                    property.location.address.country
                        ?.toLowerCase() ?? "";

                return (

                    title.includes(search) ||

                    city.includes(search) ||

                    state.includes(search) ||

                    country.includes(search)

                );

            }
        );

    } catch (error) {

        console.error(
            "[PropertyService] Failed to search properties:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Get Property Types
========================================================== */

export async function getPropertyTypes(): Promise<
    string[]
> {

    try {

        const properties =
            await getPublishedProperties();

        return [

            ...new Set(

                properties.map(
                    (
                        property
                    ) => property.propertyType
                )

            ),

        ];

    } catch (error) {

        console.error(
            "[PropertyService] Failed to fetch property types:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Get Cities
========================================================== */

export async function getMarketplaceCities(): Promise<
    string[]
> {

    try {

        const properties =
            await getPublishedProperties();

        return [

            ...new Set(

                properties.map(
                    (
                        property
                    ) =>
                        property.location
                            .address.city
                )

            ),

        ].filter(Boolean);

    } catch (error) {

        console.error(
            "[PropertyService] Failed to fetch cities:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Get States
========================================================== */

export async function getMarketplaceStates(): Promise<
    string[]
> {

    try {

        const properties =
            await getPublishedProperties();

        return [

            ...new Set(

                properties.map(
                    (
                        property
                    ) =>
                        property.location
                            .address.state
                )

            ),

        ].filter(Boolean);

    } catch (error) {

        console.error(
            "[PropertyService] Failed to fetch states:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Get Countries
========================================================== */

export async function getMarketplaceCountries(): Promise<
    string[]
> {

    try {

        const properties =
            await getPublishedProperties();

        return [

            ...new Set(

                properties.map(
                    (
                        property
                    ) =>
                        property.location
                            .address.country
                )

            ),

        ].filter(Boolean);

    } catch (error) {

        console.error(
            "[PropertyService] Failed to fetch countries:",
            error
        );

        throw error;

    }

}