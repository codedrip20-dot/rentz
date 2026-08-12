"use client";

import { Minus, Plus, User, Baby } from "lucide-react";

import { useRoomWizard } from "@/hooks/useRoomWizard";

const MIN = 0;
const MAX = 10;

export default function CapacitySelector() {
    const { room, updateCapacity } = useRoomWizard();

    const updateAdults = (value: number) => {
        updateCapacity({
            adults: Math.min(MAX, Math.max(MIN, value)),
        });
    };

    const updateChildren = (value: number) => {
        updateCapacity({
            children: Math.min(MAX, Math.max(MIN, value)),
        });
    };

    const totalGuests =
        room.capacity.adults + room.capacity.children;

    return (
        <div className="space-y-6 sm:space-y-8">

            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                        Room Capacity
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                        Configure the maximum number of adults and children this
                        room can comfortably accommodate.
                    </p>
                </div>

                <div className="w-fit shrink-0 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
                    <span className="text-xs font-semibold text-blue-700">
                        {totalGuests} Guests
                    </span>
                </div>
            </div>

            {/* Cards */}
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">

                {/* Adults */}
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:rounded-3xl sm:p-6">

                    <div className="flex items-center gap-3 sm:gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 sm:h-14 sm:w-14 sm:rounded-2xl">
                            <User className="h-6 w-6 sm:h-7 sm:w-7" />
                        </div>

                        <div className="min-w-0">
                            <h4 className="font-semibold text-slate-900">
                                Adults
                            </h4>

                            <p className="mt-1 text-sm text-slate-500">
                                Maximum adult occupants.
                            </p>
                        </div>

                    </div>

                    <div className="mt-6 flex items-center justify-between gap-4 sm:mt-8">

                        <button
                            type="button"
                            onClick={() =>
                                updateAdults(room.capacity.adults - 1)
                            }
                            disabled={room.capacity.adults === MIN}
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-slate-50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12"
                        >
                            <Minus className="h-5 w-5" />
                        </button>

                        <div className="min-w-0 flex-1 text-center">
                            <p className="text-3xl font-bold text-slate-900 sm:text-4xl">
                                {room.capacity.adults}
                            </p>

                            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-400 sm:text-xs sm:tracking-widest">
                                Adults
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() =>
                                updateAdults(room.capacity.adults + 1)
                            }
                            disabled={room.capacity.adults === MAX}
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12"
                        >
                            <Plus className="h-5 w-5" />
                        </button>

                    </div>

                </div>

                {/* Children */}
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:rounded-3xl sm:p-6">

                    <div className="flex items-center gap-3 sm:gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600 sm:h-14 sm:w-14 sm:rounded-2xl">
                            <Baby className="h-6 w-6 sm:h-7 sm:w-7" />
                        </div>

                        <div className="min-w-0">
                            <h4 className="font-semibold text-slate-900">
                                Children
                            </h4>

                            <p className="mt-1 text-sm text-slate-500">
                                Maximum child occupants.
                            </p>
                        </div>

                    </div>

                    <div className="mt-6 flex items-center justify-between gap-4 sm:mt-8">

                        <button
                            type="button"
                            onClick={() =>
                                updateChildren(room.capacity.children - 1)
                            }
                            disabled={room.capacity.children === MIN}
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-slate-50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12"
                        >
                            <Minus className="h-5 w-5" />
                        </button>

                        <div className="min-w-0 flex-1 text-center">
                            <p className="text-3xl font-bold text-slate-900 sm:text-4xl">
                                {room.capacity.children}
                            </p>

                            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-400 sm:text-xs sm:tracking-widest">
                                Children
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() =>
                                updateChildren(room.capacity.children + 1)
                            }
                            disabled={room.capacity.children === MAX}
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12"
                        >
                            <Plus className="h-5 w-5" />
                        </button>

                    </div>

                </div>

            </div>

            {/* Summary */}
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-4 sm:rounded-3xl sm:p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div className="min-w-0">
                        <h4 className="font-semibold text-slate-900">
                            Capacity Summary
                        </h4>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                            This information is shown to tenants when they view
                            your room listing.
                        </p>
                    </div>

                    <div className="w-full shrink-0 rounded-2xl bg-blue-600 px-5 py-3 text-center text-white sm:w-auto">
                        <p className="text-2xl font-bold">
                            {totalGuests}
                        </p>

                        <p className="text-xs uppercase tracking-widest text-blue-100">
                            Total Guests
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
}