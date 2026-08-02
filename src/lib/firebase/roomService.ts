import {
    collection,
    getDocs,
    orderBy,
    query,
    where,
} from "firebase/firestore";

import { db } from "./firebase";

import { Room } from "@/types/roomTypes";

const ROOMS_COLLECTION = "rooms";

/**
 * Fetch all rooms that are available
 * for the marketplace.
 */
export async function getAvailableRooms(): Promise<Room[]> {
    try {
        const roomsRef = collection(db, ROOMS_COLLECTION);

        const roomsQuery = query(
            roomsRef,
            where("status", "==", "available"),
            orderBy("updatedAt", "desc")
        );

        const snapshot = await getDocs(roomsQuery);

        return snapshot.docs.map(
            (doc) => doc.data() as Room
        );
    } catch (error) {
        console.error(
            "[RoomService] Failed to fetch available rooms:",
            error
        );

        throw error;
    }
}