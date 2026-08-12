"use client";

import {
    Building2,
    ClipboardList,
    DoorOpen,
    Users,
} from "lucide-react";

import ActionCard from "./ActionCard";

const QuickActions = () => {
    return (
        <section className="space-y-4 sm:space-y-5">

            <div className="min-w-0">

                <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                    Quick Actions
                </h2>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                    Frequently used actions to manage your rental business.
                </p>

            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6">

                <ActionCard
                    title="Add Property"
                    description="Register a new property and start managing it."
                    icon={Building2}
                    onClick={() => {
                        // TODO: Navigate to Property Wizard
                    }}
                />

                <ActionCard
                    title="Manage Properties"
                    description="View, edit and organize all your properties."
                    icon={ClipboardList}
                    onClick={() => {
                        // TODO: Navigate to My Properties
                    }}
                />

                <ActionCard
                    title="Manage Rooms"
                    description="Create rooms, update availability and pricing."
                    icon={DoorOpen}
                    onClick={() => {
                        // TODO: Navigate to Room Management
                    }}
                />

                <ActionCard
                    title="View Tenants"
                    description="Manage tenants, bookings and rental history."
                    icon={Users}
                    onClick={() => {
                        // TODO: Navigate to Tenants
                    }}
                />

            </div>

        </section>
    );
};

export default QuickActions;