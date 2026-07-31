"use client";

import { useState } from "react";
import {
    CalendarDays,
    Clock3,
    Loader2,
    ShieldCheck,
} from "lucide-react";

import { Room } from "@/types/roomTypes";
import { updateRoomAvailability } from "@/lib/firebase/room";

interface AvailabilityCardProps {
    room: Room;
}

export default function AvailabilityCard({
    room,
}: AvailabilityCardProps) {
    const [availability, setAvailability] =
        useState(room.availability);

    const [isSaving, setIsSaving] =
        useState(false);

    async function toggleAvailability() {
        if (isSaving) return;

        const previousAvailability = availability;

        const updatedAvailability = {
            ...availability,
            availableNow:
                !availability.availableNow,
        };

        try {
            setIsSaving(true);

            setAvailability(updatedAvailability);

            await updateRoomAvailability(
                room.roomId,
                updatedAvailability
            );
        } catch (error) {
            console.error(error);

            setAvailability(previousAvailability);
        } finally {
            setIsSaving(false);
        }
    }

    return (
        <section
            className="
                overflow-hidden
                rounded-3xl
                border
                border-white/20
                bg-white/10
                backdrop-blur-2xl
                shadow-2xl
            "
        >
            {/* Header */}

            <div
                className="
                    border-b
                    border-white/10
                    px-5
                    py-5
                    sm:px-6
                "
            >
                <h2 className="text-xl font-bold text-white">
                    Availability
                </h2>

                <p className="mt-1 text-sm text-blue-100">
                    Manage your room's booking
                    availability.
                </p>
            </div>

            <div className="space-y-8 p-5 sm:p-6">

                {/* Marketplace Card */}

                <div
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-5
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            gap-6
                            md:flex-row
                            md:items-center
                            md:justify-between
                        "
                    >
                        <div>
                            <div className="flex items-center gap-3">

                                <ShieldCheck
                                    size={24}
                                    className={
                                        availability.availableNow
                                            ? "text-emerald-400"
                                            : "text-rose-400"
                                    }
                                />

                                <div>
                                    <h3 className="text-lg font-semibold text-white">
                                        {availability.availableNow
                                            ? "Available Now"
                                            : "Unavailable"}
                                    </h3>

                                    <p className="mt-1 text-sm text-blue-100">
                                        {availability.availableNow
                                            ? "Visible on the Rentz Marketplace."
                                            : "Hidden from the Rentz Marketplace."}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Toggle */}

                        <button
                            type="button"
                            onClick={
                                toggleAvailability
                            }
                            disabled={isSaving}
                            className={`relative h-8 w-16 rounded-full transition-all duration-300 ${
                                availability.availableNow
                                    ? "bg-emerald-500"
                                    : "bg-slate-500"
                            } ${
                                isSaving
                                    ? "cursor-not-allowed opacity-70"
                                    : ""
                            }`}
                        >
                            <span
                                className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-lg transition-all duration-300 ${
                                    availability.availableNow
                                        ? "left-9"
                                        : "left-1"
                                }`}
                            />

                            {isSaving && (
                                <Loader2
                                    size={14}
                                    className="
                                        absolute
                                        left-1/2
                                        top-1/2
                                        -translate-x-1/2
                                        -translate-y-1/2
                                        animate-spin
                                        text-white
                                    "
                                />
                            )}
                        </button>
                    </div>
                </div>

                {/* Availability Details */}

                <div
                    className="
                        grid
                        gap-4
                        sm:grid-cols-3
                    "
                >
                    {/* Available From */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/5
                            p-4
                        "
                    >
                        <div className="flex items-center gap-2">
                            <CalendarDays
                                size={18}
                                className="text-blue-300"
                            />

                            <span className="text-sm text-blue-100">
                                Available From
                            </span>
                        </div>

                        <p className="mt-3 text-lg font-semibold text-white">
                            {availability.availableFrom
                                ? availability.availableFrom
                                      .toDate()
                                      .toLocaleDateString()
                                : "Immediately"}
                        </p>
                    </div>

                    {/* Minimum Stay */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/5
                            p-4
                        "
                    >
                        <div className="flex items-center gap-2">
                            <Clock3
                                size={18}
                                className="text-blue-300"
                            />

                            <span className="text-sm text-blue-100">
                                Minimum Stay
                            </span>
                        </div>

                        <p className="mt-3 text-lg font-semibold text-white">
                            {availability.minimumStay} Month
                            {availability.minimumStay > 1
                                ? "s"
                                : ""}
                        </p>
                    </div>

                    {/* Maximum Stay */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/5
                            p-4
                        "
                    >
                        <div className="flex items-center gap-2">
                            <Clock3
                                size={18}
                                className="text-blue-300"
                            />

                            <span className="text-sm text-blue-100">
                                Maximum Stay
                            </span>
                        </div>

                        <p className="mt-3 text-lg font-semibold text-white">
                            {availability.maximumStay} Month
                            {availability.maximumStay > 1
                                ? "s"
                                : ""}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}