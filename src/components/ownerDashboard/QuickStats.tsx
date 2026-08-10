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
        <section className="space-y-5">
            <div>
                <h2 className="text-xl font-bold text-slate-900">
                    Quick Statistics
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    An overview of your rental business.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
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