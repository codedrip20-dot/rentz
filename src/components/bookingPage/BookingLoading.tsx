"use client";

import { motion } from "framer-motion";

export default function BookingLoading() {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.3,
            }}
            className="mx-auto flex w-full max-w-5xl flex-col gap-8"
        >
            {/* Header */}

            <SkeletonCard className="p-8">

                <Skeleton className="mb-5 h-8 w-52" />

                <Skeleton className="mb-3 h-4 w-80" />

                <Skeleton className="h-4 w-72" />

            </SkeletonCard>

            {/* Tenant Information */}

            <SkeletonCard className="p-8">

                <Skeleton className="mb-8 h-7 w-56" />

                <Skeleton className="mb-4 h-5 w-40" />

                <Skeleton className="mb-8 h-16 w-full rounded-2xl" />

                <Skeleton className="mb-4 h-5 w-44" />

                <Skeleton className="h-16 w-full rounded-2xl" />

            </SkeletonCard>

            {/* Move In */}

            <SkeletonCard className="p-8">

                <Skeleton className="mb-8 h-7 w-44" />

                <Skeleton className="mb-4 h-5 w-48" />

                <Skeleton className="h-16 w-full rounded-2xl" />

            </SkeletonCard>

            {/* Payment Summary */}

            <SkeletonCard className="p-8">

                <Skeleton className="mb-8 h-7 w-56" />

                <div className="space-y-4">

                    <Skeleton className="h-16 w-full rounded-2xl" />

                    <Skeleton className="h-16 w-full rounded-2xl" />

                    <Skeleton className="h-16 w-full rounded-2xl" />

                </div>

                <Skeleton className="mt-8 h-32 w-full rounded-3xl" />

            </SkeletonCard>

            {/* Policies */}

            <SkeletonCard className="p-8">

                <Skeleton className="mb-8 h-7 w-60" />

                <Skeleton className="mb-5 h-24 w-full rounded-2xl" />

                <Skeleton className="mb-5 h-24 w-full rounded-2xl" />

                <Skeleton className="h-24 w-full rounded-2xl" />

            </SkeletonCard>

            {/* Button */}

            <Skeleton className="h-16 w-full rounded-[28px]" />
        </motion.div>
    );
}

/* ===================================================== */

interface SkeletonProps {
    className?: string;
}

function Skeleton({
    className = "",
}: SkeletonProps) {
    return (
        <div
            className={`
                animate-pulse
                rounded-xl
                bg-gradient-to-r
                from-white/5
                via-white/15
                to-white/5
                ${className}
            `}
        />
    );
}

interface SkeletonCardProps {
    children: React.ReactNode;

    className?: string;
}

function SkeletonCard({
    children,
    className = "",
}: SkeletonCardProps) {
    return (
        <div
            className={`
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/10
                backdrop-blur-2xl
                shadow-[0_20px_80px_rgba(37,99,235,.18)]
                ${className}
            `}
        >
            {children}
        </div>
    );
}