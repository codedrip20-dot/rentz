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
                    className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-500/20 blur-[110px] sm:-left-40 sm:-top-48 sm:h-[38rem] sm:w-[38rem] sm:blur-[150px]"
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
                    className="absolute right-0 top-32 h-64 w-64 rounded-full bg-cyan-500/20 blur-[110px] sm:top-40 sm:h-[32rem] sm:w-[32rem] sm:blur-[140px]"
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
                    className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[110px] sm:h-[28rem] sm:w-[28rem] sm:blur-[140px]"
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

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-3 py-5 sm:px-4 sm:py-6 md:px-6 md:py-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_25px_80px_rgba(37,99,235,0.15)] backdrop-blur-2xl sm:rounded-3xl sm:p-6 md:p-8"
                >
                    <PropertyHeader />

                    <div className="mt-5 sm:mt-6 md:mt-8">
                        {properties.length === 0 ? (
                            <PropertyEmptyState />
                        ) : (
                            <div className="space-y-5 sm:space-y-6 md:space-y-8">

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