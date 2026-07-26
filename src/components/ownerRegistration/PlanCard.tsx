"use client";

import { Check, Crown } from "lucide-react";

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
            className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                ${
                    selected
                        ? "border-blue-600 ring-2 ring-blue-100 shadow-lg"
                        : "border-slate-200 hover:border-blue-300"
                }`}
        >
            {/* Recommended Badge */}
            {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white shadow">
                    Recommended
                </div>
            )}

            {/* Selected Indicator */}
            {selected && (
                <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                    <Check className="h-5 w-5 text-white" />
                </div>
            )}

            {/* Icon */}
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                <Crown className="h-7 w-7 text-blue-600" />
            </div>

            {/* Plan Name */}
            <h3 className="text-2xl font-bold text-slate-900">
                {plan.name}
            </h3>

            {/* Price */}
            <p className="mt-2 text-3xl font-bold text-blue-600">
                {plan.price}
            </p>

            {/* Description */}
            <p className="mt-3 text-sm leading-6 text-slate-600">
                {plan.description}
            </p>

            {/* Property Limit */}
            <div className="mt-6 rounded-xl bg-slate-100 p-3">
                <p className="text-center text-sm font-medium text-slate-700">
                    Property Limit
                </p>

                <p className="mt-1 text-center text-xl font-bold text-slate-900">
                    {plan.propertyLimit}
                </p>
            </div>

            {/* Features */}
            <div className="mt-6 flex-1">
                <ul className="space-y-3">
                    {plan.features.map((feature) => (
                        <li
                            key={feature}
                            className="flex items-center gap-3"
                        >
                            <Check className="h-4 w-4 text-green-600" />

                            <span className="text-sm text-slate-700">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            <div
                className={`mt-8 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-colors
                    ${
                        selected
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-700"
                    }`}
            >
                {selected ? "Selected Plan" : "Select Plan"}
            </div>
        </button>
    );
}