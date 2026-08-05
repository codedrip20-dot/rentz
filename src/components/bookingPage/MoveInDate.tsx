"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock3 } from "lucide-react";

interface MoveInDateProps {
    moveInDate: string;

    onChange: (value: string) => void;

    error?: string;
}

export default function MoveInDate({
    moveInDate,
    onChange,
    error,
}: MoveInDateProps) {
    const today = new Date()
        .toISOString()
        .split("T")[0];

    return (
        <motion.section
            initial={{
                opacity: 0,
                y: 30,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
                delay: 0.3,
            }}
            className="
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/10
                shadow-[0_20px_80px_rgba(37,99,235,0.18)]
                backdrop-blur-2xl
            "
        >
            {/* Header */}

            <div className="border-b border-white/10 px-8 py-7">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
                    <CalendarDays
                        size={26}
                        className="text-cyan-300"
                    />

                    Move-In Date
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
                    Choose your preferred move-in date.
                    Your booking request will be shared
                    with the property owner for final
                    confirmation.
                </p>
            </div>

            {/* Date Picker */}

            <div className="space-y-6 p-8">
                <div>
                    <label
                        htmlFor="moveInDate"
                        className="
                            mb-3
                            flex
                            items-center
                            gap-2
                            text-sm
                            font-semibold
                            tracking-wide
                            text-slate-200
                        "
                    >
                        <Clock3
                            size={18}
                            className="text-cyan-300"
                        />

                        Preferred Move-In Date
                    </label>

                    <input
                        id="moveInDate"
                        type="date"
                        value={moveInDate}
                        min={today}
                        onChange={(e) =>
                            onChange(
                                e.target.value
                            )
                        }
                        className="
                            h-16
                            w-full
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/10
                            px-5
                            text-white
                            backdrop-blur-xl
                            outline-none
                            transition-all
                            duration-300
                            focus:border-cyan-400
                            focus:ring-4
                            focus:ring-cyan-500/20
                        "
                    />

                    {error && (
                        <p className="mt-3 text-sm text-red-400">
                            {error}
                        </p>
                    )}
                </div>
            </div>

            {/* Footer */}

            <div
                className="
                    border-t
                    border-white/10
                    bg-gradient-to-r
                    from-cyan-500/10
                    via-transparent
                    to-blue-500/10
                    px-8
                    py-6
                "
            >
                <div className="flex items-start gap-3">
                    <CalendarDays
                        size={20}
                        className="
                            mt-1
                            text-cyan-300
                        "
                    />

                    <p className="text-sm leading-7 text-slate-300">
                        The selected move-in date is your
                        preferred arrival date. The property
                        owner may contact you if any changes
                        are required before your booking is
                        finalized.
                    </p>
                </div>
            </div>
        </motion.section>
    );
}