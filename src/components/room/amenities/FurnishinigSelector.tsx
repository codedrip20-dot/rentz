"use client";

import {
    Armchair,
    CheckCircle2,
    Home,
    Sofa,
    Sparkles,
} from "lucide-react";

import { useRoomWizard } from "@/context/RoomWizardContext";

import type { FurnishingType } from "@/types/roomTypes";

const furnishingOptions: {
    value: FurnishingType;
    title: string;
    description: string;
    icon: React.ElementType;
    features: string[];
    badge: string;
}[] = [
    {
        value: "unfurnished",
        title: "Unfurnished",
        description:
            "An empty room that allows tenants to furnish the space according to their own preferences.",
        icon: Home,
        badge: "Budget Friendly",
        features: [
            "Empty Room",
            "Personal Setup",
            "Lower Rent",
        ],
    },
    {
        value: "semi-furnished",
        title: "Semi Furnished",
        description:
            "Includes essential furniture while leaving flexibility for tenants to personalize the room.",
        icon: Armchair,
        badge: "Most Popular",
        features: [
            "Bed",
            "Wardrobe",
            "Study Area",
        ],
    },
    {
        value: "fully-furnished",
        title: "Fully Furnished",
        description:
            "Move-in ready with furniture and everyday essentials for maximum convenience.",
        icon: Sofa,
        badge: "Premium",
        features: [
            "Furniture",
            "Appliances",
            "Ready to Move In",
        ],
    },
];

const FurnishingSelector = () => {
    const {
        room,
        updateRoom,
    } = useRoomWizard();

    const selected = room.furnishing;

    const handleSelect = (
        furnishing: FurnishingType
    ) => {
        updateRoom({
            furnishing,
        });
    };

    return (
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl">

            {/* Header */}
            <div className="border-b border-slate-100 bg-gradient-to-r from-violet-50 via-white to-indigo-50 px-4 py-5 sm:px-5 sm:py-6 md:px-6">

                <div className="space-y-2">

                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                        Furnishing Level
                    </h3>

                    <p className="max-w-3xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                        Tell tenants how the room is furnished. A clear
                        furnishing level helps set expectations before they even
                        visit your property.
                    </p>

                </div>

            </div>

            {/* Cards */}
            <div className="grid gap-4 p-4 sm:gap-5 sm:p-5 md:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">

                {furnishingOptions.map((option) => {
                    const Icon = option.icon;

                    const active =
                        selected === option.value;

                    return (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() =>
                                handleSelect(option.value)
                            }
                            className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 sm:rounded-3xl sm:p-5 md:p-6 ${
                                active
                                    ? "border-blue-500 bg-gradient-to-br from-blue-50 via-white to-indigo-50 shadow-xl shadow-blue-500/10"
                                    : "border-slate-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                            }`}
                        >

                            {/* Background */}
                            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-100/20 blur-2xl sm:-right-10 sm:-top-10 sm:h-28 sm:w-28" />

                            {/* Selected */}
                            {active && (
                                <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
                                    <CheckCircle2 className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />
                                </div>
                            )}

                            {/* Badge */}
                            <span
                                className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold sm:px-3 sm:text-xs ${
                                    active
                                        ? "bg-blue-100 text-blue-700"
                                        : "bg-slate-100 text-slate-600"
                                }`}
                            >
                                {option.badge}
                            </span>

                            {/* Icon */}
                            <div
                                className={`mt-4 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 sm:mt-5 sm:h-16 sm:w-16 sm:rounded-2xl ${
                                    active
                                        ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
                                        : "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600"
                                }`}
                            >
                                <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                            </div>

                            {/* Title */}
                            <h4 className="mt-5 text-lg font-bold text-slate-900 sm:mt-6 sm:text-xl">
                                {option.title}
                            </h4>

                            {/* Description */}
                            <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">
                                {option.description}
                            </p>

                            {/* Features */}
                            <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">

                                {option.features.map((feature) => (
                                    <span
                                        key={feature}
                                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-700 sm:px-3 sm:text-xs"
                                    >
                                        {feature}
                                    </span>
                                ))}

                            </div>

                            {/* Footer */}
                            <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 sm:mt-8 sm:pt-5">

                                <span
                                    className={`text-xs font-semibold sm:text-sm ${
                                        active
                                            ? "text-blue-700"
                                            : "text-slate-500"
                                    }`}
                                >
                                    {active
                                        ? "Currently Selected"
                                        : "Click to Select"}
                                </span>

                                <Sparkles
                                    className={`h-4 w-4 shrink-0 sm:h-5 sm:w-5 ${
                                        active
                                            ? "text-blue-600"
                                            : "text-slate-300"
                                    }`}
                                />

                            </div>

                        </button>
                    );
                })}

            </div>

            {/* Recommendation */}
            <div className="border-t border-slate-100 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 px-4 py-4 sm:px-5 sm:py-5 md:px-6">

                <div className="flex items-start gap-3 sm:gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700 sm:h-11 sm:w-11 sm:rounded-2xl">
                        <Sparkles className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">

                        <h4 className="text-sm font-semibold text-amber-900 sm:text-base">
                            Recommendation
                        </h4>

                        <p className="mt-1.5 text-xs leading-5 text-amber-800 sm:mt-2 sm:text-sm sm:leading-6">
                            Select the furnishing option that best represents
                            your room. Accurate furnishing details create better
                            tenant expectations, improve listing quality, and
                            reduce unnecessary inquiries or misunderstandings.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default FurnishingSelector;