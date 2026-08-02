import { Property } from "@/types/property";
import { Room } from "@/types/roomTypes";

import {
    getAvailableRooms,
} from "./roomService";

import {
    getPropertiesByIds,
} from "./propertyService";

/* ==========================================================
   Marketplace Types
========================================================== */

export interface MarketplaceData {

    rooms: Room[];

    properties: Record<
        string,
        Pick<
            Property,
            "location" | "propertyType"
        >
    >;

}

/* ==========================================================
   Marketplace Service
========================================================== */

export async function getMarketplaceData(): Promise<MarketplaceData> {

    try {

        /* ==========================================
           Load Available Rooms
        ========================================== */

        const rooms =
            await getAvailableRooms();

        if (rooms.length === 0) {

            return {

                rooms: [],

                properties: {},

            };

        }

        /* ==========================================
           Extract Property Ids
        ========================================== */

        const propertyIds = [

            ...new Set(

                rooms.map(
                    (
                        room
                    ) => room.propertyId
                )

            ),

        ];

        /* ==========================================
           Load Related Properties
        ========================================== */

        const properties =
            await getPropertiesByIds(
                propertyIds
            );

        /* ==========================================
           Return Marketplace Data
        ========================================== */

        return {

            rooms,

            properties,

        };

    } catch (error) {

        console.error(

            "[MarketplaceService]",

            error

        );

        throw new Error(

            "Failed to load marketplace."

        );

    }

}