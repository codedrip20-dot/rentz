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
        <div
            className="
                min-w-0
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                sm:rounded-3xl
                sm:p-6
            "
        >
            <div className="flex items-start justify-between gap-4">

                <div className="min-w-0">

                    <p className="text-sm font-medium text-slate-500">
                        {title}
                    </p>

                    <h3 className="mt-2 truncate text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-3xl">
                        {value}
                    </h3>

                    {subtitle && (
                        <p className="mt-1 text-sm leading-5 text-slate-500 sm:mt-2 sm:leading-6">
                            {subtitle}
                        </p>
                    )}

                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 sm:h-12 sm:w-12 sm:rounded-2xl">

                    <Icon className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />

                </div>

            </div>

            {trend && (
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-green-600 sm:mt-6">

                    <TrendingUp className="h-4 w-4 shrink-0" />

                    <span>{trend}</span>

                </div>
            )}

        </div>
    );
};

export default StatCard;