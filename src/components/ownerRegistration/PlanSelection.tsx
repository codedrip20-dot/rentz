"use client";

import PlanCard from "./PlanCard";

import { OWNER_PLANS } from "@/constants/ownerPlans";
import type { OwnerPlan } from "@/types/ownerPlan";

interface PlanSelectionProps {
    selectedPlan: OwnerPlan | null;
    onSelect: (plan: OwnerPlan) => void;
}

export default function PlanSelection({
    selectedPlan,
    onSelect,
}: PlanSelectionProps) {
    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

            <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-900">
                    Choose Your Subscription Plan
                </h2>

                <p className="mt-3 max-w-2xl text-slate-600">
                    Select a plan based on the number of properties you want
                    to manage. You can always upgrade your subscription later.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {OWNER_PLANS.map((plan) => (
                    <PlanCard
                        key={plan.id}
                        plan={plan}
                        selected={selectedPlan?.id === plan.id}
                        onSelect={onSelect}
                    />
                ))}
            </div>

        </section>
    );
}