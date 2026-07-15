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

        <section className="space-y-8">

            <div>

                <h2 className="text-xl font-semibold text-slate-900">

                    Property Type

                </h2>

                <p className="mt-1 text-sm text-slate-500">

                    Select the type of property you want
                    to list on Rentz.

                </p>

            </div>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

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
                                overflow-hidden
                                rounded-2xl
                                border
                                p-6
                                transition-all
                                duration-300
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
                                    size={22}
                                    className="
                                        absolute
                                        right-3
                                        top-3
                                        text-blue-600
                                    "
                                />

                            )}

                            <div
                                className={`
                                    mx-auto
                                    mb-4
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

                                <Icon size={34} />

                            </div>

                            <p
                                className={`
                                    text-center
                                    font-semibold
                                    transition-colors
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