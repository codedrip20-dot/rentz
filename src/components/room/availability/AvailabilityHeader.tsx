"use client";

import { CalendarClock, CalendarDays, Clock3 } from "lucide-react";

const AvailabilityHeader = () => {
    return (
        <header className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-4 shadow-sm sm:rounded-3xl sm:p-6 md:p-8">

            {/* Background Glow */}
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl sm:-right-16 sm:-top-16 sm:h-48 sm:w-48" />

            <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-sky-100/40 blur-3xl sm:-bottom-20 sm:-left-20 sm:h-56 sm:w-56" />

            <div className="relative z-10 space-y-6 sm:space-y-8">

                {/* Header */}
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                    <div className="flex items-start gap-3 sm:gap-5">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/20 sm:h-16 sm:w-16 sm:rounded-2xl">
                            <CalendarClock className="h-6 w-6 sm:h-8 sm:w-8" />
                        </div>

                        <div className="min-w-0 space-y-2">

                            <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                                Room Availability
                            </h2>

                            <p className="max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-7 md:text-base">
                                Configure when this room can be occupied,
                                define the minimum and maximum stay duration,
                                and provide clear availability information to
                                help tenants book with confidence.
                            </p>

                        </div>

                    </div>

                    <div className="w-full shrink-0 rounded-xl border border-blue-200 bg-white/80 px-4 py-3 backdrop-blur sm:w-auto sm:rounded-2xl sm:px-5 sm:py-4">

                        <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-600 sm:text-xs">
                            Step 2
                        </p>

                        <p className="mt-1 text-xs font-medium text-slate-700 sm:text-sm">
                            Availability Details
                        </p>

                    </div>

                </div>

                {/* Feature Cards */}
                <div className="grid gap-3 sm:gap-4 md:grid-cols-2">

                    <div className="rounded-xl border border-slate-200 bg-white/80 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl sm:p-5">

                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 sm:mb-4 sm:h-11 sm:w-11">
                            <CalendarDays className="h-5 w-5" />
                        </div>

                        <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                            Availability Schedule
                        </h3>

                        <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">
                            Specify whether the room is immediately available
                            or choose a future move-in date.
                        </p>

                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white/80 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl sm:p-5">

                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 sm:mb-4 sm:h-11 sm:w-11">
                            <Clock3 className="h-5 w-5" />
                        </div>

                        <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                            Stay Duration
                        </h3>

                        <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">
                            Set minimum and maximum stay limits so tenants know
                            exactly how long they can reserve this room.
                        </p>

                    </div>

                </div>

                {/* Info Banner */}
                <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 via-sky-50 to-cyan-50 p-4 sm:rounded-2xl sm:p-5">

                    <p className="text-xs leading-5 text-slate-700 sm:text-sm sm:leading-7">
                        <span className="font-semibold text-slate-900">
                            Why this matters:
                        </span>{" "}
                        Accurate availability information improves tenant trust,
                        reduces booking conflicts, and ensures your listings
                        always reflect the latest room status.
                    </p>

                </div>

            </div>
        </header>
    );
};

export default AvailabilityHeader;