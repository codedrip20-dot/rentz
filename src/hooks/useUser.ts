"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthContext";

import { getUserData } from "@/lib/firebase/user";

import { UserData } from "@/types/user";

export const useUser = () => {
    const { currentUser } = useAuth();

    const [userData, setUserData] =
        useState<UserData | null>(null);

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState<Error | null>(null);

    useEffect(() => {
        let mounted = true;

        const loadUser = async () => {
            if (!currentUser) {
                if (mounted) {
                    setUserData(null);
                }
                return;
            }

            try {
                setLoading(true);

                const data = await getUserData(
                    currentUser.uid
                );

                if (mounted) {
                    setUserData(data);
                }
            } catch (err) {
                if (mounted) {
                    setError(err as Error);
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        };

        void loadUser();

        return () => {
            mounted = false;
        };
    }, [currentUser]);

    return {
        userData,
        loading,
        error,
    };
};