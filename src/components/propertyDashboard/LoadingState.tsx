"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkeletonProps {
    className: string;
    children?: ReactNode;
}

const Skeleton = ({ className, children }: SkeletonProps) => (
    <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
        }}
        className={className}
    >
        {children}
    </motion.div>
);

const LoadingState = () => {
    return (
        <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-5 overflow-hidden px-3 sm:gap-6 sm:px-4 md:gap-8">

            {/* Background */}
            <div className="absolute inset-0">

                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />

                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/15 blur-[100px] sm:-left-32 sm:-top-32 sm:h-96 sm:w-96 sm:blur-[120px]" />

                <div className="absolute right-0 top-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-[110px] sm:top-20 sm:h-80 sm:w-80 sm:blur-[140px]" />

            </div>

            <div className="relative z-10 flex flex-col gap-5 sm:gap-6 md:gap-8">

                {/* Header */}
                <Skeleton className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl sm:rounded-3xl sm:p-6 md:p-8">

                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                        <div className="min-w-0 space-y-3 sm:space-y-4">

                            <div className="h-8 w-3/4 max-w-72 rounded-xl bg-slate-700/70 sm:h-10 sm:w-72" />

                            <div className="h-4 w-full max-w-96 rounded-lg bg-slate-800/80" />

                        </div>

                        <div className="h-12 w-full rounded-2xl bg-slate-700/70 sm:h-14 sm:w-44" />

                    </div>

                </Skeleton>

                {/* Property Tabs */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-2xl sm:rounded-3xl sm:p-6">

                    <div className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">

                        <div className="space-y-3">

                            <Skeleton className="h-6 w-44 rounded-lg bg-slate-700/70 sm:w-52" />

                            <Skeleton className="h-4 w-full max-w-72 rounded-lg bg-slate-800/80" />

                        </div>

                        <Skeleton className="h-10 w-28 rounded-full bg-slate-700/70" />

                    </div>

                    <div className="flex gap-3 overflow-x-hidden sm:gap-5">

                        {[1, 2, 3].map((tab) => (
                            <Skeleton
                                key={tab}
                                className="h-32 min-w-[260px] flex-1 rounded-2xl border border-white/10 bg-white/5 sm:h-40 sm:min-w-[280px] sm:rounded-3xl md:min-w-[320px]"
                            />
                        ))}

                    </div>

                </div>

                {/* Room Cards */}
                <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3">

                    {[1, 2, 3, 4, 5, 6].map((room) => (
                        <Skeleton
                            key={room}
                            className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:rounded-3xl sm:p-6"
                        >
                            <div className="flex items-start justify-between gap-3">

                                <div className="flex min-w-0 gap-3 sm:gap-4">

                                    <div className="h-14 w-14 shrink-0 rounded-2xl bg-slate-700/70 sm:h-16 sm:w-16" />

                                    <div className="min-w-0 space-y-3">

                                        <div className="h-5 w-28 rounded-lg bg-slate-700/70 sm:h-6 sm:w-36" />

                                        <div className="h-4 w-20 rounded-lg bg-slate-800/80 sm:w-24" />

                                    </div>

                                </div>

                                <div className="h-7 w-20 shrink-0 rounded-full bg-slate-700/70 sm:h-8 sm:w-24" />

                            </div>

                            <div className="mt-7 space-y-3 sm:mt-8">

                                <div className="h-4 w-28 rounded-lg bg-slate-800/80" />

                                <div className="h-9 w-36 rounded-lg bg-slate-700/70 sm:h-10 sm:w-44" />

                            </div>

                            <div className="mt-8 flex gap-3 sm:mt-10 sm:gap-4">

                                <div className="h-11 flex-1 rounded-2xl bg-slate-700/70 sm:h-12" />

                                <div className="h-11 flex-1 rounded-2xl bg-slate-700/70 sm:h-12" />

                            </div>

                        </Skeleton>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default LoadingState;