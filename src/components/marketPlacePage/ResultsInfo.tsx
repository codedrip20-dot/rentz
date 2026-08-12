"use client";

import {
    Building2,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

interface ResultsInfoProps {
    totalRooms: number;
}

export default function ResultsInfo({
    totalRooms,
}: ResultsInfoProps) {

    return (

        <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}

            <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 sm:h-14 sm:w-14">

                    <Building2
                        size={23}
                        className="text-blue-300 sm:h-[26px] sm:w-[26px]"
                    />

                </div>

                <div className="min-w-0">

                    <h2 className="text-xl font-bold text-white sm:text-2xl">

                        Available Rooms

                    </h2>

                    <p className="mt-1 text-xs text-slate-300 sm:text-sm">

                        Showing{" "}

                        <span className="font-semibold text-blue-300">

                            {totalRooms}

                        </span>

                        {" "}verified room{totalRooms !== 1 ? "s" : ""}

                    </p>

                </div>

            </div>

            {/* Right */}

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">

                <div className="inline-flex min-h-10 items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3.5 py-2 backdrop-blur-xl sm:px-4">

                    <CheckCircle2
                        size={15}
                        className="shrink-0 text-green-400 sm:h-4 sm:w-4"
                    />

                    <span className="text-xs font-medium text-green-300 sm:text-sm">

                        Verified Listings

                    </span>

                </div>

                <div className="inline-flex min-h-10 items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-2 backdrop-blur-xl sm:px-4">

                    <Sparkles
                        size={15}
                        className="shrink-0 text-cyan-300 sm:h-4 sm:w-4"
                    />

                    <span className="text-xs font-medium text-blue-200 sm:text-sm">

                        Real-time Results

                    </span>

                </div>

            </div>

        </section>

    );

}