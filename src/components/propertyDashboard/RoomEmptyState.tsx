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
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-14 backdrop-blur-2xl sm:rounded-[28px] sm:px-6 sm:py-18 md:rounded-[32px] md:px-8 md:py-24"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-indigo-500/10" />

            <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-blue-500/15 blur-[100px] sm:h-72 sm:w-72 sm:blur-[120px]" />

            <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-cyan-500/15 blur-[110px] sm:h-80 sm:w-80 sm:blur-[140px]" />

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
                    className="relative mb-6 sm:mb-8"
                >
                    <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 shadow-[0_0_60px_rgba(37,99,235,0.45)] sm:h-24 sm:w-24 sm:rounded-3xl md:h-28 md:w-28">
                        <BedDouble className="h-10 w-10 text-white sm:h-12 sm:w-12 md:h-14 md:w-14" />
                    </div>
                </motion.div>

                {/* Badge */}
                <div className="mb-5 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
                    <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    Start Hosting
                </div>

                {/* Heading */}
                <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                    Your Property Needs Rooms
                </h2>

                {/* Description */}
                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-7 md:mt-6 md:text-lg md:leading-8">
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
                    className="group mt-8 inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_0_45px_rgba(37,99,235,0.45)] transition-all duration-300 hover:shadow-[0_0_70px_rgba(37,99,235,0.65)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 sm:mt-10 sm:w-auto sm:max-w-none sm:gap-3 sm:px-8 sm:py-4 sm:text-base md:mt-12"
                >
                    <Plus className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:rotate-90" />

                    <span className="whitespace-nowrap">
                        Add Your First Room
                    </span>

                    <ArrowRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>

                {/* Feature Cards */}
                <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-3 sm:mt-12 sm:gap-4 md:mt-16 md:grid-cols-3">

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
                            className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all sm:p-5 md:p-6"
                        >
                            <DoorOpen className="mb-3 h-7 w-7 text-cyan-400 sm:mb-4 sm:h-8 sm:w-8" />

                            <h3 className="text-base font-semibold text-white sm:text-lg">
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