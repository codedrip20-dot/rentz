"use client";

import {
    Building2,
    Car,
    Wrench,
    ShieldCheck,
    CheckCircle2,
    XCircle,
} from "lucide-react";

import Card from "@/components/ui/Card";
import { usePropertyWizard } from "@/context/PropertyWizardContext";

interface FeatureItemProps {
    label: string;
    enabled: boolean;
}

function FeatureItem({
    label,
    enabled,
}: FeatureItemProps) {
    return (
        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3">
            <span className="text-sm font-medium text-slate-700">
                {label}
            </span>

            {enabled ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            ) : (
                <XCircle className="h-5 w-5 text-slate-300" />
            )}
        </div>
    );
}

interface SectionProps {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

function Section({
    title,
    icon,
    children,
}: SectionProps) {
    return (
        <div className="rounded-2xl border border-slate-200 p-5">

            <div className="mb-5 flex items-center gap-2">

                <div className="text-blue-600">
                    {icon}
                </div>

                <h4 className="text-lg font-semibold text-slate-900">
                    {title}
                </h4>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">
                {children}
            </div>

        </div>
    );
}

export default function AmenitiesCard() {
    const { propertyData } = usePropertyWizard();

    const {
        amenities,
        parking,
        utilities,
        security,
    } = propertyData.information;

    return (
        <Card>

            <div className="mb-6">

                <h3 className="text-xl font-semibold text-slate-900">
                    Amenities & Facilities
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                    Review all amenities, parking, utilities and
                    security features before publishing.
                </p>

            </div>

            <div className="space-y-6">

                {/* Amenities */}

                <Section
                    title="Amenities"
                    icon={<Building2 size={20} />}
                >
                    <FeatureItem
                        label="Lift"
                        enabled={amenities.lift}
                    />

                    <FeatureItem
                        label="Gym"
                        enabled={amenities.gym}
                    />

                    <FeatureItem
                        label="Swimming Pool"
                        enabled={amenities.swimmingPool}
                    />

                    <FeatureItem
                        label="Garden"
                        enabled={amenities.garden}
                    />

                    <FeatureItem
                        label="Visitor Parking"
                        enabled={amenities.visitorParking}
                    />
                </Section>

                {/* Parking */}

                <Section
                    title="Parking"
                    icon={<Car size={20} />}
                >
                    <FeatureItem
                        label="Parking Available"
                        enabled={parking.available}
                    />

                    <FeatureItem
                        label="Covered Parking"
                        enabled={parking.covered}
                    />

                    <FeatureItem
                        label="Open Parking"
                        enabled={parking.open}
                    />

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                            Total Spaces
                        </p>

                        <p className="mt-1 font-semibold text-slate-900">
                            {parking.totalSpaces}
                        </p>
                    </div>
                </Section>

                {/* Utilities */}

                <Section
                    title="Utilities"
                    icon={<Wrench size={20} />}
                >
                    <FeatureItem
                        label="Power Backup"
                        enabled={utilities.powerBackup}
                    />

                    <FeatureItem
                        label="Water Supply"
                        enabled={utilities.waterSupply}
                    />

                    <FeatureItem
                        label="Internet Ready"
                        enabled={utilities.internetReady}
                    />

                    <FeatureItem
                        label="Gas Pipeline"
                        enabled={utilities.gasPipeline}
                    />
                </Section>

                {/* Security */}

                <Section
                    title="Security"
                    icon={<ShieldCheck size={20} />}
                >
                    <FeatureItem
                        label="CCTV"
                        enabled={security.cctv}
                    />

                    <FeatureItem
                        label="Security Guard"
                        enabled={security.securityGuard}
                    />

                    <FeatureItem
                        label="Gated Community"
                        enabled={security.gatedCommunity}
                    />

                    <FeatureItem
                        label="Intercom"
                        enabled={security.intercom}
                    />

                    <FeatureItem
                        label="Fire Safety"
                        enabled={security.fireSafety}
                    />
                </Section>

            </div>

        </Card>
    );
}