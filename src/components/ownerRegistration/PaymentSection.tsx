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
        <section className="space-y-8">

            <PaymentSummary plan={plan} />

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Complete Your Registration
                    </h2>

                    <p className="mt-2 text-slate-600">
                        Click the button below to complete your subscription
                        and activate your owner account.
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