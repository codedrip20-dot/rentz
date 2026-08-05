"use client";

import { motion } from "framer-motion";

import {
    BadgeCheck,
    CalendarDays,
    Crown,
    ShieldCheck,
    User,
} from "lucide-react";

import { RoomDisplayData } from "@/types/roomDisplayTypes";

interface OwnerCardProps {
    data: RoomDisplayData;
}

export default function OwnerCard({
    data,
}: OwnerCardProps) {
    const { owner } = data;

    const profile = owner.profile;

    return (
        <section className="mt-8">
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 0.4,
                }}
                className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    shadow-2xl
                    backdrop-blur-xl
                "
            >
                {/* ==========================
                    Header
                ========================== */}

                <div
                    className="
                        border-b
                        border-white/10
                        bg-gradient-to-r
                        from-blue-600/15
                        to-cyan-500/10
                        p-6

                        sm:p-8
                    "
                >
                    <div
                        className="
                            flex
                            items-center
                            gap-4
                        "
                    >
                        <div
                            className="
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-blue-500/20
                                bg-blue-500/10
                            "
                        >
                            <User
                                size={30}
                                className="text-blue-400"
                            />
                        </div>

                        <div>
                            <h2
                                className="
                                    text-2xl
                                    font-black
                                    text-white
                                "
                            >
                                Property Owner
                            </h2>

                            <p className="mt-1 text-white/60">
                                Verified owner profile
                                managed by Rentz.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ==========================
                    Owner Overview
                ========================== */}

                <div
                    className="
                        p-6

                        sm:p-8
                    "
                />
                    <div
                        className="
                            flex
                            flex-col
                            gap-6

                            sm:flex-row
                            sm:items-center
                        "
                    >
                        <div
                            className="
                                flex
                                h-24
                                w-24
                                items-center
                                justify-center
                                rounded-3xl
                                border
                                border-blue-500/20
                                bg-white/5
                            "
                        >
                            <User
                                size={42}
                                className="text-white/60"
                            />
                        </div>

                        <div className="flex-1">
                            <div
                                className="
                                    flex
                                    flex-wrap
                                    items-center
                                    gap-3
                                "
                            >
                                <h3
                                    className="
                                        text-2xl
                                        font-bold
                                        text-white
                                    "
                                >
                                    Owner Account
                                </h3>

                                <span
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        border
                                        border-emerald-500/30
                                        bg-emerald-500/15
                                        px-3
                                        py-1
                                        text-sm
                                        font-semibold
                                        text-emerald-300
                                    "
                                >
                                    <BadgeCheck size={16} />

                                    Verified
                                </span>
                            </div>
                            <div
                                className="
                                    mt-5
                                    grid
                                    gap-4

                                    sm:grid-cols-2
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >
                                    <Crown
                                        size={18}
                                        className="text-blue-400"
                                    />

                                    <div>
                                        <p
                                            className="
                                                text-xs
                                                text-white/60
                                            "
                                        >
                                            Role
                                        </p>

                                        <p
                                            className="
                                                font-semibold
                                                capitalize
                                                text-white
                                            "
                                        >
                                            {profile.role}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >
                                    <ShieldCheck
                                        size={18}
                                        className="text-blue-400"
                                    />

                                    <div>
                                        <p
                                            className="
                                                text-xs
                                                text-white/60
                                            "
                                        >
                                            Subscription
                                        </p>

                                        <p
                                            className={`
                                                font-semibold

                                                ${
                                                    profile
                                                        .subscription
                                                        .active
                                                        ? "text-emerald-400"
                                                        : "text-red-400"
                                                }
                                            `}
                                        >
                                            {profile
                                                .subscription
                                                .active
                                                ? "Active"
                                                : "Inactive"}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >
                                    <ShieldCheck
                                        size={18}
                                        className="text-blue-400"
                                    />

                                    <div>
                                        <p
                                            className="
                                                text-xs
                                                text-white/60
                                            "
                                        >
                                            Property Limit
                                        </p>

                                        <p
                                            className="
                                                font-semibold
                                                text-white
                                            "
                                        >
                                            {
                                                profile
                                                    .subscription
                                                    .propertyLimit
                                            }{" "}
                                            Properties
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >
                                    <BadgeCheck
                                        size={18}
                                        className="text-blue-400"
                                    />

                                    <div>
                                        <p
                                            className="
                                                text-xs
                                                text-white/60
                                            "
                                        >
                                            Payment Status
                                        </p>

                                        <p
                                            className="
                                                font-semibold
                                                capitalize
                                                text-white
                                            "
                                        >
                                            {
                                                profile
                                                    .payment
                                                    .status
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="
                                    mt-8
                                    rounded-2xl
                                    border
                                    border-blue-500/20
                                    bg-blue-500/10
                                    p-5
                                "
                            >
                                <h4
                                    className="
                                        text-lg
                                        font-bold
                                        text-white
                                    "
                                >
                                    Owner Verification
                                </h4>

                                <p
                                    className="
                                        mt-2
                                        leading-7
                                        text-white/70
                                    "
                                >
                                    This owner has completed
                                    the Rentz owner
                                    registration process.
                                    Subscription and payment
                                    information are verified
                                    through the platform.
                                </p>
                            </div>
                            {/* ==========================
                            Account Timeline
                        ========================== */}

                        <div
                            className="
                                mt-8
                                grid
                                gap-4

                                sm:grid-cols-2
                            "
                        >
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
                                        items-center
                                        gap-3
                                    "
                                >
                                    <CalendarDays
                                        size={20}
                                        className="text-blue-400"
                                    />

                                    <div>
                                        <p
                                            className="
                                                text-xs
                                                text-white/60
                                            "
                                        >
                                            Created At
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                font-semibold
                                                text-white
                                            "
                                        >
                                            {profile.createdAt
                                                .toDate()
                                                .toLocaleDateString(
                                                    "en-IN",
                                                    {
                                                        day: "numeric",
                                                        month: "short",
                                                        year: "numeric",
                                                    }
                                                )}
                                        </p>
                                    </div>
                                </div>
                            </div>

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
                                        items-center
                                        gap-3
                                    "
                                >
                                    <CalendarDays
                                        size={20}
                                        className="text-blue-400"
                                    />

                                    <div>
                                        <p
                                            className="
                                                text-xs
                                                text-white/60
                                            "
                                        >
                                            Last Updated
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                font-semibold
                                                text-white
                                            "
                                        >
                                            {profile.updatedAt
                                                .toDate()
                                                .toLocaleDateString(
                                                    "en-IN",
                                                    {
                                                        day: "numeric",
                                                        month: "short",
                                                        year: "numeric",
                                                    }
                                                )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="
                                mt-8
                                rounded-2xl
                                border
                                border-emerald-500/20
                                bg-emerald-500/10
                                p-5
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-start
                                    gap-3
                                "
                            >
                                <BadgeCheck
                                    size={22}
                                    className="
                                        mt-0.5
                                        text-emerald-400
                                    "
                                />

                                <p
                                    className="
                                        leading-7
                                        text-white/80
                                    "
                                >
                                    This owner is registered on
                                    Rentz and has an active owner
                                    account. Subscription details
                                    and ownership information are
                                    securely managed through the
                                    platform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}