"use client";

import Image from "next/image";
import {
    Home,
    IndianRupee,
    Users,
    CalendarDays,
    Sparkles,
    BedDouble,
    CheckCircle2,
    XCircle,
} from "lucide-react";

import { useRoomWizard } from "@/context/RoomWizardContext";

export default function RoomSummary() {
    const { room } = useRoomWizard();

    return (
        <div className="space-y-8">
            {/* ==========================================================
                Hero
            ========================================================== */}

            <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 text-white shadow-xl">
                <p className="text-sm font-medium uppercase tracking-wider text-blue-100">
                    Final Review
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                    Room Summary
                </h2>

                <p className="mt-3 max-w-2xl text-blue-100">
                    Review every detail before publishing your room.
                    Make sure all information is correct and your
                    images showcase the room at its best.
                </p>
            </div>

            {/* ==========================================================
                Information
            ========================================================== */}

            <div className="grid gap-6 lg:grid-cols-2">
                <SummaryCard
                    title="Basic Information"
                    icon={<Home className="h-5 w-5" />}
                >
                    <Info
                        label="Room Name"
                        value={room.roomName}
                    />

                    <Info
                        label="Room Number"
                        value={room.roomNumber}
                    />

                    <Info
                        label="Room Type"
                        value={capitalize(room.roomType)}
                    />

                    <Info
                        label="Floor"
                        value={String(room.floor)}
                    />

                    <Info
                        label="Area"
                        value={`${room.area} sq.ft`}
                    />

                    <Info
                        label="Bed Type"
                        value={capitalize(room.bedType)}
                    />

                    <Info
                        label="Bathrooms"
                        value={`${room.bathrooms} (${capitalize(
                            room.bathroomType
                        )})`}
                    />

                    <Info
                        label="Kitchen"
                        value={capitalize(room.kitchen)}
                    />

                    <Info
                        label="Furnishing"
                        value={capitalize(room.furnishing)}
                    />

                    <Info
                        label="Gender Preference"
                        value={capitalize(
                            room.genderPreference
                        )}
                    />
                </SummaryCard>

                {/* Pricing */}

                <SummaryCard
                    title="Pricing"
                    icon={
                        <IndianRupee className="h-5 w-5" />
                    }
                >
                    <Info
                        label="Monthly Rent"
                        value={`₹${room.pricing.rent}`}
                    />

                    <Info
                        label="Security Deposit"
                        value={`₹${room.pricing.securityDeposit}`}
                    />

                    <Info
                        label="Maintenance"
                        value={`₹${room.pricing.maintenanceCharge}`}
                    />

                    <Info
                        label="Billing"
                        value={capitalize(
                            room.pricing.billingType
                        )}
                    />

                    <Info
                        label="Electricity"
                        value={
                            room.pricing
                                .electricityIncluded
                                ? "Included"
                                : "Not Included"
                        }
                    />

                    <Info
                        label="Water"
                        value={
                            room.pricing.waterIncluded
                                ? "Included"
                                : "Not Included"
                        }
                    />
                </SummaryCard>

                {/* Capacity */}

                <SummaryCard
                    title="Capacity"
                    icon={<Users className="h-5 w-5" />}
                >
                    <Info
                        label="Adults"
                        value={String(
                            room.capacity.adults
                        )}
                    />

                    <Info
                        label="Children"
                        value={String(
                            room.capacity.children
                        )}
                    />
                </SummaryCard>

                {/* Availability */}

                <SummaryCard
                    title="Availability"
                    icon={
                        <CalendarDays className="h-5 w-5" />
                    }
                >
                    <Info
                        label="Current Status"
                        value={
                            room.availability.availableNow
                                ? "Available"
                                : "Unavailable"
                        }
                    />

                    <Info
                        label="Available From"
                        value={
                            room.availability
                                .availableFrom
                                ? room.availability.availableFrom
                                      .toDate()
                                      .toLocaleDateString()
                                : "Not specified"
                        }
                    />

                    <Info
                        label="Minimum Stay"
                        value={`${room.availability.minimumStay} month(s)`}
                    />

                    <Info
                        label="Maximum Stay"
                        value={`${room.availability.maximumStay} month(s)`}
                    />
                </SummaryCard>
            </div>

            {/* ==========================================================
                Amenities
            ========================================================== */}

            <SummaryCard
                title="Amenities"
                icon={
                    <Sparkles className="h-5 w-5" />
                }
            >
                {room.amenities.amenities.length ===
                0 ? (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
                        No amenities selected.
                    </div>
                ) : (
                    <div className="flex flex-wrap gap-3">
                        {room.amenities.amenities.map(
                            (amenity) => (
                                <span
                                    key={amenity}
                                    className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
                                >
                                    {formatLabel(
                                        amenity
                                    )}
                                </span>
                            )
                        )}
                    </div>
                )}
            </SummaryCard>

            {/* ==========================================================
                Images
            ========================================================== */}

            <SummaryCard
                title={`Room Images (${room.images.length})`}
                icon={
                    <BedDouble className="h-5 w-5" />
                }
            >
                {room.images.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center text-slate-500">
                        No images uploaded.
                    </div>
                ) : (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {room.images.map(
                            (image, index) => (
                                <div
                                    key={
                                        image.publicId
                                    }
                                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                                >
                                    <div className="relative aspect-[4/3]">
                                        <Image
                                            src={
                                                image.url
                                            }
                                            alt={`Room ${
                                                index +
                                                1
                                            }`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between p-4">
                                        <span className="text-sm font-medium text-slate-700">
                                            Image{" "}
                                            {index +
                                                1}
                                        </span>

                                        <span className="text-xs text-slate-400">
                                            {
                                                image.width
                                            }
                                            ×
                                            {
                                                image.height
                                            }
                                        </span>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                )}
            </SummaryCard>

            {/* ==========================================================
                Ready Card
            ========================================================== */}

            <div className="rounded-3xl border border-green-200 bg-green-50 p-6">
                <div className="flex items-start gap-4">
                    {room.images.length >= 2 ? (
                        <CheckCircle2 className="mt-1 h-6 w-6 text-green-600" />
                    ) : (
                        <XCircle className="mt-1 h-6 w-6 text-red-500" />
                    )}

                    <div>
                        <h3 className="text-lg font-bold text-slate-900">
                            Ready to Publish
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            Review the information above. If
                            everything looks correct, continue
                            to publish your room listing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ==========================================================
    Components
========================================================== */

interface SummaryCardProps {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

function SummaryCard({
    title,
    icon,
    children,
}: SummaryCardProps) {
    return (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                    {icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                    {title}
                </h3>
            </div>

            <div className="space-y-4">
                {children}
            </div>
        </section>
    );
}

interface InfoProps {
    label: string;
    value: string;
}

function Info({
    label,
    value,
}: InfoProps) {
    return (
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-none last:pb-0">
            <span className="text-sm text-slate-500">
                {label}
            </span>

            <span className="text-right font-semibold text-slate-900">
                {value || "-"}
            </span>
        </div>
    );
}

/* ==========================================================
    Helpers
========================================================== */

function capitalize(value: string) {
    return value
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) =>
            char.toUpperCase()
        );
}

function formatLabel(value: string) {
    return value
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (char) =>
            char.toUpperCase()
        );
}