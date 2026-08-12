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
    const subscription = profile.subscription;
    const payment = profile.payment;

    const createdAt = profile.createdAt
        .toDate()
        .toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });

    const updatedAt = profile.updatedAt
        .toDate()
        .toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });

    return (
        <section className="mt-6 w-full sm:mt-8">
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
                    margin: "0px 0px -80px 0px",
                }}
                transition={{
                    duration: 0.4,
                }}
                className="
                    w-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    shadow-2xl
                    backdrop-blur-xl

                    sm:rounded-3xl
                "
            >
                {/* ==================================================
                    Header
                ================================================== */}

                <div
                    className="
                        border-b
                        border-white/10
                        bg-gradient-to-r
                        from-blue-600/15
                        to-cyan-500/10
                        px-4
                        py-5

                        sm:px-6
                        sm:py-6

                        lg:px-8
                    "
                >
                    <div
                        className="
                            flex
                            items-center
                            gap-3

                            sm:gap-4
                        "
                    >
                        <div
                            className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-blue-500/20
                                bg-blue-500/10

                                sm:h-14
                                sm:w-14
                                sm:rounded-2xl
                            "
                        >
                            <User
                                size={24}
                                className="
                                    text-blue-400

                                    sm:h-[30px]
                                    sm:w-[30px]
                                "
                            />
                        </div>

                        <div className="min-w-0">
                            <h2
                                className="
                                    text-xl
                                    font-black
                                    leading-tight
                                    text-white

                                    sm:text-2xl
                                "
                            >
                                Property Owner
                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-xs
                                    leading-relaxed
                                    text-white/60

                                    sm:text-sm
                                "
                            >
                                Verified owner profile
                                managed by Rentz.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ==================================================
                    Owner Overview
                ================================================== */}

                <div
                    className="
                        p-4

                        sm:p-6

                        lg:p-8
                    "
                >
                    {/* ==================================================
                        Owner Identity
                    ================================================== */}

                    <div
                        className="
                            flex
                            flex-col
                            gap-5

                            sm:flex-row
                            sm:items-center
                            sm:gap-6
                        "
                    >
                        {/* Avatar */}

                        <div
                            className="
                                flex
                                h-20
                                w-20
                                shrink-0
                                items-center
                                justify-center
                                self-start
                                rounded-2xl
                                border
                                border-blue-500/20
                                bg-white/5

                                sm:h-24
                                sm:w-24
                                sm:self-auto
                                sm:rounded-3xl
                            "
                        >
                            <User
                                size={36}
                                className="
                                    text-white/60

                                    sm:h-[42px]
                                    sm:w-[42px]
                                "
                            />
                        </div>

                        <div className="min-w-0 flex-1">
                            <div
                                className="
                                    flex
                                    flex-wrap
                                    items-center
                                    gap-2.5

                                    sm:gap-3
                                "
                            >
                                <h3
                                    className="
                                        break-words
                                        text-xl
                                        font-bold
                                        leading-tight
                                        text-white

                                        sm:text-2xl
                                    "
                                >
                                    Owner Account
                                </h3>

                                <span
                                    className="
                                        inline-flex
                                        items-center
                                        gap-1.5
                                        rounded-full
                                        border
                                        border-emerald-500/30
                                        bg-emerald-500/15
                                        px-2.5
                                        py-1
                                        text-xs
                                        font-semibold
                                        text-emerald-300

                                        sm:gap-2
                                        sm:px-3
                                        sm:text-sm
                                    "
                                >
                                    <BadgeCheck
                                        size={15}
                                    />

                                    Verified
                                </span>
                            </div>

                            {/* ==================================================
                                Account Details
                            ================================================== */}

                            <div
                                className="
                                    mt-5
                                    grid
                                    grid-cols-1
                                    gap-4

                                    sm:grid-cols-2
                                "
                            >
                                {/* Role */}

                                <div
                                    className="
                                        flex
                                        items-start
                                        gap-3
                                    "
                                >
                                    <Crown
                                        size={18}
                                        className="
                                            mt-0.5
                                            shrink-0
                                            text-blue-400
                                        "
                                    />

                                    <div className="min-w-0">
                                        <p className="text-xs text-white/60">
                                            Role
                                        </p>

                                        <p
                                            className="
                                                mt-0.5
                                                break-words
                                                text-sm
                                                font-semibold
                                                capitalize
                                                text-white

                                                sm:text-base
                                            "
                                        >
                                            {profile.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Subscription */}

                                <div
                                    className="
                                        flex
                                        items-start
                                        gap-3
                                    "
                                >
                                    <ShieldCheck
                                        size={18}
                                        className="
                                            mt-0.5
                                            shrink-0
                                            text-blue-400
                                        "
                                    />

                                    <div className="min-w-0">
                                        <p className="text-xs text-white/60">
                                            Subscription
                                        </p>

                                        <p
                                            className={`
                                                mt-0.5
                                                text-sm
                                                font-semibold

                                                sm:text-base

                                                ${
                                                    subscription.active
                                                        ? "text-emerald-400"
                                                        : "text-red-400"
                                                }
                                            `}
                                        >
                                            {subscription.active
                                                ? "Active"
                                                : "Inactive"}
                                        </p>
                                    </div>
                                </div>

                                {/* Property Limit */}

                                <div
                                    className="
                                        flex
                                        items-start
                                        gap-3
                                    "
                                >
                                    <ShieldCheck
                                        size={18}
                                        className="
                                            mt-0.5
                                            shrink-0
                                            text-blue-400
                                        "
                                    />

                                    <div className="min-w-0">
                                        <p className="text-xs text-white/60">
                                            Property Limit
                                        </p>

                                        <p
                                            className="
                                                mt-0.5
                                                break-words
                                                text-sm
                                                font-semibold
                                                text-white

                                                sm:text-base
                                            "
                                        >
                                            {
                                                subscription.propertyLimit
                                            }{" "}
                                            Properties
                                        </p>
                                    </div>
                                </div>

                                {/* Payment Status */}

                                <div
                                    className="
                                        flex
                                        items-start
                                        gap-3
                                    "
                                >
                                    <BadgeCheck
                                        size={18}
                                        className="
                                            mt-0.5
                                            shrink-0
                                            text-blue-400
                                        "
                                    />

                                    <div className="min-w-0">
                                        <p className="text-xs text-white/60">
                                            Payment Status
                                        </p>

                                        <p
                                            className="
                                                mt-0.5
                                                break-words
                                                text-sm
                                                font-semibold
                                                capitalize
                                                text-white

                                                sm:text-base
                                            "
                                        >
                                            {payment.status}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* ==================================================
                                Owner Verification
                            ================================================== */}

                            <div
                                className="
                                    mt-6
                                    rounded-xl
                                    border
                                    border-blue-500/20
                                    bg-blue-500/10
                                    p-4

                                    sm:mt-8
                                    sm:rounded-2xl
                                    sm:p-5
                                "
                            >
                                <h4
                                    className="
                                        text-base
                                        font-bold
                                        text-white

                                        sm:text-lg
                                    "
                                >
                                    Owner Verification
                                </h4>

                                <p
                                    className="
                                        mt-2
                                        text-sm
                                        leading-6
                                        text-white/70

                                        sm:text-base
                                        sm:leading-7
                                    "
                                >
                                    This owner has completed
                                    the Rentz owner registration
                                    process. Subscription and
                                    payment information are
                                    verified through the
                                    platform.
                                </p>
                            </div>

                            {/* ==================================================
                                Account Timeline
                            ================================================== */}

                            <div
                                className="
                                    mt-6
                                    grid
                                    grid-cols-1
                                    gap-3

                                    sm:mt-8
                                    sm:grid-cols-2
                                    sm:gap-4
                                "
                            >
                                {/* Created */}

                                <div
                                    className="
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        p-4

                                        sm:rounded-2xl
                                        sm:p-5
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
                                            className="
                                                shrink-0
                                                text-blue-400
                                            "
                                        />

                                        <div className="min-w-0">
                                            <p className="text-xs text-white/60">
                                                Created At
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-sm
                                                    font-semibold
                                                    text-white

                                                    sm:text-base
                                                "
                                            >
                                                {createdAt}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Updated */}

                                <div
                                    className="
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        p-4

                                        sm:rounded-2xl
                                        sm:p-5
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
                                            className="
                                                shrink-0
                                                text-blue-400
                                            "
                                        />

                                        <div className="min-w-0">
                                            <p className="text-xs text-white/60">
                                                Last Updated
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-sm
                                                    font-semibold
                                                    text-white

                                                    sm:text-base
                                                "
                                            >
                                                {updatedAt}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ==================================================
                                Trust Message
                            ================================================== */}

                            <div
                                className="
                                    mt-6
                                    rounded-xl
                                    border
                                    border-emerald-500/20
                                    bg-emerald-500/10
                                    p-4

                                    sm:mt-8
                                    sm:rounded-2xl
                                    sm:p-5
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
                                        size={21}
                                        className="
                                            mt-0.5
                                            shrink-0
                                            text-emerald-400
                                        "
                                    />

                                    <p
                                        className="
                                            text-sm
                                            leading-6
                                            text-white/80

                                            sm:text-base
                                            sm:leading-7
                                        "
                                    >
                                        This owner is registered
                                        on Rentz and has an active
                                        owner account. Subscription
                                        details and ownership
                                        information are securely
                                        managed through the
                                        platform.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}