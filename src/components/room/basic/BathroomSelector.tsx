"use client";

import {
    CheckCircle2,
    DoorClosed,
    Users,
    ShieldCheck,
} from "lucide-react";

import { useRoomWizard } from "@/hooks/useRoomWizard";
import { BathroomType } from "@/types/roomTypes";

const bathroomOptions: Record<
    BathroomType,
    {
        title: string;
        description: string;
        highlight: string;
        icon: React.ElementType;
    }
> = {
    private: {
        title: "Private Bathroom",
        description:
            "Reserved exclusively for occupants of this room.",
        highlight: "Best for privacy",
        icon: DoorClosed,
    },

    shared: {
        title: "Shared Bathroom",
        description:
            "Shared with occupants from other rooms within the property.",
        highlight: "Budget friendly",
        icon: Users,
    },
};

export default function BathroomSelector() {
    const { room, updateRoom } = useRoomWizard();

    return (
        <div className="space-y-8">

            {/* Header */}

            <div className="flex items-start justify-between">

                <div className="space-y-2">

                    <h3 className="text-lg font-semibold text-slate-900">
                        Bathroom Access
                    </h3>

                    <p className="max-w-2xl text-sm leading-6 text-slate-500">
                        Let tenants know whether theyll have exclusive access
                        to a bathroom or share it with other residents.
                    </p>

                </div>

                <div className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
                    <span className="text-xs font-semibold text-blue-700">
                        Required
                    </span>
                </div>

            </div>

            {/* Cards */}

            <div className="grid gap-6 lg:grid-cols-2">

                {(Object.keys(bathroomOptions) as BathroomType[]).map((type) => {

                    const option = bathroomOptions[type];
                    const Icon = option.icon;

                    const selected =
                        room.bathroomType === type;

                    return (

                        <button
                            key={type}
                            type="button"
                            onClick={() =>
                                updateRoom({
                                    bathroomType: type,
                                })
                            }
                            className={`
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                bg-white
                                p-7
                                text-left
                                transition-all
                                duration-300

                                ${
                                    selected
                                        ? "border-blue-600 bg-gradient-to-br from-blue-50 via-white to-white shadow-xl ring-2 ring-blue-100"
                                        : "border-slate-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                                }
                            `}
                        >

                            {/* Selected Badge */}

                            {selected && (
                                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">

                                    <CheckCircle2 className="h-4 w-4" />

                                    Selected

                                </div>
                            )}

                            {/* Icon */}

                            <div
                                className={`
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    transition-all
                                    duration-300

                                    ${
                                        selected
                                            ? "bg-blue-600 text-white"
                                            : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                                    }
                                `}
                            >
                                <Icon className="h-8 w-8" />
                            </div>

                            {/* Content */}

                            <div className="mt-7 space-y-3">

                                <div className="flex items-center gap-3">

                                    <h4 className="text-lg font-semibold text-slate-900">
                                        {option.title}
                                    </h4>

                                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                                        {option.highlight}
                                    </span>

                                </div>

                                <p className="text-sm leading-6 text-slate-500">
                                    {option.description}
                                </p>

                            </div>

                            {/* Footer */}

                            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4">

                                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                                    Bathroom Type
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
                                    {selected ? "Active" : "Select"}
                                </span>

                            </div>

                        </button>

                    );
                })}

            </div>

            {/* Information Card */}

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-6">

                <div className="flex items-start gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">

                        <ShieldCheck className="h-7 w-7" />

                    </div>

                    <div>

                        <h4 className="text-base font-semibold text-slate-900">
                            Why does this matter?
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            Bathroom access is one of the first filters tenants
                            consider when comparing rooms. Providing accurate
                            information builds trust and helps prospective
                            tenants find the accommodation that best matches
                            their expectations.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}