"use client";

import {
    TextareaHTMLAttributes,
} from "react";

import FormError from "./FormError";
import FormLabel from "./FormLabel";

interface TextAreaFieldProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {

    label: string;

    error?: string;

    helperText?: string;

    required?: boolean;

}

const TextAreaField = ({
    label,
    error,
    helperText,
    required = false,
    className = "",
    id,
    rows = 5,
    ...props
}: TextAreaFieldProps) => {

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

            <textarea
                id={inputId}
                rows={rows}
                className={`
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    bg-white
                    px-4
                    py-3
                    text-sm
                    text-slate-900
                    placeholder:text-slate-400
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
            />

            {helperText && !error && (

                <p className="text-sm text-slate-500">

                    {helperText}

                </p>

            )}

            <FormError message={error} />

        </div>

    );

};

export default TextAreaField;