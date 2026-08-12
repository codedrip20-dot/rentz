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
        <div className="space-y-6 sm:space-y-8">

            {/* Header */}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div className="min-w-0">

                    <div className="flex items-start gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 sm:h-12 sm:w-12 sm:rounded-2xl">
                            <ChefHat className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">

                            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                                Kitchen Access
                            </h3>

                            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                                Specify the type of kitchen access available to
                                tenants for this room.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="w-fit shrink-0 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">

                    <span className="text-xs font-semibold tracking-wide text-blue-700">
                        REQUIRED
                    </span>

                </div>

            </div>

            {/* Options */}

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">

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
                                rounded-2xl
                                border
                                bg-white
                                p-5
                                text-left
                                transition-all
                                duration-300
                                active:scale-[0.99]
                                sm:rounded-[28px]
                                sm:p-7

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
                                            : "bg-gradient-to-br from-slate-50 via-white to-blue-50 opacity-0 group-hover:opacity-100"
                                    }
                                `}
                            />

                            <div className="relative z-10">

                                {/* Top */}

                                <div className="flex items-start justify-between gap-4">

                                    <div
                                        className={`
                                            flex
                                            h-14
                                            w-14
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-xl
                                            transition-all
                                            sm:h-16
                                            sm:w-16
                                            sm:rounded-2xl

                                            ${
                                                selected
                                                    ? "bg-blue-600 text-white shadow-lg"
                                                    : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                                            }
                                        `}
                                    >
                                        <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                                    </div>

                                    {selected && (

                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg sm:h-10 sm:w-10">

                                            <CheckCircle2 className="h-5 w-5" />

                                        </div>

                                    )}

                                </div>

                                {/* Content */}

                                <div className="mt-6 sm:mt-7">

                                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">

                                        <h4 className="text-lg font-bold text-slate-900 sm:text-xl">
                                            {option.title}
                                        </h4>

                                        <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-600 sm:text-[11px]">
                                            {option.badge}
                                        </span>

                                    </div>

                                    <p className="mt-4 text-sm leading-6 text-slate-500">
                                        {option.description}
                                    </p>

                                </div>

                                {/* Footer */}

                                <div className="mt-6 border-t border-slate-100 pt-4 sm:mt-8 sm:pt-5">

                                    <div className="flex items-center justify-between gap-3">

                                        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:text-xs sm:tracking-[0.2em]">
                                            Kitchen Type
                                        </span>

                                        <span
                                            className={`
                                                shrink-0
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

            <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-4 sm:rounded-3xl sm:p-7">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 sm:h-14 sm:w-14 sm:rounded-2xl">

                        <Sparkles className="h-6 w-6 sm:h-7 sm:w-7" />

                    </div>

                    <div className="min-w-0">

                        <h4 className="text-base font-semibold text-slate-900">
                            Why kitchen access matters
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-slate-600 sm:leading-7">
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