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

        <div className="relative w-full min-w-0">

            {/* ======================================================
                Search Icon
            ====================================================== */}

            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 sm:left-5">

                <Search
                    size={19}
                    className="text-slate-400 transition-colors duration-300 sm:h-5 sm:w-5"
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
                    min-h-12
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-slate-900/40
                    py-3.5
                    pl-12
                    pr-12
                    text-sm
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

                    sm:py-4
                    sm:pl-14
                    sm:pr-14
                    sm:text-[15px]
                "
            />

            {/* ======================================================
                Loading Indicator
            ====================================================== */}

            {loading && (

                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 sm:right-5">

                    <Loader2
                        size={19}
                        className="animate-spin text-blue-400 sm:h-5 sm:w-5"
                    />

                </div>

            )}

        </div>

    );

}