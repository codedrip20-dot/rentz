"use client";

import { Bell } from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import { useOwnerProfile } from "@/hooks/useOwnerProfile";

const DashboardHeader = () => {
    const { currentUser } = useAuth();

    const {
        ownerProfile,
        loading,
    } = useOwnerProfile();

    const ownerName =
        currentUser?.displayName ??
        currentUser?.email?.split("@")[0] ??
        "Owner";

    const ownerInitial =
        ownerName.charAt(0).toUpperCase();

    const planName =
        ownerProfile?.subscription.planId ??
        "Basic";

    return (
        <header className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:gap-6 sm:rounded-3xl sm:p-6 md:flex-row md:items-center md:justify-between">

            {/* Left Section */}

            <div className="min-w-0">

                <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Owner Dashboard
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                    Manage your properties, rooms, tenants and subscriptions
                    from one place.
                </p>

            </div>

            {/* Right Section */}

            <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end sm:gap-4">

                {/* Notifications */}

                <button
                    type="button"
                    className="
                        relative
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        transition-all
                        duration-200
                        hover:bg-slate-100
                        active:scale-95
                    "
                    aria-label="Notifications"
                >
                    <Bell className="h-5 w-5 text-slate-700" />

                    <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500" />
                </button>

                {/* Profile */}

                <button
                    type="button"
                    className="
                        flex
                        min-w-0
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-2
                        py-2
                        transition-all
                        duration-200
                        hover:bg-slate-100
                        active:scale-[0.99]
                        sm:gap-3
                        sm:px-3
                    "
                >
                    {currentUser?.photoURL ? (
                        <img
                            src={currentUser.photoURL}
                            alt={ownerName}
                            className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-11 sm:w-11"
                        />
                    ) : (
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white sm:h-11 sm:w-11">
                            {ownerInitial}
                        </div>
                    )}

                    <div className="hidden min-w-0 text-left md:block">

                        <p className="max-w-[160px] truncate text-sm font-semibold text-slate-900">
                            {loading ? "Loading..." : ownerName}
                        </p>

                        <p className="text-xs capitalize text-slate-500">
                            {loading ? "Loading..." : `${planName} Plan`}
                        </p>

                    </div>

                </button>

            </div>

        </header>
    );
};

export default DashboardHeader;