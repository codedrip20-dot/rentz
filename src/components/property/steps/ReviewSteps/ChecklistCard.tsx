"use client";

import { CheckCircle2, Circle } from "lucide-react";

import Card from "@/components/ui/Card";
import { usePropertyWizard } from "@/context/PropertyWizardContext";

interface ChecklistItemProps {
    completed: boolean;
    label: string;
    description: string;
}

function ChecklistItem({
    completed,
    label,
    description,
}: ChecklistItemProps) {
    return (
        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">

            <div className="mt-0.5">

                {completed ? (
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                ) : (
                    <Circle className="h-6 w-6 text-slate-300" />
                )}

            </div>

            <div>

                <h4 className="font-semibold text-slate-900">
                    {label}
                </h4>

                <p className="mt-1 text-sm text-slate-600">
                    {description}
                </p>

            </div>

        </div>
    );
}

export default function ChecklistCard() {

    const { propertyData } = usePropertyWizard();

    const checks = [
        {
            label: "Location Information",
            description:
                "Property address and map location have been completed.",
            completed: propertyData.draftProgress.location,
        },
        {
            label: "Property Details",
            description:
                "Basic property information has been provided.",
            completed: propertyData.draftProgress.details,
        },
        {
            label: "Amenities & Information",
            description:
                "Amenities, utilities, parking and security have been completed.",
            completed: propertyData.draftProgress.information,
        },
        {
            label: "Property Images",
            description:
                "Property images have been uploaded successfully.",
            completed: propertyData.draftProgress.images,
        },
    ];

    const completedCount = checks.filter(
        (item) => item.completed
    ).length;

    const readyToPublish =
        completedCount === checks.length;

    return (
        <Card>

            <div className="mb-6">

                <h3 className="text-xl font-semibold text-slate-900">
                    Publishing Checklist
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                    Confirm that every required section has been completed before publishing your property.
                </p>

            </div>

            <div className="space-y-4">

                {checks.map((item) => (
                    <ChecklistItem
                        key={item.label}
                        completed={item.completed}
                        label={item.label}
                        description={item.description}
                    />
                ))}

            </div>

            <div
                className={`mt-6 rounded-2xl border p-5 ${
                    readyToPublish
                        ? "border-emerald-200 bg-emerald-50"
                        : "border-amber-200 bg-amber-50"
                }`}
            >
                <h4
                    className={`font-semibold ${
                        readyToPublish
                            ? "text-emerald-700"
                            : "text-amber-700"
                    }`}
                >
                    {readyToPublish
                        ? "Ready to Publish 🎉"
                        : "Almost Ready"}
                </h4>

                <p
                    className={`mt-2 text-sm ${
                        readyToPublish
                            ? "text-emerald-700"
                            : "text-amber-700"
                    }`}
                >
                    {readyToPublish
                        ? "Everything looks good. Click Finish to create your property listing."
                        :`${completedCount} of ${checks.length} required sections have been completed.`}
                </p>

            </div>

        </Card>
    );
}