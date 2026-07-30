"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    BedDouble,
    DoorOpen,
    Plus,
    Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface RoomEmptyStateProps {
    propertyId: string | null;
    onRefresh: () => void;
}

const RoomEmptyState = ({
    propertyId,
}: RoomEmptyStateProps) => {
    const router = useRouter();

    const handleAddRoom = () => {
        if (!propertyId) return;

        router.push(
            `/ownerDashboard/rooms/create?propertyId=${propertyId}`
        );
    };

    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 px-8 py-24 backdrop-blur-2xl"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-indigo-500/10" />

            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-500/15 blur-[120px]" />

            <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-[140px]" />

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
                        <BedDouble className="h-14 w-14 text-white" />
                    </div>
                </motion.div>

                {/* Badge */}
                <div className="mb-6 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                    <Sparkles className="h-4 w-4" />
                    Start Hosting
                </div>

                {/* Heading */}
                <h2 className="max-w-2xl text-5xl font-black tracking-tight text-white">
                    Your Property Needs Rooms
                </h2>

                {/* Description */}
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                    This property doesn't have any rooms yet.
                    Add your first room, configure pricing,
                    amenities, and availability, then publish it
                    to the Rentz marketplace to start receiving bookings.
                </p>

                {/* CTA */}
                <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleAddRoom}
                    disabled={!propertyId}
                    className="group mt-12 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-[0_0_45px_rgba(37,99,235,0.45)] transition-all duration-300 hover:shadow-[0_0_70px_rgba(37,99,235,0.65)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                >
                    <Plus className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />

                    Add Your First Room

                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>

                {/* Feature Cards */}
                <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-5 md:grid-cols-3">

                    {[
                        {
                            title: "Custom Pricing",
                            desc: "Set rent, deposits and billing.",
                        },
                        {
                            title: "Availability",
                            desc: "Control occupancy & bookings.",
                        },
                        {
                            title: "Marketplace Ready",
                            desc: "Publish instantly on Rentz.",
                        },
                    ].map((feature) => (
                        <motion.div
                            key={feature.title}
                            whileHover={{ y: -5 }}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all"
                        >
                            <DoorOpen className="mb-4 h-8 w-8 text-cyan-400" />

                            <h3 className="text-lg font-semibold text-white">
                                {feature.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-400">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}

                </div>

            </div>
        </motion.section>
    );
};

export default RoomEmptyState;