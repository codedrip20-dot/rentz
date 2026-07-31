"use client";

import {
    BadgeIndianRupee,
    Shield,
    Receipt,
    CalendarClock,
    Zap,
    Droplets,
} from "lucide-react";

import { Room } from "@/types/roomTypes";

interface PricingCardProps {
    room: Room;
}

interface PricingItemProps {
    icon: React.ReactNode;
    label: string;
    value: string | number;
}

function PricingItem({
    icon,
    label,
    value,
}: PricingItemProps) {
    return (
        <div
            className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-4
                transition-all
                duration-300
                hover:bg-white/10
            "
        >
            <div className="flex items-center gap-2 text-blue-200">
                {icon}

                <span className="text-xs font-medium uppercase tracking-wide">
                    {label}
                </span>
            </div>

            <p className="mt-3 text-lg font-semibold text-white">
                {value}
            </p>
        </div>
    );
}

export default function PricingCard({
    room,
}: PricingCardProps) {
    return (
        <section
            className="
                overflow-hidden
                rounded-3xl
                border
                border-white/20
                bg-white/10
                backdrop-blur-2xl
                shadow-2xl
            "
        >
            {/* Header */}

            <div
                className="
                    border-b
                    border-white/10
                    px-5
                    py-5
                    sm:px-6
                "
            >
                <h2 className="text-xl font-bold text-white">
                    Pricing
                </h2>

                <p className="mt-1 text-sm text-blue-100">
                    Rent, billing cycle and utility charges.
                </p>
            </div>

            {/* Content */}

            <div
                className="
                    grid
                    gap-4
                    p-5
                    sm:grid-cols-2
                    lg:grid-cols-3
                    sm:p-6
                "
            >
                <PricingItem
                    icon={<BadgeIndianRupee size={18} />}
                    label="Rent"
                    value={`₹${room.pricing.rent}`}
                />

                <PricingItem
                    icon={<Shield size={18} />}
                    label="Security Deposit"
                    value={`₹${room.pricing.securityDeposit}`}
                />

                <PricingItem
                    icon={<Receipt size={18} />}
                    label="Maintenance"
                    value={`₹${room.pricing.maintenanceCharge}`}
                />

                <PricingItem
                    icon={<CalendarClock size={18} />}
                    label="Billing"
                    value={room.pricing.billingType}
                />

                <PricingItem
                    icon={<Zap size={18} />}
                    label="Electricity"
                    value={
                        room.pricing.electricityIncluded
                            ? "Included"
                            : "Extra Charges"
                    }
                />

                <PricingItem
                    icon={<Droplets size={18} />}
                    label="Water"
                    value={
                        room.pricing.waterIncluded
                            ? "Included"
                            : "Extra Charges"
                    }
                />
            </div>
        </section>
    );
}