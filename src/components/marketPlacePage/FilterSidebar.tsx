"use client";

import {
    BadgeCheck,
    IndianRupee,
    MapPinned,
    SlidersHorizontal,
    Trash2,
} from "lucide-react";

import SearchBar from "./SearchBar";

import { FilterSidebarProps } from "@/types/searchBarTypes";

export default function FilterSidebar({
    locationSuggestions,
    locationLoading,
    locationError,

    minBudget,
    maxBudget,

    onLocationSearch,
    onLocationSelect,

    onMinBudgetChange,
    onMaxBudgetChange,

    onClearFilters,
}: FilterSidebarProps) {

    const inputClass =
        "w-full min-h-12 rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white placeholder:text-slate-500 outline-none backdrop-blur-2xl transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20";

    return (

        <aside className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/35 p-5 backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,.45)] sm:rounded-[32px] sm:p-7">

            {/* Background Glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-[120px] sm:h-64 sm:w-64 sm:blur-[140px]" />

            <div className="relative">

                {/* Header */}

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 sm:h-14 sm:w-14">

                            <SlidersHorizontal
                                size={22}
                                className="text-blue-300 sm:h-6 sm:w-6"
                            />

                        </div>

                        <div className="min-w-0">

                            <h2 className="text-xl font-bold text-white sm:text-2xl">

                                Filters

                            </h2>

                            <p className="mt-1 text-xs text-slate-400 sm:text-sm">

                                Narrow down your search

                            </p>

                        </div>

                    </div>

                    <button
                        type="button"
                        onClick={onClearFilters}
                        className="flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300 transition-all duration-300 hover:border-red-400/40 hover:bg-red-500/20 sm:w-auto"
                    >

                        <Trash2
                            size={16}
                            className="shrink-0"
                        />

                        Clear

                    </button>

                </div>

                {/* Divider */}

                <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent sm:my-8" />

                {/* Location */}

                <div>

                    <div className="mb-4 flex items-center gap-2">

                        <MapPinned
                            size={18}
                            className="shrink-0 text-cyan-300"
                        />

                        <h3 className="text-base font-semibold text-white sm:text-lg">

                            Location

                        </h3>

                    </div>

                    <SearchBar
                        suggestions={locationSuggestions}
                        isLoading={locationLoading}
                        error={locationError}
                        onSearch={onLocationSearch}
                        onSelect={onLocationSelect}
                        placeholder="Search city, locality or landmark..."
                    />

                </div>

                {/* Divider */}

                <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent sm:my-8" />

                {/* Budget */}

                <div>

                    <div className="mb-5 flex items-center gap-2">

                        <IndianRupee
                            size={18}
                            className="shrink-0 text-green-400"
                        />

                        <h3 className="text-base font-semibold text-white sm:text-lg">

                            Monthly Budget

                        </h3>

                    </div>

                    <div className="space-y-4">

                        <div>

                            <label className="mb-2 block text-sm text-slate-400">

                                Minimum Budget

                            </label>

                            <input
                                type="number"
                                inputMode="numeric"
                                placeholder="₹ 5,000"
                                value={minBudget === 0 ? "" : minBudget}
                                onChange={(e) =>
                                    onMinBudgetChange(
                                        e.target.value === ""
                                            ? 0
                                            : Number(e.target.value)
                                    )
                                }
                                className={inputClass}
                            />

                        </div>

                        <div>

                            <label className="mb-2 block text-sm text-slate-400">

                                Maximum Budget

                            </label>

                            <input
                                type="number"
                                inputMode="numeric"
                                placeholder="₹ 25,000"
                                value={maxBudget === 0 ? "" : maxBudget}
                                onChange={(e) =>
                                    onMaxBudgetChange(
                                        e.target.value === ""
                                            ? 0
                                            : Number(e.target.value)
                                    )
                                }
                                className={inputClass}
                            />

                        </div>

                    </div>

                    {/* Tip */}

                    <div className="mt-5 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4 sm:mt-6 sm:p-5">

                        <p className="text-sm leading-6 text-slate-300 sm:leading-7">

                            💡 Set your preferred monthly budget to instantly filter properties that match your affordability.

                        </p>

                    </div>

                </div>

                {/* Divider */}

                <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent sm:my-8" />

                {/* Features */}

                <div className="space-y-3">

                    <div className="flex items-center gap-3">

                        <BadgeCheck
                            size={18}
                            className="shrink-0 text-green-400"
                        />

                        <span className="text-sm text-slate-300">

                            Verified Property Listings

                        </span>

                    </div>

                    <div className="flex items-center gap-3">

                        <BadgeCheck
                            size={18}
                            className="shrink-0 text-green-400"
                        />

                        <span className="text-sm text-slate-300">

                            Google Places Search

                        </span>

                    </div>

                    <div className="flex items-center gap-3">

                        <BadgeCheck
                            size={18}
                            className="shrink-0 text-green-400"
                        />

                        <span className="text-sm text-slate-300">

                            Real-time Marketplace

                        </span>

                    </div>

                </div>

            </div>

        </aside>

    );

}