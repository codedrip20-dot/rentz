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

import heroBgII from '@/assets/herobgII.png'

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

        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/90 via-slate-950/45 to-blue-950/70" />

        {/* ======================================================
            Ambient Lighting
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 -z-10">

            <div className="absolute -left-44 top-0 h-[36rem] w-[36rem] rounded-full bg-blue-600/20 blur-[150px]" />

            <div className="absolute right-0 top-32 h-[32rem] w-[32rem] rounded-full bg-indigo-500/15 blur-[140px]" />

            <div className="absolute bottom-0 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />

        </div>

        {/* ======================================================
            Decorative Grid
        ====================================================== */}

        <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
            }}
        />

        {/* ======================================================
            Marketplace Content
        ====================================================== */}

        <div className="relative z-10 mx-auto max-w-[1700px] px-5 py-10 lg:px-8 lg:py-12">

            <MarketPlaceHeader
                totalRooms={
                    sortedRooms.length
                }
            />

            <div className="mt-10 grid gap-8 xl:grid-cols-12">

                {/* Sidebar */}

                <aside className="sticky top-24 h-fit xl:col-span-3">

                    <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-3xl">

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

                {/* Main Content */}

                <section className="space-y-6 xl:col-span-9">

                    <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-3xl">

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

                        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

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

                        <div className="rounded-3xl border border-white/10 bg-white/10 p-20 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-3xl">

                            <div className="flex flex-col items-center justify-center">

                                <div className="mb-8 h-14 w-14 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />

                                <h2 className="text-2xl font-bold text-white">

                                    Loading Marketplace

                                </h2>

                                <p className="mt-3 text-slate-300">

                                    Finding the best rooms for you...

                                </p>

                            </div>

                        </div>

                    )}

                    {/* ======================================================
                        Error State
                    ====================================================== */}

                    {!loading && error && (

                        <div className="rounded-3xl border border-red-500/30 bg-red-500/10 p-16 text-center shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-3xl">

                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-500/20">

                                <span className="text-4xl">

                                    ⚠️

                                </span>

                            </div>

                            <h2 className="mt-6 text-2xl font-bold text-red-200">

                                Failed to load Marketplace

                            </h2>

                            <p className="mt-3 text-red-100">

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

                            <div className="rounded-3xl border border-white/10 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-3xl">

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

                            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-3xl">

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