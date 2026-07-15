
"use client";

import { Search, Loader2 } from "lucide-react";

interface AddressInputProps {
    value: string;
    onChange: (value: string) => void;
    loading: boolean;
    placeholder?: string;
}

export default function AddressInput({
    value,
    onChange,
    loading,
    placeholder = "Search for a property address...",
}: AddressInputProps) {
    return (
        <div className="relative">
            <Search
                className="
                    absolute
                    left-4
                    top-1/2
                    h-5
                    w-5
                    -translate-y-1/2
                    text-slate-400
                "
            />

            <input
                type="text"
                value={value}
                onChange={(event) =>
                    onChange(event.target.value)
                }
                placeholder={placeholder}
                autoComplete="off"
                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    py-3
                    pl-12
                    pr-12
                    text-sm
                    shadow-sm
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100
                "
            />

            {loading && (
                <Loader2
                    className="
                        absolute
                        right-4
                        top-1/2
                        h-5
                        w-5
                        -translate-y-1/2
                        animate-spin
                        text-blue-600
                    "
                />
            )}
        </div>
    );
}