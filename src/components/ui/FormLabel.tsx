"use client";

import { ReactNode } from "react";

interface FormLabelProps {
    htmlFor: string;
    children: ReactNode;
    required?: boolean;
    icon?: ReactNode;
    className?: string;
}

const FormLabel = ({
    htmlFor,
    children,
    required = false,
    icon,
    className = "",
}: FormLabelProps) => {
    return (
        <label
            htmlFor={htmlFor}
            className={`
                mb-2
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                tracking-wide
                text-slate-700
                ${className}
            `}
        >
            {icon && (
                <span className="text-slate-500">
                    {icon}
                </span>
            )}

            <span>{children}</span>

            {required && (
                <span className="text-red-500">
                    *
                </span>
            )}
        </label>
    );
};

export default FormLabel;