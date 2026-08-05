// src/services/booking/bookingPricingService.ts

import {
    BookingPricing,
} from "@/types/bookingTypes";

import { Room } from "@/types/roomTypes";

/* ============================================================================
   Booking Pricing Result
============================================================================ */

export interface BookingPricingResult {
    valid: boolean;

    pricing?: BookingPricing;

    message?: string;
}

/* ============================================================================
   Booking Pricing Service
============================================================================ */

class BookingPricingService {
    /* ------------------------------------------------------------------------
       Calculate Booking Pricing
    ------------------------------------------------------------------------ */

    public calculatePricing(
        room: Room
    ): BookingPricingResult {
        const {
            rent,
            securityDeposit,
            maintenanceCharge,
        } = room.pricing;

        if (rent < 0) {
            return {
                valid: false,
                message:
                    "Invalid room rent.",
            };
        }

        if (securityDeposit < 0) {
            return {
                valid: false,
                message:
                    "Invalid security deposit.",
            };
        }

        if (maintenanceCharge < 0) {
            return {
                valid: false,
                message:
                    "Invalid maintenance charge.",
            };
        }

        const totalAmount =
            rent +
            securityDeposit +
            maintenanceCharge;

        return {
            valid: true,

            pricing: {
                rent,

                securityDeposit,

                maintenanceCharge,

                totalAmount,
            },
        };
    }

    /* ------------------------------------------------------------------------
       Calculate Total Amount
    ------------------------------------------------------------------------ */

    public calculateTotalAmount(
        pricing: BookingPricing
    ): number {
        return (
            pricing.rent +
            pricing.securityDeposit +
            pricing.maintenanceCharge
        );
    }

    /* ------------------------------------------------------------------------
       Calculate Refund Amount
    ------------------------------------------------------------------------ */

    public calculateRefundAmount(
        pricing: BookingPricing
    ): number {
        return pricing.securityDeposit;
    }

    /* ------------------------------------------------------------------------
       Get Booking Summary
    ------------------------------------------------------------------------ */

    public getBookingSummary(
        pricing: BookingPricing
    ) {
        return {
            rent: pricing.rent,

            securityDeposit:
                pricing.securityDeposit,

            maintenanceCharge:
                pricing.maintenanceCharge,

            totalAmount:
                pricing.totalAmount,
        };
    }
}

/* ============================================================================
   Export Singleton
============================================================================ */

export const bookingPricingService =
    new BookingPricingService();