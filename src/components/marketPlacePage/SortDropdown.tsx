"use client";

import { ArrowUpDown } from "lucide-react";

interface SortDropdownProps {
    value: string;
    onChange: (value: string) => void;
}

const sortOptions = [
    {
        label: "Recommended",
        value: "recommended",
    },
    {
        label: "Newest",
        value: "newest",
    },
    {
        label: "Price: Low to High",
        value: "price-asc",
    },
    {
        label: "Price: High to Low",
        value: "price-desc",
    },
];

export default function SortDropdown({
    value,
    onChange,
}: SortDropdownProps) {

    return (

        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">

            {/* Icon */}

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-2xl">

                <ArrowUpDown
                    size={17}
                    className="text-blue-300 sm:h-[18px] sm:w-[18px]"
                />

            </div>

            {/* Select */}

            <div className="relative min-w-0 flex-1 sm:flex-none">

                <select
                    value={value}
                    onChange={(e) =>
                        onChange(e.target.value)
                    }
                    className="
                        min-h-11
                        w-full
                        appearance-none
                        rounded-2xl
                        border
                        border-white/10
                        bg-slate-900/40
                        px-4
                        py-2.5
                        pr-11
                        text-sm
                        font-medium
                        text-white
                        backdrop-blur-2xl
                        outline-none
                        transition-all
                        duration-300

                        hover:border-blue-400/40

                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-500/20

                        sm:w-auto
                        sm:px-5
                        sm:py-3
                        sm:pr-12
                    "
                >

                    {sortOptions.map((option) => (

                        <option
                            key={option.value}
                            value={option.value}
                            className="bg-slate-900 text-white"
                        >

                            {option.label}

                        </option>

                    ))}

                </select>

                {/* Chevron */}

                <ArrowUpDown
                    size={14}
                    className="
                        pointer-events-none
                        absolute
                        right-3.5
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                        sm:right-4
                        sm:h-[15px]
                        sm:w-[15px]
                    "
                />

            </div>

        </div>

    );

}