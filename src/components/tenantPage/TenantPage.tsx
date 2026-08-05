"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import heroBg from "@/assets/herobg.png";

import { useAuth } from "@/context/AuthContext";

import {
    activateTenantRole,
    getTenantPageData,
} from "@/lib/firebase/tenant";

import {
    TenantError,
    TenantHeader,
    TenantLoading,
    TenantLocation,
    TenantProfileCard,
    TenantRentalCard,
} from ".";

import { Property } from "@/types/property";
import { Room } from "@/types/roomTypes";
import { Tenant } from "@/types/tenantTypes";
import { UserData } from "@/types/user";

export default function TenantPage() {
    const { currentUser } = useAuth();

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState<string | null>(null);

    const [tenant, setTenant] =
        useState<Tenant | null>(null);

    const [room, setRoom] =
        useState<Room | null>(null);

    const [property, setProperty] =
        useState<Property | null>(null);

    const [userData, setUserData] =
        useState<UserData | null>(null);

    useEffect(() => {
        async function loadTenantPage() {
            try {
                if (!currentUser) {
                    setError(
                        "User not authenticated."
                    );
                    return;
                }

                // Activate tenant role
                const tenantRecord =
                    await activateTenantRole(
                        currentUser.uid
                    );

                if (!tenantRecord) {
                    setError(
                        "You are not currently registered as a tenant."
                    );
                    return;
                }

                // Load dashboard data
                const data =
                    await getTenantPageData(
                        tenantRecord.tenantId
                    );

                if (!data) {
                    setError(
                        "Unable to load tenant dashboard."
                    );
                    return;
                }

                setTenant(data.tenant);

                setRoom(data.room);

                setProperty(data.property);

                setUserData(
                    data.user as UserData
                );
            } catch (error) {
                console.error(error);

                setError(
                    "Something went wrong while loading your dashboard."
                );
            } finally {
                setLoading(false);
            }
        }

        loadTenantPage();
    }, [currentUser]);

    if (loading) {
        return <TenantLoading />;
    }

    if (error || !tenant) {
        return (
            <TenantError
                message={
                    error ??
                    "Unknown error occurred."
                }
            />
        );
    }

    return (
        <main className="relative min-h-screen overflow-hidden">
            {/* Background */}

            <Image
                src={heroBg}
                alt="Rentz Background"
                fill
                priority
                className="object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />

            {/* Content */}

            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-6 py-10">
                <TenantHeader
                    tenantName={
                        tenant.officialName
                    }
                />

                <TenantProfileCard
                    tenant={tenant}
                />

                <TenantRentalCard
                    tenant={tenant}
                    room={room}
                    property={property}
                />

                <TenantLocation
                    property={property}
                />
            </div>
        </main>
    );
}