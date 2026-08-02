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
        "w-full rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white placeholder:text-slate-500 outline-none backdrop-blur-2xl transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20";

    return (

        <aside className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/35 p-7 backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,.45)]">

            {/* Background Glow */}

            <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-500/20 blur-[140px]" />

            <div className="relative">

                {/* Header */}

                <div className="flex items-start justify-between">

                    <div className="flex items-center gap-4">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10">

                            <SlidersHorizontal
                                size={24}
                                className="text-blue-300"
                            />

                        </div>

                        <div>

                            <h2 className="text-2xl font-bold text-white">

                                Filters

                            </h2>

                            <p className="mt-1 text-sm text-slate-400">

                                Narrow down your search

                            </p>

                        </div>

                    </div>

                    <button
                        type="button"
                        onClick={onClearFilters}
                        className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300 transition-all duration-300 hover:border-red-400/40 hover:bg-red-500/20"
                    >

                        <Trash2 size={16} />

                        Clear

                    </button>

                </div>

                {/* Divider */}

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Location */}

                <div>

                    <div className="mb-4 flex items-center gap-2">

                        <MapPinned
                            size={18}
                            className="text-cyan-300"
                        />

                        <h3 className="text-lg font-semibold text-white">

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

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Budget */}

                <div>

                    <div className="mb-5 flex items-center gap-2">

                        <IndianRupee
                            size={18}
                            className="text-green-400"
                        />

                        <h3 className="text-lg font-semibold text-white">

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

                    <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">

                        <p className="text-sm leading-7 text-slate-300">

                            💡 Set your preferred monthly budget to instantly filter properties that match your affordability.

                        </p>

                    </div>

                </div>

                {/* Divider */}

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Features */}

                <div className="space-y-3">

                    <div className="flex items-center gap-3">

                        <BadgeCheck
                            size={18}
                            className="text-green-400"
                        />

                        <span className="text-sm text-slate-300">

                            Verified Property Listings

                        </span>

                    </div>

                    <div className="flex items-center gap-3">

                        <BadgeCheck
                            size={18}
                            className="text-green-400"
                        />

                        <span className="text-sm text-slate-300">

                            Google Places Search

                        </span>

                    </div>

                    <div className="flex items-center gap-3">

                        <BadgeCheck
                            size={18}
                            className="text-green-400"
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