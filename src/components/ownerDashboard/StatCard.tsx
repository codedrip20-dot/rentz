"use client";

import { LucideIcon, TrendingUp } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    icon: LucideIcon;
    trend?: string;
}

const StatCard = ({
    title,
    value,
    subtitle,
    icon: Icon,
    trend,
}: StatCardProps) => {
    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-slate-500">
                        {title}
                    </p>

                    <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                        {value}
                    </h3>

                    {subtitle && (
                        <p className="mt-2 text-sm text-slate-500">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                    <Icon className="h-6 w-6 text-blue-600" />
                </div>
            </div>

            {trend && (
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-green-600">
                    <TrendingUp className="h-4 w-4" />

                    <span>{trend}</span>
                </div>
            )}
        </div>
    );
};

export default StatCard;