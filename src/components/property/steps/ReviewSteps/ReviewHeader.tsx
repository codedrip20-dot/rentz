"use client";

import { CheckCircle2 } from "lucide-react";

export default function ReviewHeader() {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                </div>

                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Review Your Property
                    </h2>

                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                        Carefully review all the information below before
                        publishing your property. You can go back to any
                        previous step to make changes. Once everything looks
                        correct, click <span className="font-semibold text-slate-900">Finish</span> to
                        create your property listing.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                        <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                            Final Step
                        </div>

                        <div className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                            Review Before Publishing
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}