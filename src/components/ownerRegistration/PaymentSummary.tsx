"use client";

import {
    CheckCircle2,
    CreditCard,
    Building2,
} from "lucide-react";

import type { OwnerPlan } from "@/types/ownerPlan";

interface PaymentSummaryProps {
    plan: OwnerPlan | null;
}

export default function PaymentSummary({
    plan,
}: PaymentSummaryProps) {
    if (!plan) {
        return (
            <div
                className="
                    w-full
                    rounded-2xl
                    border
                    border-amber-200
                    bg-amber-50
                    p-5
                    text-center
                    shadow-sm

                    sm:rounded-3xl
                    sm:p-8
                "
            >
                <h2
                    className="
                        text-lg
                        font-semibold
                        text-amber-700

                        sm:text-xl
                    "
                >
                    No Plan Selected
                </h2>

                <p
                    className="
                        mx-auto
                        mt-2
                        max-w-md
                        text-sm
                        leading-6
                        text-amber-600
                    "
                >
                    Please go back and choose a
                    subscription plan before
                    proceeding to payment.
                </p>
            </div>
        );
    }

    return (
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
            {/* ==================================================
                Header
            ================================================== */}

            <div
                className="
                    flex
                    items-start
                    gap-3
                    border-b
                    border-slate-200
                    pb-5

                    sm:items-center
                    sm:gap-4
                    sm:pb-6
                "
            >
                <div
                    className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-100

                        sm:h-14
                        sm:w-14
                    "
                >
                    <CreditCard
                        className="
                            h-6
                            w-6
                            text-blue-600

                            sm:h-7
                            sm:w-7
                        "
                    />
                </div>

                <div className="min-w-0">
                    <h2
                        className="
                            text-xl
                            font-bold
                            leading-tight
                            text-slate-900

                            sm:text-2xl
                        "
                    >
                        Payment Summary
                    </h2>

                    <p
                        className="
                            mt-1
                            text-xs
                            leading-5
                            text-slate-600

                            sm:text-sm
                            sm:leading-6
                        "
                    >
                        Review your selected subscription
                        before continuing.
                    </p>
                </div>
            </div>

            {/* ==================================================
                Plan Information
            ================================================== */}

            <div
                className="
                    mt-5
                    rounded-xl
                    bg-slate-50
                    p-4

                    sm:mt-8
                    sm:p-6
                "
            >
                <div
                    className="
                        flex
                        flex-col
                        gap-4

                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    {/* Plan */}

                    <div className="min-w-0">
                        <h3
                            className="
                                break-words
                                text-lg
                                font-semibold
                                text-slate-900

                                sm:text-xl
                            "
                        >
                            {plan.name}
                        </h3>

                        <p
                            className="
                                mt-1
                                text-sm
                                leading-6
                                text-slate-600
                            "
                        >
                            {plan.description}
                        </p>
                    </div>

                    {/* Price */}

                    <div
                        className="
                            shrink-0

                            sm:text-right
                        "
                    >
                        <p
                            className="
                                text-xs
                                text-slate-500

                                sm:text-sm
                            "
                        >
                            Monthly Price
                        </p>

                        <p
                            className="
                                mt-0.5
                                text-2xl
                                font-bold
                                text-blue-600

                                sm:text-3xl
                            "
                        >
                            {plan.price}
                        </p>
                    </div>
                </div>
            </div>

            {/* ==================================================
                Property Limit
            ================================================== */}

            <div
                className="
                    mt-5
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-slate-200
                    p-4

                    sm:mt-8
                    sm:gap-4
                    sm:p-5
                "
            >
                <div
                    className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-blue-100

                        sm:h-12
                        sm:w-12
                    "
                >
                    <Building2
                        className="
                            h-5
                            w-5
                            text-blue-600

                            sm:h-6
                            sm:w-6
                        "
                    />
                </div>

                <div className="min-w-0">
                    <p
                        className="
                            text-xs
                            text-slate-500

                            sm:text-sm
                        "
                    >
                        Property Limit
                    </p>

                    <p
                        className="
                            mt-0.5
                            text-base
                            font-semibold
                            text-slate-900

                            sm:text-lg
                        "
                    >
                        {plan.propertyLimit}{" "}
                        {plan.propertyLimit === 1
                            ? "Property"
                            : "Properties"}
                    </p>
                </div>
            </div>

            {/* ==================================================
                Features
            ================================================== */}

            <div className="mt-6 sm:mt-8">
                <h3
                    className="
                        mb-4
                        text-base
                        font-semibold
                        text-slate-900

                        sm:mb-5
                        sm:text-lg
                    "
                >
                    Included Features
                </h3>

                <ul className="space-y-3 sm:space-y-4">
                    {plan.features.map(
                        (feature) => (
                            <li
                                key={feature}
                                className="
                                    flex
                                    items-start
                                    gap-3
                                "
                            >
                                <CheckCircle2
                                    className="
                                        mt-0.5
                                        h-5
                                        w-5
                                        shrink-0
                                        text-green-600
                                    "
                                />

                                <span
                                    className="
                                        min-w-0
                                        break-words
                                        text-sm
                                        leading-6
                                        text-slate-700

                                        sm:text-base
                                    "
                                >
                                    {feature}
                                </span>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
}