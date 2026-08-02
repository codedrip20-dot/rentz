"use client";

import {
    Loader2,
    Search,
} from "lucide-react";

interface SearchInputProps {
    value: string;
    loading?: boolean;
    placeholder?: string;

    onChange: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

export default function SearchInput({
    value,
    loading = false,
    placeholder = "Search by city, locality or landmark...",
    onChange,
    onFocus,
    onBlur,
}: SearchInputProps) {

    return (

        <div className="relative w-full">

            {/* ======================================================
                Search Icon
            ====================================================== */}

            <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2">

                <Search
                    size={20}
                    className="text-slate-400 transition-colors duration-300"
                />

            </div>

            {/* ======================================================
                Input
            ====================================================== */}

            <input
                type="text"
                value={value}
                placeholder={placeholder}
                autoComplete="off"
                onChange={(e) => onChange(e.target.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-slate-900/40
                    py-4
                    pl-14
                    pr-14
                    text-[15px]
                    font-medium
                    text-white
                    placeholder:text-slate-500
                    backdrop-blur-2xl
                    outline-none
                    transition-all
                    duration-300

                    hover:border-white/20

                    focus:border-blue-500
                    focus:bg-slate-900/60
                    focus:ring-4
                    focus:ring-blue-500/20
                "
            />

            {/* ======================================================
                Loading Indicator
            ====================================================== */}

            {loading && (

                <div className="absolute right-5 top-1/2 -translate-y-1/2">

                    <Loader2
                        size={20}
                        className="animate-spin text-blue-400"
                    />

                </div>

            )}

        </div>

    );

}