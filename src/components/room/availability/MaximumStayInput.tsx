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
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg sm:rounded-3xl">

            {/* Header */}
            <div className="border-b border-slate-100 bg-gradient-to-r from-violet-50 via-fuchsia-50 to-indigo-50 p-4 sm:p-5 md:p-6">

                <div className="flex items-start gap-3 sm:gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-indigo-600 text-white shadow-xl shadow-violet-500/20 sm:h-16 sm:w-16 sm:rounded-3xl">
                        <Clock3 className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>

                    <div className="min-w-0 flex-1">

                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">

                            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                                Maximum Stay
                            </h3>

                            <span className="rounded-full bg-red-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-red-700 sm:px-3 sm:text-xs">
                                Required
                            </span>

                        </div>

                        <p className="mt-2 text-xs leading-5 text-slate-600 sm:mt-3 sm:text-sm sm:leading-7">
                            Set the maximum duration a tenant is allowed
                            to stay in this room. This helps define your
                            rental policy and lease flexibility.
                        </p>

                    </div>

                </div>

            </div>

            <div className="space-y-6 p-4 sm:space-y-8 sm:p-5 md:p-6">

                {/* Counter */}
                <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 sm:rounded-3xl sm:p-6">

                    <div className="flex items-center justify-between gap-3 sm:gap-4">

                        <button
                            type="button"
                            onClick={decrease}
                            disabled={maximumStay <= minimumStay}
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-600 disabled:cursor-not-allowed disabled:opacity-40 sm:h-14 sm:w-14 sm:rounded-2xl"
                        >
                            <Minus className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>

                        <div className="flex min-w-0 flex-1 flex-col items-center">

                            <span className="text-4xl font-black text-slate-900 sm:text-5xl">
                                {maximumStay}
                            </span>

                            <span className="mt-1 text-xs font-medium text-slate-500 sm:mt-2 sm:text-sm">
                                {maximumStay === 1
                                    ? "Month"
                                    : "Months"}
                            </span>

                        </div>

                        <button
                            type="button"
                            onClick={increase}
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-600 sm:h-14 sm:w-14 sm:rounded-2xl"
                        >
                            <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>

                    </div>

                    <div className="mt-5 sm:mt-6">
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

                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2 sm:mb-4">

                        <h4 className="text-sm font-semibold text-slate-900 sm:text-base">
                            Popular Choices
                        </h4>

                        <span className="text-xs text-slate-500 sm:text-sm">
                            Quick Select
                        </span>

                    </div>

                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">

                        {PRESETS.map((value) => (
                            <button
                                key={value}
                                type="button"
                                disabled={value < minimumStay}
                                onClick={() =>
                                    setMaximumStay(value)
                                }
                                className={`rounded-xl border px-3 py-3 text-center transition-all duration-300 sm:rounded-2xl sm:px-4 sm:py-4 ${
                                    maximumStay === value
                                        ? "border-violet-600 bg-violet-600 text-white shadow-lg shadow-violet-500/20"
                                        : "border-slate-200 bg-white hover:border-violet-300 hover:bg-violet-50"
                                } disabled:cursor-not-allowed disabled:opacity-40`}
                            >
                                <p className="text-lg font-bold sm:text-xl">
                                    {value}
                                </p>

                                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide opacity-80 sm:text-xs">
                                    {value === 1
                                        ? "Month"
                                        : "Months"}
                                </p>
                            </button>
                        ))}

                    </div>

                </div>

                {/* Summary */}
                <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4 sm:rounded-3xl sm:p-5">

                    <p className="text-xs font-semibold uppercase tracking-wide text-violet-700 sm:text-sm">
                        Current Setting
                    </p>

                    <h4 className="mt-1.5 text-xl font-bold text-violet-900 sm:mt-2 sm:text-2xl">
                        {maximumStay}{" "}
                        {maximumStay === 1
                            ? "Month"
                            : "Months"}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-violet-800 sm:mt-3 sm:text-sm sm:leading-6">
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
                <div className="rounded-2xl border-l-4 border-l-violet-600 border-violet-200 bg-violet-50 p-4 sm:rounded-3xl sm:p-5">

                    <div className="flex items-start gap-3 sm:gap-4">

                        <div className="rounded-xl bg-violet-100 p-2">
                            <Info className="h-5 w-5 text-violet-600" />
                        </div>

                        <div className="min-w-0">

                            <h4 className="text-sm font-semibold text-violet-900 sm:text-base">
                                Why Maximum Stay Matters
                            </h4>

                            <p className="mt-1.5 text-xs leading-5 text-violet-800 sm:mt-2 sm:text-sm sm:leading-7">
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