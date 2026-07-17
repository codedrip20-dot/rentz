"use client";

import { ChangeEvent } from "react";

import TextAreaField from "@/components/ui/TextAreaField";
import { usePropertyWizard } from "@/context/PropertyWizardContext";

export default function PropertyDescription() {

    const {
        propertyData,
        updateProperty,
        validation,
    } = usePropertyWizard();

    const handleChange = (
        event: ChangeEvent<HTMLTextAreaElement>
    ) => {

        const description = event.target.value;

        updateProperty((previous) => ({

            ...previous,

            details: {

                ...previous.details,

                description,

            },

        }));

    };

    return (

        <TextAreaField
            id="property-description"
            label="Property Description"
            placeholder="Describe your property, nearby landmarks, amenities, and anything that would help potential tenants make an informed decision."
            value={propertyData.details.description}
            onChange={handleChange}
            error={validation.errors.description}
            helperText="
                A detailed description helps tenants understand your property and improves listing quality.
            "
            required
            maxLength={1000}
            rows={6}
        />

    );

}