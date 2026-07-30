"use client";

import { CalendarClock, CalendarDays, Clock3 } from "lucide-react";

const AvailabilityHeader = () => {
    return (
        <header className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-8 shadow-sm">
            {/* Background Glow */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-100/40 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-sky-100/40 blur-3xl" />

            <div className="relative z-10 space-y-8">
                {/* Header */}
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-5">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/20">
                            <CalendarClock className="h-8 w-8" />
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                Room Availability
                            </h2>

                            <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                                Configure when this room can be occupied,
                                define the minimum and maximum stay duration,
                                and provide clear availability information to
                                help tenants book with confidence.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-blue-200 bg-white/80 px-5 py-4 backdrop-blur">
                        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                            Step 2
                        </p>

                        <p className="mt-1 text-sm font-medium text-slate-700">
                            Availability Details
                        </p>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                            <CalendarDays className="h-5 w-5" />
                        </div>

                        <h3 className="text-base font-semibold text-slate-900">
                            Availability Schedule
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            Specify whether the room is immediately available
                            or choose a future move-in date.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                            <Clock3 className="h-5 w-5" />
                        </div>

                        <h3 className="text-base font-semibold text-slate-900">
                            Stay Duration
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            Set minimum and maximum stay limits so tenants know
                            exactly how long they can reserve this room.
                        </p>
                    </div>
                </div>

                {/* Info Banner */}
                <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 via-sky-50 to-cyan-50 p-5">
                    <p className="text-sm leading-7 text-slate-700">
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