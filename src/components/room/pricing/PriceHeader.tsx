"use client";

import { BadgeIndianRupee, Sparkles } from "lucide-react";

const PricingHeader = () => {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50/60 p-4 shadow-sm sm:rounded-3xl sm:p-6">

            {/* Decorative Background */}

            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100/40 blur-3xl sm:-right-12 sm:-top-12 sm:h-40 sm:w-40" />

            <div className="absolute -bottom-12 left-0 h-28 w-28 rounded-full bg-sky-100/30 blur-3xl sm:-bottom-16 sm:h-36 sm:w-36" />

            <div className="relative flex flex-col gap-5 sm:gap-6">

                {/* Heading */}

                <div className="flex items-start gap-3 sm:gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/20 sm:h-14 sm:w-14 sm:rounded-2xl">

                        <BadgeIndianRupee className="h-6 w-6 sm:h-7 sm:w-7" />

                    </div>

                    <div className="min-w-0 space-y-2">

                        <div className="flex flex-wrap items-center gap-2">

                            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                Pricing
                            </h2>

                            <span className="rounded-full border border-blue-200 bg-blue-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-700 sm:text-xs">
                                Step 3
                            </span>

                        </div>

                        <p className="max-w-3xl text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                            Configure your room's pricing details including rent,
                            security deposit, billing cycle, and utility charges.
                            Transparent pricing builds trust, attracts quality
                            tenants, and increases booking conversions.
                        </p>

                    </div>

                </div>

                {/* Info Card */}

                <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-4 sm:rounded-2xl">

                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">

                        <Sparkles className="h-5 w-5" />

                    </div>

                    <div className="min-w-0">

                        <h3 className="text-sm font-semibold text-amber-900">
                            Pro Tip
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-amber-800">
                            Listings with clear rent, deposit, and utility
                            information receive significantly more engagement
                            because tenants can compare options confidently
                            without hidden costs.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default PricingHeader;