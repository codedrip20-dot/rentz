"use client";

import Link from "next/link";

import {
    ArrowLeft,
    Building2,
    CheckCircle2,
    ChevronRight,
    MapPin,
    Sparkles,
} from "lucide-react";

interface MarketPlaceHeaderProps {
    totalRooms: number;
}

import heroBgII from "@/assets/herobgII.png";

export default function MarketPlaceHeader({
    totalRooms,
}: MarketPlaceHeaderProps) {

    return (

        <section className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,.45)] sm:rounded-[32px] sm:shadow-[0_35px_90px_rgba(0,0,0,.45)]">

            {/* Background */}

            <div className="absolute inset-0">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${heroBgII.src})`,
                    }}
                />

                <div className="absolute inset-0 bg-slate-950/75 sm:bg-slate-950/70" />

                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/65 to-blue-950/70 sm:bg-gradient-to-r sm:from-slate-950 sm:via-slate-950/65 sm:to-blue-950/60" />

            </div>

            {/* Ambient Glow */}

            <div className="pointer-events-none absolute inset-0">

                <div className="absolute -left-24 top-0 h-56 w-56 rounded-full bg-blue-500/15 blur-[110px] sm:h-72 sm:w-72 sm:bg-blue-500/20 sm:blur-[130px]" />

                <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px] sm:right-0 sm:h-96 sm:w-96 sm:blur-[160px]" />

            </div>

            <div className="relative z-10 px-5 py-5 sm:px-7 sm:py-7 lg:px-10 lg:py-8">

                {/* Top */}

                <div className="flex items-center justify-between gap-3">

                    <Link
                        href="/"
                        className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs text-white backdrop-blur-xl transition hover:bg-white/20 sm:px-4 sm:text-sm"
                    >

                        <ArrowLeft
                            size={15}
                            className="shrink-0 sm:h-4 sm:w-4"
                        />

                        Back to Home

                    </Link>

                    <div className="hidden items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 backdrop-blur-xl md:flex">

                        <Sparkles
                            size={15}
                            className="text-cyan-300"
                        />

                        <span className="text-sm font-medium text-blue-100">

                            India's Premium Property Marketplace

                        </span>

                    </div>

                </div>

                {/* Hero */}

                <div className="mt-7 grid gap-7 sm:mt-8 sm:gap-8 xl:grid-cols-[1.5fr_.8fr] xl:items-center">

                    <div className="min-w-0">

                        <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3.5 py-2 text-[11px] text-blue-200 backdrop-blur-xl sm:px-4 sm:text-xs">

                            <Sparkles
                                size={13}
                                className="shrink-0 text-cyan-300 sm:h-3.5 sm:w-3.5"
                            />

                            Verified • Secure • Instant Booking

                        </span>

                        <h1 className="mt-5 text-[2.35rem] font-black leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">

                            Find Your

                            <br />

                            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">

                                Perfect Home

                            </span>

                        </h1>

                        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-7">

                            Browse verified rooms, compare prices instantly,
                            and discover your next home with intelligent
                            search and powerful filters.

                        </p>

                        <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">

                            <div className="rounded-full border border-white/10 bg-white/10 px-3.5 py-2 text-xs text-white backdrop-blur-xl sm:px-4 sm:text-sm">

                                ✓ Verified Listings

                            </div>

                            <div className="rounded-full border border-white/10 bg-white/10 px-3.5 py-2 text-xs text-white backdrop-blur-xl sm:px-4 sm:text-sm">

                                📍 Google Places

                            </div>

                        </div>

                    </div>

                    {/* Statistics Panel */}

                    <div className="rounded-[24px] border border-white/10 bg-white/10 p-4 backdrop-blur-3xl sm:rounded-[28px] sm:p-5">

                        <div className="mb-4">

                            <h3 className="text-base font-bold text-white sm:text-lg">

                                Marketplace Overview

                            </h3>

                            <p className="mt-1 text-xs text-slate-300 sm:text-sm">

                                Trusted listings updated live.

                            </p>

                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4">

                            {/* Rooms */}

                            <div className="rounded-2xl border border-white/10 bg-slate-900/35 p-3.5 backdrop-blur-2xl sm:p-4">

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 sm:h-11 sm:w-11">

                                    <Building2
                                        size={20}
                                        className="text-blue-300 sm:h-[22px] sm:w-[22px]"
                                    />

                                </div>

                                <p className="mt-3 text-2xl font-black text-white sm:mt-4 sm:text-3xl">

                                    {totalRooms}

                                </p>

                                <p className="mt-1 text-xs font-semibold text-white sm:text-sm">

                                    Available Rooms

                                </p>

                            </div>

                            {/* Verified */}

                            <div className="rounded-2xl border border-white/10 bg-slate-900/35 p-3.5 backdrop-blur-2xl sm:p-4">

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/20 sm:h-11 sm:w-11">

                                    <CheckCircle2
                                        size={20}
                                        className="text-green-300 sm:h-[22px] sm:w-[22px]"
                                    />

                                </div>

                                <p className="mt-3 text-2xl font-black text-white sm:mt-4 sm:text-3xl">

                                    100%

                                </p>

                                <p className="mt-1 text-xs font-semibold text-white sm:text-sm">

                                    Verified

                                </p>

                            </div>

                            {/* Google */}

                            <div className="rounded-2xl border border-white/10 bg-slate-900/35 p-3.5 backdrop-blur-2xl sm:p-4">

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 sm:h-11 sm:w-11">

                                    <MapPin
                                        size={20}
                                        className="text-cyan-300 sm:h-[22px] sm:w-[22px]"
                                    />

                                </div>

                                <p className="mt-3 text-lg font-bold text-white sm:mt-4 sm:text-xl">

                                    India

                                </p>

                                <p className="mt-1 text-xs text-slate-300 sm:text-sm">

                                    Google Places

                                </p>

                            </div>

                            {/* Smart */}

                            <div className="rounded-2xl border border-white/10 bg-slate-900/35 p-3.5 backdrop-blur-2xl sm:p-4">

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/20 sm:h-11 sm:w-11">

                                    <Sparkles
                                        size={20}
                                        className="text-yellow-300 sm:h-[22px] sm:w-[22px]"
                                    />

                                </div>

                                <p className="mt-3 text-lg font-bold text-white sm:mt-4 sm:text-xl">

                                    Smart

                                </p>

                                <p className="mt-1 text-xs text-slate-300 sm:text-sm">

                                    Discovery

                                </p>

                            </div>

                        </div>

                        {/* Footer */}

                        <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-blue-400/20 bg-blue-500/10 px-3.5 py-3 sm:mt-5 sm:px-4">

                            <div className="min-w-0">

                                <p className="text-[10px] uppercase tracking-wider text-blue-200 sm:text-xs">

                                    Status

                                </p>

                                <p className="text-xs font-semibold text-white sm:text-sm">

                                    Live Marketplace

                                </p>

                            </div>

                            <div className="flex shrink-0 items-center gap-2">

                                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

                                <span className="text-xs font-medium text-emerald-300 sm:text-sm">

                                    Online

                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}