"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { InputHTMLAttributes } from "react";

interface CheckboxProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "type"
    > {

    label: string;

    description?: string;

    error?: string;

}

const Checkbox = ({
    id,
    label,
    description,
    error,
    checked,
    disabled,
    className = "",
    ...props
}: CheckboxProps) => {

    return (

        <label
            htmlFor={id}
            className={`
                flex
                cursor-pointer
                items-start
                gap-4
                rounded-2xl
                border
                p-4
                transition-all
                duration-200

                ${
                    checked
                        ? "border-blue-500 bg-blue-50"
                        : "border-slate-200 bg-white"
                }

                ${
                    disabled
                        ? "cursor-not-allowed opacity-60"
                        : "hover:border-blue-300 hover:bg-slate-50"
                }

                ${className}
            `}
        >

            <input
                id={id}
                type="checkbox"
                checked={checked}
                disabled={disabled}
                className="sr-only"
                {...props}
            />

            <motion.div
                initial={false}
                animate={{
                    backgroundColor: checked
                        ? "#2563eb"
                        : "#ffffff",
                    borderColor: checked
                        ? "#2563eb"
                        : "#cbd5e1",
                }}
                className="
                    mt-0.5
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-md
                    border
                    flex-shrink-0
                "
            >

                {checked && (

                    <motion.div
                        initial={{
                            scale: 0,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        exit={{
                            scale: 0,
                            opacity: 0,
                        }}
                    >

                        <Check
                            size={16}
                            className="text-white"
                        />

                    </motion.div>

                )}

            </motion.div>

            <div className="flex-1">

                <p className="font-medium text-slate-900">

                    {label}

                </p>

                {description && (

                    <p className="mt-1 text-sm text-slate-500">

                        {description}

                    </p>

                )}

                {error && (

                    <p className="mt-2 text-sm font-medium text-red-600">

                        {error}

                    </p>

                )}

            </div>

        </label>

    );

};

export default Checkbox;