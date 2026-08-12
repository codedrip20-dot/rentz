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
        <section
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
                    mb-6

                    sm:mb-10
                "
            >
                <h2
                    className="
                        text-2xl
                        font-bold
                        leading-tight
                        text-slate-900

                        sm:text-3xl
                    "
                >
                    Choose Your Subscription Plan
                </h2>

                <p
                    className="
                        mt-3
                        max-w-2xl
                        text-sm
                        leading-6
                        text-slate-600

                        sm:text-base
                        sm:leading-7
                    "
                >
                    Select a plan based on the
                    number of properties you want
                    to manage. You can always
                    upgrade your subscription later.
                </p>
            </div>

            {/* ==================================================
                Plans
            ================================================== */}

            <div
                className="
                    grid
                    gap-5

                    sm:gap-6

                    md:grid-cols-2

                    lg:grid-cols-3

                    xl:gap-8
                "
            >
                {OWNER_PLANS.map(
                    (plan) => (
                        <PlanCard
                            key={plan.id}
                            plan={plan}
                            selected={
                                selectedPlan?.id ===
                                plan.id
                            }
                            onSelect={onSelect}
                        />
                    )
                )}
            </div>
        </section>
    );
}