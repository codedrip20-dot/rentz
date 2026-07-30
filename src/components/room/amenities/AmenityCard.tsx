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
            className={`group relative w-full overflow-hidden rounded-3xl border text-left transition-all duration-300 ${
                selected
                    ? "border-blue-500 bg-gradient-to-br from-blue-50 via-white to-indigo-50 shadow-xl shadow-blue-500/10"
                    : "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            }`}
        >
            {/* Decorative Background */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100/30 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative flex h-full flex-col p-6">
                {/* Top */}
                <div className="flex items-start justify-between">
                    <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
                            selected
                                ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
                                : "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600"
                        }`}
                    >
                        <Icon className="h-7 w-7" />
                    </div>

                    <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
                            selected
                                ? "border-blue-200 bg-blue-600 text-white"
                                : "border-slate-200 bg-white text-slate-400 group-hover:border-blue-300 group-hover:text-blue-600"
                        }`}
                    >
                        {selected ? (
                            <CheckCircle2 className="h-5 w-5" />
                        ) : (
                            <Plus className="h-5 w-5" />
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="mt-6 flex-1">
                    <h4 className="text-lg font-bold text-slate-900">
                        {title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                        {description}
                    </p>
                </div>

                {/* Bottom */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
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
                        className={`text-sm font-medium transition-colors ${
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