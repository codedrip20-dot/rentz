"use client";

import { ChangeEvent } from "react";

import InputField from "@/components/ui/InputField";
import { usePropertyWizard } from "@/context/PropertyWizardContext";

export default function AreaSection() {

    const {
        propertyData,
        updateProperty,
        validation,
    } = usePropertyWizard();

    const handleBuiltUpAreaChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {

        const builtUpArea =
            Number(event.target.value);

        updateProperty((previous) => ({

            ...previous,

            details: {

                ...previous.details,

                builtUpArea,

            },

        }));

    };

    const handleCarpetAreaChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {

        const carpetArea =
            Number(event.target.value);

        updateProperty((previous) => ({

            ...previous,

            details: {

                ...previous.details,

                carpetArea,

            },

        }));

    };

    return (

        <section className="space-y-4">

            <h3
                className="
                    text-lg
                    font-semibold
                    text-slate-900
                "
            >
                Property Area
            </h3>

            <div
                className="
                    grid
                    gap-4
                    md:grid-cols-2
                "
            >

                <InputField
                    id="built-up-area"
                    label="Built-up Area (sq ft)"
                    type="number"
                    min={0}
                    placeholder="e.g. 1200"
                    value={
                        propertyData.details.builtUpArea || ""
                    }
                    onChange={
                        handleBuiltUpAreaChange
                    }
                    error={
                        validation.errors.builtUpArea
                    }
                    helperText="
                        Total constructed area including walls and balconies.
                    "
                    required
                />

                <InputField
                    id="carpet-area"
                    label="Carpet Area (sq ft)"
                    type="number"
                    min={0}
                    placeholder="e.g. 950"
                    value={
                        propertyData.details.carpetArea || ""
                    }
                    onChange={
                        handleCarpetAreaChange
                    }
                    error={
                        validation.errors.carpetArea
                    }
                    helperText="
                        Usable floor area inside the property.
                    "
                    required
                />

            </div>

        </section>

    );

}