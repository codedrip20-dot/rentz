"use client";

import { motion } from "framer-motion";
import { Building2, Plus, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

const PropertyHeader = () => {
    const router = useRouter();

    const handleCreateProperty = () => {
        router.push("/owner/dashBoard");
    };

    return (
        <motion.header
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl sm:rounded-3xl"
        >
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-indigo-600/10" />

            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-blue-500/20 blur-[80px] sm:h-52 sm:w-52 sm:blur-[100px]" />

            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/15 blur-[70px] sm:h-40 sm:w-40 sm:blur-[90px]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6 p-5 sm:gap-8 sm:p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between">

                {/* Left Side */}
                <div className="flex min-w-0 items-start gap-4 sm:gap-5">

                    <motion.div
                        whileHover={{
                            scale: 1.08,
                            rotate: 6,
                        }}
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500 to-cyan-500 shadow-[0_0_40px_rgba(59,130,246,0.45)] sm:h-16 sm:w-16"
                    >
                        <Building2 className="h-7 w-7 text-white sm:h-8 sm:w-8" />
                    </motion.div>

                    <div className="min-w-0">

                        <div className="mb-2 flex flex-wrap items-center gap-2 sm:mb-3">

                            <Sparkles className="h-4 w-4 shrink-0 text-cyan-300" />

                            <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-200 sm:px-3 sm:text-xs">
                                Dashboard
                            </span>

                        </div>

                        <h1 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                            Property Management
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:mt-3 sm:text-base sm:leading-7">
                            Manage your properties, organize rooms, monitor occupancy,
                            and keep every listing synchronized from one beautiful dashboard.
                        </p>

                    </div>

                </div>

                {/* Right Side */}
                <motion.button
                    whileHover={{
                        scale: 1.04,
                    }}
                    whileTap={{
                        scale: 0.97,
                    }}
                    onClick={handleCreateProperty}
                    className="group flex min-h-12 w-full shrink-0 items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(37,99,235,0.45)] transition-all duration-300 hover:shadow-[0_0_55px_rgba(37,99,235,0.65)] sm:gap-3 sm:px-7 sm:py-4 sm:text-base lg:w-auto"
                >
                    <Plus className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:rotate-90" />

                    <span>Back to Dashboard</span>

                </motion.button>

            </div>
        </motion.header>
    );
};

export default PropertyHeader;