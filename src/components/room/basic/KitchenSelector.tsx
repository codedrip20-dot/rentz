"use client";

import {
    CheckCircle2,
    CookingPot,
    Home,
    Users,
    ChefHat,
    Sparkles,
} from "lucide-react";

import { useRoomWizard } from "@/hooks/useRoomWizard";
import { KitchenType } from "@/types/roomTypes";

const kitchenOptions: Record<
    KitchenType,
    {
        title: string;
        description: string;
        badge: string;
        icon: React.ElementType;
    }
> = {
    none: {
        title: "No Kitchen",
        description:
            "This room doesn't include access to any kitchen facilities.",
        badge: "Essential",
        icon: CookingPot,
    },

    shared: {
        title: "Shared Kitchen",
        description:
            "Kitchen facilities are shared with other residents in the property.",
        badge: "Most Popular",
        icon: Users,
    },

    private: {
        title: "Private Kitchen",
        description:
            "A dedicated kitchen exclusively available for this room.",
        badge: "Premium",
        icon: Home,
    },
};

export default function KitchenSelector() {
    const { room, updateRoom } = useRoomWizard();

    return (
        <div className="space-y-8">

            {/* Header */}

            <div className="flex items-start justify-between">

                <div>

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                            <ChefHat className="h-5 w-5" />
                        </div>

                        <div>

                            <h3 className="text-xl font-bold text-slate-900">
                                Kitchen Access
                            </h3>

                            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                                Specify the type of kitchen access available to
                                tenants for this room.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2">

                    <span className="text-xs font-semibold tracking-wide text-blue-700">
                        REQUIRED
                    </span>

                </div>

            </div>

            {/* Options */}

            <div className="grid gap-6 lg:grid-cols-3">

                {(Object.keys(kitchenOptions) as KitchenType[]).map((type) => {

                    const option = kitchenOptions[type];
                    const Icon = option.icon;

                    const selected =
                        room.kitchen === type;

                    return (

                        <button
                            key={type}
                            type="button"
                            onClick={() =>
                                updateRoom({
                                    kitchen: type,
                                })
                            }
                            className={`
                                group
                                relative
                                overflow-hidden
                                rounded-[28px]
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

                            {/* Background Glow */}

                            <div
                                className={`
                                    absolute
                                    inset-0
                                    transition-opacity
                                    duration-300

                                    ${
                                        selected
                                            ? "bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-100"
                                            : "opacity-0 group-hover:opacity-100 bg-gradient-to-br from-slate-50 via-white to-blue-50"
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

                                        <h4 className="text-lg font-bold text-slate-900">
                                            {option.title}
                                        </h4>

                                        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                                            {option.badge}
                                        </span>

                                    </div>

                                    <p className="mt-4 text-sm leading-6 text-slate-500">
                                        {option.description}
                                    </p>

                                </div>

                                {/* Footer */}

                                <div className="mt-8 border-t border-slate-100 pt-5">

                                    <div className="flex items-center justify-between">

                                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                            Kitchen Type
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
                                            {selected ? "Selected" : "Choose"}
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </button>

                    );

                })}

            </div>

            {/* Information */}

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-7">

                <div className="flex items-start gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">

                        <Sparkles className="h-7 w-7" />

                    </div>

                    <div>

                        <h4 className="text-base font-semibold text-slate-900">
                            Why kitchen access matters
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-slate-600">
                            Kitchen availability is one of the most important
                            filters tenants use when searching for accommodation.
                            Clearly specifying whether the kitchen is private,
                            shared, or unavailable helps renters make informed
                            decisions and improves the quality of your listing.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}