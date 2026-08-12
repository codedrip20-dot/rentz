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
            className="
                group
                flex
                w-full
                flex-col
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                text-left
                shadow-sm
                transition-all
                duration-300
                active:scale-[0.99]
                hover:-translate-y-1
                hover:border-blue-200
                hover:shadow-lg
                disabled:cursor-not-allowed
                disabled:opacity-60
                sm:rounded-3xl
                sm:p-6
            "
        >
            <div className="flex items-start justify-between gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100 sm:h-14 sm:w-14 sm:rounded-2xl">

                    <Icon className="h-6 w-6 text-blue-600 sm:h-7 sm:w-7" />

                </div>

                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-600" />

            </div>

            <div className="mt-5 min-w-0 sm:mt-6">

                <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
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