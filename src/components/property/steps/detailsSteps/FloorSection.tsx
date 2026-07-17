"use client";

import { ChangeEvent } from "react";

import InputField from "@/components/ui/InputField";
import { usePropertyWizard } from "@/context/PropertyWizardContext";

export default function FloorSection() {

    const {
        propertyData,
        updateProperty,
        validation,
    } = usePropertyWizard();

    const updateFloor = (
        key: "totalFloors" | "floorNumber",
        value: number
    ) => {

        updateProperty((previous) => ({

            ...previous,

            details: {

                ...previous.details,

                [key]: value,

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
                    Floor Details
                </h3>

                <p
                    className="
                        mt-1
                        text-sm
                        text-slate-500
                    "
                >
                    Tell tenants which floor the property is on and how many floors the building has.
                </p>

            </div>

            <div
                className="
                    grid
                    gap-4
                    md:grid-cols-2
                "
            >


                <InputField
                    id="total-floors"
                    label="Total Floors"
                    type="number"
                    min={0}
                    placeholder="e.g. 10"
                    value={
                        propertyData.details.totalFloors || ""
                    }
                    onChange={(
                        event: ChangeEvent<HTMLInputElement>
                    ) =>
                        updateFloor(
                            "totalFloors",
                            Number(event.target.value)
                        )
                    }
                    error={
                        validation.errors.totalFloors
                    }
                    helperText="Total number of floors in the building."
                    required
                />

            </div>

        </section>

    );

}