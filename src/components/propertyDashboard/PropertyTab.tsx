"use client";

import { motion } from "framer-motion";
import {
    Building2,
    CheckCircle2,
    ChevronRight,
    MapPin,
} from "lucide-react";

import { Property } from "@/types/property";

interface PropertyTabProps {
    property: Property;
    selected: boolean;
    onSelect: (propertyId: string) => void;
}

const PropertyTab = ({
    property,
    selected,
    onSelect,
}: PropertyTabProps) => {
    if (!property.id) return null;

    return (
        <motion.button
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={() => onSelect(property.id!)}
            className={`group relative min-w-[260px] flex-1 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 sm:min-w-[280px] sm:rounded-3xl sm:p-5 md:min-w-[320px] md:p-6 ${
                selected
                    ? "border-blue-400/40 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-slate-900 shadow-[0_0_45px_rgba(37,99,235,0.35)] backdrop-blur-xl"
                    : "border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-400/30 hover:bg-white/10 hover:shadow-xl"
            }`}
        >
            {/* Glow */}
            {selected && (
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-blue-500/20 blur-[70px] sm:h-36 sm:w-36 sm:blur-[80px]" />
            )}

            <div className="relative z-10 flex items-start justify-between gap-3">

                {/* Left */}
                <div className="flex min-w-0 gap-3 sm:gap-4">

                    <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all sm:h-14 sm:w-14 sm:rounded-2xl ${
                            selected
                                ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                                : "bg-slate-800/80 text-slate-300"
                        }`}
                    >
                        <Building2 className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>

                    <div className="min-w-0 flex-1">

                        <h3
                            className={`truncate pr-2 text-base font-bold sm:text-lg ${
                                selected ? "text-white" : "text-slate-100"
                            }`}
                        >
                            {property.details.title}
                        </h3>

                        <div className="mt-2 flex min-w-0 items-center gap-1.5 text-xs text-slate-400 sm:gap-2 sm:text-sm">
                            <MapPin className="h-3.5 w-3.5 shrink-0 text-cyan-400 sm:h-4 sm:w-4" />

                            <span className="truncate">
                                {property.location.address.city},{" "}
                                {property.location.address.state}
                            </span>
                        </div>

                    </div>

                </div>

                {/* Right */}
                {selected ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400 sm:h-6 sm:w-6" />
                ) : (
                    <ChevronRight className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-blue-400" />
                )}
            </div>

            {/* Bottom Accent */}
            <div
                className={`mt-5 h-1 rounded-full transition-all sm:mt-6 ${
                    selected
                        ? "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"
                        : "bg-slate-700 group-hover:bg-slate-500"
                }`}
            />

            {/* Selected Badge */}
            {selected && (
                <div className="absolute right-4 top-4 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-cyan-300 sm:right-5 sm:top-5 sm:px-3 sm:text-xs">
                    ACTIVE
                </div>
            )}
        </motion.button>
    );
};

export default PropertyTab;