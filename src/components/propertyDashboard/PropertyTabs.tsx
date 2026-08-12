"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

import { Property } from "@/types/property";

import PropertyTab from "./PropertyTab";

interface PropertyTabsProps {
    properties: Property[];
    selectedPropertyId: string | null;
    onSelect: (propertyId: string) => void;
}

const PropertyTabs = ({
    properties,
    selectedPropertyId,
    onSelect,
}: PropertyTabsProps) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-2xl sm:rounded-3xl sm:p-5 md:p-6"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-indigo-500/5" />

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-[100px] sm:-right-24 sm:-top-24 sm:h-56 sm:w-56 sm:blur-[120px]" />

            <div className="relative z-10">

                {/* Header */}
                <div className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex min-w-0 items-center gap-3">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30 sm:h-11 sm:w-11 sm:rounded-2xl">
                            <Building2 className="h-5 w-5 text-white" />
                        </div>

                        <div className="min-w-0">
                            <h2 className="text-lg font-bold text-white sm:text-xl">
                                Your Properties
                            </h2>

                            <p className="mt-0.5 text-xs leading-5 text-slate-400 sm:text-sm">
                                Select a property to manage rooms and listings.
                            </p>
                        </div>

                    </div>

                    <div className="w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-300 sm:px-4 sm:py-2 sm:text-sm">
                        {properties.length} Properties
                    </div>

                </div>

                {/* Property Cards */}
                <div className="scrollbar-thin scrollbar-thumb-blue-500/40 scrollbar-track-transparent -mx-1 flex gap-3 overflow-x-auto px-1 pb-3 sm:gap-4 md:gap-5">

                    {properties.map((property) => {
                        if (!property.id) return null;

                        return (
                            <PropertyTab
                                key={property.id}
                                property={property}
                                selected={property.id === selectedPropertyId}
                                onSelect={onSelect}
                            />
                        );
                    })}

                </div>

            </div>
        </motion.section>
    );
};

export default PropertyTabs;