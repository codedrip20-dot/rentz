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
        <div className="flex min-h-[70vh] items-center justify-center px-6">
            <div className="w-full max-w-lg rounded-2xl border border-red-200 bg-white p-8 shadow-lg">

                <div className="flex flex-col items-center text-center">

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                        <AlertTriangle className="h-8 w-8 text-red-600" />
                    </div>

                    <h1 className="text-2xl font-bold text-slate-900">
                        {title}
                    </h1>

                    <p className="mt-4 text-slate-600 leading-7">
                        {message}
                    </p>

                </div>

            </div>
        </div>
    );
}