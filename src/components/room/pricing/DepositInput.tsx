"use client";

import { ChangeEvent } from "react";
import {
    BadgeCheck,
    IndianRupee,
    ShieldCheck,
} from "lucide-react";

import InputField from "@/components/ui/InputField";
import { useRoomWizard } from "@/context/RoomWizardContext";

const DepositInput = () => {
    const {
        room,
        updatePricing,
    } = useRoomWizard();

    const deposit = room.pricing.securityDeposit;

    const handleChange = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const numeric = e.target.value.replace(/\D/g, "");

        updatePricing({
            securityDeposit:
                numeric === ""
                    ? 0
                    : Number(numeric),
        });
    };

    const formattedDeposit =
        deposit > 0
            ? new Intl.NumberFormat("en-IN").format(deposit)
            : "";

    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-r from-emerald-50 via-white to-teal-50 px-6 py-6">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-emerald-100/40 blur-3xl" />

                <div className="relative flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/25">
                        <ShieldCheck className="h-7 w-7" />
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold text-slate-900">
                                Security Deposit
                            </h3>

                            <span className="rounded-full border border-emerald-200 bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                                Optional
                            </span>
                        </div>

                        <p className="max-w-2xl text-sm leading-6 text-slate-600">
                            Set a refundable security deposit to safeguard your
                            property against damages, unpaid rent, or contract
                            violations.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-6 p-6">
                <InputField
                    id="securityDeposit"
                    label="Deposit Amount"
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder="Enter security deposit"
                    value={formattedDeposit}
                    onChange={handleChange}
                />

                {/* Preview Card */}
                <div className="rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold text-slate-700">
                                Refundable Deposit
                            </p>

                            <p className="mt-1 text-sm text-slate-500">
                                Displayed on your public listing.
                            </p>
                        </div>

                        <div className="text-right">
                            <div className="flex items-center justify-end gap-1 text-3xl font-bold text-emerald-700">
                                <IndianRupee className="h-7 w-7" />
                                {deposit > 0
                                    ? formattedDeposit
                                    : "0"}
                            </div>

                            <p className="mt-1 text-sm text-slate-500">
                                One-time payment
                            </p>
                        </div>
                    </div>
                </div>

                {/* Info Card */}
                <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50 p-5">
                    <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                            <BadgeCheck className="h-5 w-5" />
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-slate-900">
                                Best Practice
                            </h4>

                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                Clearly mention when the deposit is refundable
                                and under what conditions deductions may apply.
                                Transparent policies help build trust and reduce
                                disputes with tenants.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DepositInput;