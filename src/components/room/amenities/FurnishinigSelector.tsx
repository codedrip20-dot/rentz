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
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* Header */}
            <div className="border-b border-slate-100 bg-gradient-to-r from-violet-50 via-white to-indigo-50 px-6 py-6">
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">
                        Furnishing Level
                    </h3>

                    <p className="max-w-3xl text-sm leading-6 text-slate-600">
                        Tell tenants how the room is furnished. A clear
                        furnishing level helps set expectations before they even
                        visit your property.
                    </p>
                </div>
            </div>

            {/* Cards */}
            <div className="grid gap-6 p-6 lg:grid-cols-3">
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
                            className={`group relative overflow-hidden rounded-3xl border p-6 text-left transition-all duration-300 ${
                                active
                                    ? "border-blue-500 bg-gradient-to-br from-blue-50 via-white to-indigo-50 shadow-xl shadow-blue-500/10"
                                    : "border-slate-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                            }`}
                        >
                            {/* Background */}
                            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-100/20 blur-2xl" />

                            {/* Selected */}
                            {active && (
                                <div className="absolute right-5 top-5">
                                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                                </div>
                            )}

                            {/* Badge */}
                            <span
                                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                                    active
                                        ? "bg-blue-100 text-blue-700"
                                        : "bg-slate-100 text-slate-600"
                                }`}
                            >
                                {option.badge}
                            </span>

                            {/* Icon */}
                            <div
                                className={`mt-5 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 ${
                                    active
                                        ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
                                        : "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600"
                                }`}
                            >
                                <Icon className="h-8 w-8" />
                            </div>

                            {/* Title */}
                            <h4 className="mt-6 text-xl font-bold text-slate-900">
                                {option.title}
                            </h4>

                            {/* Description */}
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                {option.description}
                            </p>

                            {/* Features */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {option.features.map((feature) => (
                                    <span
                                        key={feature}
                                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                                <span
                                    className={`text-sm font-semibold ${
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
                                    className={`h-5 w-5 ${
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
            <div className="border-t border-slate-100 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 px-6 py-5">
                <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                        <Sparkles className="h-5 w-5" />
                    </div>

                    <div>
                        <h4 className="text-base font-semibold text-amber-900">
                            Recommendation
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-amber-800">
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