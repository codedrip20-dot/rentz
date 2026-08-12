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
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-2xl transition-all sm:rounded-3xl sm:p-5 md:p-6"
        >
            {/* Background Glow */}

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-500/15 blur-[75px] sm:-right-10 sm:-top-10 sm:h-40 sm:w-40 sm:blur-[90px]" />

            {/* Header */}

            <div className="relative z-10 flex items-start justify-between gap-3">

                <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-[0_0_35px_rgba(37,99,235,0.4)] sm:h-16 sm:w-16 sm:rounded-2xl">
                        <BedDouble className="h-7 w-7 text-white sm:h-8 sm:w-8" />
                    </div>

                    <div className="min-w-0">

                        <h3 className="truncate text-lg font-bold text-white sm:text-xl">
                            Room {room.roomNumber}
                        </h3>

                        <p className="mt-1 truncate text-xs text-slate-400 sm:text-sm">
                            {room.propertyName}
                        </p>

                    </div>

                </div>

                <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold capitalize sm:px-4 sm:py-1.5 sm:text-xs ${statusStyles[room.status]}`}
                >
                    {room.status}
                </span>

            </div>

            {/* Divider */}

            <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent sm:my-6" />

            {/* Rent */}

            <div className="relative z-10">

                <p className="text-xs uppercase tracking-widest text-slate-400 sm:text-sm">
                    Monthly Rent
                </p>

                <div className="mt-2 flex items-center gap-1.5 sm:mt-3 sm:gap-2">

                    <IndianRupee className="h-5 w-5 text-cyan-400 sm:h-6 sm:w-6" />

                    <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                        {room.pricing.rent.toLocaleString("en-IN")}
                    </h2>

                </div>

            </div>

            {/* Buttons */}

            <div className="relative z-10 mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">

                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleEdit}
                    className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-2xl border border-blue-500/20 bg-blue-500/10 px-4 py-3 text-sm font-semibold text-cyan-300 transition-all hover:bg-blue-500/20 sm:min-h-12 sm:px-5 sm:text-base"
                >
                    <Pencil className="h-4 w-4 shrink-0" />

                    <span>View Details</span>

                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleDelete}
                    className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-300 transition-all hover:bg-red-500/20 sm:min-h-12 sm:px-5 sm:text-base"
                >
                    <Trash2 className="h-4 w-4 shrink-0" />

                    <span>Delete</span>
                </motion.button>

            </div>

        </motion.article>
    );
};

export default RoomCard;