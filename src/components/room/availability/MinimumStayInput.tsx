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
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg sm:rounded-3xl">

            {/* Header */}
            <div className="border-b border-slate-100 bg-gradient-to-r from-cyan-50 via-sky-50 to-blue-50 p-4 sm:p-5 md:p-6">

                <div className="flex items-start gap-3 sm:gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-600 text-white shadow-xl shadow-cyan-500/20 sm:h-16 sm:w-16 sm:rounded-3xl">
                        <BedDouble className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>

                    <div className="min-w-0 flex-1">

                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">

                            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                                Minimum Stay
                            </h3>

                            <span className="rounded-full bg-red-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-red-700 sm:px-3 sm:text-xs">
                                Required
                            </span>

                        </div>

                        <p className="mt-2 text-xs leading-5 text-slate-600 sm:mt-3 sm:text-sm sm:leading-7">
                            Define the shortest duration a tenant must
                            stay in this room. This helps reduce
                            frequent move-outs and keeps occupancy
                            stable.
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
                            disabled={minimumStay <= 1}
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 sm:h-14 sm:w-14 sm:rounded-2xl"
                        >
                            <Minus className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>

                        <div className="flex min-w-0 flex-1 flex-col items-center">

                            <span className="text-4xl font-black text-slate-900 sm:text-5xl">
                                {minimumStay}
                            </span>

                            <span className="mt-1 text-xs font-medium text-slate-500 sm:mt-2 sm:text-sm">
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
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 sm:h-14 sm:w-14 sm:rounded-2xl"
                        >
                            <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>

                    </div>

                    <div className="mt-5 sm:mt-6">

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
                                disabled={
                                    value > maximumStay
                                }
                                onClick={() =>
                                    setMinimumStay(value)
                                }
                                className={`rounded-xl border px-3 py-3 text-center transition-all duration-300 sm:rounded-2xl sm:px-4 sm:py-4 ${
                                    minimumStay === value
                                        ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                                        : "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50"
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
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 sm:rounded-3xl sm:p-5">

                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 sm:text-sm">
                        Current Setting
                    </p>

                    <h4 className="mt-1.5 text-xl font-bold text-emerald-900 sm:mt-2 sm:text-2xl">
                        {minimumStay}{" "}
                        {minimumStay === 1
                            ? "Month"
                            : "Months"}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-emerald-800 sm:mt-3 sm:text-sm sm:leading-6">
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
                <div className="rounded-2xl border-l-4 border-l-blue-600 border-blue-200 bg-blue-50 p-4 sm:rounded-3xl sm:p-5">

                    <div className="flex items-start gap-3 sm:gap-4">

                        <div className="rounded-xl bg-blue-100 p-2">
                            <Info className="h-5 w-5 text-blue-600" />
                        </div>

                        <div className="min-w-0">

                            <h4 className="text-sm font-semibold text-blue-900 sm:text-base">
                                Why Minimum Stay Matters
                            </h4>

                            <p className="mt-1.5 text-xs leading-5 text-blue-800 sm:mt-2 sm:text-sm sm:leading-7">
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