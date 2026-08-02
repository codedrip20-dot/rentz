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
import heroBgII from '@/assets/herobgII.png'
export default function MarketPlaceHeader({
    totalRooms,
}: MarketPlaceHeaderProps) {

    return (

       <section className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-[0_35px_90px_rgba(0,0,0,.45)]">

    {/* Background */}

    <div className="absolute inset-0">

        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
                backgroundImage: `url(${heroBgII.src})`,
            }}
        />

        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/65 to-blue-950/60" />

    </div>

    {/* Ambient Glow */}

    <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-[130px]" />

        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[160px]" />

    </div>

    <div className="relative z-10 px-7 py-7 lg:px-10 lg:py-8">

        {/* Top */}

        <div className="flex items-center justify-between">

            <Link
                href="/homepage"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-xl transition hover:bg-white/20"
            >

                <ArrowLeft size={16} />

                Back to Home

            </Link>

            <div className="hidden md:flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 backdrop-blur-xl">

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

        <div className="mt-8 grid gap-8 xl:grid-cols-[1.5fr_.8fr] xl:items-center">

            <div>

                <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs text-blue-200 backdrop-blur-xl">

                    <Sparkles
                        size={14}
                        className="text-cyan-300"
                    />

                    Verified • Secure • Instant Booking

                </span>

                <h1 className="mt-5 text-4xl font-black leading-tight text-white lg:text-5xl">

                    Find Your

                    <br />

                    <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">

                        Perfect Home

                    </span>

                </h1>

                <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">

                    Browse verified rooms, compare prices instantly,
                    and discover your next home with intelligent
                    search and powerful filters.

                </p>

                <div className="mt-6 flex flex-wrap gap-3">

                    <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-xl">

                        ✓ Verified Listings

                    </div>

                    <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-xl">

                        📍 Google Places

                    </div>

                </div>

            </div>

            {/* Statistics Panel Starts Here */}
            {/* ======================================================
                Statistics Panel
            ====================================================== */}

            <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-3xl">

                <div className="mb-4">

                    <h3 className="text-lg font-bold text-white">

                        Marketplace Overview

                    </h3>

                    <p className="mt-1 text-sm text-slate-300">

                        Trusted listings updated live.

                    </p>

                </div>

                <div className="grid grid-cols-2 gap-4">

                    {/* Rooms */}

                    <div className="rounded-2xl border border-white/10 bg-slate-900/35 p-4 backdrop-blur-2xl">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/20">

                            <Building2
                                size={22}
                                className="text-blue-300"
                            />

                        </div>

                        <p className="mt-4 text-3xl font-black text-white">

                            {totalRooms}

                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">

                            Available Rooms

                        </p>

                    </div>

                    {/* Verified */}

                    <div className="rounded-2xl border border-white/10 bg-slate-900/35 p-4 backdrop-blur-2xl">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/20">

                            <CheckCircle2
                                size={22}
                                className="text-green-300"
                            />

                        </div>

                        <p className="mt-4 text-3xl font-black text-white">

                            100%

                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">

                            Verified

                        </p>

                    </div>

                    {/* Google */}

                    <div className="rounded-2xl border border-white/10 bg-slate-900/35 p-4 backdrop-blur-2xl">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/20">

                            <MapPin
                                size={22}
                                className="text-cyan-300"
                            />

                        </div>

                        <p className="mt-4 text-xl font-bold text-white">

                            India

                        </p>

                        <p className="mt-1 text-sm text-slate-300">

                            Google Places

                        </p>

                    </div>

                    {/* Smart */}

                    <div className="rounded-2xl border border-white/10 bg-slate-900/35 p-4 backdrop-blur-2xl">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500/20">

                            <Sparkles
                                size={22}
                                className="text-yellow-300"
                            />

                        </div>

                        <p className="mt-4 text-xl font-bold text-white">

                            Smart

                        </p>

                        <p className="mt-1 text-sm text-slate-300">

                            Discovery

                        </p>

                    </div>

                </div>

                {/* Footer */}

                <div className="mt-5 flex items-center justify-between rounded-2xl border border-blue-400/20 bg-blue-500/10 px-4 py-3">

                    <div>

                        <p className="text-xs uppercase tracking-wider text-blue-200">

                            Status

                        </p>

                        <p className="text-sm font-semibold text-white">

                            Live Marketplace

                        </p>

                    </div>

                    <div className="flex items-center gap-2">

                        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

                        <span className="text-sm font-medium text-emerald-300">

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