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
        <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0">

                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />

                <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/15 blur-[120px]" />

                <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

            </div>

            <div className="relative z-10 flex flex-col gap-8">

                {/* Header */}
                <Skeleton className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

                    <div className="flex items-center justify-between">

                        <div className="space-y-4">

                            <div className="h-10 w-72 rounded-xl bg-slate-700/70" />

                            <div className="h-4 w-96 rounded-lg bg-slate-800/80" />

                        </div>

                        <div className="h-14 w-44 rounded-2xl bg-slate-700/70" />

                    </div>

                </Skeleton>

                {/* Property Tabs */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">

                    <div className="mb-6 flex items-center justify-between">

                        <div className="space-y-3">

                            <Skeleton className="h-6 w-52 rounded-lg bg-slate-700/70" />

                            <Skeleton className="h-4 w-72 rounded-lg bg-slate-800/80" />

                        </div>

                        <Skeleton className="h-10 w-28 rounded-full bg-slate-700/70" />

                    </div>

                    <div className="flex gap-5 overflow-hidden">

                        {[1, 2, 3].map((tab) => (
                            <Skeleton
                                key={tab}
                                className="h-40 min-w-[320px] rounded-3xl border border-white/10 bg-white/5"
                            />
                        ))}

                    </div>

                </div>

                {/* Room Cards */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {[1, 2, 3, 4, 5, 6].map((room) => (
                        <Skeleton
                            key={room}
                            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                        >
                            <div className="flex items-center justify-between">

                                <div className="flex gap-4">

                                    <div className="h-16 w-16 rounded-2xl bg-slate-700/70" />

                                    <div className="space-y-3">

                                        <div className="h-6 w-36 rounded-lg bg-slate-700/70" />

                                        <div className="h-4 w-24 rounded-lg bg-slate-800/80" />

                                    </div>

                                </div>

                                <div className="h-8 w-24 rounded-full bg-slate-700/70" />

                            </div>

                            <div className="mt-8 space-y-3">

                                <div className="h-4 w-28 rounded-lg bg-slate-800/80" />

                                <div className="h-10 w-44 rounded-lg bg-slate-700/70" />

                            </div>

                            <div className="mt-10 flex gap-4">

                                <div className="h-12 flex-1 rounded-2xl bg-slate-700/70" />

                                <div className="h-12 flex-1 rounded-2xl bg-slate-700/70" />

                            </div>

                        </Skeleton>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default LoadingState;