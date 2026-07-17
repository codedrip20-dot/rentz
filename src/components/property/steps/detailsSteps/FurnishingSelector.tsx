"use client";

import RadioCard from "@/components/ui/RadioCard";
import { usePropertyWizard } from "@/context/PropertyWizardContext";
import { FurnishingType } from "@/types/property";

const FURNISHING_OPTIONS: {
    title: FurnishingType;
    description: string;
}[] = [
    {
        title: "Unfurnished",
        description:
            "No furniture or appliances included.",
    },
    {
        title: "Semi Furnished",
        description:
            "Includes essential fixtures and basic furnishings.",
    },
    {
        title: "Fully Furnished",
        description:
            "Ready to move in with complete furniture and appliances.",
    },
];

export default function FurnishingSelector() {

    const {
        propertyData,
        updateProperty,
        validation,
    } = usePropertyWizard();

    const handleChange = (
        furnishing: FurnishingType
    ) => {

        updateProperty((previous) => ({

            ...previous,

            details: {

                ...previous.details,

                furnishing,

            },

        }));

    };

    return (

        <section className="space-y-4">

            <div>

                <h3
                    className="
                        text-lg
                        font-semibold
                        text-slate-900
                    "
                >
                    Furnishing
                </h3>

                <p
                    className="
                        mt-1
                        text-sm
                        text-slate-500
                    "
                >
                    Select the furnishing status of your property.
                </p>

            </div>

            <div
                className="
                    grid
                    gap-4
                    md:grid-cols-3
                "
            >

                {FURNISHING_OPTIONS.map((option) => (

                    <RadioCard
                        key={option.title}
                        title={option.title}
                        description={option.description}
                        selected={
                            propertyData.details.furnishing ===
                            option.title
                        }
                        onClick={() =>
                            handleChange(option.title)
                        }
                    />

                ))}

            </div>

            {validation.errors.furnishing && (

                <p
                    className="
                        text-sm
                        text-red-600
                    "
                >
                    {validation.errors.furnishing}
                </p>

            )}

        </section>

    );

}