"use client";

import Image from "next/image";
import {
    Building2,
    BadgeCheck,
    Images,
    MapPin,
} from "lucide-react";

import Card from "@/components/ui/Card";
import { usePropertyWizard } from "@/context/PropertyWizardContext";

interface OverviewItemProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

function OverviewItem({
    icon,
    label,
    value,
}: OverviewItemProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-3 flex items-center gap-2 text-blue-600">
                {icon}
            </div>

            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {label}
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-900">
                {value}
            </p>
        </div>
    );
}

export default function OverviewCard() {
    const { propertyData } = usePropertyWizard();

    const coverImage =
        propertyData.images.find((image) => image.isCover) ??
        propertyData.images[0];

    const locationVerified =
        propertyData.location.placeId.trim() !== "";

    return (
        <Card>
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900">
                    Property Overview
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                    Review the essential information about your property before publishing.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[300px_1fr]">

                {/* Cover Image */}

                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">

                    {coverImage ? (
                        <Image
                            src={coverImage.url}
                            alt="Property Cover"
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="flex h-full items-center justify-center text-sm text-slate-400">
                            No Cover Image Selected
                        </div>
                    )}

                </div>

                {/* Property Summary */}

                <div className="flex flex-col justify-between">

                    <div>

                        <div className="mb-2 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                            {propertyData.propertyType}
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900">
                            {propertyData.details.title ||
                                "Untitled Property"}
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            {propertyData.details.description ||
                                "No description provided."}
                        </p>

                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">

                        <OverviewItem
                            icon={<Building2 size={18} />}
                            label="Listing Status"
                            value={propertyData.status}
                        />

                        <OverviewItem
                            icon={<Images size={18} />}
                            label="Images Uploaded"
                            value={`${propertyData.images.length}`}
                        />

                        <OverviewItem
                            icon={<MapPin size={18} />}
                            label="Location"
                            value={
                                locationVerified
                                    ? "Verified"
                                    : "Not Verified"
                            }
                        />

                        <OverviewItem
                            icon={<BadgeCheck size={18} />}
                            label="Sections Completed"
                            value={`${
                                Object.values(
                                    propertyData.draftProgress
                                ).filter(Boolean).length
                            } / 4`}
                        />

                    </div>

                </div>

            </div>
        </Card>
    );
}