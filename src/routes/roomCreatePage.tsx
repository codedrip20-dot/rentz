"use client";

import { BedDouble, Sparkles } from "lucide-react";

import RoomWizard from "@/components/room/RoomWizard";

export default function RoomCreationPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                {/* ==========================================================
                    Header
                ========================================================== */}

                <div className="mb-10 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-2xl">
                    <div className="relative px-8 py-10 lg:px-12">
                        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

                        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex items-start gap-5">
                                <div className="rounded-3xl bg-white/20 p-4 backdrop-blur">
                                    <BedDouble className="h-10 w-10 text-white" />
                                </div>

                                <div>
                                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                                        <Sparkles className="h-4 w-4" />
                                        Rentz Owner Dashboard
                                    </div>

                                    <h1 className="text-4xl font-bold tracking-tight text-white">
                                        Create New Room
                                    </h1>

                                    <p className="mt-4 max-w-3xl text-base leading-7 text-blue-100">
                                        Add a new room to your property by
                                        completing the guided setup wizard.
                                        Configure pricing, amenities,
                                        availability, and upload high-quality
                                        images before publishing your listing.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <StatCard
                                    value="6"
                                    label="Steps"
                                />

                                <StatCard
                                    value="2-10"
                                    label="Images"
                                />

                                <StatCard
                                    value="100%"
                                    label="Guided"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ==========================================================
                    Room Wizard
                ========================================================== */}

                <RoomWizard />
            </div>
        </main>
    );
}

interface StatCardProps {
    value: string;
    label: string;
}

function StatCard({
    value,
    label,
}: StatCardProps) {
    return (
        <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-5 text-center backdrop-blur">
            <div className="text-2xl font-bold text-white">
                {value}
            </div>

            <div className="mt-1 text-xs uppercase tracking-wide text-blue-100">
                {label}
            </div>
        </div>
    );
}