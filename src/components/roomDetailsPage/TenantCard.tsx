"use client";

import {
    CalendarDays,
    Phone,
    User,
    UserRoundX,
} from "lucide-react";

import { Room } from "@/types/roomTypes";

interface TenantCardProps {
    room: Room;
}

export default function TenantCard({
    room,
}: TenantCardProps) {
    const hasTenant =
        room.tenantId?.trim() !== "";

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
                    Tenant Information
                </h2>

                <p className="mt-1 text-sm text-blue-100">
                    Current occupant of this room.
                </p>
            </div>

            {/* Content */}

            <div className="p-5 sm:p-6">
                {!hasTenant ? (
                    <div
                        className="
                            flex
                            flex-col
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-dashed
                            border-white/20
                            bg-white/5
                            px-6
                            py-12
                            text-center
                        "
                    >
                        <UserRoundX
                            size={56}
                            className="text-blue-300"
                        />

                        <h3 className="mt-5 text-xl font-semibold text-white">
                            No Tenant Assigned
                        </h3>

                        <p className="mt-3 max-w-md text-sm text-blue-100">
                            This room is currently vacant.
                            Once someone rents this room
                            through the Rentz Marketplace,
                            their information will appear
                            here automatically.
                        </p>
                    </div>
                ) : (
                    <div
                        className="
                            grid
                            gap-4
                            sm:grid-cols-2
                        "
                    >
                        <div
                            className="
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                p-4
                            "
                        >
                            <div className="flex items-center gap-2 text-blue-200">
                                <User size={18} />

                                <span className="text-xs font-medium uppercase tracking-wide">
                                    Tenant Name
                                </span>
                            </div>

                            <p className="mt-3 text-lg font-semibold text-white">
                                Coming Soon
                            </p>
                        </div>

                        <div
                            className="
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                p-4
                            "
                        >
                            <div className="flex items-center gap-2 text-blue-200">
                                <Phone size={18} />

                                <span className="text-xs font-medium uppercase tracking-wide">
                                    Phone
                                </span>
                            </div>

                            <p className="mt-3 text-lg font-semibold text-white">
                                Coming Soon
                            </p>
                        </div>

                        <div
                            className="
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                p-4
                            "
                        >
                            <div className="flex items-center gap-2 text-blue-200">
                                <CalendarDays
                                    size={18}
                                />

                                <span className="text-xs font-medium uppercase tracking-wide">
                                    Move In Date
                                </span>
                            </div>

                            <p className="mt-3 text-lg font-semibold text-white">
                                Coming Soon
                            </p>
                        </div>

                        <div
                            className="
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                p-4
                            "
                        >
                            <div className="flex items-center gap-2 text-blue-200">
                                <CalendarDays
                                    size={18}
                                />

                                <span className="text-xs font-medium uppercase tracking-wide">
                                    Next Rent Due
                                </span>
                            </div>

                            <p className="mt-3 text-lg font-semibold text-white">
                                Coming Soon
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}