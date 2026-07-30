"use client";

import { ChangeEvent } from "react";
import {  Wallet } from "lucide-react";

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
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* Header */}
            <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 via-white to-indigo-50 px-6 py-5">
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20">
                        <Wallet className="h-6 w-6" />
                    </div>

                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-slate-900">
                            Monthly Rent
                        </h3>

                        <p className="text-sm leading-6 text-slate-600">
                            Enter the monthly rent tenants will pay for this room.
                        </p>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="space-y-6 p-6">
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
                <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-600">
                                Rent Preview
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                                This is how tenants will see your monthly rent.
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-3xl font-bold tracking-tight text-blue-700">
                                {rent > 0
                                    ? `₹ ${formattedRent}`
                                    : "₹ 0"}
                            </p>

                            <p className="mt-1 text-sm text-slate-500">
                                per month
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tip */}
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
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