// src/lib/firebase/room/room.ts

import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    serverTimestamp,
    updateDoc,
    where,
} from "firebase/firestore";

import { db } from "./firebase";

import { Room } from "@/types/roomTypes";


const roomsCollection = collection(db, "rooms");

/* ============================================================================
   Types
============================================================================ */

export type CreateRoomInput = Omit<
    Room,
    "roomId" | "createdAt" | "updatedAt"
>;

/* ============================================================================
   Create Room
============================================================================ */

export async function createRoom(
    room: CreateRoomInput
): Promise<Room> {
    try {
        const roomRef = await addDoc(roomsCollection, {
            ...room,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        });

        await updateDoc(roomRef, {
            roomId: roomRef.id,
        });

        const snapshot = await getDoc(roomRef);

        return snapshot.data() as Room;
    } catch (error) {
        console.error("Error creating room:", error);
        throw error;
    }
}

/* ============================================================================
   Get Room
============================================================================ */

export async function getRoom(
    roomId: string
): Promise<Room | null> {
    try {
        const roomRef = doc(db, "rooms", roomId);

        const snapshot = await getDoc(roomRef);

        if (!snapshot.exists()) {
            return null;
        }

        return snapshot.data() as Room;
    } catch (error) {
        console.error("Error getting room:", error);
        throw error;
    }
}

/* ============================================================================
   Get Rooms By Property
============================================================================ */

export async function getRoomsByPropertyId(
    propertyId: string
): Promise<Room[]> {
    try {
        const q = query(
            roomsCollection,
            where("propertyId", "==", propertyId),
            orderBy("roomNumber", "asc")
        );

        const snapshot = await getDocs(q);

        return snapshot.docs.map(
            (doc) => doc.data() as Room
        );
    } catch (error) {
        console.error(
            "Error fetching property rooms:",
            error
        );
        throw error;
    }
}

/* ============================================================================
   Get Rooms By Owner
============================================================================ */

export async function getRoomsByOwner(
    ownerId: string
): Promise<Room[]> {
    try {
        const q = query(
            roomsCollection,
            where("ownerId", "==", ownerId),
            orderBy("roomName", "asc")
        );

        const snapshot = await getDocs(q);

        return snapshot.docs.map(
            (doc) => doc.data() as Room
        );
    } catch (error) {
        console.error(
            "Error fetching owner rooms:",
            error
        );
        throw error;
    }
}

/* ============================================================================
   Update Room
============================================================================ */

export async function updateRoom(
    roomId: string,
    updates: Partial<CreateRoomInput>
): Promise<void> {
    try {
        const roomRef = doc(db, "rooms", roomId);

        await updateDoc(roomRef, {
            ...updates,
            updatedAt: serverTimestamp(),
        });
    } catch (error) {
        console.error("Error updating room:", error);
        throw error;
    }
}

/* ============================================================================
   Update Room Images
============================================================================ */

export async function updateRoomImages(
    roomId: string,
    images: Room["images"]
): Promise<void> {
    try {
        const roomRef = doc(db, "rooms", roomId);

        await updateDoc(roomRef, {
            images,
            updatedAt: serverTimestamp(),
        });
    } catch (error) {
        console.error(
            "Error updating room images:",
            error
        );
        throw error;
    }
}

/* ============================================================================
   Update Room Availability
============================================================================ */

/* ============================================================================
   Update Room Availability
============================================================================ */

export async function updateRoomAvailability(
    roomId: string,
    updatedAvailability: Room["availability"]
): Promise<void> {
    try {
        if (!roomId) {
            throw new Error("Room ID is required.");
        }

        const roomRef = doc(db, "rooms", roomId);

        await updateDoc(roomRef, {
            availability: updatedAvailability,
            updatedAt: serverTimestamp(),
        });
    } catch (error) {
        console.error(
            "Error updating room availability:",
            error
        );

        throw error;
    }
}
/* ============================================================================
   Update Room Status
============================================================================ */

export async function updateRoomStatus(
    roomId: string,
    status: Room["status"]
): Promise<void> {
    try {
        const roomRef = doc(db, "rooms", roomId);

        await updateDoc(roomRef, {
            status,
            updatedAt: serverTimestamp(),
        });
    } catch (error) {
        console.error(
            "Error updating room status:",
            error
        );
        throw error;
    }
}

/* ============================================================================
   Delete Room
============================================================================ */

export async function deleteRoom(
    roomId: string
): Promise<void> {
    try {
        const roomRef = doc(db, "rooms", roomId);

        await deleteDoc(roomRef);
    } catch (error) {
        console.error("Error deleting room:", error);
        throw error;
    }
}