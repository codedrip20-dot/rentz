"use client";

import { ArrowRight, LucideIcon } from "lucide-react";

interface ActionCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    onClick?: () => void;
    disabled?: boolean;
}

const ActionCard = ({
    title,
    description,
    icon: Icon,
    onClick,
    disabled = false,
}: ActionCardProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className="group flex w-full flex-col rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
        >
            <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
                    <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <ArrowRight className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-600" />
            </div>

            <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-900">
                    {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                    {description}
                </p>
            </div>
        </button>
    );
};

export default ActionCard;