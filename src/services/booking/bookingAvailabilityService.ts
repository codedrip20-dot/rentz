// src/services/booking/bookingAvailabilityService.ts

import { Booking } from "@/types/bookingTypes";
import { Room } from "@/types/roomTypes";

/* ============================================================================
   Booking Availability Result
============================================================================ */

export interface BookingAvailabilityResult {
    available: boolean;

    reason?: string;
}

/* ============================================================================
   Booking Availability Service
============================================================================ */

class BookingAvailabilityService {
    /* ------------------------------------------------------------------------
       Check Room Availability
    ------------------------------------------------------------------------ */

    public isRoomAvailable(
        room: Room
    ): BookingAvailabilityResult {
        if (room.status !== "available") {
            return {
                available: false,
                reason: "Room is currently unavailable.",
            };
        }

        if (!room.availability.availableNow) {
            return {
                available: false,
                reason: "Room is not available for booking.",
            };
        }

        return {
            available: true,
        };
    }

    /* ------------------------------------------------------------------------
       Check Booking Date Conflict
    ------------------------------------------------------------------------ */

    public hasBookingConflict(
        bookings: Booking[],
        checkIn: Date,
        checkOut: Date
    ): BookingAvailabilityResult {
        const activeBookings = bookings.filter(
            (booking) =>
                booking.status === "confirmed" ||
                booking.status === "payment_pending"
        );

        for (const booking of activeBookings) {
            const existingCheckIn =
                booking.dates.checkIn.toDate();

            const existingCheckOut =
                booking.dates.checkOut.toDate();

            const hasConflict =
                checkIn < existingCheckOut &&
                checkOut > existingCheckIn;

            if (hasConflict) {
                return {
                    available: false,
                    reason:
                        "Selected dates are already booked.",
                };
            }
        }

        return {
            available: true,
        };
    }

    /* ------------------------------------------------------------------------
       Validate Booking Dates
    ------------------------------------------------------------------------ */

    public validateDates(
        checkIn: Date,
        checkOut: Date 
    ): BookingAvailabilityResult {
        const now = new Date();

        if (checkIn <= now) {
            return {
                available: false,
                reason:
                    "Check-in must be in the future.",
            };
        }

        if (checkOut <= checkIn) {
            return {
                available: false,
                reason:
                    "Check-out must be after check-in.",
            };
        }

        return {
            available: true,
        };
    }

    /* ------------------------------------------------------------------------
       Complete Availability Check
    ------------------------------------------------------------------------ */

    public canBookRoom(
        room: Room,
        bookings: Booking[],
        checkIn: Date,
        checkOut: Date
    ): BookingAvailabilityResult {
        const roomAvailability =
            this.isRoomAvailable(room);

        if (!roomAvailability.available) {
            return roomAvailability;
        }

        const dateValidation =
            this.validateDates(
                checkIn,
                checkOut
            );

        if (!dateValidation.available) {
            return dateValidation;
        }

        return this.hasBookingConflict(
            bookings,
            checkIn,
            checkOut
        );
    }
}

/* ============================================================================
   Export Singleton
============================================================================ */

export const bookingAvailabilityService =
    new BookingAvailabilityService();