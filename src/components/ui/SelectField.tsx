"use client";

import { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

import FormError from "./FormError";
import FormLabel from "./FormLabel";

interface Option {
    label: string;
    value: string;
}

interface SelectFieldProps
    extends Omit<
        SelectHTMLAttributes<HTMLSelectElement>,
        "children"
    > {

    label: string;

    options: Option[];

    placeholder?: string;

    error?: string;

    required?: boolean;

    helperText?: string;

}

const SelectField = ({
    label,
    options,
    placeholder = "Select an option",
    error,
    required = false,
    helperText,
    className = "",
    id,
    ...props
}: SelectFieldProps) => {

    const inputId =
        id ??
        label
            .toLowerCase()
            .replace(/\s+/g, "-");

    return (

        <div className="space-y-2">

            <FormLabel
                htmlFor={inputId}
                required={required}
            >
                {label}
            </FormLabel>

            <div className="relative">

                <select
                    id={inputId}
                    className={`
                        w-full
                        appearance-none
                        rounded-2xl
                        border
                        bg-white
                        px-4
                        py-3
                        pr-12
                        text-sm
                        text-slate-900
                        outline-none
                        transition-all
                        duration-200

                        ${
                            error
                                ? `
                                    border-red-500
                                    focus:border-red-500
                                    focus:ring-4
                                    focus:ring-red-100
                                  `
                                : `
                                    border-slate-300
                                    hover:border-slate-400
                                    focus:border-blue-600
                                    focus:ring-4
                                    focus:ring-blue-100
                                  `
                        }

                        disabled:cursor-not-allowed
                        disabled:bg-slate-100
                        disabled:text-slate-400

                        ${className}
                    `}
                    {...props}
                >

                    <option value="">
                        {placeholder}
                    </option>

                    {options.map((option) => (

                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>

                    ))}

                </select>

                <ChevronDown
                    size={18}
                    className="
                        pointer-events-none
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-slate-500
                    "
                />

            </div>

            {helperText && !error && (

                <p className="text-sm text-slate-500">

                    {helperText}

                </p>

            )}

            <FormError message={error} />

        </div>

    );

};

export default SelectField;