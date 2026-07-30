"use client";

import { motion } from "framer-motion";

import usePropertyDashboard from "@/hooks/usePropertyDashboard";

import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import PropertyHeader from "./propertyHeader";
import PropertyEmptyState from "./propertyEmptyState";
import PropertyTabs from "./PropertyTabs";
import PropertyContent from "./PropertyContent";

const PropertyManage = () => {
    const {
        properties,
        rooms,
        selectedPropertyId,
        setSelectedPropertyId,
        loading,
        error,
        refreshRooms,
    } = usePropertyDashboard();

    if (loading) {
        return <LoadingState />;
    }

    if (error) {
        return (
            <ErrorState
                message={error}
                onRetry={refreshRooms}
            />
        );
    }

    return (
        <section className="relative min-h-screen overflow-hidden bg-slate-950">

            {/* ================= Background ================= */}

            <div className="absolute inset-0">

                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />

                <motion.div
                    className="absolute -top-48 -left-40 h-[38rem] w-[38rem] rounded-full bg-blue-500/20 blur-[150px]"
                    animate={{
                        x: [-40, 40, -40],
                        y: [0, 40, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="absolute top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-cyan-500/20 blur-[140px]"
                    animate={{
                        x: [30, -50, 30],
                        y: [0, -30, 0],
                        scale: [1.1, 0.95, 1.1],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="absolute bottom-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[140px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `
                        linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
                    `,
                        backgroundSize: "42px 42px",
                    }}
                />
            </div>

            {/* ================= Content ================= */}

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 py-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_80px_rgba(37,99,235,0.15)] backdrop-blur-2xl"
                >
                    <PropertyHeader />

                    <div className="mt-8">
                        {properties.length === 0 ? (
                            <PropertyEmptyState />
                        ) : (
                            <div className="space-y-8">

                                <PropertyTabs
                                    properties={properties}
                                    selectedPropertyId={selectedPropertyId}
                                    onSelect={setSelectedPropertyId}
                                />

                                <PropertyContent
                                    propertyId={selectedPropertyId}
                                    rooms={rooms}
                                    onRefresh={refreshRooms}
                                />

                            </div>
                        )}
                    </div>
                </motion.div>

            </div>

        </section>
    );
};

export default PropertyManage;