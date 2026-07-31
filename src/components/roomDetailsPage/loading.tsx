"use client";

import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <main
            className="
                min-h-screen
                bg-gradient-to-br
                from-slate-950
                via-blue-950
                to-slate-900
                p-6
            "
        >
            <div className="mx-auto max-w-7xl space-y-6">
                {/* Loading Indicator */}

                <div
                    className="
                        flex
                        items-center
                        justify-center
                        gap-3
                        rounded-3xl
                        border
                        border-white/20
                        bg-white/10
                        py-6
                        backdrop-blur-2xl
                    "
                >
                    <Loader2
                        size={28}
                        className="animate-spin text-blue-400"
                    />

                    <p className="text-lg font-medium text-white">
                        Loading room details...
                    </p>
                </div>

                {/* Header Skeleton */}

                <div
                    className="
                        h-40
                        animate-pulse
                        rounded-3xl
                        border
                        border-white/20
                        bg-white/10
                        backdrop-blur-2xl
                    "
                />

                {/* Gallery Skeleton */}

                <div
                    className="
                        h-96
                        animate-pulse
                        rounded-3xl
                        border
                        border-white/20
                        bg-white/10
                        backdrop-blur-2xl
                    "
                />

                {/* Card Skeletons */}

                <div className="grid gap-6">
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            className="
                                h-56
                                animate-pulse
                                rounded-3xl
                                border
                                border-white/20
                                bg-white/10
                                backdrop-blur-2xl
                            "
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}