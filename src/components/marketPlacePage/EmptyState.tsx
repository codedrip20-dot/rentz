"use client";

import {
    RotateCcw,
    SearchX,
    Sparkles,
} from "lucide-react";

interface EmptyStateProps {
    onClearFilters: () => void;
}

export default function EmptyState({
    onClearFilters,
}: EmptyStateProps) {
    return (
        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/35 px-8 py-20 text-center backdrop-blur-3xl">

            {/* ======================================================
                Background Glow
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0">

                <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[120px]" />

                <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px]" />

            </div>

            <div className="relative z-10 flex flex-col items-center">

                {/* ======================================================
                    Icon
                ====================================================== */}

                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 backdrop-blur-3xl shadow-[0_20px_60px_rgba(37,99,235,0.25)]">

                    <SearchX
                        size={54}
                        className="text-blue-300"
                    />

                </div>

                {/* ======================================================
                    Badge
                ====================================================== */}

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 backdrop-blur-xl">

                    <Sparkles
                        size={16}
                        className="text-cyan-300"
                    />

                    <span className="text-sm font-medium text-blue-200">

                        Search Suggestions

                    </span>

                </div>

                {/* ======================================================
                    Heading
                ====================================================== */}

                <h2 className="mt-8 text-4xl font-black tracking-tight text-white">

                    No Matching Rooms Found

                </h2>

                {/* ======================================================
                    Description
                ====================================================== */}

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">

                    We couldn't find any rooms that match your current
                    search criteria. Try expanding your budget,
                    searching a nearby location, or removing one or
                    more filters to discover more properties.

                </p>

                {/* ======================================================
                    Tips
                ====================================================== */}

                <div className="mt-10 grid gap-4 md:grid-cols-3">

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">

                        <p className="text-sm font-semibold text-white">

                            📍 Try another location

                        </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">

                        <p className="text-sm font-semibold text-white">

                            💰 Increase your budget

                        </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">

                        <p className="text-sm font-semibold text-white">

                            🏠 Remove some filters

                        </p>

                    </div>

                </div>

                {/* ======================================================
                    Action
                ====================================================== */}

                <button
                    type="button"
                    onClick={onClearFilters}
                    className="
                        group
                        mt-12
                        inline-flex
                        items-center
                        gap-3
                        rounded-2xl
                        bg-gradient-to-r
                        from-blue-600
                        to-cyan-500
                        px-8
                        py-4
                        font-semibold
                        text-white
                        shadow-[0_15px_40px_rgba(37,99,235,0.35)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:scale-[1.02]
                        hover:shadow-[0_25px_60px_rgba(37,99,235,0.45)]
                    "
                >

                    <RotateCcw
                        size={18}
                        className="transition-transform duration-300 group-hover:rotate-180"
                    />

                    Clear All Filters

                </button>

            </div>

        </section>
    );
}