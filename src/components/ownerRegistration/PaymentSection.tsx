"use client";

import PaymentButton from "./PaymentButton";
import PaymentSummary from "./PaymentSummary";

import type { OwnerPlan } from "@/types/ownerPlan";

interface PaymentSectionProps {
    plan: OwnerPlan | null;
    loading: boolean;
    onPayment: () => void;
}

export default function PaymentSection({
    plan,
    loading,
    onPayment,
}: PaymentSectionProps) {
    return (
        <section
            className="
                w-full
                space-y-6

                sm:space-y-8
            "
        >
            {/* ==================================================
                Payment Summary
            ================================================== */}

            <PaymentSummary plan={plan} />

            {/* ==================================================
                Payment Action Card
            ================================================== */}

            <div
                className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    shadow-sm

                    sm:rounded-3xl
                    sm:p-8
                "
            >
                <div
                    className="
                        mb-5

                        sm:mb-6
                    "
                >
                    <h2
                        className="
                            text-xl
                            font-bold
                            leading-tight
                            text-slate-900

                            sm:text-2xl
                        "
                    >
                        Complete Your Registration
                    </h2>

                    <p
                        className="
                            mt-2
                            max-w-2xl
                            text-sm
                            leading-6
                            text-slate-600

                            sm:text-base
                            sm:leading-7
                        "
                    >
                        Click the button below to complete
                        your subscription and activate
                        your owner account.
                    </p>
                </div>

                <PaymentButton
                    loading={loading}
                    disabled={!plan}
                    onClick={onPayment}
                />
            </div>
        </section>
    );
}