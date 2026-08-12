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
        <div className="space-y-6 sm:space-y-8">

            {/* ==========================================================
                Hero
            ========================================================== */}

            <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-5 text-white shadow-xl sm:rounded-3xl sm:p-8">

                <p className="text-xs font-medium uppercase tracking-wider text-blue-100 sm:text-sm">
                    Final Review
                </p>

                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                    Room Summary
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:leading-7">
                    Review every detail before publishing your room.
                    Make sure all information is correct and your
                    images showcase the room at its best.
                </p>

            </div>

            {/* ==========================================================
                Information
            ========================================================== */}

            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">

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
                    <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-500 sm:rounded-2xl sm:p-8">
                        No amenities selected.
                    </div>
                ) : (
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        {room.amenities.amenities.map(
                            (amenity) => (
                                <span
                                    key={amenity}
                                    className="rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 sm:px-4 sm:text-sm"
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
                    <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500 sm:rounded-2xl sm:p-12">
                        No images uploaded.
                    </div>
                ) : (
                    <div className="grid gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {room.images.map(
                            (image, index) => (
                                <div
                                    key={
                                        image.publicId
                                    }
                                    className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:rounded-2xl"
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

                                    <div className="flex items-center justify-between gap-3 p-3 sm:p-4">

                                        <span className="min-w-0 truncate text-sm font-medium text-slate-700">
                                            Image{" "}
                                            {index +
                                                1}
                                        </span>

                                        <span className="shrink-0 text-[11px] text-slate-400 sm:text-xs">
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

            <div className="rounded-2xl border border-green-200 bg-green-50 p-4 sm:rounded-3xl sm:p-6">

                <div className="flex items-start gap-3 sm:gap-4">

                    {room.images.length >= 2 ? (
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600 sm:mt-1 sm:h-6 sm:w-6" />
                    ) : (
                        <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500 sm:mt-1 sm:h-6 sm:w-6" />
                    )}

                    <div className="min-w-0">

                        <h3 className="text-base font-bold text-slate-900 sm:text-lg">
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
        <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:rounded-3xl sm:p-6">

            <div className="mb-5 flex items-center gap-3 sm:mb-6">

                <div className="shrink-0 rounded-xl bg-blue-100 p-2.5 text-blue-700 sm:p-3">
                    {icon}
                </div>

                <h3 className="min-w-0 text-lg font-bold text-slate-900 sm:text-xl">
                    {title}
                </h3>

            </div>

            <div className="space-y-3 sm:space-y-4">
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
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3 last:border-none last:pb-0">

            <span className="min-w-0 shrink text-sm leading-5 text-slate-500">
                {label}
            </span>

            <span className="min-w-0 max-w-[65%] break-words text-right text-sm font-semibold leading-5 text-slate-900 sm:text-base">
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