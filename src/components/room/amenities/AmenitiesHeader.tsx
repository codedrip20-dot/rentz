"use client";

import { Home, Sparkles, Star } from "lucide-react";

const AmenitiesHeader = () => {
    return (
        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-indigo-50 shadow-sm">
            {/* Background Decoration */}
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-100/40 blur-3xl" />
            <div className="absolute -bottom-20 left-0 h-48 w-48 rounded-full bg-indigo-100/40 blur-3xl" />

            <div className="relative p-8">
                {/* Header */}
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 text-white shadow-xl shadow-blue-500/20">
                        <Home className="h-8 w-8" />
                    </div>

                    <div className="flex-1 space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                Amenities
                            </h2>

                            <span className="rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                                Step 4
                            </span>
                        </div>

                        <p className="max-w-3xl text-[15px] leading-7 text-slate-600">
                            Highlight everything your room offers to future
                            tenants. Well-presented amenities help your listing
                            stand out, build trust, and make it easier for
                            tenants to compare rooms with confidence.
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                                <Star className="h-4 w-4 text-amber-500" />
                                Better Listing Quality
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                                <Star className="h-4 w-4 text-emerald-500" />
                                More Tenant Confidence
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                                <Star className="h-4 w-4 text-sky-500" />
                                Improved Visibility
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pro Tip */}
                <div className="mt-8 rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-green-50 to-emerald-50 p-5">
                    <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                            <Sparkles className="h-5 w-5" />
                        </div>

                        <div>
                            <h3 className="text-base font-semibold text-emerald-900">
                                Pro Tip
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-emerald-800">
                                Amenities are often one of the biggest deciding
                                factors for tenants. Complete and accurate
                                amenity information helps attract more relevant
                                inquiries while reducing unnecessary questions
                                before booking.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AmenitiesHeader;