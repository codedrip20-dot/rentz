"use client";

import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Room } from "@/types/roomTypes";

import RoomCard from "./RoomCard";

interface RoomGridProps {
    propertyId: string | null;
    rooms: Room[];
    onRefresh: () => void;
}

export default function RoomGrid({
    propertyId,
    rooms,
    onRefresh,
}: RoomGridProps) {
    const router = useRouter();

    const handleAddRoom = () => {
        if (!propertyId) return;

        router.push(
            `/ownerDashboard/rooms/create?propertyId=${propertyId}`
        );
    };

    return (
        <section className="grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3">

            {/* Existing Rooms */}

            {rooms.map((room) => (
                <RoomCard
                    key={room.roomId}
                    room={room}
                    onRefresh={onRefresh}
                />
            ))}

            {/* Add Room Card */}

            <motion.button
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddRoom}
                disabled={!propertyId}
                className="
                    group
                    relative
                    min-h-[300px]
                    overflow-hidden
                    rounded-2xl
                    border
                    border-dashed
                    border-cyan-400/30
                    bg-white/5
                    p-5
                    backdrop-blur-xl
                    transition-all
                    hover:border-cyan-400/60
                    hover:bg-white/10
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    sm:min-h-[320px]
                    sm:rounded-[28px]
                    sm:p-6
                    md:p-8
                "
            >
                {/* Background Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-indigo-500/10" />

                <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl sm:h-40 sm:w-40" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">

                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 shadow-[0_0_40px_rgba(37,99,235,0.45)] sm:mb-6 sm:h-20 sm:w-20 sm:rounded-3xl">
                        <Plus className="h-8 w-8 text-white transition-transform duration-300 group-hover:rotate-90 sm:h-10 sm:w-10" />
                    </div>

                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                        Add New Room
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300 sm:mt-3 sm:leading-7">
                        Create another room for this property and
                        publish it to the Rentz marketplace.
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all group-hover:gap-3 sm:mt-8 sm:px-5 sm:py-3">
                        Create Room

                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>

                </div>
            </motion.button>

        </section>
    );
}