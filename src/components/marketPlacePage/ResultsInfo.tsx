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

            <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10">

                    <Building2
                        size={26}
                        className="text-blue-300"
                    />

                </div>

                <div>

                    <h2 className="text-2xl font-bold text-white">

                        Available Rooms

                    </h2>

                    <p className="mt-1 text-sm text-slate-300">

                        Showing{" "}

                        <span className="font-semibold text-blue-300">

                            {totalRooms}

                        </span>

                        {" "}verified room{totalRooms !== 1 ? "s" : ""}

                    </p>

                </div>

            </div>

            {/* Right */}

            <div className="flex flex-wrap items-center gap-3">

                <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 backdrop-blur-xl">

                    <CheckCircle2
                        size={16}
                        className="text-green-400"
                    />

                    <span className="text-sm font-medium text-green-300">

                        Verified Listings

                    </span>

                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 backdrop-blur-xl">

                    <Sparkles
                        size={16}
                        className="text-cyan-300"
                    />

                    <span className="text-sm font-medium text-blue-200">

                        Real-time Results

                    </span>

                </div>

            </div>

        </section>

    );

}