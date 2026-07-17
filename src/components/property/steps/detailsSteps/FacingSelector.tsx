"use client";

import RadioCard from "@/components/ui/RadioCard";
import { usePropertyWizard } from "@/context/PropertyWizardContext";

const FACING_OPTIONS = [
    "North",
    "North-East",
    "East",
    "South-East",
    "South",
    "South-West",
    "West",
    "North-West",
] as const;

export default function FacingSelector() {

    const {
        propertyData,
        updateProperty,
        validation,
    } = usePropertyWizard();

    const handleChange = (
        facing: string
    ) => {

        updateProperty((previous) => ({

            ...previous,

            details: {

                ...previous.details,

                facing,

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
                    Property Facing
                </h3>

                <p
                    className="
                        mt-1
                        text-sm
                        text-slate-500
                    "
                >
                    Select the direction your propertys
                    main entrance faces.
                </p>

            </div>

            <div
                className="
                    grid
                    gap-4
                    grid-cols-2
                    lg:grid-cols-4
                "
            >

                {FACING_OPTIONS.map((option) => (

                    <RadioCard
                        key={option}
                        title={option}
                        selected={
                            propertyData.details.facing === option
                        }
                        onClick={() =>
                            handleChange(option)
                        }
                    />

                ))}

            </div>

            {validation.errors.facing && (

                <p
                    className="
                        text-sm
                        text-red-600
                    "
                >
                    {validation.errors.facing}
                </p>

            )}

        </section>

    );

}