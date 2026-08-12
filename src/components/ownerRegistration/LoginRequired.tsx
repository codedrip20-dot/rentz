"use client";

import Link from "next/link";
import { LogIn, ShieldAlert } from "lucide-react";

export default function LoginRequired() {
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
                    max-w-lg
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
                        Icon
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
                            bg-amber-100

                            sm:mb-6
                            sm:h-16
                            sm:w-16
                        "
                    >
                        <ShieldAlert
                            className="
                                h-7
                                w-7
                                text-amber-600

                                sm:h-8
                                sm:w-8
                            "
                        />
                    </div>

                    {/* ==================================================
                        Title
                    ================================================== */}

                    <h1
                        className="
                            text-2xl
                            font-bold
                            leading-tight
                            text-slate-900

                            sm:text-3xl
                        "
                    >
                        Login Required
                    </h1>

                    {/* ==================================================
                        Main Message
                    ================================================== */}

                    <p
                        className="
                            mt-3
                            max-w-md
                            text-sm
                            leading-6
                            text-slate-600

                            sm:mt-4
                            sm:text-base
                            sm:leading-7
                        "
                    >
                        You must first sign in with your
                        Rentz account before registering as
                        a property owner.
                    </p>

                    {/* ==================================================
                        Secondary Message
                    ================================================== */}

                    <p
                        className="
                            mt-2
                            max-w-md
                            text-xs
                            leading-5
                            text-slate-500

                            sm:text-sm
                            sm:leading-6
                        "
                    >
                        If you dont have an account yet,
                        create one first and then return
                        here to continue your owner
                        registration.
                    </p>

                    {/* ==================================================
                        Login Button
                    ================================================== */}

                    <Link
                        href="/login"
                        className="
                            mt-6
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
                            font-semibold
                            text-white
                            transition

                            active:scale-[0.98]

                            hover:bg-blue-700

                            sm:mt-8
                            sm:w-auto
                            sm:text-base
                        "
                    >
                        <LogIn className="h-5 w-5" />

                        Login to Continue
                    </Link>
                </div>
            </div>
        </div>
    );
}