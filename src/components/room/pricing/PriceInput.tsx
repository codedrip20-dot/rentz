"use client";

import { ChangeEvent } from "react";
import { Wallet } from "lucide-react";

import InputField from "@/components/ui/InputField";

import { useRoomWizard } from "@/context/RoomWizardContext";

const PriceInput = () => {
    const {
        room,
        updatePricing,
    } = useRoomWizard();

    const rent = room.pricing.rent;

    const handleChange = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const numeric = e.target.value.replace(/\D/g, "");

        updatePricing({
            rent:
                numeric === ""
                    ? 0
                    : Number(numeric),
        });
    };

    const formattedRent =
        rent > 0
            ? new Intl.NumberFormat("en-IN").format(rent)
            : "";

    return (
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl">

            {/* Header */}

            <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 via-white to-indigo-50 px-4 py-4 sm:px-6 sm:py-5">

                <div className="flex items-start gap-3 sm:gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20 sm:h-12 sm:w-12 sm:rounded-2xl">

                        <Wallet className="h-5 w-5 sm:h-6 sm:w-6" />

                    </div>

                    <div className="min-w-0 space-y-1">

                        <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                            Monthly Rent
                        </h3>

                        <p className="text-sm leading-6 text-slate-600">
                            Enter the monthly rent tenants will pay for this room.
                        </p>

                    </div>

                </div>

            </div>

            {/* Body */}

            <div className="space-y-5 p-4 sm:space-y-6 sm:p-6">

                <InputField
                    id="rent"
                    label="Rent Amount"
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder="e.g. 12,000"
                    value={formattedRent}
                    onChange={handleChange}
                />

                {/* Preview */}

                <div className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:rounded-2xl sm:p-5">

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                        <div className="min-w-0">

                            <p className="text-sm font-medium text-slate-600">
                                Rent Preview
                            </p>

                            <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                                This is how tenants will see your monthly rent.
                            </p>

                        </div>

                        <div className="w-full shrink-0 sm:w-auto sm:text-right">

                            <p className="break-all text-2xl font-bold tracking-tight text-blue-700 sm:text-3xl">
                                {rent > 0
                                    ? `₹ ${formattedRent}`
                                    : "₹ 0"}
                            </p>

                            <p className="mt-1 text-sm text-slate-500 sm:text-right">
                                per month
                            </p>

                        </div>

                    </div>

                </div>

                {/* Tip */}

                <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 sm:rounded-2xl">

                    <p className="text-sm leading-6 text-emerald-800">
                        <span className="font-semibold">
                            Pricing Tip:
                        </span>{" "}
                        Fair and transparent pricing increases tenant trust and
                        improves the chances of receiving quality inquiries.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default PriceInput;