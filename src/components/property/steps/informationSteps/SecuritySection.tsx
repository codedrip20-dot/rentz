"use client";

import Checkbox from "@/components/ui/Checkbox";
import { usePropertyWizard } from "@/context/PropertyWizardContext";

const SECURITY_FEATURES = [
    {
        key: "cctv",
        label: "CCTV Surveillance",
        description:
            "Security cameras are installed throughout the property.",
    },
    {
        key: "securityGuard",
        label: "Security Guard",
        description:
            "Professional security personnel are available.",
    },
    {
        key: "gatedCommunity",
        label: "Gated Community",
        description:
            "The property is located within a gated community.",
    },
    {
        key: "intercom",
        label: "Intercom",
        description:
            "Intercom system available for visitor communication.",
    },
    {
        key: "fireSafety",
        label: "Fire Safety",
        description:
            "Fire alarms and safety equipment are installed.",
    },
] as const;

export default function SecuritySection() {

    const {
        propertyData,
        updateProperty,
    } = usePropertyWizard();

    const handleToggle = (
        key: keyof typeof propertyData.information.security
    ) => {

        updateProperty((previous) => ({

            ...previous,

            information: {

                ...previous.information,

                security: {

                    ...previous.information.security,

                    [key]:
                        !previous.information.security[key],

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
                    Security
                </h3>

                <p
                    className="
                        mt-1
                        text-sm
                        text-slate-500
                    "
                >
                    Select the security features available
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

                {SECURITY_FEATURES.map((feature) => (

                    <Checkbox
                        key={feature.key}
                        id={feature.key}
                        label={feature.label}
                        description={
                            feature.description
                        }
                        checked={
                            propertyData
                                .information
                                .security[
                                    feature.key
                                ]
                        }
                        onChange={() =>
                            handleToggle(
                                feature.key
                            )
                        }
                    />

                ))}

            </div>

        </section>

    );

}