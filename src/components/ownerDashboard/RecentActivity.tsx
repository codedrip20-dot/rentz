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
        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-6">

            {/* Header */}

            <div className="mb-6 flex items-start justify-between gap-4 sm:mb-8">

                <div className="min-w-0">

                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                        Recent Activity
                    </h2>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                        Track the latest updates to your account.
                    </p>

                </div>

                <button
                    type="button"
                    className="
                        flex
                        shrink-0
                        items-center
                        gap-1
                        text-xs
                        font-medium
                        text-blue-600
                        transition-colors
                        hover:text-blue-700
                        sm:gap-2
                        sm:text-sm
                    "
                >
                    View All

                    <ArrowRight className="h-4 w-4" />
                </button>

            </div>

            {/* Activities */}

            <div className="space-y-5 sm:space-y-6">

                {activities.map((activity) => {

                    const Icon = activity.icon;

                    return (
                        <div
                            key={activity.id}
                            className="flex items-start gap-3 sm:gap-4"
                        >

                            {/* Icon */}

                            <div
                                className={`
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    sm:h-12
                                    sm:w-12
                                    sm:rounded-2xl
                                    ${activity.iconBg}
                                `}
                            >
                                <Icon
                                    className={`
                                        h-5
                                        w-5
                                        sm:h-6
                                        sm:w-6
                                        ${activity.iconColor}
                                    `}
                                />
                            </div>

                            {/* Content */}

                            <div className="min-w-0 flex-1">

                                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">

                                    <h3 className="min-w-0 text-sm font-semibold leading-5 text-slate-900 sm:text-base">
                                        {activity.title}
                                    </h3>

                                    <span className="shrink-0 text-[11px] text-slate-400 sm:text-xs">
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