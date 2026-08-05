// src/services/roomDisplay/roomDisplayBookingService.ts

import { getBookingsByRoom } from "@/lib/firebase/booking";

import { bookingAvailabilityService } from "@/services/booking/bookingAvailabilityService";

import {
    RoomDisplayBooking,
} from "@/types/roomDisplayTypes";

import { Room } from "@/types/roomTypes";

/* ==========================================================
   Get Room Display Booking
========================================================== */

export async function getRoomDisplayBooking(
    room: Room
): Promise<RoomDisplayBooking> {
    try {
        const bookings =
            await getBookingsByRoom(
                room.roomId
            );

        const availability =
            bookingAvailabilityService.isRoomAvailable(
                room
            );

        return {
            canBook:
                availability.available,

            bookingEnabled:
                availability.available,

            paymentRequired:
                bookings.length > 0,
        };
    } catch (error) {
        console.error(
            "Failed to build booking display:",
            error
        );

        return {
            canBook: false,

            bookingEnabled: false,

            paymentRequired: false,
        };
    }
}