import { OwnerProfile } from "./ownerProfile";
import { Property } from "./property";
import { Room } from "./roomTypes";

/* ==========================================================
   Room Display Owner
========================================================== */

export interface RoomDisplayOwner {
    profile: OwnerProfile;
}

/* ==========================================================
   Room Display Recommendations
========================================================== */

export interface RoomDisplayRecommendations {
    rooms: Room[];
}

/* ==========================================================
   Room Display Booking
========================================================== */

export interface RoomDisplayBooking {
    canBook: boolean;

    bookingEnabled: boolean;

    paymentRequired: boolean;
}

/* ==========================================================
   Room Display Reviews
========================================================== */

export interface RoomDisplayReviews {
    totalReviews: number;

    averageRating: number;
}

/* ==========================================================
   Room Display Data
========================================================== */

export interface RoomDisplayData {
    room: Room;

    property: Property;

    owner: RoomDisplayOwner;

    recommendations: RoomDisplayRecommendations;

    booking: RoomDisplayBooking;

    reviews?: RoomDisplayReviews;
}