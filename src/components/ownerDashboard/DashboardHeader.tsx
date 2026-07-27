"use client";

import { Bell } from "lucide-react";

const DashboardHeader = () => {
    return (
        <header className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            {/* Left Section */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                    Owner Dashboard
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                    Manage your properties, rooms, tenants and subscriptions
                    from one place.
                </p>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                {/* Notification */}
                <button
                    type="button"
                    className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:bg-slate-100"
                >
                    <Bell className="h-5 w-5 text-slate-700" />

                    <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-500" />
                </button>

                {/* Profile */}
                <button
                    type="button"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 transition-all duration-200 hover:bg-slate-100"
                >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                        U
                    </div>

                    <div className="hidden text-left md:block">
                        <p className="text-sm font-semibold text-slate-900">
                            Owner
                        </p>

                        <p className="text-xs text-slate-500">
                            Basic Plan
                        </p>
                    </div>
                </button>
            </div>
        </header>
    );
};

export default DashboardHeader;