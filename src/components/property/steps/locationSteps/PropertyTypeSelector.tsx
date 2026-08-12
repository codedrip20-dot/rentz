"use client";

import { motion } from "framer-motion";
import {
    Building,
    Building2,
    CheckCircle2,
    Home,
    Hotel,
    Landmark,
    Store,
    Trees,
    Warehouse,
} from "lucide-react";

import { usePropertyWizard } from "@/context/PropertyWizardContext";
import { PropertyType } from "@/types/property";

const propertyTypes: {
    label: PropertyType;
    icon: React.ElementType;
}[] = [
    {
        label: "Apartment",
        icon: Building2,
    },
    {
        label: "House",
        icon: Home,
    },
    {
        label: "Villa",
        icon: Landmark,
    },
    {
        label: "Hostel",
        icon: Hotel,
    },
    {
        label: "Commercial",
        icon: Building,
    },
    {
        label: "Office",
        icon: Store,
    },
    {
        label: "Warehouse",
        icon: Warehouse,
    },
    {
        label: "Land",
        icon: Trees,
    },
];

const PropertyTypeSelector = () => {
    const {
        propertyData,
        setPropertyData,
        validation,
    } = usePropertyWizard();

    const handleSelect = (
        propertyType: PropertyType
    ) => {
        setPropertyData((prev) => ({
            ...prev,

            propertyType,

            draftProgress: {
                ...prev.draftProgress,
                location: true,
            },
        }));
    };

    return (
        <section className="w-full space-y-6 sm:space-y-8">
            <div>
                <h2
                    className="
                        text-lg
                        font-semibold
                        text-slate-900

                        sm:text-xl
                    "
                >
                    Property Type
                </h2>

                <p
                    className="
                        mt-1
                        max-w-2xl
                        text-sm
                        leading-6
                        text-slate-500
                    "
                >
                    Select the type of property you
                    want to list on Rentz.
                </p>
            </div>

            <div
                className="
                    grid
                    grid-cols-2
                    gap-3

                    min-[400px]:gap-4
                    sm:gap-5

                    md:grid-cols-4
                "
            >
                {propertyTypes.map((property) => {
                    const Icon = property.icon;

                    const selected =
                        propertyData.propertyType ===
                        property.label;

                    return (
                        <motion.button
                            key={property.label}
                            type="button"
                            whileHover={{
                                y: -4,
                            }}
                            whileTap={{
                                scale: 0.98,
                            }}
                            onClick={() =>
                                handleSelect(
                                    property.label
                                )
                            }
                            aria-pressed={selected}
                            className={`
                                relative
                                flex
                                min-h-[150px]
                                flex-col
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-2xl
                                border
                                p-4
                                transition-all
                                duration-300

                                min-[400px]:min-h-[160px]
                                min-[400px]:p-5

                                sm:min-h-[175px]
                                sm:p-6

                                ${
                                    selected
                                        ? `
                                            border-blue-600
                                            bg-gradient-to-br
                                            from-blue-50
                                            to-cyan-50
                                            shadow-lg
                                            shadow-blue-100
                                        `
                                        : `
                                            border-slate-200
                                            bg-white
                                            hover:border-blue-400
                                            hover:bg-slate-50
                                            hover:shadow-md
                                        `
                                }
                            `}
                        >
                            {selected && (
                                <CheckCircle2
                                    size={20}
                                    className="
                                        absolute
                                        right-2.5
                                        top-2.5
                                        text-blue-600

                                        sm:right-3
                                        sm:top-3
                                        sm:h-[22px]
                                        sm:w-[22px]
                                    "
                                />
                            )}

                            <div
                                className={`
                                    mb-3
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    transition-all
                                    duration-300

                                    min-[400px]:h-14
                                    min-[400px]:w-14

                                    sm:mb-4
                                    sm:h-16
                                    sm:w-16

                                    ${
                                        selected
                                            ? `
                                                bg-blue-600
                                                text-white
                                            `
                                            : `
                                                bg-slate-100
                                                text-slate-500
                                            `
                                    }
                                `}
                            >
                                <Icon
                                    size={28}
                                    className="
                                        min-[400px]:h-[30px]
                                        min-[400px]:w-[30px]

                                        sm:h-[34px]
                                        sm:w-[34px]
                                    "
                                />
                            </div>

                            <p
                                className={`
                                    text-center
                                    text-sm
                                    font-semibold
                                    leading-5
                                    transition-colors

                                    sm:text-base

                                    ${
                                        selected
                                            ? `
                                                text-blue-700
                                            `
                                            : `
                                                text-slate-700
                                            `
                                    }
                                `}
                            >
                                {property.label}
                            </p>
                        </motion.button>
                    );
                })}
            </div>

            {validation.errors.propertyType && (
                <motion.p
                    initial={{
                        opacity: 0,
                        y: -5,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    className="
                        text-sm
                        font-medium
                        leading-5
                        text-red-500
                    "
                >
                    {validation.errors.propertyType}
                </motion.p>
            )}
        </section>
    );
};

export default PropertyTypeSelector;