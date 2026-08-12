"use client";

import {
    CalendarClock,
    CheckCircle2,
    Clock3,
    Sparkles,
} from "lucide-react";

import { useRoomWizard } from "@/hooks/useRoomWizard";

const AvailabilityToggle = () => {
    const {
        room,
        updateAvailability,
    } = useRoomWizard();

    const availableNow = room.availability.availableNow;

    const handleToggle = () => {
        updateAvailability({
            availableNow: !availableNow,
        });
    };

    return (
        <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 shadow-sm sm:rounded-3xl">

            {/* Background Decoration */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-100/50 blur-3xl sm:-right-12 sm:-top-12 sm:h-40 sm:w-40" />

            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-sky-100/40 blur-3xl sm:-bottom-16 sm:-left-16 sm:h-52 sm:w-52" />

            <div className="relative z-10 p-4 sm:p-5 md:p-7">

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                    {/* Left */}
                    <div className="flex min-w-0 gap-3 sm:gap-5">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-xl shadow-blue-500/20 sm:h-16 sm:w-16 sm:rounded-2xl">
                            <CalendarClock className="h-6 w-6 sm:h-8 sm:w-8" />
                        </div>

                        <div className="min-w-0 space-y-2 sm:space-y-3">

                            <div className="flex flex-wrap items-center gap-2">

                                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                                    Room Availability
                                </h3>

                                <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-semibold text-blue-700 sm:px-3 sm:text-xs">
                                    Required
                                </span>

                            </div>

                            <p className="max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-7">
                                Tell tenants whether this room can be occupied
                                immediately or if they'll need to wait until a
                                future move-in date.
                            </p>

                            <div className="flex flex-wrap gap-2 pt-1 sm:gap-3">

                                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-700 sm:gap-2 sm:px-3 sm:py-2 sm:text-sm">

                                    <Sparkles className="h-3.5 w-3.5 shrink-0 text-blue-600 sm:h-4 sm:w-4" />

                                    Higher booking confidence

                                </div>

                                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-700 sm:gap-2 sm:px-3 sm:py-2 sm:text-sm">

                                    <Clock3 className="h-3.5 w-3.5 shrink-0 text-amber-500 sm:h-4 sm:w-4" />

                                    Fewer scheduling conflicts

                                </div>

                            </div>

                        </div>
                    </div>

                    {/* Toggle */}
                    <div className="flex shrink-0 flex-col items-center gap-2 sm:gap-3 lg:min-w-[120px]">

                        <button
                            type="button"
                            onClick={handleToggle}
                            aria-pressed={availableNow}
                            className={`relative h-10 w-20 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 ${
                                availableNow
                                    ? "bg-gradient-to-r from-blue-600 to-sky-500 focus:ring-blue-200"
                                    : "bg-slate-300 focus:ring-slate-200"
                            }`}
                        >
                            <span
                                className={`absolute top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 ${
                                    availableNow
                                        ? "left-[2.7rem]"
                                        : "left-1"
                                }`}
                            >
                                <CheckCircle2
                                    className={`h-4 w-4 ${
                                        availableNow
                                            ? "text-blue-600"
                                            : "text-slate-400"
                                    }`}
                                />
                            </span>
                        </button>

                        <span
                            className={`text-xs font-semibold sm:text-sm ${
                                availableNow
                                    ? "text-blue-700"
                                    : "text-slate-500"
                            }`}
                        >
                            {availableNow
                                ? "Available Now"
                                : "Available Later"}
                        </span>

                    </div>

                </div>

                {/* Status Card */}
                <div
                    className={`mt-6 rounded-xl border p-4 transition-all duration-300 sm:mt-8 sm:rounded-2xl sm:p-5 ${
                        availableNow
                            ? "border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50"
                            : "border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50"
                    }`}
                >

                    <div className="flex items-start gap-3 sm:gap-4">

                        <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11 ${
                                availableNow
                                    ? "bg-emerald-100"
                                    : "bg-amber-100"
                            }`}
                        >
                            <CheckCircle2
                                className={`h-5 w-5 ${
                                    availableNow
                                        ? "text-emerald-600"
                                        : "text-amber-600"
                                }`}
                            />
                        </div>

                        <div className="min-w-0">

                            <h4
                                className={`text-sm font-semibold sm:text-base ${
                                    availableNow
                                        ? "text-emerald-800"
                                        : "text-amber-800"
                                }`}
                            >
                                {availableNow
                                    ? "Ready for Immediate Booking"
                                    : "Future Availability"}
                            </h4>

                            <p
                                className={`mt-1.5 text-xs leading-5 sm:mt-2 sm:text-sm sm:leading-7 ${
                                    availableNow
                                        ? "text-emerald-700"
                                        : "text-amber-700"
                                }`}
                            >
                                {availableNow
                                    ? "This room will immediately appear as available to prospective tenants. They can view and book it without waiting for a future move-in date."
                                    : "After selecting a future availability date, tenants will know exactly when this room becomes available, reducing booking confusion and scheduling conflicts."}
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default AvailabilityToggle;