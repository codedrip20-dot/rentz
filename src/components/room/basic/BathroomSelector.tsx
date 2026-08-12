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
        <div className="space-y-6 sm:space-y-8">

            {/* Header */}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                <div className="min-w-0 space-y-2">

                    <h3 className="text-lg font-semibold text-slate-900">
                        Bathroom Access
                    </h3>

                    <p className="max-w-2xl text-sm leading-6 text-slate-500">
                        Let tenants know whether they'll have exclusive access
                        to a bathroom or share it with other residents.
                    </p>

                </div>

                <div className="self-start rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 sm:px-4 sm:py-2">
                    <span className="text-[11px] font-semibold text-blue-700 sm:text-xs">
                        Required
                    </span>
                </div>

            </div>

            {/* Cards */}

            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">

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
                                w-full
                                overflow-hidden
                                rounded-3xl
                                border
                                bg-white
                                p-5
                                text-left
                                transition-all
                                duration-300
                                sm:p-7

                                ${
                                    selected
                                        ? "border-blue-600 bg-gradient-to-br from-blue-50 via-white to-white shadow-xl ring-2 ring-blue-100"
                                        : "border-slate-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                                }
                            `}
                        >

                            {/* Selected Badge */}

                            {selected && (
                                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-blue-600 px-2.5 py-1 text-[11px] font-semibold text-white shadow-lg sm:right-5 sm:top-5 sm:gap-2 sm:px-3 sm:text-xs">

                                    <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />

                                    Selected

                                </div>
                            )}

                            {/* Icon */}

                            <div
                                className={`
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    transition-all
                                    duration-300
                                    sm:h-16
                                    sm:w-16

                                    ${
                                        selected
                                            ? "bg-blue-600 text-white"
                                            : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                                    }
                                `}
                            >
                                <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                            </div>

                            {/* Content */}

                            <div className="mt-6 space-y-3 sm:mt-7">

                                <div className="flex flex-wrap items-center gap-2">

                                    <h4 className="text-base font-semibold text-slate-900 sm:text-lg">
                                        {option.title}
                                    </h4>

                                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-600 sm:text-[11px]">
                                        {option.highlight}
                                    </span>

                                </div>

                                <p className="text-sm leading-6 text-slate-500">
                                    {option.description}
                                </p>

                            </div>

                            {/* Footer */}

                            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 sm:mt-8">

                                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-xs sm:tracking-widest">
                                    Bathroom Type
                                </span>

                                <span
                                    className={`
                                        rounded-full
                                        px-3
                                        py-1
                                        text-[11px]
                                        font-semibold
                                        sm:text-xs

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

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-5 sm:p-6">

                <div className="flex items-start gap-3 sm:gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 sm:h-14 sm:w-14">

                        <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7" />

                    </div>

                    <div className="min-w-0">

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