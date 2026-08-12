"use client";

import {
    Loader2,
    ShieldCheck,
} from "lucide-react";

export default function OwnerRegistrationLoader() {
    return (
        <div
            className="
                flex
                min-h-[70vh]
                w-full
                items-center
                justify-center
                px-4
                py-6

                sm:px-6
                sm:py-8
            "
        >
            <div
                className="
                    w-full
                    max-w-md
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    shadow-lg

                    sm:rounded-3xl
                    sm:p-8
                "
            >
                <div
                    className="
                        flex
                        flex-col
                        items-center
                        text-center
                    "
                >
                    {/* ==================================================
                        Verification Icon
                    ================================================== */}

                    <div
                        className="
                            mb-5
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-100

                            sm:h-16
                            sm:w-16
                        "
                    >
                        <ShieldCheck
                            className="
                                h-7
                                w-7
                                text-blue-600

                                sm:h-8
                                sm:w-8
                            "
                        />
                    </div>

                    {/* ==================================================
                        Title
                    ================================================== */}

                    <h2
                        className="
                            text-xl
                            font-bold
                            leading-tight
                            text-slate-900

                            sm:text-2xl
                        "
                    >
                        Verifying Your Account
                    </h2>

                    {/* ==================================================
                        Description
                    ================================================== */}

                    <p
                        className="
                            mt-2
                            max-w-sm
                            text-sm
                            leading-6
                            text-slate-600
                        "
                    >
                        Please wait while we verify
                        your account and registration
                        status.
                    </p>

                    {/* ==================================================
                        Loader
                    ================================================== */}

                    <Loader2
                        className="
                            mt-7
                            h-7
                            w-7
                            animate-spin
                            text-blue-600

                            sm:mt-8
                            sm:h-8
                            sm:w-8
                        "
                    />

                    {/* ==================================================
                        Status
                    ================================================== */}

                    <p
                        className="
                            mt-3
                            text-xs
                            text-slate-500

                            sm:mt-4
                            sm:text-sm
                        "
                    >
                        This will only take a few
                        seconds...
                    </p>
                </div>
            </div>
        </div>
    );
}