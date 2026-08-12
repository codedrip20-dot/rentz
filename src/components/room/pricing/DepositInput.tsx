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
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg sm:rounded-3xl">

            {/* Header */}

            <div className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-r from-emerald-50 via-white to-teal-50 px-4 py-5 sm:px-6 sm:py-6">

                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-emerald-100/40 blur-3xl sm:h-32 sm:w-32" />

                <div className="relative flex items-start gap-3 sm:gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/25 sm:h-14 sm:w-14 sm:rounded-2xl">

                        <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7" />

                    </div>

                    <div className="min-w-0 space-y-2">

                        <div className="flex flex-wrap items-center gap-2">

                            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                                Security Deposit
                            </h3>

                            <span className="rounded-full border border-emerald-200 bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 sm:text-xs">
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

            <div className="space-y-5 p-4 sm:space-y-6 sm:p-6">

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

                <div className="rounded-xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-4 sm:rounded-2xl sm:p-5">

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                        <div className="min-w-0">

                            <p className="text-sm font-semibold text-slate-700">
                                Refundable Deposit
                            </p>

                            <p className="mt-1 text-sm leading-5 text-slate-500">
                                Displayed on your public listing.
                            </p>

                        </div>

                        <div className="w-full shrink-0 sm:w-auto sm:text-right">

                            <div className="flex items-center justify-start gap-1 text-2xl font-bold text-emerald-700 sm:justify-end sm:text-3xl">

                                <IndianRupee className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" />

                                <span className="min-w-0 break-all">
                                    {deposit > 0
                                        ? formattedDeposit
                                        : "0"}
                                </span>

                            </div>

                            <p className="mt-1 text-sm text-slate-500 sm:text-right">
                                One-time payment
                            </p>

                        </div>

                    </div>

                </div>

                {/* Info Card */}

                <div className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50 p-4 sm:rounded-2xl sm:p-5">

                    <div className="flex items-start gap-3">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">

                            <BadgeCheck className="h-5 w-5" />

                        </div>

                        <div className="min-w-0">

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