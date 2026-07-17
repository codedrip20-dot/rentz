"use client";

import { ChangeEvent } from "react";

import Checkbox from "@/components/ui/Checkbox";
import InputField from "@/components/ui/InputField";
import { usePropertyWizard } from "@/context/PropertyWizardContext";

export default function ParkingSection() {

    const {
        propertyData,
        updateProperty,
    } = usePropertyWizard();

    const parking =
        propertyData.information.parking;

    const toggleParking = (
        key: keyof typeof parking
    ) => {

        if (key === "totalSpaces") {
            return;
        }

        updateProperty((previous) => ({

            ...previous,

            information: {

                ...previous.information,

                parking: {

                    ...previous.information.parking,

                    [key]:
                        !previous.information.parking[key],

                },

            },

        }));

    };

    const handleTotalSpacesChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {

        updateProperty((previous) => ({

            ...previous,

            information: {

                ...previous.information,

                parking: {

                    ...previous.information.parking,

                    totalSpaces:
                        Number(event.target.value),

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
                    Parking
                </h3>

                <p
                    className="
                        mt-1
                        text-sm
                        text-slate-500
                    "
                >
                    Tell tenants about the parking
                    facilities available at your
                    property.
                </p>

            </div>

            <div
                className="
                    grid
                    gap-4
                    md:grid-cols-2
                "
            >

                <Checkbox
                    id="parking-available"
                    label="Parking Available"
                    description="Parking is available for residents."
                    checked={parking.available}
                    onChange={() =>
                        toggleParking("available")
                    }
                />

                <Checkbox
                    id="covered-parking"
                    label="Covered Parking"
                    description="Covered parking spaces are available."
                    checked={parking.covered}
                    disabled={!parking.available}
                    onChange={() =>
                        toggleParking("covered")
                    }
                />

                <Checkbox
                    id="open-parking"
                    label="Open Parking"
                    description="Open parking spaces are available."
                    checked={parking.open}
                    disabled={!parking.available}
                    onChange={() =>
                        toggleParking("open")
                    }
                />

            </div>

            <InputField
                id="parking-spaces"
                label="Total Parking Spaces"
                type="number"
                min={0}
                value={
                    parking.totalSpaces || ""
                }
                disabled={!parking.available}
                onChange={
                    handleTotalSpacesChange
                }
                helperText="Enter the total number of parking spaces available."
            />

        </section>

    );

}