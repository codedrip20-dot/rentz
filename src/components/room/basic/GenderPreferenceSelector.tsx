"use client";

import {
    CheckCircle2,
    ShieldCheck,
    User,
    UserRound,
    Users,
} from "lucide-react";

import { useRoomWizard } from "@/hooks/useRoomWizard";
import { GenderPreference } from "@/types/roomTypes";

const genderOptions: Record<
    GenderPreference,
    {
        title: string;
        subtitle: string;
        description: string;
        badge: string;
        icon: React.ElementType;
    }
> = {
    male: {
        title: "Male Only",
        subtitle: "For Men",
        description:
            "Only male tenants will be able to view and request this room.",
        badge: "Restricted",
        icon: User,
    },

    female: {
        title: "Female Only",
        subtitle: "For Women",
        description:
            "Only female tenants will be able to view and request this room.",
        badge: "Restricted",
        icon: UserRound,
    },

    any: {
        title: "Open to Everyone",
        subtitle: "Any Gender",
        description:
            "The room is available to all tenants without gender restrictions.",
        badge: "Recommended",
        icon: Users,
    },
};

export default function GenderPreferenceSelector() {
    const { room, updateRoom } = useRoomWizard();

    return (
        <div className="space-y-8">

            {/* Header */}

            <div className="flex items-start justify-between">

                <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 via-blue-50 to-white text-blue-600 shadow-sm">

                        <ShieldCheck className="h-6 w-6" />

                    </div>

                    <div>

                        <h3 className="text-xl font-bold text-slate-900">
                            Tenant Preference
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                            Choose who this room is intended for. This helps
                            tenants discover rooms that match your rental
                            requirements.
                        </p>

                    </div>

                </div>

                <div className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2">

                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                        Required
                    </span>

                </div>

            </div>

            {/* Cards */}

            <div className="grid gap-6 lg:grid-cols-3">

                {(Object.keys(genderOptions) as GenderPreference[]).map(
                    (type) => {

                        const option = genderOptions[type];
                        const Icon = option.icon;

                        const selected =
                            room.genderPreference === type;

                        return (

                            <button
                                key={type}
                                type="button"
                                onClick={() =>
                                    updateRoom({
                                        genderPreference: type,
                                    })
                                }
                                className={`
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[30px]
                                    border
                                    bg-white
                                    p-7
                                    text-left
                                    transition-all
                                    duration-300

                                    ${
                                        selected
                                            ? "border-blue-600 shadow-2xl ring-4 ring-blue-100"
                                            : "border-slate-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                                    }
                                `}
                            >

                                {/* Background */}

                                <div
                                    className={`
                                        absolute
                                        inset-0
                                        transition-opacity

                                        ${
                                            selected
                                                ? "bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-100"
                                                : "bg-gradient-to-br from-white via-white to-slate-50 opacity-0 group-hover:opacity-100"
                                        }
                                    `}
                                />

                                <div className="relative z-10">

                                    {/* Top */}

                                    <div className="flex items-start justify-between">

                                        <div
                                            className={`
                                                flex
                                                h-16
                                                w-16
                                                items-center
                                                justify-center
                                                rounded-2xl
                                                transition-all

                                                ${
                                                    selected
                                                        ? "bg-blue-600 text-white shadow-lg"
                                                        : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                                                }
                                            `}
                                        >

                                            <Icon className="h-8 w-8" />

                                        </div>

                                        {selected && (

                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">

                                                <CheckCircle2 className="h-5 w-5" />

                                            </div>

                                        )}

                                    </div>

                                    {/* Content */}

                                    <div className="mt-7">

                                        <div className="flex items-center gap-3">

                                            <h4 className="text-xl font-bold text-slate-900">
                                                {option.title}
                                            </h4>

                                            <span className="rounded-full bg-blue-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700">
                                                {option.badge}
                                            </span>

                                        </div>

                                        <span className="mt-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                                            {option.subtitle}
                                        </span>

                                        <p className="mt-5 text-sm leading-7 text-slate-500">
                                            {option.description}
                                        </p>

                                    </div>

                                    {/* Footer */}

                                    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">

                                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                            Tenant Type
                                        </span>

                                        <span
                                            className={`
                                                rounded-full
                                                px-3
                                                py-1
                                                text-xs
                                                font-semibold

                                                ${
                                                    selected
                                                        ? "bg-emerald-100 text-emerald-700"
                                                        : "bg-slate-100 text-slate-600"
                                                }
                                            `}
                                        >
                                            {selected ? "Selected" : "Select"}
                                        </span>

                                    </div>

                                </div>

                            </button>

                        );

                    }
                )}

            </div>

            {/* Information */}

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-7">

                <div className="flex items-start gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">

                        <ShieldCheck className="h-7 w-7" />

                    </div>

                    <div>

                        <h4 className="text-base font-semibold text-slate-900">
                            Why this information matters
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-slate-600">
                            Tenant preference helps match your listing with the
                            right audience. If there are no restrictions, select
                            <span className="font-semibold text-slate-700">
                                {" "}
                                Open to Everyone
                            </span>{" "}
                            to maximize visibility and receive inquiries from a
                            broader range of potential tenants.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}