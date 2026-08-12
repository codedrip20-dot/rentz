"use client";

import { CheckCircle2, Plus } from "lucide-react";

interface AmenityCardProps {
    title: string;
    description: string;
    icon: React.ElementType;

    selected: boolean;

    onClick: () => void;
}

const AmenityCard = ({
    title,
    description,
    icon: Icon,
    selected,
    onClick,
}: AmenityCardProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={selected}
            className={`group relative w-full overflow-hidden rounded-2xl border text-left transition-all duration-300 sm:rounded-3xl ${
                selected
                    ? "border-blue-500 bg-gradient-to-br from-blue-50 via-white to-indigo-50 shadow-xl shadow-blue-500/10"
                    : "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            }`}
        >
            {/* Decorative Background */}
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-100/30 blur-3xl transition-opacity duration-300 group-hover:opacity-100 sm:-right-10 sm:-top-10 sm:h-32 sm:w-32" />

            <div className="relative flex h-full flex-col p-4 sm:p-5 md:p-6">

                {/* Top */}
                <div className="flex items-start justify-between gap-3">

                    <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 sm:h-14 sm:w-14 sm:rounded-2xl ${
                            selected
                                ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
                                : "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600"
                        }`}
                    >
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>

                    <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-9 sm:w-9 ${
                            selected
                                ? "border-blue-200 bg-blue-600 text-white"
                                : "border-slate-200 bg-white text-slate-400 group-hover:border-blue-300 group-hover:text-blue-600"
                        }`}
                    >
                        {selected ? (
                            <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                        ) : (
                            <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                        )}
                    </div>

                </div>

                {/* Content */}
                <div className="mt-5 flex-1 sm:mt-6">

                    <h4 className="text-base font-bold text-slate-900 sm:text-lg">
                        {title}
                    </h4>

                    <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">
                        {description}
                    </p>

                </div>

                {/* Bottom */}
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 sm:mt-6 sm:pt-5">

                    <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-semibold sm:px-3 sm:text-xs ${
                            selected
                                ? "bg-blue-100 text-blue-700"
                                : "bg-slate-100 text-slate-600"
                        }`}
                    >
                        {selected
                            ? "Included"
                            : "Not Included"}
                    </span>

                    <span
                        className={`text-xs font-medium transition-colors sm:text-sm ${
                            selected
                                ? "text-blue-700"
                                : "text-slate-500 group-hover:text-blue-600"
                        }`}
                    >
                        {selected
                            ? "Selected"
                            : "Select"}
                    </span>

                </div>

            </div>
        </button>
    );
};

export default AmenityCard;