"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthContext";

import { getOwnerProfile } from "@/lib/firebase/owner";

import type { OwnerProfile } from "@/types/ownerProfile";

export const useOwnerProfile = () => {
    const { currentUser, authLoading } = useAuth();

    const [ownerProfile, setOwnerProfile] =
        useState<OwnerProfile | null>(null);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState<string | null>(null);

    useEffect(() => {
        const fetchOwnerProfile = async () => {
            if (authLoading) return;

            if (!currentUser) {
                setLoading(false);
                return;
            }

            const result = await getOwnerProfile(
                currentUser.uid
            );

            if (result.success) {
                setOwnerProfile(result.data!);
            } else {
                setError(String(result.error));
            }

            setLoading(false);
        };

        fetchOwnerProfile();
    }, [currentUser, authLoading]);

    return {
        ownerProfile,
        loading,
        error,
    };
};