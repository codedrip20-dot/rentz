// src/lib/firebase/room/roomMapper.ts

import { serverTimestamp } from "firebase/firestore";

import { Room } from "@/types/roomTypes";

/* ============================================================================
   Create Room Mapper
============================================================================ */

export function mapRoomForCreate(room: Room) {
    return {
        roomId: room.roomId,

        // Relationships
        propertyId: room.propertyId.trim(),
        ownerId: room.ownerId.trim(),

        // Basic Information
        roomName: room.roomName.trim(),
        roomNumber: room.roomNumber.trim(),
        roomType: room.roomType,

        floor: room.floor,
        area: room.area,

        capacity: {
            ...room.capacity,
        },

        bedType: room.bedType,

        bathrooms: room.bathrooms,
        bathroomType: room.bathroomType,

        kitchen: room.kitchen,

        furnishing: room.furnishing,

        genderPreference: room.genderPreference,

        // Pricing
        pricing: {
            ...room.pricing,
        },

        // Amenities
        amenities: {
            ...room.amenities,
        },

        // Images
        images: [...room.images],

        // Availability
        availability: {
            ...room.availability,
        },

        // Status
        status: room.status,

        // Metadata
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
    };
}

/* ============================================================================
   Update Room Mapper
============================================================================ */

export function mapRoomForUpdate(room: Room) {
    return {
        roomId: room.roomId,

        propertyId: room.propertyId.trim(),
        ownerId: room.ownerId.trim(),

        roomName: room.roomName.trim(),
        roomNumber: room.roomNumber.trim(),
        roomType: room.roomType,

        floor: room.floor,
        area: room.area,

        capacity: {
            ...room.capacity,
        },

        bedType: room.bedType,

        bathrooms: room.bathrooms,
        bathroomType: room.bathroomType,

        kitchen: room.kitchen,

        furnishing: room.furnishing,

        genderPreference: room.genderPreference,

        pricing: {
            ...room.pricing,
        },

        amenities: {
            ...room.amenities,
        },

        images: [...room.images],

        availability: {
            ...room.availability,
        },

        status: room.status,

        updatedAt: serverTimestamp(),
    };
}