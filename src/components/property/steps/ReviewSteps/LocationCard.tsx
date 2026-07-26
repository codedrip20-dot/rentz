"use client";

import {
    MapPin,
    Navigation,
    Globe,
    Landmark,
} from "lucide-react";

import Card from "@/components/ui/Card";
import { usePropertyWizard } from "@/context/PropertyWizardContext";

interface LocationItemProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

function LocationItem({
    icon,
    label,
    value,
}: LocationItemProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-3 flex items-center gap-2 text-blue-600">
                {icon}
            </div>

            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {label}
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900 break-words">
                {value}
            </p>
        </div>
    );
}

export default function LocationCard() {
    const { propertyData } = usePropertyWizard();

    const {
        address,
        coordinates,
        nearbyLandmark,
        directions,
    } = propertyData.location;

    const fullAddress = [
        address.street,
        address.area,
        address.city,
        address.state,
        address.country,
        address.pincode,
    ]
        .filter(Boolean)
        .join(", ");

    return (
        <Card>
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900">
                    Property Location
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                    Verify that your propertys address and location
                    details are correct.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">

                <LocationItem
                    icon={<MapPin size={18} />}
                    label="Full Address"
                    value={
                        fullAddress || "No address provided"
                    }
                />

                <LocationItem
                    icon={<Globe size={18} />}
                    label="Google Place ID"
                    value={
                        propertyData.location.placeId ||
                        "Not Available"
                    }
                />

                <LocationItem
                    icon={<Navigation size={18} />}
                    label="Coordinates"
                    value={
                        coordinates.latitude !== 0 ||
                        coordinates.longitude !== 0
                            ? `${coordinates.latitude.toFixed(
                                  6
                              )}, ${coordinates.longitude.toFixed(6)}`
                            : "Not Available"
                    }
                />

                <LocationItem
                    icon={<Landmark size={18} />}
                    label="Nearby Landmark"
                    value={
                        nearbyLandmark ||
                        "Not Provided"
                    }
                />

                <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-4">

                    <div className="mb-3 flex items-center gap-2 text-blue-600">
                        <Navigation size={18} />
                    </div>

                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Directions
                    </p>

                    <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-900">
                        {directions ||
                            "No directions provided."}
                    </p>

                </div>

            </div>
        </Card>
    );
}