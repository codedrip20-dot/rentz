"use client";

import {
    Check,
    Crown,
} from "lucide-react";

import type { OwnerPlan } from "@/types/ownerPlan";

interface PlanCardProps {
    plan: OwnerPlan;
    selected: boolean;
    onSelect: (plan: OwnerPlan) => void;
}

export default function PlanCard({
    plan,
    selected,
    onSelect,
}: PlanCardProps) {
    return (
        <button
            type="button"
            onClick={() => onSelect(plan)}
            className={`
                relative
                flex
                h-full
                w-full
                flex-col
                rounded-2xl
                border
                bg-white
                p-5
                text-left
                transition-all
                duration-300

                active:scale-[0.99]

                hover:-translate-y-1
                hover:shadow-lg

                sm:p-6

                ${
                    selected
                        ? `
                            border-blue-600
                            ring-2
                            ring-blue-100
                            shadow-lg
                          `
                        : `
                            border-slate-200
                            hover:border-blue-300
                          `
                }
            `}
        >
            {/* ==================================================
                Recommended Badge
            ================================================== */}

            {plan.recommended && (
                <div
                    className="
                        absolute
                        -top-3
                        left-1/2
                        -translate-x-1/2
                        whitespace-nowrap
                        rounded-full
                        bg-blue-600
                        px-3
                        py-1
                        text-[11px]
                        font-semibold
                        text-white
                        shadow

                        sm:px-4
                        sm:text-xs
                    "
                >
                    Recommended
                </div>
            )}

            {/* ==================================================
                Selected Indicator
            ================================================== */}

            {selected && (
                <div
                    className="
                        absolute
                        right-3
                        top-3
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-600

                        sm:right-4
                        sm:top-4
                    "
                >
                    <Check className="h-5 w-5 text-white" />
                </div>
            )}

            {/* ==================================================
                Icon
            ================================================== */}

            <div
                className="
                    mb-4
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-100

                    sm:mb-5
                    sm:h-14
                    sm:w-14
                "
            >
                <Crown
                    className="
                        h-6
                        w-6
                        text-blue-600

                        sm:h-7
                        sm:w-7
                    "
                />
            </div>

            {/* ==================================================
                Plan Name
            ================================================== */}

            <h3
                className="
                    break-words
                    text-xl
                    font-bold
                    leading-tight
                    text-slate-900

                    sm:text-2xl
                "
            >
                {plan.name}
            </h3>

            {/* ==================================================
                Price
            ================================================== */}

            <p
                className="
                    mt-2
                    text-2xl
                    font-bold
                    text-blue-600

                    sm:text-3xl
                "
            >
                {plan.price}
            </p>

            {/* ==================================================
                Description
            ================================================== */}

            <p
                className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-600
                "
            >
                {plan.description}
            </p>

            {/* ==================================================
                Property Limit
            ================================================== */}

            <div
                className="
                    mt-5
                    rounded-xl
                    bg-slate-100
                    p-3

                    sm:mt-6
                "
            >
                <p
                    className="
                        text-center
                        text-xs
                        font-medium
                        text-slate-700

                        sm:text-sm
                    "
                >
                    Property Limit
                </p>

                <p
                    className="
                        mt-1
                        text-center
                        text-lg
                        font-bold
                        text-slate-900

                        sm:text-xl
                    "
                >
                    {plan.propertyLimit}
                </p>
            </div>

            {/* ==================================================
                Features
            ================================================== */}

            <div className="mt-5 flex-1 sm:mt-6">
                <ul className="space-y-3">
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
                                <Check
                                    className="
                                        mt-0.5
                                        h-4
                                        w-4
                                        shrink-0
                                        text-green-600
                                    "
                                />

                                <span
                                    className="
                                        min-w-0
                                        break-words
                                        text-sm
                                        leading-5
                                        text-slate-700
                                    "
                                >
                                    {feature}
                                </span>
                            </li>
                        )
                    )}
                </ul>
            </div>

            {/* ==================================================
                Footer
            ================================================== */}

            <div
                className={`
                    mt-6
                    rounded-xl
                    px-4
                    py-3
                    text-center
                    text-sm
                    font-semibold
                    transition-colors

                    sm:mt-8

                    ${
                        selected
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-700"
                    }
                `}
            >
                {selected
                    ? "Selected Plan"
                    : "Select Plan"}
            </div>
        </button>
    );
}