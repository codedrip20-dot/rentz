"use client";

import { BadgeIndianRupee, Sparkles } from "lucide-react";

const PricingHeader = () => {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50/60 p-6 shadow-sm">
            {/* Decorative Background */}
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl" />
            <div className="absolute -bottom-16 left-0 h-36 w-36 rounded-full bg-sky-100/30 blur-3xl" />

            <div className="relative flex flex-col gap-6">
                {/* Heading */}
                <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/20">
                        <BadgeIndianRupee className="h-7 w-7" />
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                Pricing
                            </h2>

                            <span className="rounded-full border border-blue-200 bg-blue-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                                Step 3
                            </span>
                        </div>

                        <p className="max-w-3xl text-[15px] leading-7 text-slate-600">
                            Configure your room's pricing details including rent,
                            security deposit, billing cycle, and utility charges.
                            Transparent pricing builds trust, attracts quality
                            tenants, and increases booking conversions.
                        </p>
                    </div>
                </div>

                {/* Info Card */}
                <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                        <Sparkles className="h-5 w-5" />
                    </div>

                    <div>
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