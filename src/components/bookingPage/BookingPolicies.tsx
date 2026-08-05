"use client";

import { motion } from "framer-motion";

import {
    BadgeCheck,
    Check,
    FileCheck2,
    ShieldCheck,
} from "lucide-react";

interface BookingPoliciesProps {
    acceptedTerms: boolean;

    acceptedCancellation: boolean;

    confirmedInformation: boolean;

    onTermsChange: (
        value: boolean
    ) => void;

    onCancellationChange: (
        value: boolean
    ) => void;

    onConfirmationChange: (
        value: boolean
    ) => void;

    error?: string;
}

export default function BookingPolicies({
    acceptedTerms,
    acceptedCancellation,
    confirmedInformation,
    onTermsChange,
    onCancellationChange,
    onConfirmationChange,
    error,
}: BookingPoliciesProps) {
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
                delay: 0.5,
            }}
            className="
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/10
                backdrop-blur-2xl
                shadow-[0_20px_80px_rgba(37,99,235,0.18)]
            "
        >
            {/* ============================================================
                Header
            ============================================================ */}

            <div className="border-b border-white/10 px-8 py-7">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
                    <FileCheck2
                        size={26}
                        className="text-cyan-300"
                    />

                    Booking Confirmation
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
                    Please review the following confirmations before
                    continuing to the secure payment page.
                </p>
            </div>

            {/* ============================================================
                Policy Cards
            ============================================================ */}

            <div className="space-y-5 p-8">
                <PolicyItem
                    checked={confirmedInformation}
                    onChange={onConfirmationChange}
                    title="I confirm that the information I entered is accurate."
                    description="My official name, phone number and preferred move-in date are correct."
                />

                <PolicyItem
                    checked={acceptedTerms}
                    onChange={onTermsChange}
                    title="I agree to the Rentz Terms & Conditions."
                    description="I understand the Rentz booking process and platform policies."
                />

                <PolicyItem
                    checked={acceptedCancellation}
                    onChange={onCancellationChange}
                    title="I understand the cancellation policy."
                    description="I have reviewed the cancellation and refund policy before proceeding."
                />

                {error && (
                    <p className="text-sm font-medium text-red-400">
                        {error}
                    </p>
                )}
            </div>

            {/* ============================================================
                Footer
            ============================================================ */}

            <div
                className="
                    border-t
                    border-white/10
                    bg-gradient-to-r
                    from-blue-500/10
                    via-transparent
                    to-cyan-500/10
                    px-8
                    py-7
                "
            >
                <div className="flex items-start gap-4">
                    <div
                        className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-cyan-500/15
                        "
                    >
                        <ShieldCheck
                            size={24}
                            className="text-cyan-300"
                        />
                    </div>

                    <div className="flex-1">
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                            Your Booking is Protected

                            <BadgeCheck
                                size={18}
                                className="text-green-400"
                            />
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-slate-300">
                            Once payment is completed successfully,
                            Rentz will instantly create your booking,
                            generate your tenant profile and notify the
                            property owner.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

/* ================================================================
   Policy Item
================================================================ */

interface PolicyItemProps {
    checked: boolean;

    title: string;

    description: string;

    onChange: (
        value: boolean
    ) => void;
}

function PolicyItem({
    checked,
    title,
    description,
    onChange,
}: PolicyItemProps) {
    return (
        <label
            className="
                group
                flex
                cursor-pointer
                items-start
                gap-5
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                transition-all
                duration-300
                hover:border-cyan-400/30
                hover:bg-white/10
            "
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) =>
                    onChange(
                        e.target.checked
                    )
                }
                className="hidden"
            />

            <motion.div
                animate={{
                    scale: checked
                        ? 1
                        : 0.95,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={`
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    transition-all
                    duration-300

                    ${
                        checked
                            ? "border-green-400 bg-green-500 shadow-lg shadow-green-500/30"
                            : "border-white/20 bg-white/10"
                    }
                `}
            >
                {checked && (
                    <Check
                        size={16}
                        className="text-white"
                    />
                )}
            </motion.div>

            <div className="flex-1">
                <h4 className="text-base font-semibold text-white transition-colors group-hover:text-cyan-200">
                    {title}
                </h4>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                    {description}
                </p>
            </div>
        </label>
    );
}