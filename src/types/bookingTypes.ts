import { Timestamp } from "firebase/firestore";

/* ============================================================================
   Booking Status
============================================================================ */

export type BookingStatus =
    | "pending"
    | "payment_pending"
    | "confirmed"
    | "cancelled"
    | "completed"
    | "rejected";

/* ============================================================================
   Payment Status
============================================================================ */

export type PaymentStatus =
    | "pending"
    | "paid"
    | "failed"
    | "refunded";

/* ============================================================================
   Payment Method
============================================================================ */

export type PaymentMethod =
    | "cash"
    | "upi"
    | "card"
    | "netBanking"
    | "wallet";

/* ============================================================================
   Booking Dates
============================================================================ */

export interface BookingDates {
    checkIn: Timestamp;

    checkOut: Timestamp;
}

/* ============================================================================
   Booking Pricing
============================================================================ */

export interface BookingPricing {
    rent: number;

    securityDeposit: number;

    maintenanceCharge: number;

    totalAmount: number;
}

/* ============================================================================
   Booking Payment
============================================================================ */

export interface BookingPayment {
    paymentStatus: PaymentStatus;

    paymentMethod: PaymentMethod | null;

    transactionId: string | null;

    paidAt: Timestamp | null;
}

/* ============================================================================
   Booking Metadata
============================================================================ */

export interface BookingMetadata {
    specialRequest: string;

    adults: number;

    children: number;
}

/* ============================================================================
   Main Booking Interface
============================================================================ */

export interface Booking {
    bookingId: string;

    // Relationships
    roomId: string;

    propertyId: string;

    ownerId: string;

    tenantId: string;

    // Status
    status: BookingStatus;

    // Booking Information
    dates: BookingDates;

    pricing: BookingPricing;

    payment: BookingPayment;

    metadata: BookingMetadata;

    // Expiry
    expiresAt: Timestamp | null;

    // Metadata
    createdAt: Timestamp | null;

    updatedAt: Timestamp | null;
}

export interface CreateBookingRequest {
    roomId: string;

    tenantId: string;

    checkIn: Date;

    checkOut: Date;

    adults: number;

    children: number;

    specialRequest: string;

    paymentMethod: PaymentMethod;
}