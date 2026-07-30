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
        <div className="space-y-8">

            {/* Header */}

            <div className="flex items-start justify-between">

                <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600">

                        <Armchair className="h-6 w-6" />

                    </div>

                    <div>

                        <h3 className="text-xl font-bold text-slate-900">
                            Furnishing Level
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                            Let tenants know how furnished this room is before
                            they move in. Clear furnishing information helps
                            renters know exactly what to expect.
                        </p>

                    </div>

                </div>

                <div className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2">

                    <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                        Required
                    </span>

                </div>

            </div>

            {/* Furnishing Cards */}

            <div className="grid gap-6 lg:grid-cols-3">

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

                                        <h4 className="text-xl font-bold text-slate-900">
                                            {option.title}
                                        </h4>

                                        <span className="mt-3 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                            {option.subtitle}
                                        </span>

                                        <p className="mt-5 text-sm leading-7 text-slate-500">
                                            {option.description}
                                        </p>

                                    </div>

                                    {/* Footer */}

                                    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">

                                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                            Furnishing
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

                        <Sparkles className="h-7 w-7" />

                    </div>

                    <div>

                        <h4 className="text-base font-semibold text-slate-900">
                            Why furnishing matters
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-slate-600">
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