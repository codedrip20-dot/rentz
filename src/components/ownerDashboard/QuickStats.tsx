"use client";

import {
    Building2,
    DoorOpen,
    IndianRupee,
    Users,
} from "lucide-react";

import StatCard from "./StatCard";

import { useProperties } from "@/hooks/useProperties";

const QuickStats = () => {
    const { properties, loading } = useProperties();

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
                    value={loading ? "..." : properties.length}
                    subtitle="Registered properties"
                    icon={Building2}
                />

                <StatCard
                    title="Rooms"
                    value={0}
                    subtitle="Total rooms"
                    icon={DoorOpen}
                />

                <StatCard
                    title="Tenants"
                    value={0}
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