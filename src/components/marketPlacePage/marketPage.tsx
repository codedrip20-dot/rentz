"use client";

import { useEffect, useMemo, useState } from "react";

import ActiveFilters from "./ActiveFilters";
import EmptyState from "./EmptyState";
import FilterSidebar from "./FilterSidebar";
import MarketPlaceHeader from "./MarketPlaceHeader";
import Pagination from "./Pagination";
import ResultsInfo from "./ResultsInfo";
import RoomGrid from "./RoomGrid";
import SortDropdown from "./SortDropdown";

import { getMarketplaceData } from "@/services/marketServices/marketplaceService";

import { getPredictions } from "@/lib/google/getPredictions";
import { getPlaceDetails } from "@/lib/google/getPlaceDetails";

import {
    PlaceSuggestion,
} from "@/types/google";

import {
    Property,
} from "@/types/property";

import {
    Room,
} from "@/types/roomTypes";

import heroBgII from "@/assets/herobgII.png";

export default function MarketPage() {

    /* ======================================================
       Marketplace
    ====================================================== */

    const [rooms, setRooms] =
        useState<Room[]>([]);

    const [properties, setProperties] =
        useState<
            Record<
                string,
                Pick<
                    Property,
                    "location" |
                    "propertyType"
                >
            >
        >({});

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState<string | null>(null);

    /* ======================================================
       Google Search
    ====================================================== */

    const [
        locationSuggestions,
        setLocationSuggestions,
    ] =
        useState<PlaceSuggestion[]>([]);

    const [
        locationLoading,
        setLocationLoading,
    ] =
        useState(false);

    const [
        locationError,
        setLocationError,
    ] =
        useState<string | null>(null);

    /* ======================================================
       Filters
    ====================================================== */

    const [location, setLocation] =
        useState("");

    const [minBudget, setMinBudget] =
        useState(0);

    const [maxBudget, setMaxBudget] =
        useState(0);

    /* ======================================================
       Sorting
    ====================================================== */

    const [sortBy, setSortBy] =
        useState("recommended");

    /* ======================================================
       Pagination
    ====================================================== */

    const [currentPage, setCurrentPage] =
        useState(1);

    const ITEMS_PER_PAGE = 12;

    /* ======================================================
       Load Marketplace
    ====================================================== */

    useEffect(() => {

        async function loadMarketplace() {

            try {

                setLoading(true);

                setError(null);

                const marketplace =
                    await getMarketplaceData();

                setRooms(
                    marketplace.rooms
                );

                setProperties(
                    marketplace.properties
                );

            } catch (err) {

                console.error(err);

                setError(
                    "Failed to load marketplace."
                );

            } finally {

                setLoading(false);

            }

        }

        void loadMarketplace();

    }, []);

    /* ======================================================
       Google Search
    ====================================================== */

    const handleLocationSearch =
        async (
            query: string
        ) => {

            if (
                query.trim().length < 3
            ) {

                setLocationSuggestions([]);

                return;

            }

            try {

                setLocationLoading(true);

                setLocationError(null);

                const predictions =
                    await getPredictions(
                        query
                    );

                setLocationSuggestions(
                    predictions
                );

            } catch (err) {

                console.error(err);

                setLocationSuggestions([]);

                setLocationError(
                    "Unable to search locations."
                );

            } finally {

                setLocationLoading(false);

            }

        };

    const handleLocationSelect =
        async (
            suggestion: PlaceSuggestion
        ) => {

            try {

                setLocationLoading(true);

                setLocationError(null);

                const place =
                    await getPlaceDetails(
                        suggestion.placeId
                    );

                setLocation(
                    place.formattedAddress
                );

                setLocationSuggestions([]);

                setCurrentPage(1);

            } catch (err) {

                console.error(err);

                setLocationError(
                    "Unable to select location."
                );

            } finally {

                setLocationLoading(false);

            }

        };

    /* ======================================================
       Filter Handlers
    ====================================================== */

    const handleMinBudgetChange = (
        value: number
    ) => {

        setMinBudget(value);

        setCurrentPage(1);

    };

    const handleMaxBudgetChange = (
        value: number
    ) => {

        setMaxBudget(value);

        setCurrentPage(1);

    };

    const handleSortChange = (
        value: string
    ) => {

        setSortBy(value);

        setCurrentPage(1);

    };

    const clearFilters = () => {

        setLocation("");

        setMinBudget(0);

        setMaxBudget(0);

        setCurrentPage(1);

        setLocationSuggestions([]);

        setLocationError(null);

    };

    /* ======================================================
       Filter Rooms
    ====================================================== */

    const filteredRooms = useMemo(() => {

        let data = [...rooms];

        /* ======================================================
           Location Filter
        ====================================================== */

        if (location.trim()) {

            const search =
                location.toLowerCase();

            data = data.filter((room) => {

                const property =
                    properties[
                        room.propertyId
                    ];

                if (!property) {

                    return false;

                }

                const {
                    address,
                    nearbyLandmark,
                } = property.location;

                const searchableAddress = [

                    address.street,

                    address.area,

                    address.city,

                    address.state,

                    address.country,

                    address.pincode,

                    nearbyLandmark,

                ]
                    .filter(Boolean)
                    .join(" ")
                    .toLowerCase();

                const keywords =
                    search
                        .split(/[,\s]+/)
                        .filter(Boolean);

                return keywords.every(
                    (keyword) =>
                        searchableAddress.includes(
                            keyword
                        )
                );

            });

        }

        /* ======================================================
           Budget Filter
        ====================================================== */

        if (minBudget > 0) {

            data = data.filter(
                (room) =>
                    room.pricing.rent >=
                    minBudget
            );

        }

        if (maxBudget > 0) {

            data = data.filter(
                (room) =>
                    room.pricing.rent <=
                    maxBudget
            );

        }

        return data;

    }, [
        rooms,
        properties,
        location,
        minBudget,
        maxBudget,
    ]);

    /* ======================================================
       Sort Rooms
    ====================================================== */

    const sortedRooms = useMemo(() => {

        const data = [...filteredRooms];

        switch (sortBy) {

            case "price-low":

                return data.sort(
                    (a, b) =>
                        a.pricing.rent -
                        b.pricing.rent
                );

            case "price-high":

                return data.sort(
                    (a, b) =>
                        b.pricing.rent -
                        a.pricing.rent
                );

            default:

                return data;

        }

    }, [
        filteredRooms,
        sortBy,
    ]);

    /* ======================================================
       Pagination
    ====================================================== */

    const totalPages = Math.max(
        1,
        Math.ceil(
            sortedRooms.length /
            ITEMS_PER_PAGE
        )
    );

    const paginatedRooms =
        sortedRooms.slice(
            (currentPage - 1) *
            ITEMS_PER_PAGE,
            currentPage *
            ITEMS_PER_PAGE
        );

    /* ======================================================
       Render
    ====================================================== */

    return (

        <main className="relative isolate min-h-screen overflow-hidden">

            {/* ======================================================
                Background Image
            ====================================================== */}

            <div
                className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${heroBgII.src})`,
                }}
            />

            {/* ======================================================
                Dark Overlay
            ====================================================== */}

            <div className="absolute inset-0 -z-20 bg-slate-950/55" />

            {/* ======================================================
                Premium Gradient Overlay
            ====================================================== */}

            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/95 via-slate-950/55 to-blue-950/75 sm:from-slate-950/90 sm:via-slate-950/45 sm:to-blue-950/70" />

            {/* ======================================================
                Ambient Lighting
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 -z-10">

                <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-600/15 blur-[110px] sm:-left-44 sm:h-[36rem] sm:w-[36rem] sm:bg-blue-600/20 sm:blur-[150px]" />

                <div className="absolute right-0 top-32 h-64 w-64 rounded-full bg-indigo-500/10 blur-[110px] sm:h-[32rem] sm:w-[32rem] sm:bg-indigo-500/15 sm:blur-[140px]" />

                <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px] sm:h-[30rem] sm:w-[30rem] sm:blur-[130px]" />

            </div>

            {/* ======================================================
                Decorative Grid
            ====================================================== */}

            <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025] sm:opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* ======================================================
                Marketplace Content
            ====================================================== */}

            <div className="relative z-10 mx-auto max-w-[1700px] px-4 py-7 sm:px-5 sm:py-10 lg:px-8 lg:py-12">

                <MarketPlaceHeader
                    totalRooms={
                        sortedRooms.length
                    }
                />

                <div className="mt-7 grid gap-5 sm:mt-10 sm:gap-8 xl:grid-cols-12">

                    {/* ======================================================
                        Sidebar
                    ====================================================== */}

                    <aside className="h-fit xl:sticky xl:top-24 xl:col-span-3">

                        <div className="rounded-[28px] border border-white/10 bg-white/10 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-3xl sm:rounded-3xl sm:p-4 lg:p-6">

                            <FilterSidebar

                                locationSuggestions={
                                    locationSuggestions
                                }

                                locationLoading={
                                    locationLoading
                                }

                                locationError={
                                    locationError
                                }

                                minBudget={
                                    minBudget
                                }

                                maxBudget={
                                    maxBudget
                                }

                                onLocationSearch={
                                    handleLocationSearch
                                }

                                onLocationSelect={
                                    handleLocationSelect
                                }

                                onMinBudgetChange={
                                    handleMinBudgetChange
                                }

                                onMaxBudgetChange={
                                    handleMaxBudgetChange
                                }

                                onClearFilters={
                                    clearFilters
                                }

                            />

                        </div>

                    </aside>

                    {/* ======================================================
                        Main Content
                    ====================================================== */}

                    <section className="min-w-0 space-y-5 sm:space-y-6 xl:col-span-9">

                        {/* ======================================================
                            Filters / Results Header
                        ====================================================== */}

                        <div className="rounded-[28px] border border-white/10 bg-white/10 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-3xl sm:rounded-3xl sm:p-6">

                            <ActiveFilters

                                location={
                                    location
                                }

                                minBudget={
                                    minBudget
                                }

                                maxBudget={
                                    maxBudget
                                }

                                onRemoveLocation={() => {

                                    setLocation("");

                                    setCurrentPage(1);

                                }}

                                onRemoveMinBudget={() =>
                                    handleMinBudgetChange(
                                        0
                                    )
                                }

                                onRemoveMaxBudget={() =>
                                    handleMaxBudgetChange(
                                        0
                                    )
                                }

                                onClearAll={
                                    clearFilters
                                }

                            />

                            <div className="mt-5 flex flex-col gap-4 sm:mt-6 lg:flex-row lg:items-center lg:justify-between">

                                <ResultsInfo
                                    totalRooms={
                                        sortedRooms.length
                                    }
                                />

                            </div>

                        </div>

                        {/* ======================================================
                            Loading State
                        ====================================================== */}

                        {loading && (

                            <div className="rounded-[28px] border border-white/10 bg-white/10 px-5 py-14 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-3xl sm:rounded-3xl sm:p-20">

                                <div className="flex flex-col items-center justify-center text-center">

                                    <div className="mb-6 h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent sm:mb-8 sm:h-14 sm:w-14" />

                                    <h2 className="text-xl font-bold text-white sm:text-2xl">

                                        Loading Marketplace

                                    </h2>

                                    <p className="mt-2 text-sm text-slate-300 sm:mt-3 sm:text-base">

                                        Finding the best rooms for you...

                                    </p>

                                </div>

                            </div>

                        )}

                        {/* ======================================================
                            Error State
                        ====================================================== */}

                        {!loading && error && (

                            <div className="rounded-[28px] border border-red-500/30 bg-red-500/10 px-5 py-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-3xl sm:rounded-3xl sm:p-16">

                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20 sm:h-20 sm:w-20">

                                    <span className="text-3xl sm:text-4xl">

                                        ⚠️

                                    </span>

                                </div>

                                <h2 className="mt-5 text-xl font-bold text-red-200 sm:mt-6 sm:text-2xl">

                                    Failed to load Marketplace

                                </h2>

                                <p className="mt-3 text-sm text-red-100 sm:text-base">

                                    {error}

                                </p>

                            </div>

                        )}

                        {/* ======================================================
                            Room Grid
                        ====================================================== */}

                        {!loading &&
                            !error &&
                            paginatedRooms.length > 0 && (

                                <RoomGrid
                                    rooms={paginatedRooms}
                                    properties={properties}
                                />

                            )}

                        {/* ======================================================
                            Empty State
                        ====================================================== */}

                        {!loading &&
                            !error &&
                            paginatedRooms.length === 0 && (

                                <div className="rounded-[28px] border border-white/10 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-3xl sm:rounded-3xl">

                                    <EmptyState
                                        onClearFilters={
                                            clearFilters
                                        }
                                    />

                                </div>

                            )}

                        {/* ======================================================
                            Pagination
                        ====================================================== */}

                        {!loading &&
                            !error &&
                            totalPages > 1 && (

                                <div className="rounded-[28px] border border-white/10 bg-white/10 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-3xl sm:rounded-3xl sm:p-5">

                                    <Pagination
                                        currentPage={
                                            currentPage
                                        }
                                        totalPages={
                                            totalPages
                                        }
                                        onPrevious={() =>
                                            setCurrentPage(
                                                (
                                                    page
                                                ) =>
                                                    Math.max(
                                                        1,
                                                        page - 1
                                                    )
                                            )
                                        }
                                        onNext={() =>
                                            setCurrentPage(
                                                (
                                                    page
                                                ) =>
                                                    Math.min(
                                                        totalPages,
                                                        page + 1
                                                    )
                                            )
                                        }
                                        onPageChange={
                                            setCurrentPage
                                        }
                                    />

                                </div>

                            )}

                    </section>

                </div>

            </div>

        </main>

    );
}