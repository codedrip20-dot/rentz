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
            className={`group relative min-w-[320px] overflow-hidden rounded-3xl border p-6 text-left transition-all duration-300 ${
                selected
                    ? "border-blue-400/40 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-slate-900 shadow-[0_0_45px_rgba(37,99,235,0.35)] backdrop-blur-xl"
                    : "border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-400/30 hover:bg-white/10 hover:shadow-xl"
            }`}
        >
            {/* Glow */}
            {selected && (
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-500/20 blur-[80px]" />
            )}

            <div className="relative z-10 flex items-start justify-between">

                {/* Left */}
                <div className="flex gap-4">

                    <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all ${
                            selected
                                ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                                : "bg-slate-800/80 text-slate-300"
                        }`}
                    >
                        <Building2 className="h-6 w-6" />
                    </div>

                    <div className="min-w-0">

                        <h3
                            className={`truncate text-lg font-bold ${
                                selected ? "text-white" : "text-slate-100"
                            }`}
                        >
                            {property.details.title}
                        </h3>

                        <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                            <MapPin className="h-4 w-4 text-cyan-400" />
                            <span className="truncate">
                                {property.location.address.city},{" "}
                                {property.location.address.state}
                            </span>
                        </div>

                    </div>

                </div>

                {/* Right */}
                {selected ? (
                    <CheckCircle2 className="h-6 w-6 text-cyan-400" />
                ) : (
                    <ChevronRight className="h-5 w-5 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-blue-400" />
                )}
            </div>

            {/* Bottom Accent */}
            <div
                className={`mt-6 h-1 rounded-full transition-all ${
                    selected
                        ? "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"
                        : "bg-slate-700 group-hover:bg-slate-500"
                }`}
            />

            {/* Selected Badge */}
            {selected && (
                <div className="absolute right-5 top-5 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-300">
                    ACTIVE
                </div>
            )}
        </motion.button>
    );
};

export default PropertyTab;