"use client";

import {
    Calendar,
    CalendarDays,
    CalendarRange,
    CheckCircle2,
} from "lucide-react";

import { useRoomWizard } from "@/context/RoomWizardContext";

import type { BillingType } from "@/types/roomTypes";

const billingOptions: {
    value: BillingType;
    title: string;
    description: string;
    icon: React.ElementType;
}[] = [
    {
        value: "daily",
        title: "Daily",
        description: "Perfect for short stays and travelers.",
        icon: Calendar,
    },
    {
        value: "weekly",
        title: "Weekly",
        description: "Great for interns and temporary rentals.",
        icon: CalendarRange,
    },
    {
        value: "monthly",
        title: "Monthly",
        description: "Best for long-term tenants.",
        icon: CalendarDays,
    },
];

const BillingTypeSelector = () => {
    const {
        room,
        updatePricing,
    } = useRoomWizard();

    const selected = room.pricing.billingType;

    const handleSelect = (billingType: BillingType) => {
        updatePricing({
            billingType,
        });
    };

    return (
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg sm:rounded-3xl">

            {/* Header */}

            <div className="border-b border-slate-100 bg-gradient-to-r from-violet-50 via-white to-indigo-50 px-4 py-5 sm:px-6 sm:py-6">

                <div className="space-y-2">

                    <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                        Billing Cycle
                    </h3>

                    <p className="max-w-2xl text-sm leading-6 text-slate-600">
                        Choose how tenants will be billed for this room.
                        This will be displayed throughout your listing.
                    </p>

                </div>

            </div>

            {/* Options */}

            <div className="grid gap-3 p-4 sm:gap-5 sm:p-6 md:grid-cols-3">

                {billingOptions.map((option) => {

                    const Icon = option.icon;

                    const active =
                        selected === option.value;

                    return (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() =>
                                handleSelect(option.value)
                            }
                            className={`relative rounded-xl border p-4 text-left transition-all duration-200 active:scale-[0.99] sm:rounded-2xl sm:p-5 ${
                                active
                                    ? "border-blue-600 bg-blue-50 shadow-md"
                                    : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm"
                            }`}
                        >

                            {active && (
                                <CheckCircle2 className="absolute right-3 top-3 h-5 w-5 text-blue-600 sm:right-4 sm:top-4" />
                            )}

                            <div
                                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl sm:h-12 sm:w-12 ${
                                    active
                                        ? "bg-blue-600 text-white"
                                        : "bg-slate-100 text-slate-600"
                                }`}
                            >
                                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>

                            <h4 className="pr-7 text-base font-semibold text-slate-900 sm:text-lg">
                                {option.title}
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                {option.description}
                            </p>

                        </button>
                    );
                })}

            </div>

            {/* Footer */}

            <div className="border-t border-slate-100 bg-slate-50 px-4 py-4 sm:px-6">

                <p className="text-sm leading-6 text-slate-600">

                    <span className="font-semibold text-slate-800">
                        Selected:
                    </span>{" "}

                    <span className="font-semibold capitalize text-blue-600">
                        {selected}
                    </span>{" "}

                    billing

                </p>

            </div>

        </section>
    );
};

export default BillingTypeSelector;