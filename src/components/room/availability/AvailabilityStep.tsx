"use client";

import {
    CalendarClock,
    CheckCircle2,
    Clock3,
    CalendarDays,
    Sparkles,
    ShieldCheck,
} from "lucide-react";

import { useRoomWizard } from "@/hooks/useRoomWizard";

import AvailabilityHeader from "./AvailabilityHeader";
import AvailabilityToggle from "./AvailabilityToggle";
import AvailableFromPicker from "./AvailableFromPicker";
import MinimumStayInput from "./MinimumStayInput";
import MaximumStayInput from "./MaximumStayInput";

const AvailabilityStep = () => {
    const { room } = useRoomWizard();

    const {
        availableNow,
        availableFrom,
        minimumStay,
        maximumStay,
    } = room.availability;

    const formattedDate =
        availableFrom?.toDate().toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });

    return (
        <div className="mx-auto max-w-7xl space-y-10">
            {/* Header */}
            <AvailabilityHeader />

            {/* ================================================= */}
            {/* Hero */}
            {/* ================================================= */}

            <section className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-8 text-white shadow-2xl">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

                <div className="relative z-10 flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
                    <div className="max-w-3xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                            <Sparkles className="h-4 w-4" />

                            <span className="text-sm font-semibold">
                                Step 2 • Availability Management
                            </span>
                        </div>

                        <h1 className="text-3xl font-black tracking-tight lg:text-4xl">
                            Configure Availability &
                            <br />
                            Stay Policies
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100">
                            Define when tenants can move in,
                            configure lease duration, and create a
                            transparent booking experience. These
                            settings directly influence your rooms
                            marketplace listing.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                                📅 Move-in Scheduling
                            </div>

                            <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                                🏡 Occupancy Rules
                            </div>

                            <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                                ⏳ Lease Duration
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 xl:w-[360px]">
                        <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                            <div className="flex items-center justify-between">
                                <CalendarDays className="h-10 w-10 text-cyan-200" />

                                <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-100">
                                    Live
                                </span>
                            </div>

                            <p className="mt-5 text-sm text-blue-100">
                                Status
                            </p>

                            <h3 className="mt-2 text-2xl font-bold">
                                {availableNow
                                    ? "Available"
                                    : "Scheduled"}
                            </h3>
                        </div>

                        <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                            <div className="flex items-center justify-between">
                                <Clock3 className="h-10 w-10 text-violet-200" />

                                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                                    Active
                                </span>
                            </div>

                            <p className="mt-5 text-sm text-blue-100">
                                Lease Window
                            </p>

                            <h3 className="mt-2 text-2xl font-bold">
                                {minimumStay}–{maximumStay}
                            </h3>

                            <p className="mt-1 text-sm text-blue-100">
                                Months
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================= */}
            {/* Availability */}
            {/* ================================================= */}

            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                        <CalendarClock className="h-6 w-6 text-blue-600" />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-slate-900">
                            Room Availability
                        </h2>

                        <p className="mt-1 text-sm text-slate-600">
                            Control when tenants can occupy this
                            room.
                        </p>
                    </div>
                </div>

                <AvailabilityToggle />

                {!availableNow && (
                    <AvailableFromPicker />
                )}
            </section>

            {/* ================================================= */}
            {/* Stay Duration */}
            {/* ================================================= */}

            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100">
                        <ShieldCheck className="h-6 w-6 text-violet-600" />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-slate-900">
                            Stay Duration Policy
                        </h2>

                        <p className="mt-1 text-sm text-slate-600">
                            Define the minimum and maximum lease
                            period for this room.
                        </p>
                    </div>
                </div>

                <div className="grid gap-8 xl:grid-cols-2">
                    <MinimumStayInput />

                    <MaximumStayInput />
                </div>
            </section>

          <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl">
                {/* Header */}
                <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-slate-50 px-8 py-6">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                                <CheckCircle2 className="h-4 w-4" />
                                Availability Overview
                            </div>

                            <h2 className="mt-4 text-3xl font-bold text-slate-900">
                                Review Your Configuration
                            </h2>

                            <p className="mt-2 max-w-2xl text-slate-600">
                                Everything looks good. Heres a quick overview
                                of how your room will appear to prospective
                                tenants.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-5 text-white shadow-lg">
                            <p className="text-sm text-blue-100">
                                Configuration
                            </p>

                            <h3 className="mt-1 text-3xl font-black">
                                Complete
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Summary Cards */}

                <div className="grid gap-6 p-8 lg:grid-cols-3">
                    {/* Status */}

                    <div className="group rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
                        <div className="flex items-center justify-between">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
                                <CheckCircle2 className="h-7 w-7" />
                            </div>

                            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                Status
                            </span>
                        </div>

                        <h3 className="mt-8 text-2xl font-bold text-slate-900">
                            {availableNow
                                ? "Available Now"
                                : "Scheduled"}
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600">
                            {availableNow
                                ? "Tenants can book and move in immediately."
                                : "Bookings will open from your selected availability date."}
                        </p>
                    </div>

                    {/* Move In */}

                    <div className="group rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-50 to-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl">
                        <div className="flex items-center justify-between">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-lg">
                                <CalendarClock className="h-7 w-7" />
                            </div>

                            <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                                Move In
                            </span>
                        </div>

                        <h3 className="mt-8 text-2xl font-bold text-slate-900">
                            {availableNow
                                ? "Immediately"
                                : formattedDate ?? "--"}
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600">
                            {availableNow
                                ? "No waiting period for new tenants."
                                : "The marketplace will automatically display this move-in date."}
                        </p>
                    </div>

                    {/* Lease */}

                    <div className="group rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl">
                        <div className="flex items-center justify-between">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg">
                                <Clock3 className="h-7 w-7" />
                            </div>

                            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                                Lease
                            </span>
                        </div>

                        <h3 className="mt-8 text-2xl font-bold text-slate-900">
                            {minimumStay} – {maximumStay} Months
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600">
                            Tenants must stay at least{" "}
                            <strong>{minimumStay}</strong> month
                            {minimumStay > 1 && "s"} and can stay up to{" "}
                            <strong>{maximumStay}</strong> month
                            {maximumStay > 1 && "s"}.
                        </p>
                    </div>
                </div>

                {/* Timeline */}

                <div className="border-y border-slate-100 bg-slate-50 px-8 py-10">
                    <h3 className="text-xl font-bold text-slate-900">
                        Availability Timeline
                    </h3>

                    <p className="mt-2 text-slate-600">
                        This is how tenants will experience your room
                        availability.
                    </p>

                    <div className="mt-10 grid gap-8 md:grid-cols-4">
                        <div className="text-center">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                                1
                            </div>

                            <h4 className="mt-4 font-semibold text-slate-900">
                                Listing Published
                            </h4>

                            <p className="mt-2 text-sm text-slate-500">
                                Your room becomes visible in Rentz.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg">
                                2
                            </div>

                            <h4 className="mt-4 font-semibold text-slate-900">
                                Available
                            </h4>

                            <p className="mt-2 text-sm text-slate-500">
                                {availableNow
                                    ? "Immediately"
                                    : formattedDate ?? "--"}
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg">
                                3
                            </div>

                            <h4 className="mt-4 font-semibold text-slate-900">
                                Minimum Stay
                            </h4>

                            <p className="mt-2 text-sm text-slate-500">
                                {minimumStay} Month
                                {minimumStay > 1 && "s"}
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg">
                                4
                            </div>

                            <h4 className="mt-4 font-semibold text-slate-900">
                                Maximum Stay
                            </h4>

                            <p className="mt-2 text-sm text-slate-500">
                                {maximumStay} Month
                                {maximumStay > 1 && "s"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}

                <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 px-8 py-8 text-white">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
                                <CheckCircle2 className="h-4 w-4" />

                                <span className="text-sm font-semibold">
                                    Step Completed
                                </span>
                            </div>

                            <h2 className="mt-5 text-3xl font-bold">
                                Availability Successfully Configured
                            </h2>

                            <p className="mt-3 max-w-3xl text-blue-100 leading-7">
                                Your room is now configured with
                                availability rules, move-in scheduling,
                                and lease duration. Continue to the
                                Pricing step to define rent, security
                                deposit, maintenance charges, and billing
                                preferences.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
                            <p className="text-sm text-blue-100">
                                Next Step
                            </p>

                            <h3 className="mt-2 text-2xl font-bold">
                                Pricing
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-blue-100">
                                Rent • Deposit • Utilities • Billing
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AvailabilityStep;