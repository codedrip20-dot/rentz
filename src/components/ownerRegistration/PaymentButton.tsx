"use client";

import { CreditCard, Loader2 } from "lucide-react";

interface PaymentButtonProps {
    loading?: boolean;
    disabled?: boolean;
    onClick: () => void;
}

export default function PaymentButton({
    loading = false,
    disabled = false,
    onClick,
}: PaymentButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={loading || disabled}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
            {loading ? (
                <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Processing Payment...
                </>
            ) : (
                <>
                    <CreditCard className="h-5 w-5" />
                    Proceed to Payment
                </>
            )}
        </button>
    );
}