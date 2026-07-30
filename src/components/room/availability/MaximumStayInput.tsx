"use client";

import {
    Clock3,
    Info,
    Minus,
    Plus,
} from "lucide-react";

import { useRoomWizard } from "@/hooks/useRoomWizard";

const PRESETS = [3, 6, 12, 24];

const MaximumStayInput = () => {
    const {
        room,
        updateAvailability,
    } = useRoomWizard();

    const minimumStay = room.availability.minimumStay;
    const maximumStay = room.availability.maximumStay;

    const setMaximumStay = (value: number) => {
        const nextValue = Math.max(minimumStay, value);

        updateAvailability({
            maximumStay: nextValue,
        });
    };

    const decrease = () => {
        setMaximumStay(maximumStay - 1);
    };

    const increase = () => {
        setMaximumStay(maximumStay + 1);
    };

    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
            {/* Header */}
            <div className="border-b border-slate-100 bg-gradient-to-r from-violet-50 via-fuchsia-50 to-indigo-50 p-6">
                <div className="flex items-start gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-indigo-600 text-white shadow-xl shadow-violet-500/20">
                        <Clock3 className="h-8 w-8" />
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-xl font-bold text-slate-900">
                                Maximum Stay
                            </h3>

                            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-700">
                                Required
                            </span>
                        </div>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                            Set the maximum duration a tenant is allowed
                            to stay in this room. This helps define your
                            rental policy and lease flexibility.
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
                            disabled={maximumStay <= minimumStay}
                            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-600 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <Minus className="h-5 w-5" />
                        </button>

                        <div className="flex flex-1 flex-col items-center">
                            <span className="text-5xl font-black text-slate-900">
                                {maximumStay}
                            </span>

                            <span className="mt-2 text-sm font-medium text-slate-500">
                                {maximumStay === 1
                                    ? "Month"
                                    : "Months"}
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={increase}
                            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-600"
                        >
                            <Plus className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="mt-6">
                        <input
                            type="range"
                            min={minimumStay}
                            max={60}
                            value={maximumStay}
                            onChange={(e) =>
                                setMaximumStay(
                                    Number(e.target.value)
                                )
                            }
                            className="h-2 w-full cursor-pointer accent-violet-600"
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
                                disabled={value < minimumStay}
                                onClick={() =>
                                    setMaximumStay(value)
                                }
                                className={`rounded-2xl border px-4 py-4 text-center transition-all duration-300 ${
                                    maximumStay === value
                                        ? "border-violet-600 bg-violet-600 text-white shadow-lg shadow-violet-500/20"
                                        : "border-slate-200 bg-white hover:border-violet-300 hover:bg-violet-50"
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
                <div className="rounded-3xl border border-violet-200 bg-violet-50 p-5">
                    <p className="text-sm font-semibold uppercase tracking-wide text-violet-700">
                        Current Setting
                    </p>

                    <h4 className="mt-2 text-2xl font-bold text-violet-900">
                        {maximumStay}{" "}
                        {maximumStay === 1
                            ? "Month"
                            : "Months"}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-violet-800">
                        Tenants can stay for up to{" "}
                        <strong>
                            {maximumStay}{" "}
                            {maximumStay === 1
                                ? "month"
                                : "months"}
                        </strong>{" "}
                        before a new agreement or renewal is required.
                    </p>
                </div>

                {/* Information */}
                <div className="rounded-3xl border-l-4 border-l-violet-600 border-violet-200 bg-violet-50 p-5">
                    <div className="flex items-start gap-4">
                        <div className="rounded-xl bg-violet-100 p-2">
                            <Info className="h-5 w-5 text-violet-600" />
                        </div>

                        <div>
                            <h4 className="font-semibold text-violet-900">
                                Why Maximum Stay Matters
                            </h4>

                            <p className="mt-2 text-sm leading-7 text-violet-800">
                                Setting a maximum stay gives you better
                                control over long-term occupancy and
                                lease renewals. Ensure the maximum stay
                                is greater than or equal to the minimum
                                stay so tenants have a valid booking
                                window.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MaximumStayInput;