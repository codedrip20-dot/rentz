"use client";

import {
    ArrowUpRight,
    BadgeCheck,
    CalendarDays,
    CreditCard,
} from "lucide-react";

const SubscriptionCard = () => {
    return (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                {/* Left Section */}
                <div>
                    <div className="flex items-center gap-2">
                        <BadgeCheck className="h-6 w-6 text-blue-600" />

                        <h2 className="text-xl font-bold text-slate-900">
                            Subscription
                        </h2>
                    </div>

                    <p className="mt-2 text-sm text-slate-500">
                        Manage your current plan and billing information.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <div className="rounded-2xl bg-slate-50 px-4 py-3">
                            <p className="text-xs text-slate-500">
                                Current Plan
                            </p>

                            <p className="mt-1 font-semibold text-slate-900">
                                Basic
                            </p>
                        </div>

                        <div className="rounded-2xl bg-slate-50 px-4 py-3">
                            <p className="text-xs text-slate-500">
                                Property Limit
                            </p>

                            <p className="mt-1 font-semibold text-slate-900">
                                1 Property
                            </p>
                        </div>

                        <div className="rounded-2xl bg-slate-50 px-4 py-3">
                            <p className="text-xs text-slate-500">
                                Status
                            </p>

                            <p className="mt-1 font-semibold text-green-600">
                                Active
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full max-w-sm rounded-2xl border border-blue-100 bg-blue-50 p-5">
                    <div className="flex items-center gap-2">
                        <CalendarDays className="h-5 w-5 text-blue-600" />

                        <p className="font-semibold text-slate-900">
                            Next Billing
                        </p>
                    </div>

                    <p className="mt-3 text-sm text-slate-600">
                        Your subscription renews on
                    </p>

                    <p className="mt-1 text-lg font-bold text-slate-900">
                        15 August 2026
                    </p>

                    <button
                        type="button"
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                        <CreditCard className="h-4 w-4" />
                        Manage Subscription
                        <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SubscriptionCard;