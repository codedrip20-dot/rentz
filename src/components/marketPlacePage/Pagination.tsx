"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;

    onPrevious: () => void;
    onNext: () => void;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPrevious,
    onNext,
    onPageChange,
}: PaginationProps) {

    if (totalPages <= 1) {
        return null;
    }

    const pages: (number | "...")[] = [];

    for (let i = 1; i <= totalPages; i++) {

        if (
            i === 1 ||
            i === totalPages ||
            Math.abs(i - currentPage) <= 1
        ) {
            pages.push(i);
        } else if (
            pages[pages.length - 1] !== "..."
        ) {
            pages.push("...");
        }

    }

    return (

        <nav className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">

            {/* Results */}

            <p className="text-sm text-slate-400">

                Page{" "}

                <span className="font-semibold text-white">

                    {currentPage}

                </span>

                {" "}of{" "}

                <span className="font-semibold text-white">

                    {totalPages}

                </span>

            </p>

            {/* Controls */}

            <div className="flex items-center gap-2">

                {/* Previous */}

                <button
                    type="button"
                    onClick={onPrevious}
                    disabled={currentPage === 1}
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/10
                        bg-slate-900/40
                        text-white
                        backdrop-blur-2xl
                        transition-all
                        duration-300
                        hover:border-blue-400/40
                        hover:bg-slate-900/60
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                    "
                >

                    <ChevronLeft size={20} />

                </button>

                {/* Pages */}

                {pages.map((page, index) => {

                    if (page === "...") {

                        return (

                            <span
                                key={index}
                                className="px-2 text-slate-500"
                            >

                                ...

                            </span>

                        );

                    }

                    return (

                        <button
                            key={page}
                            type="button"
                            onClick={() =>
                                onPageChange(page)
                            }
                            className={`
                                h-12
                                w-12
                                rounded-2xl
                                text-sm
                                font-semibold
                                transition-all
                                duration-300

                                ${
                                    currentPage === page
                                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_10px_30px_rgba(37,99,235,.45)]"
                                        : "border border-white/10 bg-slate-900/40 text-slate-300 backdrop-blur-2xl hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-slate-900/60 hover:text-white"
                                }
                            `}
                        >

                            {page}

                        </button>

                    );

                })}

                {/* Next */}

                <button
                    type="button"
                    onClick={onNext}
                    disabled={
                        currentPage === totalPages
                    }
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/10
                        bg-slate-900/40
                        text-white
                        backdrop-blur-2xl
                        transition-all
                        duration-300
                        hover:border-blue-400/40
                        hover:bg-slate-900/60
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                    "
                >

                    <ChevronRight size={20} />

                </button>

            </div>

        </nav>

    );

}