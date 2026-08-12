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
        <div className="relative w-full">
            <Search
                className="
                    pointer-events-none
                    absolute
                    left-3.5
                    top-1/2
                    h-5
                    w-5
                    -translate-y-1/2
                    text-slate-400

                    sm:left-4
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
                    min-h-12
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    py-3
                    pl-11
                    pr-11
                    text-sm
                    text-black
                    shadow-sm
                    outline-none
                    transition

                    placeholder:text-slate-400

                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100

                    sm:pl-12
                    sm:pr-12
                "
            />

            {loading && (
                <Loader2
                    className="
                        pointer-events-none
                        absolute
                        right-3.5
                        top-1/2
                        h-5
                        w-5
                        -translate-y-1/2
                        animate-spin
                        text-blue-600

                        sm:right-4
                    "
                />
            )}
        </div>
    );
}