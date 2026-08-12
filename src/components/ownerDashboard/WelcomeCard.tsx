"use client";

import { ArrowRight, Building2 } from "lucide-react";

import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";
import { useOwnerProfile } from "@/hooks/useOwnerProfile";
import { useProperties } from "@/hooks/useProperties";

const WelcomeCard = () => {
    const router = useRouter();

    const { currentUser } = useAuth();

    const { ownerProfile, loading } = useOwnerProfile();

    const { properties } = useProperties();

    const ownerName =
        currentUser?.displayName ??
        currentUser?.email?.split("@")[0] ??
        "Owner";

    const planName =
        ownerProfile?.subscription.planId ?? "Basic";

    const propertyLimit =
        ownerProfile?.subscription.propertyLimit ?? 1;

    const subscriptionStatus =
        ownerProfile?.subscription.active ?? false;

    const handleAddProperty = () => {
        const propertyLimit =
            ownerProfile?.subscription?.propertyLimit ?? 0;

        const propertyCount =
            properties.length;

        if (propertyCount >= propertyLimit) {
            alert(
                "You have reached your property limit. Please upgrade your plan."
            );
            return;
        } else {
            router.push(
                "/ownerDashboard/properties/create"
            );
        }
    };

    return (
        <section className="overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 p-5 text-white shadow-lg sm:rounded-3xl sm:p-8">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">

                {/* Left Content */}

                <div className="min-w-0 max-w-2xl">

                    <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
                        Welcome Back 👋
                    </span>

                    <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-3xl">
                        {loading
                            ? "Loading..."
                            : `Ready to grow your rental business, ${ownerName}?`}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-blue-100 sm:leading-7">
                        Manage properties, publish rooms, track tenants and
                        monitor your subscription from one dashboard.
                    </p>

                    {/* Actions */}

                    <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">

                        <button
                            type="button"
                            onClick={handleAddProperty}
                            className="
                                flex
                                min-h-11
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-white
                                px-5
                                py-3
                                text-sm
                                font-semibold
                                text-slate-900
                                transition
                                hover:scale-[1.02]
                                hover:bg-slate-100
                                active:scale-[0.99]
                                sm:w-auto
                                sm:px-6
                            "
                        >
                            <Building2 className="h-5 w-5 shrink-0" />

                            Add Property

                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                router.push(
                                    "/ownerDashboard/properties"
                                )
                            }
                            className="
                                flex
                                min-h-11
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                border
                                border-white/20
                                bg-white/10
                                px-5
                                py-3
                                text-sm
                                font-semibold
                                backdrop-blur
                                transition
                                hover:bg-white/20
                                active:scale-[0.99]
                                sm:w-auto
                                sm:px-6
                            "
                        >
                            View Properties

                            <ArrowRight className="h-4 w-4 shrink-0" />

                        </button>

                    </div>

                </div>

                {/* Right Info Card */}

                <div className="w-full shrink-0 rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur sm:rounded-2xl sm:p-6 lg:max-w-sm">

                    <h3 className="text-base font-semibold sm:text-lg">
                        Subscription Overview
                    </h3>

                    <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">

                        {/* Current Plan */}

                        <div className="flex items-center justify-between gap-4">

                            <span className="text-sm text-blue-100">
                                Current Plan
                            </span>

                            <span className="max-w-[50%] truncate rounded-full bg-white px-3 py-1 text-xs font-semibold capitalize text-blue-700">
                                {loading
                                    ? "Loading..."
                                    : planName}
                            </span>

                        </div>

                        {/* Property Limit */}

                        <div className="flex items-center justify-between gap-4">

                            <span className="text-sm text-blue-100">
                                Property Limit
                            </span>

                            <span className="text-right text-sm font-semibold sm:text-base">

                                {loading
                                    ? "..."
                                    : `${propertyLimit} ${
                                          propertyLimit === 1
                                              ? "Property"
                                              : "Properties"
                                      }`}

                            </span>

                        </div>

                        {/* Status */}

                        <div className="flex items-center justify-between gap-4">

                            <span className="text-sm text-blue-100">
                                Status
                            </span>

                            <span
                                className={`shrink-0 text-sm font-semibold sm:text-base ${
                                    subscriptionStatus
                                        ? "text-green-300"
                                        : "text-red-300"
                                }`}
                            >
                                {loading
                                    ? "Loading..."
                                    : subscriptionStatus
                                    ? "Active"
                                    : "Inactive"}
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default WelcomeCard;