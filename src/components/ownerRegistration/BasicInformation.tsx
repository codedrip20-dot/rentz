"use client";

import { UserCircle2 } from "lucide-react";

interface BasicInformationProps {
    children?: React.ReactNode;
}

export default function BasicInformation({
    children,
}: BasicInformationProps) {
    return (
        <div className="flex min-h-[70vh] items-center justify-center px-6">
            <div className="w-full max-w-4xl rounded-2xl border border-slate-200 bg-white shadow-lg">

                <div className="border-b border-slate-200 px-8 py-6">

                    <div className="flex items-center gap-4">

                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                            <UserCircle2 className="h-7 w-7 text-blue-600" />
                        </div>

                        <div>
                            <h1 className="text-2xl font-bold text-slate-900">
                                Complete Your Basic Information
                            </h1>

                            <p className="mt-1 text-sm text-slate-600">
                                Before registering as a property owner, please
                                complete your personal information.
                            </p>
                        </div>

                    </div>

                </div>

                <div className="p-8">

                    {children}

                </div>

            </div>
        </div>
    );
}