"use client";

import { AlertTriangle } from "lucide-react";

interface ErrorMessageProps {
    message: string;
    title?: string;
}

export default function ErrorMessage({
    message,
    title = "Something Went Wrong",
}: ErrorMessageProps) {
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
                    border-red-200
                    bg-white
                    p-5
                    shadow-lg

                    sm:p-8
                    sm:rounded-3xl
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
                    {/* Error Icon */}

                    <div
                        className="
                            mb-5
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-full
                            bg-red-100

                            sm:mb-6
                            sm:h-16
                            sm:w-16
                        "
                    >
                        <AlertTriangle
                            className="
                                h-7
                                w-7
                                text-red-600

                                sm:h-8
                                sm:w-8
                            "
                        />
                    </div>

                    {/* Title */}

                    <h1
                        className="
                            max-w-full
                            break-words
                            text-xl
                            font-bold
                            leading-tight
                            text-slate-900

                            sm:text-2xl
                        "
                    >
                        {title}
                    </h1>

                    {/* Message */}

                    <p
                        className="
                            mt-3
                            max-w-md
                            break-words
                            text-sm
                            leading-6
                            text-slate-600

                            sm:mt-4
                            sm:text-base
                            sm:leading-7
                        "
                    >
                        {message}
                    </p>
                </div>
            </div>
        </div>
    );
}