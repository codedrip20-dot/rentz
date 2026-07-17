"use client";

import Checkbox from "@/components/ui/Checkbox";
import { usePropertyWizard } from "@/context/PropertyWizardContext";

const UTILITIES = [
    {
        key: "powerBackup",
        label: "Power Backup",
        description:
            "Power backup is available during electricity outages.",
    },
    {
        key: "waterSupply",
        label: "24×7 Water Supply",
        description:
            "Continuous water supply is available throughout the property.",
    },
    {
        key: "internetReady",
        label: "Internet Ready",
        description:
            "Broadband or fiber internet connection is available.",
    },
    {
        key: "gasPipeline",
        label: "Gas Pipeline",
        description:
            "Piped gas connection is available within the property.",
    },
] as const;

export default function UtilitiesSection() {

    const {
        propertyData,
        updateProperty,
    } = usePropertyWizard();

    const handleToggle = (
        key: keyof typeof propertyData.information.utilities
    ) => {

        updateProperty((previous) => ({

            ...previous,

            information: {

                ...previous.information,

                utilities: {

                    ...previous.information.utilities,

                    [key]:
                        !previous.information.utilities[key],

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
                    Utilities
                </h3>

                <p
                    className="
                        mt-1
                        text-sm
                        text-slate-500
                    "
                >
                    Select the utilities and infrastructure
                    available throughout the property.
                </p>

            </div>

            <div
                className="
                    grid
                    gap-4
                    md:grid-cols-2
                "
            >

                {UTILITIES.map((utility) => (

                    <Checkbox
                        key={utility.key}
                        id={utility.key}
                        label={utility.label}
                        description={
                            utility.description
                        }
                        checked={
                            propertyData
                                .information
                                .utilities[
                                    utility.key
                                ]
                        }
                        onChange={() =>
                            handleToggle(
                                utility.key
                            )
                        }
                    />

                ))}

            </div>

        </section>

    );

}