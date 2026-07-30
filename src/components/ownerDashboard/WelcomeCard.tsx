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

    const { properties } = useProperties()
    

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
        <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 p-8 text-white shadow-lg">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                {/* Left Content */}
                <div className="max-w-2xl">
                    <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
                        Welcome Back 👋
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight">
                        {loading
                            ? "Loading..."
                            : `Ready to grow your rental business, ${ownerName}?`}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-blue-100">
                        Manage properties, publish rooms, track tenants and
                        monitor your subscription from one dashboard.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button
                            type="button"
                            onClick={handleAddProperty
                            }
                            className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.02] hover:bg-slate-100"
                        >
                            <Building2 className="h-5 w-5" />
                            Add Property
                        </button>

                        <button
                            type="button"
                            onClick={() => router.push("/ownerDashboard/properties")}
                            className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
                        >
                            View Properties
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* Right Info Card */}
                <div className="w-full max-w-sm rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                    <h3 className="text-lg font-semibold">
                        Subscription Overview
                    </h3>

                    <div className="mt-6 space-y-5">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-blue-100">
                                Current Plan
                            </span>

                            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold capitalize text-blue-700">
                                {loading
                                    ? "Loading..."
                                    : planName}
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-sm text-blue-100">
                                Property Limit
                            </span>

                            <span className="font-semibold">
                                {loading
                                    ? "..."
                                    : `${propertyLimit} ${
                                          propertyLimit === 1
                                              ? "Property"
                                              : "Properties"
                                      }`}
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-sm text-blue-100">
                                Status
                            </span>

                            <span
                                className={`font-semibold ${
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