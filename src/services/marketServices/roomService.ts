import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
    QuerySnapshot,
    DocumentData,
} from "firebase/firestore";

import { db } from "@/lib/firebase/firebase";

import { Room } from "@/types/roomTypes";

/* ==========================================================
   Collection
========================================================== */

const ROOMS_COLLECTION = "rooms";

/* ==========================================================
   Helpers
========================================================== */

function mapRoom(
    document: DocumentData
): Room {

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

    } as Room;

}

/* ==========================================================
   Get Single Room
========================================================== */

export async function getRoomById(
    roomId: string
): Promise<Room | null> {

    try {

        const roomRef = doc(
            db,
            ROOMS_COLLECTION,
            roomId
        );

        const snapshot =
            await getDoc(roomRef);

        if (!snapshot.exists()) {

            return null;

        }

        return mapRoom(snapshot);

    } catch (error) {

        console.error(
            "[RoomService] Failed to fetch room:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Get All Rooms
========================================================== */

export async function getAllRooms(): Promise<
    Room[]
> {

    try {

        const snapshot =
            await getDocs(
                collection(
                    db,
                    ROOMS_COLLECTION
                )
            );

        return snapshot.docs.map(
            mapRoom
        );

    } catch (error) {

        console.error(
            "[RoomService] Failed to fetch rooms:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Get Available Rooms
========================================================== */

export async function getAvailableRooms(): Promise<
    Room[]
> {

    try {

        const roomsQuery = query(
            collection(
                db,
                ROOMS_COLLECTION
            ),
            where(
                "status",
                "==",
                "available"
            )
        );

        const snapshot =
            await getDocs(
                roomsQuery
            );

        return snapshot.docs.map(
            mapRoom
        );

    } catch (error) {

        console.error(
            "[RoomService] Failed to fetch available rooms:",
            error
        );

        throw error;

    }

}

export async function getRoomsByPropertyId(
    propertyId: string
): Promise<Room[]> {

    try {

        const roomsQuery = query(
            collection(
                db,
                ROOMS_COLLECTION
            ),
            where(
                "propertyId",
                "==",
                propertyId
            )
        );

        const snapshot =
            await getDocs(
                roomsQuery
            );

        return snapshot.docs.map(
            mapRoom
        );

    } catch (error) {

        console.error(
            "[RoomService] Failed to fetch property rooms:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Get Rooms By Owner
========================================================== */

export async function getRoomsByOwnerId(
    ownerId: string
): Promise<Room[]> {

    try {

        const roomsQuery = query(
            collection(
                db,
                ROOMS_COLLECTION
            ),
            where(
                "ownerId",
                "==",
                ownerId
            )
        );

        const snapshot =
            await getDocs(
                roomsQuery
            );

        return snapshot.docs.map(
            mapRoom
        );

    } catch (error) {

        console.error(
            "[RoomService] Failed to fetch owner rooms:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Get Rooms By Ids
========================================================== */

export async function getRoomsByIds(
    roomIds: string[]
): Promise<Room[]> {

    try {

        if (roomIds.length === 0) {

            return [];

        }

        const rooms =
            await Promise.all(

                roomIds.map(
                    async (
                        roomId
                    ) =>
                        getRoomById(
                            roomId
                        )
                )

            );

        return rooms.filter(
            (
                room
            ): room is Room =>
                room !== null
        );

    } catch (error) {

        console.error(
            "[RoomService] Failed to fetch rooms by ids:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Get Available Rooms For Property
========================================================== */

export async function getAvailableRoomsByPropertyId(
    propertyId: string
): Promise<Room[]> {

    try {

        const roomsQuery = query(
            collection(
                db,
                ROOMS_COLLECTION
            ),
            where(
                "propertyId",
                "==",
                propertyId
            ),
            where(
                "status",
                "==",
                "available"
            )
        );

        const snapshot =
            await getDocs(
                roomsQuery
            );

        return snapshot.docs.map(
            mapRoom
        );

    } catch (error) {

        console.error(
            "[RoomService] Failed to fetch available property rooms:",
            error
        );

        throw error;

    }

}
/* ==========================================================
   Check Room Exists
========================================================== */

export async function roomExists(
    roomId: string
): Promise<boolean> {

    try {

        const room = await getRoomById(
            roomId
        );

        return room !== null;

    } catch (error) {

        console.error(
            "[RoomService] Failed to check room existence:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Count Available Rooms
========================================================== */

export async function countAvailableRooms(): Promise<number> {

    try {

        const rooms =
            await getAvailableRooms();

        return rooms.length;

    } catch (error) {

        console.error(
            "[RoomService] Failed to count available rooms:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Count Owner Rooms
========================================================== */

export async function countOwnerRooms(
    ownerId: string
): Promise<number> {

    try {

        const rooms =
            await getRoomsByOwnerId(
                ownerId
            );

        return rooms.length;

    } catch (error) {

        console.error(
            "[RoomService] Failed to count owner rooms:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Count Property Rooms
========================================================== */

export async function countPropertyRooms(
    propertyId: string
): Promise<number> {

    try {

        const rooms =
            await getRoomsByPropertyId(
                propertyId
            );

        return rooms.length;

    } catch (error) {

        console.error(
            "[RoomService] Failed to count property rooms:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Get Cheapest Available Room
========================================================== */

export async function getCheapestRoom(
    propertyId: string
): Promise<Room | null> {

    try {

        const rooms =
            await getAvailableRoomsByPropertyId(
                propertyId
            );

        if (rooms.length === 0) {

            return null;

        }

        return rooms.reduce(
            (lowest, room) =>

                room.pricing.rent <
                lowest.pricing.rent

                    ? room

                    : lowest
        );

    } catch (error) {

        console.error(
            "[RoomService] Failed to fetch cheapest room:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Get Highest Rent Room
========================================================== */

export async function getHighestRentRoom(
    propertyId: string
): Promise<Room | null> {

    try {

        const rooms =
            await getRoomsByPropertyId(
                propertyId
            );

        if (rooms.length === 0) {

            return null;

        }

        return rooms.reduce(
            (highest, room) =>

                room.pricing.rent >
                highest.pricing.rent

                    ? room

                    : highest
        );

    } catch (error) {

        console.error(
            "[RoomService] Failed to fetch highest rent room:",
            error
        );

        throw error;

    }

}

/* ==========================================================
   Search Rooms
========================================================== */

export async function searchRooms(
    keyword: string
): Promise<Room[]> {

    try {

        const rooms =
            await getAvailableRooms();

        const search =
            keyword.toLowerCase();

        return rooms.filter(
            (room) =>

                room.roomName
                    ?.toLowerCase()
                    .includes(search) ||

                room.roomNumber
                    ?.toLowerCase()
                    .includes(search)
        );

    } catch (error) {

        console.error(
            "[RoomService] Failed to search rooms:",
            error
        );

        throw error;

    }

}