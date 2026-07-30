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
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
            {/* Header */}
            <div className="border-b border-slate-100 bg-gradient-to-r from-cyan-50 via-white to-sky-50 px-6 py-6">
                <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">
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
            <div className="space-y-5 p-6">

                {/* Electricity */}
                <button
                    type="button"
                    onClick={() =>
                        updatePricing({
                            electricityIncluded:
                                !electricityIncluded,
                        })
                    }
                    className={`w-full rounded-2xl border p-5 text-left transition-all ${
                        electricityIncluded
                            ? "border-amber-300 bg-amber-50"
                            : "border-slate-200 hover:border-slate-300"
                    }`}
                >
                    <div className="flex items-center justify-between">

                        <div className="flex items-center gap-4">
                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                                    electricityIncluded
                                        ? "bg-amber-500 text-white"
                                        : "bg-slate-100 text-slate-600"
                                }`}
                            >
                                <Bolt className="h-6 w-6" />
                            </div>

                            <div>
                                <h4 className="font-semibold text-slate-900">
                                    Electricity
                                </h4>

                                <p className="mt-1 text-sm text-slate-600">
                                    Include electricity charges in the monthly rent.
                                </p>
                            </div>
                        </div>

                        {electricityIncluded && (
                            <CheckCircle2 className="h-6 w-6 text-amber-500" />
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
                    className={`w-full rounded-2xl border p-5 text-left transition-all ${
                        waterIncluded
                            ? "border-sky-300 bg-sky-50"
                            : "border-slate-200 hover:border-slate-300"
                    }`}
                >
                    <div className="flex items-center justify-between">

                        <div className="flex items-center gap-4">
                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                                    waterIncluded
                                        ? "bg-sky-500 text-white"
                                        : "bg-slate-100 text-slate-600"
                                }`}
                            >
                                <Droplets className="h-6 w-6" />
                            </div>

                            <div>
                                <h4 className="font-semibold text-slate-900">
                                    Water
                                </h4>

                                <p className="mt-1 text-sm text-slate-600">
                                    Include water charges in the monthly rent.
                                </p>
                            </div>
                        </div>

                        {waterIncluded && (
                            <CheckCircle2 className="h-6 w-6 text-sky-500" />
                        )}
                    </div>
                </button>

                {/* Summary */}
                <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50 p-5">
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