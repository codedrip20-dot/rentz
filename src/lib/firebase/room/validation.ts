// src/lib/firebase/room/validation.ts

import { Room } from "@/types/roomTypes";

/* ============================================================================
   Basic Information
============================================================================ */

export function validateBasicInformation(
    room: Room
): string | null {
    if (!room.roomName.trim()) {
        return "Room name is required.";
    }

    if (!room.roomNumber.trim()) {
        return "Room number is required.";
    }

    if (!room.propertyId.trim()) {
        return "Property ID is required.";
    }

    if (!room.ownerId.trim()) {
        return "Owner ID is required.";
    }

    if (room.floor < 0) {
        return "Floor cannot be negative.";
    }

    if (room.area <= 0) {
        return "Room area must be greater than 0.";
    }

    if (room.bathrooms < 1) {
        return "A room must have at least one bathroom.";
    }

    return null;
}

/* ============================================================================
   Capacity
============================================================================ */

export function validateCapacity(
    room: Room
): string | null {
    if (room.capacity.adults < 1) {
        return "At least one adult is required.";
    }

    if (room.capacity.children < 0) {
        return "Children capacity cannot be negative.";
    }

    return null;
}

/* ============================================================================
   Pricing
============================================================================ */

export function validatePricing(
    room: Room
): string | null {
    const pricing = room.pricing;

    if (pricing.rent <= 0) {
        return "Rent must be greater than zero.";
    }

    if (pricing.securityDeposit < 0) {
        return "Security deposit cannot be negative.";
    }

    if (pricing.maintenanceCharge < 0) {
        return "Maintenance charge cannot be negative.";
    }

    return null;
}

/* ============================================================================
   Amenities
============================================================================ */

export function validateAmenities(
    room: Room
): string | null {
    if (room.amenities.amenities.length === 0) {
        return "Please select at least one amenity.";
    }

    return null;
}

/* ============================================================================
   Availability
============================================================================ */

export function validateAvailability(
    room: Room
): string | null {
    const availability = room.availability;

    if (availability.minimumStay < 1) {
        return "Minimum stay must be at least 1.";
    }

    if (
        availability.maximumStay > 0 &&
        availability.minimumStay >
            availability.maximumStay
    ) {
        return "Minimum stay cannot exceed maximum stay.";
    }

    return null;
}

/* ============================================================================
   Images
============================================================================ */

export function validateImages(
    room: Room
): string | null {
    if (room.images.length < 2) {
        return "Please upload at least 2 images.";
    }

    if (room.images.length > 10) {
        return "Maximum 10 images are allowed.";
    }

    return null;
}

/* ============================================================================
   Complete Room Validation
============================================================================ */

export function validateRoom(
    room: Room
): string | null {
    return (
        validateBasicInformation(room) ||
        validateCapacity(room) ||
        validatePricing(room) ||
        validateAmenities(room) ||
        validateAvailability(room) ||
        validateImages(room)
    );
}