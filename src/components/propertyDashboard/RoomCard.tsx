"use client";

import { motion } from "framer-motion";
import {
    BedDouble,
    Pencil,
    Trash2,
    IndianRupee,
    ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { deleteRoom } from "@/lib/firebase/room";
import { Room } from "@/types/roomTypes";

interface RoomCardProps {
    room: Room;
    onRefresh: () => void;
}

const statusStyles = {
    available:
        "border border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
    occupied:
        "border border-rose-500/20 bg-rose-500/10 text-rose-300",
    maintenance:
        "border border-amber-500/20 bg-amber-500/10 text-amber-300",
};

const RoomCard = ({
    room,
    onRefresh,
}: RoomCardProps) => {
    const router = useRouter();

    const handleEdit = () => {
        router.push(`/ownerDashboard/rooms/${room.roomId}`);
    };

    const handleDelete = async () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this room?"
        );

        if (!confirmed) return;

        try {
            await deleteRoom(room.roomId);
            onRefresh();
        } catch (error) {
            console.error("Failed to delete room:", error);
        }
    };

    return (
        <motion.article
            whileHover={{
                y: -8,
                scale: 1.015,
            }}
            transition={{
                duration: 0.25,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-all"
        >
            {/* Background Glow */}

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/15 blur-[90px]" />

            {/* Header */}

            <div className="relative z-10 flex items-start justify-between">

                <div className="flex items-center gap-4">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-[0_0_35px_rgba(37,99,235,0.4)]">
                        <BedDouble className="h-8 w-8 text-white" />
                    </div>

                    <div>

                        <h3 className="text-xl font-bold text-white">
                            Room {room.roomNumber}
                        </h3>

                        <p className="mt-1 text-sm text-slate-400">
                            {room.propertyName}
                        </p>

                    </div>

                </div>

                <span
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold capitalize ${statusStyles[room.status]}`}
                >
                    {room.status}
                </span>

            </div>

            {/* Divider */}

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Rent */}

            <div className="relative z-10">

                <p className="text-sm uppercase tracking-widest text-slate-400">
                    Monthly Rent
                </p>

                <div className="mt-3 flex items-center gap-2">

                    <IndianRupee className="h-6 w-6 text-cyan-400" />

                    <h2 className="text-4xl font-black tracking-tight text-white">
                        {room.pricing.rent.toLocaleString("en-IN")}
                    </h2>

                </div>

            </div>

            {/* Buttons */}

            <div className="relative z-10 mt-8 flex gap-4">

                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleEdit}
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-blue-500/20 bg-blue-500/10 px-5 py-3 font-semibold text-cyan-300 transition-all hover:bg-blue-500/20"
                >
                    <Pencil className="h-4 w-4" />

                    Edit

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleDelete}
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-3 font-semibold text-red-300 transition-all hover:bg-red-500/20"
                >
                    <Trash2 className="h-4 w-4" />

                    Delete
                </motion.button>

            </div>

        </motion.article>
    );
};

export default RoomCard;