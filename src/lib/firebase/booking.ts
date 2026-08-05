// src/lib/firebase/booking.ts

import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    serverTimestamp,
    updateDoc,
    deleteDoc,
    where,
} from "firebase/firestore";

import { db } from "./firebase";

import { Booking } from "@/types/bookingTypes";

const bookingsCollection = collection(db, "bookings");

/* ============================================================================
   Types
============================================================================ */

export type CreateBookingInput = Omit<
    Booking,
    "bookingId" | "createdAt" | "updatedAt"
>;

/* ============================================================================
   Create Booking
============================================================================ */

export async function createBooking(
    booking: CreateBookingInput
): Promise<Booking> {
    try {
        const bookingRef = await addDoc(bookingsCollection, {
            ...booking,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        });

        await updateDoc(bookingRef, {
            bookingId: bookingRef.id,
        });

        const snapshot = await getDoc(bookingRef);

        return snapshot.data() as Booking;
    } catch (error) {
        console.error("Error creating booking:", error);

        throw error;
    }
}

/* ============================================================================
   Get Booking
============================================================================ */

export async function getBooking(
    bookingId: string
): Promise<Booking | null> {
    try {
        const bookingRef = doc(db, "bookings", bookingId);

        const snapshot = await getDoc(bookingRef);

        if (!snapshot.exists()) {
            return null;
        }

        return snapshot.data() as Booking;
    } catch (error) {
        console.error("Error getting booking:", error);

        throw error;
    }
}

/* ============================================================================
   Booking Exists
============================================================================ */

export async function bookingExists(
    bookingId: string
): Promise<boolean> {
    try {
        const bookingRef = doc(db, "bookings", bookingId);

        const snapshot = await getDoc(bookingRef);

        return snapshot.exists();
    } catch (error) {
        console.error("Error checking booking:", error);

        throw error;
    }
}

/* ============================================================================
   Get Bookings By Tenant
============================================================================ */

export async function getBookingsByTenant(
    tenantId: string
): Promise<Booking[]> {
    try {
        const q = query(
            bookingsCollection,
            where("tenantId", "==", tenantId),
            orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        return snapshot.docs.map(
            (doc) => doc.data() as Booking
        );
    } catch (error) {
        console.error(
            "Error fetching tenant bookings:",
            error
        );

        throw error;
    }
}
/* ============================================================================
   Get Bookings By Owner
============================================================================ */

export async function getBookingsByOwner(
    ownerId: string
): Promise<Booking[]> {
    try {
        const q = query(
            bookingsCollection,
            where("ownerId", "==", ownerId),
            orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        return snapshot.docs.map(
            (doc) => doc.data() as Booking
        );
    } catch (error) {
        console.error(
            "Error fetching owner bookings:",
            error
        );

        throw error;
    }
}

/* ============================================================================
   Get Bookings By Room
============================================================================ */

export async function getBookingsByRoom(
    roomId: string
): Promise<Booking[]> {
    try {
        const q = query(
            bookingsCollection,
            where("roomId", "==", roomId),
            orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        return snapshot.docs.map(
            (doc) => doc.data() as Booking
        );
    } catch (error) {
        console.error(
            "Error fetching room bookings:",
            error
        );

        throw error;
    }
}

/* ============================================================================
   Update Booking
============================================================================ */

export async function updateBooking(
    bookingId: string,
    updates: Partial<CreateBookingInput>
): Promise<void> {
    try {
        const bookingRef = doc(
            db,
            "bookings",
            bookingId
        );

        await updateDoc(bookingRef, {
            ...updates,
            updatedAt: serverTimestamp(),
        });
    } catch (error) {
        console.error(
            "Error updating booking:",
            error
        );

        throw error;
    }
}

/* ============================================================================
   Update Booking Status
============================================================================ */

export async function updateBookingStatus(
    bookingId: string,
    status: Booking["status"]
): Promise<void> {
    try {
        const bookingRef = doc(
            db,
            "bookings",
            bookingId
        );

        await updateDoc(bookingRef, {
            status,
            updatedAt: serverTimestamp(),
        });
    } catch (error) {
        console.error(
            "Error updating booking status:",
            error
        );

        throw error;
    }
}

/* ============================================================================
   Update Payment
============================================================================ */

export async function updatePayment(
    bookingId: string,
    payment: Booking["payment"]
): Promise<void> {
    try {
        const bookingRef = doc(
            db,
            "bookings",
            bookingId
        );

        await updateDoc(bookingRef, {
            payment,
            updatedAt: serverTimestamp(),
        });
    } catch (error) {
        console.error(
            "Error updating booking payment:",
            error
        );

        throw error;
    }
}

/* ============================================================================
   Delete Booking
============================================================================ */

export async function deleteBooking(
    bookingId: string
): Promise<void> {
    try {
        const bookingRef = doc(
            db,
            "bookings",
            bookingId
        );

        await deleteDoc(bookingRef);
    } catch (error) {
        console.error(
            "Error deleting booking:",
            error
        );

        throw error;
    }
}