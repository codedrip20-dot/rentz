"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface BasicInformationFormProps {
    email?: string;
    onNext: () => void;
}

export default function BasicInformationForm({
    email = "",
    onNext,
}: BasicInformationFormProps) {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const canContinue =
        fullName.trim() !== "" &&
        phoneNumber.trim().length >= 10;

    return (
        <form
            className="
                space-y-6

                sm:space-y-8
            "
            onSubmit={(e) => {
                e.preventDefault();

                if (!canContinue) return;

                onNext();
            }}
        >
            {/* ==================================================
                Full Name
            ================================================== */}

            <div className="space-y-2">
                <label
                    htmlFor="fullName"
                    className="
                        block
                        text-sm
                        font-medium
                        text-slate-700
                    "
                >
                    Full Name
                </label>

                <input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) =>
                        setFullName(e.target.value)
                    }
                    autoComplete="name"
                    className="
                        w-full
                        rounded-xl
                        border
                        border-slate-300
                        bg-white
                        px-4
                        py-3
                        text-sm
                        text-black
                        outline-none
                        transition

                        placeholder:text-slate-400

                        focus:border-blue-600
                        focus:ring-2
                        focus:ring-blue-100

                        sm:text-base
                    "
                />
            </div>

            {/* ==================================================
                Phone
            ================================================== */}

            <div className="space-y-2">
                <label
                    htmlFor="phone"
                    className="
                        block
                        text-sm
                        font-medium
                        text-slate-700
                    "
                >
                    Phone Number
                </label>

                <input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) =>
                        setPhoneNumber(
                            e.target.value
                        )
                    }
                    autoComplete="tel"
                    className="
                        w-full
                        rounded-xl
                        border
                        border-slate-300
                        bg-white
                        px-4
                        py-3
                        text-sm
                        text-black
                        outline-none
                        transition

                        placeholder:text-slate-400

                        focus:border-blue-600
                        focus:ring-2
                        focus:ring-blue-100

                        sm:text-base
                    "
                />
            </div>

            {/* ==================================================
                Email
            ================================================== */}

            <div className="space-y-2">
                <label
                    htmlFor="email"
                    className="
                        block
                        text-sm
                        font-medium
                        text-slate-700
                    "
                >
                    Email Address
                </label>

                <input
                    id="email"
                    type="email"
                    value={email}
                    readOnly
                    autoComplete="email"
                    className="
                        w-full
                        cursor-not-allowed
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-100
                        px-4
                        py-3
                        text-sm
                        text-slate-500
                        outline-none

                        sm:text-base
                    "
                />
            </div>

            {/* ==================================================
                Continue
            ================================================== */}

            <div
                className="
                    flex
                    justify-stretch
                    pt-1

                    sm:justify-end
                    sm:pt-0
                "
            >
                <button
                    type="submit"
                    disabled={!canContinue}
                    className="
                        inline-flex
                        min-h-12
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-blue-600
                        px-6
                        py-3
                        text-sm
                        font-medium
                        text-white
                        transition

                        active:scale-[0.98]

                        hover:bg-blue-700

                        disabled:cursor-not-allowed
                        disabled:bg-slate-300
                        disabled:hover:bg-slate-300
                        disabled:active:scale-100

                        sm:w-auto
                        sm:text-base
                    "
                >
                    Continue

                    <ArrowRight className="h-5 w-5" />
                </button>
            </div>
        </form>
    );
}