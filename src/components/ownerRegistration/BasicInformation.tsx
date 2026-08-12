"use client";

import { UserCircle2 } from "lucide-react";

interface BasicInformationProps {
    children?: React.ReactNode;
}

export default function BasicInformation({
    children,
}: BasicInformationProps) {
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
                    max-w-4xl
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-lg

                    sm:rounded-3xl
                "
            >
                {/* ==================================================
                    Header
                ================================================== */}

                <div
                    className="
                        border-b
                        border-slate-200
                        px-5
                        py-5

                        sm:px-8
                        sm:py-6
                    "
                >
                    <div
                        className="
                            flex
                            items-start
                            gap-3

                            sm:items-center
                            sm:gap-4
                        "
                    >
                        {/* Icon */}

                        <div
                            className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-blue-100

                                sm:h-14
                                sm:w-14
                            "
                        >
                            <UserCircle2
                                className="
                                    h-6
                                    w-6
                                    text-blue-600

                                    sm:h-7
                                    sm:w-7
                                "
                            />
                        </div>

                        {/* Heading */}

                        <div className="min-w-0">
                            <h1
                                className="
                                    break-words
                                    text-xl
                                    font-bold
                                    leading-tight
                                    text-slate-900

                                    sm:text-2xl
                                "
                            >
                                Complete Your Basic
                                Information
                            </h1>

                            <p
                                className="
                                    mt-2
                                    max-w-2xl
                                    text-sm
                                    leading-6
                                    text-slate-600
                                "
                            >
                                Before registering as a
                                property owner, please
                                complete your personal
                                information.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ==================================================
                    Content
                ================================================== */}

                <div
                    className="
                        p-5

                        sm:p-8
                    "
                >
                    {children}
                </div>
            </div>
        </div>
    );
}