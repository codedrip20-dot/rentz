"use client";

import { useEffect, useState } from "react";

/**
 * Delays updating a value until after the specified delay.
 *
 * Useful for:
 * - Search inputs
 * - API requests
 * - Google Places Autocomplete
 * - Expensive filtering operations
 */
export function useDebounce<T>(
    value: T,
    delay = 300
): T {
    const [debouncedValue, setDebouncedValue] =
        useState<T>(value);

    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;