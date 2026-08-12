"use client";

import { Home, Sparkles, Star } from "lucide-react";

const AmenitiesHeader = () => {
    return (
        <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-indigo-50 shadow-sm sm:rounded-3xl">
            {/* Background Decoration */}
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl sm:-right-16 sm:-top-16 sm:h-56 sm:w-56" />

            <div className="absolute -bottom-16 left-0 h-40 w-40 rounded-full bg-indigo-100/40 blur-3xl sm:-bottom-20 sm:h-48 sm:w-48" />

            <div className="relative p-4 sm:p-6 md:p-8">

                {/* Header */}
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 text-white shadow-xl shadow-blue-500/20 sm:h-16 sm:w-16 sm:rounded-3xl">
                        <Home className="h-7 w-7 sm:h-8 sm:w-8" />
                    </div>

                    <div className="min-w-0 flex-1 space-y-3">

                        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">

                            <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                                Amenities
                            </h2>

                            <span className="rounded-full border border-blue-200 bg-blue-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-700 sm:px-3 sm:text-xs">
                                Step 4
                            </span>

                        </div>

                        <p className="max-w-3xl text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                            Highlight everything your room offers to future
                            tenants. Well-presented amenities help your listing
                            stand out, build trust, and make it easier for
                            tenants to compare rooms with confidence.
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2.5 pt-1 sm:gap-3 sm:pt-2">

                            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
                                <Star className="h-3.5 w-3.5 shrink-0 text-amber-500 sm:h-4 sm:w-4" />
                                Better Listing Quality
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
                                <Star className="h-3.5 w-3.5 shrink-0 text-emerald-500 sm:h-4 sm:w-4" />
                                More Tenant Confidence
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
                                <Star className="h-3.5 w-3.5 shrink-0 text-sky-500 sm:h-4 sm:w-4" />
                                Improved Visibility
                            </div>

                        </div>
                    </div>
                </div>

                {/* Pro Tip */}
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-green-50 to-emerald-50 p-4 sm:mt-8 sm:rounded-3xl sm:p-5">

                    <div className="flex items-start gap-3 sm:gap-4">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 sm:h-11 sm:w-11 sm:rounded-2xl">
                            <Sparkles className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">

                            <h3 className="text-sm font-semibold text-emerald-900 sm:text-base">
                                Pro Tip
                            </h3>

                            <p className="mt-1.5 text-xs leading-5 text-emerald-800 sm:mt-2 sm:text-sm sm:leading-6">
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