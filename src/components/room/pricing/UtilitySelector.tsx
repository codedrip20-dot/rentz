"use client";

import {
    Bolt,
    Droplets,
    CheckCircle2,
} from "lucide-react";

import { useRoomWizard } from "@/context/RoomWizardContext";

const UtilitySelector = () => {
    const {
        room,
        updatePricing,
    } = useRoomWizard();

    const {
        electricityIncluded,
        waterIncluded,
    } = room.pricing;

    return (
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg sm:rounded-3xl">

            {/* Header */}

            <div className="border-b border-slate-100 bg-gradient-to-r from-cyan-50 via-white to-sky-50 px-4 py-5 sm:px-6 sm:py-6">

                <div className="space-y-2">

                    <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                        Utilities
                    </h3>

                    <p className="max-w-2xl text-sm leading-6 text-slate-600">
                        Let tenants know which utilities are already included in
                        the rent. Transparent utility information increases trust
                        and reduces unnecessary questions.
                    </p>

                </div>

            </div>

            {/* Body */}

            <div className="space-y-3 p-4 sm:space-y-5 sm:p-6">

                {/* Electricity */}

                <button
                    type="button"
                    onClick={() =>
                        updatePricing({
                            electricityIncluded:
                                !electricityIncluded,
                        })
                    }
                    className={`w-full rounded-xl border p-4 text-left transition-all active:scale-[0.995] sm:rounded-2xl sm:p-5 ${
                        electricityIncluded
                            ? "border-amber-300 bg-amber-50"
                            : "border-slate-200 hover:border-slate-300"
                    }`}
                >
                    <div className="flex items-start justify-between gap-3">

                        <div className="flex min-w-0 items-start gap-3 sm:gap-4">

                            <div
                                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 ${
                                    electricityIncluded
                                        ? "bg-amber-500 text-white"
                                        : "bg-slate-100 text-slate-600"
                                }`}
                            >
                                <Bolt className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>

                            <div className="min-w-0">

                                <h4 className="font-semibold text-slate-900">
                                    Electricity
                                </h4>

                                <p className="mt-1 text-sm leading-5 text-slate-600 sm:leading-6">
                                    Include electricity charges in the monthly rent.
                                </p>

                            </div>

                        </div>

                        {electricityIncluded && (
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500 sm:h-6 sm:w-6" />
                        )}

                    </div>
                </button>

                {/* Water */}

                <button
                    type="button"
                    onClick={() =>
                        updatePricing({
                            waterIncluded:
                                !waterIncluded,
                        })
                    }
                    className={`w-full rounded-xl border p-4 text-left transition-all active:scale-[0.995] sm:rounded-2xl sm:p-5 ${
                        waterIncluded
                            ? "border-sky-300 bg-sky-50"
                            : "border-slate-200 hover:border-slate-300"
                    }`}
                >
                    <div className="flex items-start justify-between gap-3">

                        <div className="flex min-w-0 items-start gap-3 sm:gap-4">

                            <div
                                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 ${
                                    waterIncluded
                                        ? "bg-sky-500 text-white"
                                        : "bg-slate-100 text-slate-600"
                                }`}
                            >
                                <Droplets className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>

                            <div className="min-w-0">

                                <h4 className="font-semibold text-slate-900">
                                    Water
                                </h4>

                                <p className="mt-1 text-sm leading-5 text-slate-600 sm:leading-6">
                                    Include water charges in the monthly rent.
                                </p>

                            </div>

                        </div>

                        {waterIncluded && (
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-500 sm:h-6 sm:w-6" />
                        )}

                    </div>
                </button>

                {/* Summary */}

                <div className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50 p-4 sm:rounded-2xl sm:p-5">

                    <h4 className="font-semibold text-slate-900">
                        Included Utilities
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                        {[
                            electricityIncluded && "Electricity",
                            waterIncluded && "Water",
                        ]
                            .filter(Boolean)
                            .join(", ") || "No utilities are currently included."}
                    </p>

                </div>

            </div>

        </section>
    );
};

export default UtilitySelector;