"use client";

import {
    Home,
    Ruler,
    Layers3,
    Sofa,
    Compass,
    FileText,
} from "lucide-react";

import Card from "@/components/ui/Card";
import { usePropertyWizard } from "@/context/PropertyWizardContext";

interface DetailItemProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

function DetailItem({
    icon,
    label,
    value,
}: DetailItemProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-3 flex items-center gap-2 text-blue-600">
                {icon}
            </div>

            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {label}
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
                {value}
            </p>
        </div>
    );
}

export default function DetailsCard() {
    const { propertyData } = usePropertyWizard();

    const details = propertyData.details;

    return (
        <Card>
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900">
                    Property Details
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                    Review your propertys specifications before publishing.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                <DetailItem
                    icon={<Home size={18} />}
                    label="Property Title"
                    value={details.title || "Not Provided"}
                />

                <DetailItem
                    icon={<Sofa size={18} />}
                    label="Furnishing"
                    value={details.furnishing || "Not Provided"}
                />

                <DetailItem
                    icon={<Ruler size={18} />}
                    label="Built-up Area"
                    value={`${details.builtUpArea || 0} sq ft`}
                />

                <DetailItem
                    icon={<Ruler size={18} />}
                    label="Carpet Area"
                    value={`${details.carpetArea || 0} sq ft`}
                />

                <DetailItem
                    icon={<Layers3 size={18} />}
                    label="Floor"
                    value={`${details.floorNumber} / ${details.totalFloors}`}
                />

                <DetailItem
                    icon={<Compass size={18} />}
                    label="Facing"
                    value={details.facing || "Not Provided"}
                />

            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">

                <div className="mb-3 flex items-center gap-2 text-blue-600">
                    <FileText size={18} />
                    <h4 className="font-semibold text-slate-900">
                        Description
                    </h4>
                </div>

                <p className="whitespace-pre-line text-sm leading-7 text-slate-700">
                    {details.description ||
                        "No description provided."}
                </p>

            </div>
        </Card>
    );
}