"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    Building2,
    Plus,
    Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";

const PropertyEmptyState = () => {
    const router = useRouter();

    const handleCreateProperty = () => {
        router.push("/ownerDashboard/properties/create");
    };

    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 px-8 py-24 backdrop-blur-2xl"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-indigo-500/10" />

            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-500/15 blur-[120px]" />

            <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">

                {/* Icon */}
                <motion.div
                    animate={{
                        y: [0, -8, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="relative mb-8"
                >
                    <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl" />

                    <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 shadow-[0_0_60px_rgba(37,99,235,0.45)]">
                        <Building2 className="h-14 w-14 text-white" />
                    </div>
                </motion.div>

                {/* Badge */}
                <div className="mb-6 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                    <Sparkles className="h-4 w-4" />
                    Welcome to Rentz
                </div>

                {/* Heading */}
                <h2 className="max-w-2xl text-5xl font-black tracking-tight text-white">
                    Your Portfolio Starts Here
                </h2>

                {/* Description */}
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                    You haven't created any properties yet.
                    Build your first property, organize its rooms,
                    manage tenants effortlessly, and publish listings
                    directly to the Rentz marketplace from one dashboard.
                </p>

                {/* CTA */}
                <motion.button
                    whileHover={{
                        scale: 1.04,
                    }}
                    whileTap={{
                        scale: 0.97,
                    }}
                    onClick={handleCreateProperty}
                    className="group mt-12 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-[0_0_45px_rgba(37,99,235,0.45)] transition-all duration-300 hover:shadow-[0_0_65px_rgba(37,99,235,0.65)]"
                >
                    <Plus className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />

                    Create Your First Property

                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>

                {/* Bottom Features */}
                <div className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">

                    {[
                        "Manage Unlimited Rooms",
                        "Track Occupancy",
                        "Publish to Marketplace",
                    ].map((item) => (
                        <div
                            key={item}
                            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl"
                        >
                            <p className="font-medium text-slate-200">
                                {item}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </motion.section>
    );
};

export default PropertyEmptyState;