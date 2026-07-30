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
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl"
        >
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-indigo-600/10" />

            <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-blue-500/20 blur-[100px]" />

            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/15 blur-[90px]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between">

                {/* Left Side */}
                <div className="flex items-start gap-5">

                    <motion.div
                        whileHover={{
                            scale: 1.08,
                            rotate: 6,
                        }}
                        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500 to-cyan-500 shadow-[0_0_40px_rgba(59,130,246,0.45)]"
                    >
                        <Building2 className="h-8 w-8 text-white" />
                    </motion.div>

                    <div>

                        <div className="mb-3 flex items-center gap-2">

                            <Sparkles className="h-4 w-4 text-cyan-300" />

                            <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
                                Dashboard
                            </span>

                        </div>

                        <h1 className="text-4xl font-black tracking-tight text-white">
                            Property Management
                        </h1>

                        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
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
                    className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-7 py-4 font-semibold text-white shadow-[0_0_35px_rgba(37,99,235,0.45)] transition-all duration-300 hover:shadow-[0_0_55px_rgba(37,99,235,0.65)]"
                >
                    <Plus className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />

                    <span>Back to Dashboard</span>
                </motion.button>

            </div>
        </motion.header>
    );
};

export default PropertyHeader;