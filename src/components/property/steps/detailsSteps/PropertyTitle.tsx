"use client";

import { ChangeEvent } from "react";

import InputField from "@/components/ui/InputField";
import { usePropertyWizard } from "@/context/PropertyWizardContext";

export default function PropertyTitle() {

    const {
        propertyData,
        updateProperty,
        validation,
    } = usePropertyWizard();

    const handleChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {

        const title = event.target.value;

        updateProperty((previous) => ({

            ...previous,

            details: {

                ...previous.details,

                title,

            },

        }));

    };

    return (

        <InputField
            id="property-title"
            label="Property Title"
            placeholder="e.g. Modern 2 BHK Apartment near MG Road"
            value={propertyData.details.title}
            onChange={handleChange}
            error={validation.errors.title}
            helperText="
                Give your property a clear, descriptive title so tenants can quickly understand what makes it unique.
            "
            required
            maxLength={100}
            autoComplete="off"
        />

    );

}