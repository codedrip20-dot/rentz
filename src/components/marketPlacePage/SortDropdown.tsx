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

        <div className="flex items-center gap-3">

            {/* Icon */}

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-2xl">

                <ArrowUpDown
                    size={18}
                    className="text-blue-300"
                />

            </div>

            {/* Select */}

            <div className="relative">

                <select
                    value={value}
                    onChange={(e) =>
                        onChange(e.target.value)
                    }
                    className="
                        appearance-none
                        rounded-2xl
                        border
                        border-white/10
                        bg-slate-900/40
                        px-5
                        py-3
                        pr-12
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
                    size={15}
                    className="
                        pointer-events-none
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                    "
                />

            </div>

        </div>

    );

}