"use client";

import { motion } from "framer-motion";
import { Phone, User } from "lucide-react";

interface TenantInformationProps {
    officialName: string;

    phoneNumber: string;

    onNameChange: (
        value: string
    ) => void;

    onPhoneChange: (
        value: string
    ) => void;

    errors?: {
        officialName?: string;

        phoneNumber?: string;
    };
}

export default function TenantInformation({
    officialName,
    phoneNumber,
    onNameChange,
    onPhoneChange,
    errors,
}: TenantInformationProps) {
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
                delay: 0.2,
            }}
            className="
                w-full
                rounded-[32px]
                border
                border-white/10
                bg-white/10
                backdrop-blur-2xl
                shadow-[0_20px_80px_rgba(37,99,235,0.18)]
                overflow-hidden
            "
        >
            {/* Header */}

            <div className="border-b border-white/10 px-8 py-7">
                <h2 className="text-2xl font-bold text-white">
                    Tenant Information
                </h2>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                    Please provide your official details exactly as they
                    appear on your government-issued documents. These
                    details will be used for your booking confirmation.
                </p>
            </div>

            {/* Form */}

            <div className="space-y-8 p-8">
                {/* Name */}

                <div>
                    <label
                        htmlFor="officialName"
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
                        <User
                            size={18}
                            className="text-cyan-300"
                        />

                        Official Full Name
                    </label>

                    <div className="relative">
                        <input
                            id="officialName"
                            type="text"
                            value={officialName}
                            onChange={(e) =>
                                onNameChange(
                                    e.target.value
                                )
                            }
                            placeholder="Enter your official full name"
                            autoComplete="name"
                            className="
                                h-16
                                w-full
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/10
                                px-5
                                text-white
                                placeholder:text-slate-400
                                backdrop-blur-xl
                                outline-none
                                transition-all
                                duration-300
                                focus:border-cyan-400
                                focus:ring-4
                                focus:ring-cyan-500/20
                            "
                        />
                    </div>

                    {errors?.officialName && (
                        <p className="mt-3 text-sm text-red-400">
                            {errors.officialName}
                        </p>
                    )}
                </div>

                {/* Phone */}

                <div>
                    <label
                        htmlFor="phoneNumber"
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
                        <Phone
                            size={18}
                            className="text-cyan-300"
                        />

                        Official Phone Number
                    </label>

                    <div className="relative">
                        <input
                            id="phoneNumber"
                            type="tel"
                            inputMode="numeric"
                            maxLength={10}
                            value={phoneNumber}
                            onChange={(e) =>
                                onPhoneChange(
                                    e.target.value.replace(
                                        /\D/g,
                                        ""
                                    )
                                )
                            }
                            placeholder="Enter your mobile number"
                            autoComplete="tel"
                            className="
                                h-16
                                w-full
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/10
                                px-5
                                text-white
                                placeholder:text-slate-400
                                backdrop-blur-xl
                                outline-none
                                transition-all
                                duration-300
                                focus:border-cyan-400
                                focus:ring-4
                                focus:ring-cyan-500/20
                            "
                        />
                    </div>

                    {errors?.phoneNumber && (
                        <p className="mt-3 text-sm text-red-400">
                            {errors.phoneNumber}
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
                    from-blue-500/10
                    via-transparent
                    to-cyan-500/10
                    px-8
                    py-6
                "
            >
                <p className="text-sm leading-7 text-slate-300">
                    Your information is securely stored and is only used
                    for booking confirmation, communication with the
                    property owner, and tenancy verification. Rentz
                    protects your personal information using secure
                    authentication and encrypted data storage.
                </p>
            </div>
        </motion.section>
    );
}