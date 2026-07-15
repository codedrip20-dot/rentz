"use client";

import {
    forwardRef,
    InputHTMLAttributes,
    ReactNode,
} from "react";

import FormError from "./FormError";
import FormLabel from "./FormLabel";

interface InputFieldProps
    extends InputHTMLAttributes<HTMLInputElement> {

    label: string;

    error?: string;

    helperText?: string;

    icon?: ReactNode;

    required?: boolean;

    containerClassName?: string;

    inputClassName?: string;
}

const InputField = forwardRef<
    HTMLInputElement,
    InputFieldProps
>(
    (
        {
            id,

            label,

            error,

            helperText,

            icon,

            required = false,

            containerClassName = "",

            inputClassName = "",

            disabled,

            ...props
        },

        ref
    ) => {

        return (

            <div
                className={`
                    space-y-2
                    ${containerClassName}
                `}
            >

                <FormLabel
                    htmlFor={id ?? ""}
                    required={required}
                    icon={icon}
                >

                    {label}

                </FormLabel>

                <input
                    ref={ref}
                    id={id}
                    disabled={disabled}
                    aria-invalid={!!error}
                    aria-describedby={
                        error
                            ? `${id}-error`
                            : undefined
                    }
                    className={`
                        w-full
                        rounded-2xl
                        border
                        px-4
                        py-3
                        text-sm
                        text-slate-800
                        placeholder:text-slate-400
                        transition-all
                        duration-200
                        outline-none

                        ${
                            error
                                ? `
                                    border-red-300
                                    bg-red-50
                                    focus:border-red-500
                                    focus:ring-4
                                    focus:ring-red-100
                                  `
                                : `
                                    border-slate-300
                                    bg-white
                                    focus:border-blue-500
                                    focus:ring-4
                                    focus:ring-blue-100
                                  `
                        }

                        ${
                            disabled
                                ? `
                                    cursor-not-allowed
                                    bg-slate-100
                                    opacity-70
                                  `
                                : ""
                        }

                        ${inputClassName}
                    `}
                    {...props}
                />

                {helperText && !error && (

                    <p
                        className="
                            text-xs
                            text-slate-500
                        "
                    >

                        {helperText}

                    </p>

                )}

                <FormError
                    message={error}
                />

            </div>

        );

    }
);

InputField.displayName =
    "InputField";

export default InputField;