"use client";

import {
    CreditCard,
    Loader2,
} from "lucide-react";

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
            className="
                flex
                min-h-12
                w-full
                items-center
                justify-center
                gap-2.5
                rounded-xl
                bg-blue-600
                px-4
                py-3
                text-base
                font-semibold
                text-white
                transition-all
                duration-200

                active:scale-[0.98]

                hover:bg-blue-700

                disabled:cursor-not-allowed
                disabled:bg-slate-400
                disabled:hover:bg-slate-400
                disabled:active:scale-100

                sm:min-h-14
                sm:gap-3
                sm:px-6
                sm:py-4
                sm:text-lg
            "
        >
            {loading ? (
                <>
                    <Loader2
                        className="
                            h-5
                            w-5
                            shrink-0
                            animate-spin
                        "
                    />

                    <span className="truncate">
                        Processing Payment...
                    </span>
                </>
            ) : (
                <>
                    <CreditCard
                        className="
                            h-5
                            w-5
                            shrink-0
                        "
                    />

                    <span>
                        Proceed to Payment
                    </span>
                </>
            )}
        </button>
    );
}