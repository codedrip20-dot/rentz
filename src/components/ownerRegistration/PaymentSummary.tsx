"use client";

import { CheckCircle2, CreditCard, Building2 } from "lucide-react";

import type { OwnerPlan } from "@/types/ownerPlan";

interface PaymentSummaryProps {
    plan: OwnerPlan | null;
}

export default function PaymentSummary({
    plan,
}: PaymentSummaryProps) {
    if (!plan) {
        return (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center shadow-sm">
                <h2 className="text-xl font-semibold text-amber-700">
                    No Plan Selected
                </h2>

                <p className="mt-2 text-sm text-amber-600">
                    Please go back and choose a subscription plan before
                    proceeding to payment.
                </p>
            </div>
        );
    }

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

            {/* Header */}

            <div className="flex items-center gap-4 border-b border-slate-200 pb-6">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                    <CreditCard className="h-7 w-7 text-blue-600" />
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                        Payment Summary
                    </h2>

                    <p className="text-sm text-slate-600">
                        Review your selected subscription before continuing.
                    </p>
                </div>

            </div>

            {/* Plan Information */}

            <div className="mt-8 rounded-xl bg-slate-50 p-6">

                <div className="flex items-center justify-between">

                    <div>
                        <h3 className="text-xl font-semibold text-slate-900">
                            {plan.name}
                        </h3>

                        <p className="mt-1 text-sm text-slate-600">
                            {plan.description}
                        </p>
                    </div>

                    <div className="text-right">

                        <p className="text-sm text-slate-500">
                            Monthly Price
                        </p>

                        <p className="text-3xl font-bold text-blue-600">
                            {plan.price}
                        </p>

                    </div>

                </div>

            </div>

            {/* Property Limit */}

            <div className="mt-8 flex items-center gap-4 rounded-xl border border-slate-200 p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Building2 className="h-6 w-6 text-blue-600" />
                </div>

                <div>
                    <p className="text-sm text-slate-500">
                        Property Limit
                    </p>

                    <p className="text-lg font-semibold text-slate-900">
                        {plan.propertyLimit} Properties
                    </p>
                </div>

            </div>

            {/* Features */}

            <div className="mt-8">

                <h3 className="mb-5 text-lg font-semibold text-slate-900">
                    Included Features
                </h3>

                <ul className="space-y-4">
                    {plan.features.map((feature) => (
                        <li
                            key={feature}
                            className="flex items-center gap-3"
                        >
                            <CheckCircle2 className="h-5 w-5 text-green-600" />

                            <span className="text-slate-700">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    );
}