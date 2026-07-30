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
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-indigo-500/5" />

            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-500/10 blur-[120px]" />

            <div className="relative z-10">

                {/* Header */}
                <div className="mb-6 flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30">
                            <Building2 className="h-5 w-5 text-white" />
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-white">
                                Your Properties
                            </h2>

                            <p className="text-sm text-slate-400">
                                Select a property to manage rooms and listings.
                            </p>
                        </div>

                    </div>

                    <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                        {properties.length} Properties
                    </div>

                </div>

                {/* Property Cards */}
                <div className="scrollbar-thin scrollbar-thumb-blue-500/40 scrollbar-track-transparent flex gap-5 overflow-x-auto pb-2">

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