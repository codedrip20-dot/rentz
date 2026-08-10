"use client";

import { useEffect, useState } from "react";

import {
    CalendarDays,
    Loader2,
    Phone,
    User,
    UserRoundX,
} from "lucide-react";

import { Room } from "@/types/roomTypes";
import { Tenant } from "@/types/tenantTypes";
import { tenantService } from "@/services/tenant/tenantService";

interface TenantCardProps {
    room: Room;
}

/* ============================================================================
   Helpers
============================================================================ */

function formatDate(date: Date): string {
    return new Intl.DateTimeFormat("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).format(date);
}

function getNextRentDueDate(moveInDate: Date): Date {
    const today = new Date();

    const nextDue = new Date(moveInDate);

    /*
     * Rent is assumed to be due monthly on the same
     * day of the month as the tenant's move-in date.
     */
    nextDue.setFullYear(today.getFullYear());
    nextDue.setMonth(today.getMonth());

    /*
     * If this month's rent date has already passed,
     * move the due date to next month.
     */
    if (nextDue < today) {
        nextDue.setMonth(nextDue.getMonth() + 1);
    }

    return nextDue;
}

/* ============================================================================
   Tenant Card
============================================================================ */

export default function TenantCard({
    room,
}: TenantCardProps) {
    const hasTenant =
        room.tenantId?.trim() !== "";

    const [tenant, setTenant] =
        useState<Tenant | null>(null);

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState<string | null>(null);

    /* ------------------------------------------------------------------------
       Fetch Tenant
    ------------------------------------------------------------------------ */

    useEffect(() => {
        let mounted = true;

        async function fetchTenant() {
            if (!room.tenantId?.trim()) {
                setTenant(null);
                setError(null);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const result =
                    await tenantService.getTenant(
                        room.tenantId
                    );

                if (!mounted) return;

                if (!result.success || !result.tenant) {
                    setTenant(null);
                    setError(
                        result.message ||
                            "Unable to load tenant information."
                    );

                    return;
                }

                setTenant(result.tenant);
            } catch (error) {
                if (!mounted) return;

                console.error(
                    "Failed to fetch tenant:",
                    error
                );

                setTenant(null);

                setError(
                    "Unable to load tenant information."
                );
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        }

        fetchTenant();

        return () => {
            mounted = false;
        };
    }, [room.tenantId]);

    /* =========================================================================
       Render
    ========================================================================= */

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
                {/* ============================================================
                   No Tenant
                ============================================================ */}

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
                ) : loading ? (
                    /* =========================================================
                       Loading
                    ========================================================= */

                    <div
                        className="
                            flex
                            flex-col
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/5
                            px-6
                            py-12
                            text-center
                        "
                    >
                        <Loader2
                            size={40}
                            className="
                                animate-spin
                                text-blue-300
                            "
                        />

                        <h3 className="mt-5 text-lg font-semibold text-white">
                            Loading Tenant
                        </h3>

                        <p className="mt-2 text-sm text-blue-100">
                            Fetching the current tenant information...
                        </p>
                    </div>
                ) : error ? (
                    /* =========================================================
                       Error
                    ========================================================= */

                    <div
                        className="
                            flex
                            flex-col
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-red-400/20
                            bg-red-400/5
                            px-6
                            py-10
                            text-center
                        "
                    >
                        <UserRoundX
                            size={48}
                            className="text-red-300"
                        />

                        <h3 className="mt-4 text-lg font-semibold text-white">
                            Tenant Information Unavailable
                        </h3>

                        <p className="mt-2 max-w-md text-sm text-red-100">
                            {error}
                        </p>
                    </div>
                ) : tenant ? (
                    /* =========================================================
                       Tenant Data
                    ========================================================= */

                    <div
                        className="
                            grid
                            gap-4
                            sm:grid-cols-2
                        "
                    >
                        {/* Tenant Name */}

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
                                {tenant.officialName}
                            </p>
                        </div>

                        {/* Phone */}

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
                                {tenant.phoneNumber}
                            </p>
                        </div>

                        {/* Move In Date */}

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
                                <CalendarDays size={18} />

                                <span className="text-xs font-medium uppercase tracking-wide">
                                    Move In Date
                                </span>
                            </div>

                            <p className="mt-3 text-lg font-semibold text-white">
                                {formatDate(
                                    tenant.moveInDate
                                )}
                            </p>
                        </div>

                        {/* Next Rent Due */}

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
                                <CalendarDays size={18} />

                                <span className="text-xs font-medium uppercase tracking-wide">
                                    Next Rent Due
                                </span>
                            </div>

                            <p className="mt-3 text-lg font-semibold text-white">
                                {formatDate(
                                    getNextRentDueDate(
                                        tenant.moveInDate
                                    )
                                )}
                            </p>
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    );
}