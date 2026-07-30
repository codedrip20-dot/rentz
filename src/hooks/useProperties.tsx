"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthContext";
import { fetchProperties } from "@/lib/firebase/property";
import { Property } from "@/types/property";

export const useProperties = () => {
    const { currentUser, authLoading } = useAuth();

    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProperties = async () => {
            if (authLoading) return;

            if (!currentUser) {
                setProperties([]);
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                const data = await fetchProperties(currentUser.uid);

                setProperties(data);
            } catch (err) {
                setError(
                    err instanceof Error
                        ? err.message
                        : "Failed to fetch properties."
                );

                setProperties([]);
            } finally {
                setLoading(false);
            }
        };

        void loadProperties();
    }, [currentUser, authLoading]);

    return {
        properties,
        loading,
        error,
    };
};