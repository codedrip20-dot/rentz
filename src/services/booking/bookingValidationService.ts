import { Booking } from "@/types/bookingTypes";
import { Room } from "@/types/roomTypes";

import {
    BookingAvailabilityResult,
    bookingAvailabilityService,
} from "./bookingAvailabilityService";

/* ============================================================================
   Booking Validation Result
============================================================================ */

export interface BookingValidationResult {
    valid: boolean;

    message?: string;
}

/* ============================================================================
   Booking Validation Service
============================================================================ */

class BookingValidationService {
    /* ------------------------------------------------------------------------
       Validate Room
    ------------------------------------------------------------------------ */

    public validateRoom(
        room: Room | null
    ): BookingValidationResult {
        if (!room) {
            return {
                valid: false,
                message: "Room not found.",
            };
        }

        return {
            valid: true,
        };
    }

    /* ------------------------------------------------------------------------
       Validate Tenant
    ------------------------------------------------------------------------ */

    public validateTenant(
        tenantId: string,
        ownerId: string
    ): BookingValidationResult {
        if (!tenantId.trim()) {
            return {
                valid: false,
                message: "Tenant is required.",
            };
        }

        if (tenantId === ownerId) {
            return {
                valid: false,
                message:
                    "Owners cannot book their own rooms.",
            };
        }

        return {
            valid: true,
        };
    }

    /* ------------------------------------------------------------------------
       Validate Occupancy
    ------------------------------------------------------------------------ */

    public validateOccupancy(
        adults: number,
        children: number,
        room: Room
    ): BookingValidationResult {
        const totalGuests =
            adults + children;

        if (totalGuests <= 0) {
            return {
                valid: false,
                message:
                    "At least one guest is required.",
            };
        }

        const maxGuests =
            room.capacity.adults +
            room.capacity.children;

        if (totalGuests > maxGuests) {
            return {
                valid: false,
                message:
                    "Guest count exceeds room capacity.",
            };
        }

        return {
            valid: true,
        };
    }

    /* ------------------------------------------------------------------------
       Validate Existing Booking
    ------------------------------------------------------------------------ */

    public validateExistingBooking(
        bookings: Booking[],
        tenantId: string
    ): BookingValidationResult {
        const activeBooking = bookings.find(
            (booking) =>
                booking.tenantId === tenantId &&
                booking.status !== "cancelled" &&
                booking.status !== "completed" &&
                booking.status !== "rejected"
        );

        if (activeBooking) {
            return {
                valid: false,
                message:
                    "You already have an active booking for this room.",
            };
        }

        return {
            valid: true,
        };
    }

    /* ------------------------------------------------------------------------
       Validate Booking Request
    ------------------------------------------------------------------------ */

    public validateBooking(
        room: Room | null,
        bookings: Booking[],
        tenantId: string,
        checkIn: Date,
        checkOut: Date,
        adults: number,
        children: number
    ): BookingValidationResult {
        const roomValidation =
            this.validateRoom(room);

        if (!roomValidation.valid) {
            return roomValidation;
        }

        // Room is guaranteed to exist after validation
        const validatedRoom = room as Room;

        const tenantValidation =
            this.validateTenant(
                tenantId,
                validatedRoom.ownerId
            );

        if (!tenantValidation.valid) {
            return tenantValidation;
        }

        const occupancyValidation =
            this.validateOccupancy(
                adults,
                children,
                validatedRoom
            );

        if (!occupancyValidation.valid) {
            return occupancyValidation;
        }

        const existingBookingValidation =
            this.validateExistingBooking(
                bookings,
                tenantId
            );

        if (
            !existingBookingValidation.valid
        ) {
            return existingBookingValidation;
        }

        const availability: BookingAvailabilityResult =
            bookingAvailabilityService.canBookRoom(
                validatedRoom,
                bookings,
                checkIn,
                checkOut
            );

        if (!availability.available) {
            return {
                valid: false,
                message:
                    availability.reason,
            };
        }

        return {
            valid: true,
        };
    }
}

/* ============================================================================
   Export Singleton
============================================================================ */

export const bookingValidationService =
    new BookingValidationService();