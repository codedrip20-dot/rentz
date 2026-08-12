"use client";

import {
    ClipboardList,
    Home,
    Info,
    Layers3,
    Sparkles,
    Users,
} from "lucide-react";

import AreaInput from "./AreaInput";
import BathroomSelector from "./BathroomSelector";
import BedTypeSelector from "./BedTypeSelector";
import CapacitySelector from "./CapacitySelector";
import FloorInput from "./FloorInput";
import FurnishingSelector from "./FurnishingSelector";
import GenderPreferenceSelector from "./GenderPreferenceSelector";
import KitchenSelector from "./KitchenSelector";
import RoomNameInput from "./RoomNameInput";
import RoomNumberInput from "./RoomNumberInput";
import RoomTypeSelector from "./RoomTypeSelector";

export default function BasicInformationStep() {
    return (
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">

            {/* ================= Hero ================= */}

            <section className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 p-5 text-white shadow-2xl sm:rounded-[36px] sm:p-8 lg:p-10">

                {/* Decorative Blur */}

                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl sm:h-72 sm:w-72" />

                <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl sm:h-72 sm:w-72" />

                <div className="relative z-10">

                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur sm:px-4">

                        <Sparkles className="h-4 w-4 shrink-0" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-xs sm:tracking-[0.18em]">
                            Step 1 of 5
                        </span>

                    </div>

                    <div className="mt-6 flex flex-col gap-5 sm:mt-8 sm:flex-row sm:items-start sm:gap-6">

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur sm:h-16 sm:w-16 sm:rounded-3xl">

                            <ClipboardList className="h-7 w-7 sm:h-8 sm:w-8" />

                        </div>

                        <div className="min-w-0">

                            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                                Basic Room Information
                            </h1>

                            <p className="mt-3 max-w-3xl text-sm leading-7 text-blue-100 sm:mt-4 sm:text-base sm:leading-8">
                                Describe your room before adding pricing,
                                amenities, and availability. These details help
                                tenants quickly understand what your room
                                offers and improve the overall quality of your
                                listing.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">

                                {[
                                    "Identity",
                                    "Specifications",
                                    "Facilities",
                                ].map((item) => (

                                    <span
                                        key={item}
                                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur sm:px-4 sm:py-2 sm:text-sm"
                                    >
                                        {item}
                                    </span>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= Identity ================= */}

            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm sm:rounded-[36px]">

                <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-5 sm:p-6 lg:p-8">

                    <div className="flex items-start gap-3 sm:gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 sm:h-14 sm:w-14">

                            <Home className="h-6 w-6 sm:h-7 sm:w-7" />

                        </div>

                        <div className="min-w-0 flex-1">

                            <div className="flex flex-wrap items-center gap-2">

                                <div className="inline-flex rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-700 sm:px-3 sm:text-xs">
                                    Identity
                                </div>

                                <div className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 sm:hidden">
                                    <span className="text-[10px] font-semibold uppercase tracking-wide text-blue-700">
                                        Required
                                    </span>
                                </div>

                            </div>

                            <h2 className="mt-2 text-xl font-bold text-slate-900 sm:mt-3 sm:text-2xl">
                                Room Details
                            </h2>

                            <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
                                Give your room a unique identity so tenants
                                can easily recognize it within the property.
                            </p>

                        </div>

                        <div className="hidden shrink-0 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 sm:block">

                            <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                                Required
                            </span>

                        </div>

                    </div>

                </div>

                <div className="space-y-7 p-5 sm:space-y-8 sm:p-6 lg:space-y-10 lg:p-8">

                    <RoomNameInput />

                    <RoomNumberInput />

                </div>

            </section>

            {/* ================= Specifications ================= */}

            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm sm:rounded-[36px]">

                <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-5 sm:p-6 lg:p-8">

                    <div className="flex items-start gap-3 sm:gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 sm:h-14 sm:w-14">

                            <Layers3 className="h-6 w-6 sm:h-7 sm:w-7" />

                        </div>

                        <div className="min-w-0">

                            <div className="inline-flex rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-violet-700 sm:px-3 sm:text-xs">
                                Specifications
                            </div>

                            <h2 className="mt-2 text-xl font-bold text-slate-900 sm:mt-3 sm:text-2xl">
                                Room Specifications
                            </h2>

                            <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
                                Configure the physical characteristics of this
                                room including its size, type, and location
                                within the property.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="space-y-7 p-5 sm:space-y-8 sm:p-6 lg:space-y-10 lg:p-8">

                    <RoomTypeSelector />

                    <div className="grid gap-7 sm:gap-8 lg:grid-cols-2">

                        <AreaInput />

                        <FloorInput />

                    </div>

                </div>

            </section>

            {/* ================= Facilities ================= */}

            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm sm:rounded-[36px]">

                <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-5 sm:p-6 lg:p-8">

                    <div className="flex items-start gap-3 sm:gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 sm:h-14 sm:w-14">

                            <Users className="h-6 w-6 sm:h-7 sm:w-7" />

                        </div>

                        <div className="min-w-0">

                            <div className="inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 sm:px-3 sm:text-xs">
                                Occupancy
                            </div>

                            <h2 className="mt-2 text-xl font-bold text-slate-900 sm:mt-3 sm:text-2xl">
                                Occupancy & Facilities
                            </h2>

                            <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
                                Define who can stay in the room and specify the
                                facilities that are available for tenants.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="space-y-7 p-5 sm:space-y-8 sm:p-6 lg:space-y-10 lg:p-8">

                    <CapacitySelector />

                    <BedTypeSelector />

                    <BathroomSelector />

                    <KitchenSelector />

                    <FurnishingSelector />

                    <GenderPreferenceSelector />

                </div>

            </section>

            {/* ================= Tip ================= */}

            <section className="rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-orange-50 p-5 sm:rounded-[36px] sm:p-6 lg:p-8">

                <div className="flex items-start gap-3 sm:gap-5">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 sm:h-14 sm:w-14">

                        <Info className="h-6 w-6 sm:h-7 sm:w-7" />

                    </div>

                    <div className="min-w-0">

                        <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                            Pro Tip
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-slate-600 sm:mt-3 sm:text-sm sm:leading-7">
                            Complete and accurate room information builds trust
                            with potential tenants. Listings with clear room
                            details, furnishing information, and occupancy
                            preferences are easier to discover and often receive
                            higher-quality inquiries.
                        </p>

                    </div>

                </div>

            </section>

        </div>
    );
}