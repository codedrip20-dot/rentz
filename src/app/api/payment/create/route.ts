import { NextResponse } from "next/server";

export async function POST() {
    // Simulate payment processing
    await new Promise((resolve) =>
        setTimeout(resolve, 2000)
    );

    return NextResponse.json({
        success: true,
        transactionId: `TXN-${Date.now()}`,
        message: "Payment Successful",
    });
}