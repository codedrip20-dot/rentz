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
        <div className="space-y-10">

            {/* ================= Hero ================= */}

            <section className="relative overflow-hidden rounded-[36px] border border-blue-200 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 p-10 text-white shadow-2xl">

                {/* Decorative Blur */}

                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

                <div className="relative z-10">

                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">

                        <Sparkles className="h-4 w-4" />

                        <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                            Step 1 of 5
                        </span>

                    </div>

                    <div className="mt-8 flex items-start gap-6">

                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">

                            <ClipboardList className="h-8 w-8" />

                        </div>

                        <div>

                            <h1 className="text-4xl font-bold tracking-tight">
                                Basic Room Information
                            </h1>

                            <p className="mt-4 max-w-3xl text-base leading-8 text-blue-100">
                                Describe your room before adding pricing,
                                amenities, and availability. These details help
                                tenants quickly understand what your room
                                offers and improve the overall quality of your
                                listing.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">

                                {[
                                    "Identity",
                                    "Specifications",
                                    "Facilities",
                                ].map((item) => (

                                    <span
                                        key={item}
                                        className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur"
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

            <section className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm">

                <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-8">

                    <div className="flex items-start justify-between">

                        <div className="flex items-start gap-4">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">

                                <Home className="h-7 w-7" />

                            </div>

                            <div>

                                <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                                    Identity
                                </div>

                                <h2 className="mt-3 text-2xl font-bold text-slate-900">
                                    Room Details
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Give your room a unique identity so tenants
                                    can easily recognize it within the property.
                                </p>

                            </div>

                        </div>

                        <div className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2">

                            <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                                Required
                            </span>

                        </div>

                    </div>

                </div>

                <div className="space-y-10 p-8">

                    <RoomNameInput />

                    <RoomNumberInput />

                </div>

            </section>

            {/* ================= Specifications ================= */}

            <section className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm">

                <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-8">

                    <div className="flex items-start gap-4">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">

                            <Layers3 className="h-7 w-7" />

                        </div>

                        <div>

                            <div className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-700">
                                Specifications
                            </div>

                            <h2 className="mt-3 text-2xl font-bold text-slate-900">
                                Room Specifications
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Configure the physical characteristics of this
                                room including its size, type, and location
                                within the property.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="space-y-10 p-8">

                    <RoomTypeSelector />

                    <div className="grid gap-8 lg:grid-cols-2">

                        <AreaInput />

                        <FloorInput />

                    </div>

                </div>

            </section>

            {/* ================= Facilities ================= */}

            <section className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm">

                <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-8">

                    <div className="flex items-start gap-4">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">

                            <Users className="h-7 w-7" />

                        </div>

                        <div>

                            <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                                Occupancy
                            </div>

                            <h2 className="mt-3 text-2xl font-bold text-slate-900">
                                Occupancy & Facilities
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Define who can stay in the room and specify the
                                facilities that are available for tenants.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="space-y-10 p-8">

                    <CapacitySelector />

                    <BedTypeSelector />

                    <BathroomSelector />

                    <KitchenSelector />

                    <FurnishingSelector />

                    <GenderPreferenceSelector />

                </div>

            </section>

            {/* ================= Tip ================= */}

            <section className="rounded-[36px] border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-orange-50 p-8">

                <div className="flex items-start gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">

                        <Info className="h-7 w-7" />

                    </div>

                    <div>

                        <h3 className="text-lg font-bold text-slate-900">
                            Pro Tip
                        </h3>

                        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
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