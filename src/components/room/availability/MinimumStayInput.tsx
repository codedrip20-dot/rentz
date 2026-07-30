"use client";

import {
    BedDouble,
    Info,
    Minus,
    Plus,
} from "lucide-react";

import { useRoomWizard } from "@/hooks/useRoomWizard";

const PRESETS = [1, 3, 6, 12];

const MinimumStayInput = () => {
    const {
        room,
        updateAvailability,
    } = useRoomWizard();

    const minimumStay = room.availability.minimumStay;
    const maximumStay = room.availability.maximumStay;

    const setMinimumStay = (value: number) => {
        const nextValue = Math.max(
            1,
            Math.min(value, maximumStay)
        );

        updateAvailability({
            minimumStay: nextValue,
        });
    };

    const decrease = () => {
        setMinimumStay(minimumStay - 1);
    };

    const increase = () => {
        setMinimumStay(minimumStay + 1);
    };

    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
            {/* Header */}
            <div className="border-b border-slate-100 bg-gradient-to-r from-cyan-50 via-sky-50 to-blue-50 p-6">
                <div className="flex items-start gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-600 text-white shadow-xl shadow-cyan-500/20">
                        <BedDouble className="h-8 w-8" />
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-xl font-bold text-slate-900">
                                Minimum Stay
                            </h3>

                            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-700">
                                Required
                            </span>
                        </div>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                            Define the shortest duration a tenant must
                            stay in this room. This helps reduce
                            frequent move-outs and keeps occupancy
                            stable.
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-8 p-6">
                {/* Counter */}
                <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6">
                    <div className="flex items-center justify-between gap-4">
                        <button
                            type="button"
                            onClick={decrease}
                            disabled={minimumStay <= 1}
                            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <Minus className="h-5 w-5" />
                        </button>

                        <div className="flex flex-1 flex-col items-center">
                            <span className="text-5xl font-black text-slate-900">
                                {minimumStay}
                            </span>

                            <span className="mt-2 text-sm font-medium text-slate-500">
                                {minimumStay === 1
                                    ? "Month"
                                    : "Months"}
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={increase}
                            disabled={
                                minimumStay >= maximumStay
                            }
                            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <Plus className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="mt-6">
                        <input
                            type="range"
                            min={1}
                            max={maximumStay}
                            value={minimumStay}
                            onChange={(e) =>
                                setMinimumStay(
                                    Number(e.target.value)
                                )
                            }
                            className="h-2 w-full cursor-pointer accent-blue-600"
                        />
                    </div>
                </div>

                {/* Presets */}
                <div>
                    <div className="mb-4 flex items-center justify-between">
                        <h4 className="font-semibold text-slate-900">
                            Popular Choices
                        </h4>

                        <span className="text-sm text-slate-500">
                            Quick Select
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {PRESETS.map((value) => (
                            <button
                                key={value}
                                type="button"
                                disabled={
                                    value > maximumStay
                                }
                                onClick={() =>
                                    setMinimumStay(value)
                                }
                                className={`rounded-2xl border px-4 py-4 text-center transition-all duration-300 ${
                                    minimumStay === value
                                        ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                                        : "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50"
                                } disabled:cursor-not-allowed disabled:opacity-40`}
                            >
                                <p className="text-xl font-bold">
                                    {value}
                                </p>

                                <p className="mt-1 text-xs font-medium uppercase tracking-wide opacity-80">
                                    {value === 1
                                        ? "Month"
                                        : "Months"}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Summary */}
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
                    <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                        Current Setting
                    </p>

                    <h4 className="mt-2 text-2xl font-bold text-emerald-900">
                        {minimumStay}{" "}
                        {minimumStay === 1
                            ? "Month"
                            : "Months"}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-emerald-800">
                        Tenants must commit to staying for at least{" "}
                        <strong>
                            {minimumStay}{" "}
                            {minimumStay === 1
                                ? "month"
                                : "months"}
                        </strong>{" "}
                        before they can move out.
                    </p>
                </div>

                {/* Information */}
                <div className="rounded-3xl border-l-4 border-l-blue-600 border-blue-200 bg-blue-50 p-5">
                    <div className="flex items-start gap-4">
                        <div className="rounded-xl bg-blue-100 p-2">
                            <Info className="h-5 w-5 text-blue-600" />
                        </div>

                        <div>
                            <h4 className="font-semibold text-blue-900">
                                Why Minimum Stay Matters
                            </h4>

                            <p className="mt-2 text-sm leading-7 text-blue-800">
                                A longer minimum stay reduces tenant
                                turnover and vacancy periods, while a
                                shorter stay can attract more inquiries
                                and improve booking flexibility. Choose
                                a duration that best fits your rental
                                strategy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MinimumStayInput;