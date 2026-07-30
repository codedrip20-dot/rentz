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
        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 shadow-sm">
            {/* Background Decoration */}
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-100/50 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-sky-100/40 blur-3xl" />

            <div className="relative z-10 p-7">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                    {/* Left */}
                    <div className="flex gap-5">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-xl shadow-blue-500/20">
                            <CalendarClock className="h-8 w-8" />
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold text-slate-900">
                                    Room Availability
                                </h3>

                                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                    Required
                                </span>
                            </div>

                            <p className="max-w-2xl text-sm leading-7 text-slate-600">
                                Tell tenants whether this room can be occupied
                                immediately or if they'll need to wait until a
                                future move-in date.
                            </p>

                            <div className="flex flex-wrap gap-3 pt-1">
                                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                                    <Sparkles className="h-4 w-4 text-blue-600" />
                                    Higher booking confidence
                                </div>

                                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                                    <Clock3 className="h-4 w-4 text-amber-500" />
                                    Fewer scheduling conflicts
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Toggle */}
                    <div className="flex flex-col items-center gap-3">
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
                            className={`text-sm font-semibold ${
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
                    className={`mt-8 rounded-2xl border p-5 transition-all duration-300 ${
                        availableNow
                            ? "border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50"
                            : "border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50"
                    }`}
                >
                    <div className="flex gap-4">
                        <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
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

                        <div>
                            <h4
                                className={`font-semibold ${
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
                                className={`mt-2 text-sm leading-7 ${
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