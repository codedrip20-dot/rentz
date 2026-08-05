// src/services/booking/bookingPaymentService.ts

import {
    BookingPayment,
    PaymentMethod,
    PaymentStatus,
} from "@/types/bookingTypes";

/* ============================================================================
   Payment Request
============================================================================ */

export interface PaymentRequest {
    amount: number;

    paymentMethod: PaymentMethod;
}

/* ============================================================================
   Payment Result
============================================================================ */

export interface PaymentResult {
    success: boolean;

    payment: BookingPayment;

    message?: string;
}

/* ============================================================================
   Booking Payment Service
============================================================================ */

class BookingPaymentService {
    /* ------------------------------------------------------------------------
       Process Payment
    ------------------------------------------------------------------------ */

    public async processPayment(
        request: PaymentRequest
    ): Promise<PaymentResult> {
        try {
            const response = await fetch(
                "/api/payment/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify({
                        amount: request.amount,
                        paymentMethod:
                            request.paymentMethod,
                    }),
                }
            );

            if (!response.ok) {
                return this.createFailedPayment(
                    "Unable to process payment."
                );
            }

            const data =
                await response.json();

            if (!data.success) {
                return this.createFailedPayment(
                    data.message ??
                        "Payment failed."
                );
            }

            return this.createSuccessfulPayment(
                request.paymentMethod,
                data.transactionId
            );
        } catch (error) {
            console.error(
                "Payment Error:",
                error
            );

            return this.createFailedPayment(
                "Unexpected payment error."
            );
        }
    }

    /* ------------------------------------------------------------------------
       Successful Payment
    ------------------------------------------------------------------------ */

    private createSuccessfulPayment(
        paymentMethod: PaymentMethod,
        transactionId: string
    ): PaymentResult {
        return {
            success: true,

            payment: {
                paymentStatus: "paid",

                paymentMethod,

                transactionId,

                paidAt: null,
            },
        };
    }

    /* ------------------------------------------------------------------------
       Failed Payment
    ------------------------------------------------------------------------ */

    private createFailedPayment(
        message: string
    ): PaymentResult {
        return {
            success: false,

            message,

            payment: {
                paymentStatus: "failed",

                paymentMethod: null,

                transactionId: null,

                paidAt: null,
            },
        };
    }

    /* ------------------------------------------------------------------------
       Pending Payment
    ------------------------------------------------------------------------ */

    public createPendingPayment(
        paymentMethod: PaymentMethod
    ): BookingPayment {
        return {
            paymentStatus: "pending",

            paymentMethod,

            transactionId: null,

            paidAt: null,
        };
    }

    /* ------------------------------------------------------------------------
       Refunded Payment
    ------------------------------------------------------------------------ */

    public createRefundedPayment(
        payment: BookingPayment
    ): BookingPayment {
        return {
            ...payment,

            paymentStatus: "refunded",
        };
    }
}

/* ============================================================================
   Export Singleton
============================================================================ */

export const bookingPaymentService =
    new BookingPaymentService();