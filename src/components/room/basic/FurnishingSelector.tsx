"use client";

import {
    Armchair,
    Bed,
    CheckCircle2,
    Home,
    Sofa,
    Sparkles,
} from "lucide-react";

import { useRoomWizard } from "@/hooks/useRoomWizard";
import { FurnishingType } from "@/types/roomTypes";

const furnishingOptions: Record<
    FurnishingType,
    {
        title: string;
        description: string;
        subtitle: string;
        icon: React.ElementType;
    }
> = {
    unfurnished: {
        title: "Unfurnished",
        subtitle: "Customize Yourself",
        description:
            "Ideal for tenants who prefer bringing their own furniture and designing the space according to their lifestyle.",
        icon: Home,
    },

    "semi-furnished": {
        title: "Semi Furnished",
        subtitle: "Ready to Move",
        description:
            "Includes essential furniture and fixtures such as wardrobes, lights, fans, and other basic fittings for everyday living.",
        icon: Bed,
    },

    "fully-furnished": {
        title: "Fully Furnished",
        subtitle: "Move-In Ready",
        description:
            "Complete furniture and essential appliances are provided for a hassle-free move-in experience.",
        icon: Sofa,
    },
};

export default function FurnishingSelector() {
    const { room, updateRoom } = useRoomWizard();

    return (
        <div className="space-y-6 sm:space-y-8">

            {/* Header */}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div className="flex min-w-0 items-start gap-3 sm:gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 sm:h-12 sm:w-12 sm:rounded-2xl">

                        <Armchair className="h-5 w-5 sm:h-6 sm:w-6" />

                    </div>

                    <div className="min-w-0">

                        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                            Furnishing Level
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                            Let tenants know how furnished this room is before
                            they move in. Clear furnishing information helps
                            renters know exactly what to expect.
                        </p>

                    </div>

                </div>

                <div className="w-fit shrink-0 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">

                    <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                        Required
                    </span>

                </div>

            </div>

            {/* Furnishing Cards */}

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">

                {(Object.keys(furnishingOptions) as FurnishingType[]).map(
                    (type) => {

                        const option = furnishingOptions[type];
                        const Icon = option.icon;

                        const selected =
                            room.furnishing === type;

                        return (

                            <button
                                key={type}
                                type="button"
                                onClick={() =>
                                    updateRoom({
                                        furnishing: type,
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
                                    sm:rounded-[30px]
                                    sm:p-7

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
                                        duration-300

                                        ${
                                            selected
                                                ? "bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-100"
                                                : "bg-gradient-to-br from-white via-white to-slate-50 opacity-0 group-hover:opacity-100"
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

                                        <h4 className="text-lg font-bold text-slate-900 sm:text-xl">
                                            {option.title}
                                        </h4>

                                        <span className="mt-3 inline-flex max-w-full rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                            {option.subtitle}
                                        </span>

                                        <p className="mt-4 text-sm leading-6 text-slate-500 sm:mt-5 sm:leading-7">
                                            {option.description}
                                        </p>

                                    </div>

                                    {/* Footer */}

                                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 sm:mt-8 sm:pt-5">

                                        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:text-xs sm:tracking-[0.2em]">
                                            Furnishing
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

            <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-4 sm:rounded-3xl sm:p-7">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 sm:h-14 sm:w-14 sm:rounded-2xl">

                        <Sparkles className="h-6 w-6 sm:h-7 sm:w-7" />

                    </div>

                    <div className="min-w-0">

                        <h4 className="text-base font-semibold text-slate-900">
                            Why furnishing matters
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-slate-600 sm:leading-7">
                            Furnishing level is one of the first details tenants
                            compare while browsing listings. Clearly stating
                            whether the room is unfurnished, semi furnished, or
                            fully furnished helps set accurate expectations,
                            improves trust, and attracts tenants looking for the
                            right type of accommodation.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}