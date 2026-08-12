"use client";

import {
    Building2,
    DoorOpen,
    IndianRupee,
    Users,
} from "lucide-react";

import StatCard from "./StatCard";

import { useProperties } from "@/hooks/useProperties";
import { useDashboardStats } from "@/hooks/useDashboardStats";

const QuickStats = () => {
    const {
        properties,
        loading: propertiesLoading,
    } = useProperties();

    const {
        roomCount,
        activeTenantCount,
        loading: statsLoading,
    } = useDashboardStats();

    return (
        <section className="space-y-4 sm:space-y-5">

            <div className="min-w-0">

                <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                    Quick Statistics
                </h2>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                    An overview of your rental business.
                </p>

            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6">

                <StatCard
                    title="Properties"
                    value={
                        propertiesLoading
                            ? "..."
                            : properties.length
                    }
                    subtitle="Registered properties"
                    icon={Building2}
                />

                <StatCard
                    title="Rooms"
                    value={
                        statsLoading
                            ? "..."
                            : roomCount
                    }
                    subtitle="Total rooms"
                    icon={DoorOpen}
                />

                <StatCard
                    title="Tenants"
                    value={
                        statsLoading
                            ? "..."
                            : activeTenantCount
                    }
                    subtitle="Active tenants"
                    icon={Users}
                />

                <StatCard
                    title="Monthly Revenue"
                    value="₹0"
                    subtitle="Current month"
                    icon={IndianRupee}
                    trend="+0%"
                />

            </div>

        </section>
    );
};

export default QuickStats;