"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthContext";

import { getRoomCountByOwner } from "@/lib/firebase/room";
import { getActiveTenantCountByOwner } from "@/lib/firebase/tenant";

interface DashboardStats {
    roomCount: number;
    activeTenantCount: number;
}

export const useDashboardStats = () => {
    const { currentUser, authLoading } = useAuth();

    const [stats, setStats] =
        useState<DashboardStats>({
            roomCount: 0,
            activeTenantCount: 0,
        });

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState<string | null>(null);

    useEffect(() => {
        const loadStats = async () => {
            if (authLoading) return;

            if (!currentUser) {
                setStats({
                    roomCount: 0,
                    activeTenantCount: 0,
                });

                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                const [
                    roomCount,
                    activeTenantCount,
                ] = await Promise.all([
                    getRoomCountByOwner(
                        currentUser.uid
                    ),

                    getActiveTenantCountByOwner(
                        currentUser.uid
                    ),
                ]);

                setStats({
                    roomCount,
                    activeTenantCount,
                });
            } catch (err) {
                console.error(
                    "[useDashboardStats] Failed to load dashboard stats:",
                    err
                );

                setError(
                    err instanceof Error
                        ? err.message
                        : "Failed to load dashboard statistics."
                );

                setStats({
                    roomCount: 0,
                    activeTenantCount: 0,
                });
            } finally {
                setLoading(false);
            }
        };

        void loadStats();
    }, [currentUser, authLoading]);

    return {
        ...stats,
        loading,
        error,
    };
};