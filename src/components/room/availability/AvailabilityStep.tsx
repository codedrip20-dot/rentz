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
        <div className="mx-auto max-w-7xl space-y-6 sm:space-y-8 md:space-y-10">

            {/* Header */}
            <AvailabilityHeader />

            {/* ================================================= */}
            {/* Hero */}
            {/* ================================================= */}

            <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-4 text-white shadow-2xl sm:rounded-[28px] sm:p-6 md:rounded-[32px] md:p-8">

                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl sm:-right-24 sm:-top-24 sm:h-72 sm:w-72" />

                <div className="absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl sm:-bottom-32 sm:h-72 sm:w-72" />

                <div className="relative z-10 flex flex-col gap-6 sm:gap-8 xl:flex-row xl:items-center xl:justify-between">

                    <div className="min-w-0 max-w-3xl">

                        <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md sm:mb-5 sm:px-4 sm:py-2">

                            <Sparkles className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />

                            <span className="truncate text-xs font-semibold sm:text-sm">
                                Step 2 • Availability Management
                            </span>

                        </div>

                        <h1 className="text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                            Configure Availability &
                            <br />
                            Stay Policies
                        </h1>

                        <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-100 sm:mt-5 sm:text-base sm:leading-8">
                            Define when tenants can move in,
                            configure lease duration, and create a
                            transparent booking experience. These
                            settings directly influence your rooms
                            marketplace listing.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">

                            <div className="rounded-full bg-white/10 px-3 py-1.5 text-xs backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
                                📅 Move-in Scheduling
                            </div>

                            <div className="rounded-full bg-white/10 px-3 py-1.5 text-xs backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
                                🏡 Occupancy Rules
                            </div>

                            <div className="rounded-full bg-white/10 px-3 py-1.5 text-xs backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
                                ⏳ Lease Duration
                            </div>

                        </div>

                    </div>

                    <div className="grid w-full gap-3 sm:grid-cols-2 sm:gap-4 xl:w-[360px]">

                        <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl sm:rounded-3xl sm:p-5">

                            <div className="flex items-center justify-between">

                                <CalendarDays className="h-8 w-8 text-cyan-200 sm:h-10 sm:w-10" />

                                <span className="rounded-full bg-emerald-400/20 px-2.5 py-1 text-[10px] font-semibold text-emerald-100 sm:px-3 sm:text-xs">
                                    Live
                                </span>

                            </div>

                            <p className="mt-4 text-xs text-blue-100 sm:mt-5 sm:text-sm">
                                Status
                            </p>

                            <h3 className="mt-1.5 text-xl font-bold sm:mt-2 sm:text-2xl">
                                {availableNow
                                    ? "Available"
                                    : "Scheduled"}
                            </h3>

                        </div>

                        <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl sm:rounded-3xl sm:p-5">

                            <div className="flex items-center justify-between">

                                <Clock3 className="h-8 w-8 text-violet-200 sm:h-10 sm:w-10" />

                                <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold sm:px-3 sm:text-xs">
                                    Active
                                </span>

                            </div>

                            <p className="mt-4 text-xs text-blue-100 sm:mt-5 sm:text-sm">
                                Lease Window
                            </p>

                            <h3 className="mt-1.5 text-xl font-bold sm:mt-2 sm:text-2xl">
                                {minimumStay}–{maximumStay}
                            </h3>

                            <p className="mt-1 text-xs text-blue-100 sm:text-sm">
                                Months
                            </p>

                        </div>

                    </div>

                </div>
            </section>

            {/* ================================================= */}
            {/* Availability */}
            {/* ================================================= */}

            <section className="space-y-4 sm:space-y-6">

                <div className="flex items-center gap-3 sm:gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 sm:h-12 sm:w-12 sm:rounded-2xl">
                        <CalendarClock className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />
                    </div>

                    <div className="min-w-0">

                        <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                            Room Availability
                        </h2>

                        <p className="mt-0.5 text-xs text-slate-600 sm:mt-1 sm:text-sm">
                            Control when tenants can occupy this room.
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

            <section className="space-y-4 sm:space-y-6">

                <div className="flex items-center gap-3 sm:gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 sm:h-12 sm:w-12 sm:rounded-2xl">
                        <ShieldCheck className="h-5 w-5 text-violet-600 sm:h-6 sm:w-6" />
                    </div>

                    <div className="min-w-0">

                        <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                            Stay Duration Policy
                        </h2>

                        <p className="mt-0.5 text-xs text-slate-600 sm:mt-1 sm:text-sm">
                            Define the minimum and maximum lease period for this room.
                        </p>

                    </div>

                </div>

                <div className="grid gap-5 sm:gap-6 xl:grid-cols-2 xl:gap-8">
                    <MinimumStayInput />

                    <MaximumStayInput />
                </div>

            </section>

            {/* ================================================= */}
            {/* Configuration Review */}
            {/* ================================================= */}

            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl sm:rounded-[28px] md:rounded-[32px]">

                {/* Header */}
                <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-slate-50 px-4 py-5 sm:px-6 sm:py-6 md:px-8">

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                        <div className="min-w-0">

                            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-700 sm:px-4 sm:py-2 sm:text-sm">

                                <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />

                                Availability Overview

                            </div>

                            <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:mt-4 sm:text-3xl">
                                Review Your Configuration
                            </h2>

                            <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-2">
                                Everything looks good. Heres a quick overview
                                of how your room will appear to prospective
                                tenants.
                            </p>

                        </div>

                        <div className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-4 text-white shadow-lg sm:w-auto sm:rounded-3xl sm:px-6 sm:py-5">

                            <p className="text-xs text-blue-100 sm:text-sm">
                                Configuration
                            </p>

                            <h3 className="mt-1 text-2xl font-black sm:text-3xl">
                                Complete
                            </h3>

                        </div>

                    </div>

                </div>

                {/* Summary Cards */}

                <div className="grid gap-4 p-4 sm:gap-5 sm:p-6 lg:grid-cols-2 lg:p-8 xl:grid-cols-3">

                    {/* Status */}

                    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl sm:rounded-3xl sm:p-6">

                        <div className="flex items-center justify-between gap-3">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg sm:h-14 sm:w-14 sm:rounded-2xl">
                                <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7" />
                            </div>

                            <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-semibold text-blue-700 sm:px-3 sm:text-xs">
                                Status
                            </span>

                        </div>

                        <h3 className="mt-6 text-xl font-bold text-slate-900 sm:mt-8 sm:text-2xl">
                            {availableNow
                                ? "Available Now"
                                : "Scheduled"}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:leading-7">
                            {availableNow
                                ? "Tenants can book and move in immediately."
                                : "Bookings will open from your selected availability date."}
                        </p>

                    </div>

                    {/* Move In */}

                    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-violet-50 to-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl sm:rounded-3xl sm:p-6">

                        <div className="flex items-center justify-between gap-3">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg sm:h-14 sm:w-14 sm:rounded-2xl">
                                <CalendarClock className="h-6 w-6 sm:h-7 sm:w-7" />
                            </div>

                            <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-semibold text-violet-700 sm:px-3 sm:text-xs">
                                Move In
                            </span>

                        </div>

                        <h3 className="mt-6 break-words text-xl font-bold text-slate-900 sm:mt-8 sm:text-2xl">
                            {availableNow
                                ? "Immediately"
                                : formattedDate ?? "--"}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:leading-7">
                            {availableNow
                                ? "No waiting period for new tenants."
                                : "The marketplace will automatically display this move-in date."}
                        </p>

                    </div>

                    {/* Lease */}

                    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl sm:rounded-3xl sm:p-6">

                        <div className="flex items-center justify-between gap-3">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg sm:h-14 sm:w-14 sm:rounded-2xl">
                                <Clock3 className="h-6 w-6 sm:h-7 sm:w-7" />
                            </div>

                            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 sm:px-3 sm:text-xs">
                                Lease
                            </span>

                        </div>

                        <h3 className="mt-6 break-words text-xl font-bold text-slate-900 sm:mt-8 sm:text-2xl">
                            {minimumStay} – {maximumStay} Months
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:leading-7">
                            Tenants must stay at least{" "}
                            <strong>{minimumStay}</strong> month
                            {minimumStay > 1 && "s"} and can stay up to{" "}
                            <strong>{maximumStay}</strong> month
                            {maximumStay > 1 && "s"}.
                        </p>

                    </div>

                </div>

                {/* Timeline */}

                <div className="border-y border-slate-100 bg-slate-50 px-4 py-7 sm:px-6 sm:py-8 md:px-8 md:py-10">

                    <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                        Availability Timeline
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:mt-2">
                        This is how tenants will experience your room availability.
                    </p>

                    <div className="mt-7 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">

                        <div className="text-center">

                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white shadow-lg sm:h-14 sm:w-14">
                                1
                            </div>

                            <h4 className="mt-3 text-sm font-semibold text-slate-900 sm:mt-4">
                                Listing Published
                            </h4>

                            <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm">
                                Your room becomes visible in Rentz.
                            </p>

                        </div>

                        <div className="text-center">

                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-sm font-semibold text-white shadow-lg sm:h-14 sm:w-14">
                                2
                            </div>

                            <h4 className="mt-3 text-sm font-semibold text-slate-900 sm:mt-4">
                                Available
                            </h4>

                            <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm">
                                {availableNow
                                    ? "Immediately"
                                    : formattedDate ?? "--"}
                            </p>

                        </div>

                        <div className="text-center">

                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-sm font-semibold text-white shadow-lg sm:h-14 sm:w-14">
                                3
                            </div>

                            <h4 className="mt-3 text-sm font-semibold text-slate-900 sm:mt-4">
                                Minimum Stay
                            </h4>

                            <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm">
                                {minimumStay} Month
                                {minimumStay > 1 && "s"}
                            </p>

                        </div>

                        <div className="text-center">

                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white shadow-lg sm:h-14 sm:w-14">
                                4
                            </div>

                            <h4 className="mt-3 text-sm font-semibold text-slate-900 sm:mt-4">
                                Maximum Stay
                            </h4>

                            <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm">
                                {maximumStay} Month
                                {maximumStay > 1 && "s"}
                            </p>

                        </div>

                    </div>

                </div>

                {/* Footer */}

                <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 px-4 py-6 text-white sm:px-6 sm:py-7 md:px-8 md:py-8">

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between sm:gap-6">

                        <div className="min-w-0">

                            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur sm:px-4 sm:py-2">

                                <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />

                                <span className="text-xs font-semibold sm:text-sm">
                                    Step Completed
                                </span>

                            </div>

                            <h2 className="mt-4 text-2xl font-bold leading-tight sm:mt-5 sm:text-3xl">
                                Availability Successfully Configured
                            </h2>

                            <p className="mt-2 max-w-3xl text-sm leading-6 text-blue-100 sm:mt-3 sm:leading-7">
                                Your room is now configured with
                                availability rules, move-in scheduling,
                                and lease duration. Continue to the
                                Pricing step to define rent, security
                                deposit, maintenance charges, and billing
                                preferences.
                            </p>

                        </div>

                        <div className="w-full rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl sm:w-auto sm:rounded-3xl sm:p-6">

                            <p className="text-xs text-blue-100 sm:text-sm">
                                Next Step
                            </p>

                            <h3 className="mt-1.5 text-xl font-bold sm:mt-2 sm:text-2xl">
                                Pricing
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-blue-100 sm:mt-3 sm:text-sm sm:leading-6">
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