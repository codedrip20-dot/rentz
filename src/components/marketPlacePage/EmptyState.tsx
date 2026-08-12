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
        <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/35 px-5 py-14 text-center backdrop-blur-3xl sm:rounded-[32px] sm:px-8 sm:py-20">

            {/* ======================================================
                Background Glow
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0">

                <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[100px] sm:h-72 sm:w-72 sm:blur-[120px]" />

                <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-[100px] sm:h-64 sm:w-64 sm:blur-[120px]" />

            </div>

            <div className="relative z-10 flex flex-col items-center">

                {/* ======================================================
                    Icon
                ====================================================== */}

                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 backdrop-blur-3xl shadow-[0_20px_60px_rgba(37,99,235,0.25)] sm:h-28 sm:w-28">

                    <SearchX
                        size={42}
                        className="text-blue-300 sm:h-[54px] sm:w-[54px]"
                    />

                </div>

                {/* ======================================================
                    Badge
                ====================================================== */}

                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3.5 py-2 backdrop-blur-xl sm:mt-8 sm:px-4">

                    <Sparkles
                        size={15}
                        className="shrink-0 text-cyan-300 sm:h-4 sm:w-4"
                    />

                    <span className="text-xs font-medium text-blue-200 sm:text-sm">

                        Search Suggestions

                    </span>

                </div>

                {/* ======================================================
                    Heading
                ====================================================== */}

                <h2 className="mt-6 max-w-[320px] text-3xl font-black leading-tight tracking-tight text-white sm:mt-8 sm:max-w-none sm:text-4xl">

                    No Matching Rooms Found

                </h2>

                {/* ======================================================
                    Description
                ====================================================== */}

                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">

                    We couldn't find any rooms that match your current
                    search criteria. Try expanding your budget,
                    searching a nearby location, or removing one or
                    more filters to discover more properties.

                </p>

                {/* ======================================================
                    Tips
                ====================================================== */}

                <div className="mt-8 grid w-full max-w-3xl gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3">

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-2xl sm:p-5">

                        <p className="text-sm font-semibold text-white">

                            📍 Try another location

                        </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-2xl sm:p-5">

                        <p className="text-sm font-semibold text-white">

                            💰 Increase your budget

                        </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-2xl sm:p-5">

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
                        mt-10
                        inline-flex
                        min-h-12
                        w-full
                        max-w-xs
                        items-center
                        justify-center
                        gap-3
                        rounded-2xl
                        bg-gradient-to-r
                        from-blue-600
                        to-cyan-500
                        px-6
                        py-3.5
                        font-semibold
                        text-white
                        shadow-[0_15px_40px_rgba(37,99,235,0.35)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:scale-[1.02]
                        hover:shadow-[0_25px_60px_rgba(37,99,235,0.45)]
                        sm:mt-12
                        sm:w-auto
                        sm:max-w-none
                        sm:px-8
                        sm:py-4
                    "
                >

                    <RotateCcw
                        size={18}
                        className="shrink-0 transition-transform duration-300 group-hover:rotate-180"
                    />

                    Clear All Filters

                </button>

            </div>

        </section>
    );
}