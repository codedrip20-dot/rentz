"use client";

import type { ReactNode } from "react";

interface DropdownProps {
    open: boolean;
    children: ReactNode;
    className?: string;
}

export default function Dropdown({
    open,
    children,
    className = "",
}: DropdownProps) {
    if (!open) {
        return null;
    }

    return (
        <div
            role="listbox"
            className={`
                absolute
                left-0
                right-0
                top-full
                mt-2
                z-50

                overflow-hidden

                rounded-xl
                border
                border-slate-200

                bg-white

                shadow-lg
                ring-1
                ring-black/5

                animate-in
                fade-in
                slide-in-from-top-2
                duration-150

                ${className}
            `}
        >
            {children}
        </div>
    );
}