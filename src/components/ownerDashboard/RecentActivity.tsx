"use client";

import {
    ArrowRight,
    Building2,
    CalendarDays,
    CheckCircle2,
    Clock3,
} from "lucide-react";

const activities = [
    {
        id: 1,
        title: "Owner account created",
        description: "Your owner account has been successfully created.",
        time: "Just now",
        icon: CheckCircle2,
        iconColor: "text-green-600",
        iconBg: "bg-green-100",
    },
    {
        id: 2,
        title: "Subscription activated",
        description: "Your Basic Plan subscription is active.",
        time: "Today",
        icon: CalendarDays,
        iconColor: "text-blue-600",
        iconBg: "bg-blue-100",
    },
    {
        id: 3,
        title: "Create your first property",
        description: "Add your first property to start managing rentals.",
        time: "Pending",
        icon: Building2,
        iconColor: "text-orange-600",
        iconBg: "bg-orange-100",
    },
    {
        id: 4,
        title: "Marketplace ready",
        description: "Your rooms will appear in the marketplace once published.",
        time: "Upcoming",
        icon: Clock3,
        iconColor: "text-purple-600",
        iconBg: "bg-purple-100",
    },
];

const RecentActivity = () => {
    return (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-slate-900">
                        Recent Activity
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Track the latest updates to your account.
                    </p>
                </div>

                <button
                    type="button"
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                >
                    View All

                    <ArrowRight className="h-4 w-4" />
                </button>
            </div>

            <div className="space-y-6">
                {activities.map((activity) => {
                    const Icon = activity.icon;

                    return (
                      
                        <div
                            key={activity.id}
                            className="flex items-start gap-4"
                        >
                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${activity.iconBg}`}
                            >
                                <Icon
                                    className={`h-6 w-6 ${activity.iconColor}`}
                                />
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-slate-900">
                                        {activity.title}
                                    </h3>

                                    <span className="text-xs text-slate-400">
                                        {activity.time}
                                    </span>
                                </div>

                                <p className="mt-1 text-sm leading-6 text-slate-500">
                                    {activity.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
      
    );
};

export default RecentActivity;