"use client";

import Checkbox from "@/components/ui/Checkbox";
import { usePropertyWizard } from "@/context/PropertyWizardContext";

const AMENITIES = [
    {
        key: "lift",
        label: "Lift",
        description:
            "Elevator access available for all floors.",
    },
    {
        key: "gym",
        label: "Gym",
        description:
            "Residents have access to a fitness center.",
    },
    {
        key: "swimmingPool",
        label: "Swimming Pool",
        description:
            "Shared swimming pool within the property.",
    },
    {
        key: "garden",
        label: "Garden",
        description:
            "Landscaped garden or green space.",
    },
    {
        key: "visitorParking",
        label: "Visitor Parking",
        description:
            "Dedicated parking spaces for visitors.",
    },
] as const;

export default function BuildingAmenities() {

    const {
        propertyData,
        updateProperty,
    } = usePropertyWizard();

    const handleToggle = (
        key: keyof typeof propertyData.information.amenities
    ) => {

        updateProperty((previous) => ({

            ...previous,

            information: {

                ...previous.information,

                amenities: {

                    ...previous.information.amenities,

                    [key]:
                        !previous.information.amenities[key],

                },

            },

        }));

    };

    return (

        <section className="space-y-6">

            <div>

                <h3
                    className="
                        text-lg
                        font-semibold
                        text-slate-900
                    "
                >
                    Building Amenities
                </h3>

                <p
                    className="
                        mt-1
                        text-sm
                        text-slate-500
                    "
                >
                    Select the amenities available
                    throughout the property.
                </p>

            </div>

            <div
                className="
                    grid
                    gap-4
                    md:grid-cols-2
                "
            >

                {AMENITIES.map((amenity) => (

                    <Checkbox
                        key={amenity.key}
                        id={amenity.key}
                        label={amenity.label}
                        description={
                            amenity.description
                        }
                        checked={
                            propertyData
                                .information
                                .amenities[
                                    amenity.key
                                ]
                        }
                        onChange={() =>
                            handleToggle(
                                amenity.key
                            )
                        }
                    />

                ))}

            </div>

        </section>

    );

}