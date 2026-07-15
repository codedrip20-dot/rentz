"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface RadioCardProps {

    title: string;

    description?: string;

    icon?: ReactNode;

    selected: boolean;

    disabled?: boolean;

    onClick: () => void;

    className?: string;

}

const RadioCard = ({
    title,
    description,
    icon,
    selected,
    disabled = false,
    onClick,
    className = "",
}: RadioCardProps) => {

    return (

        <motion.button
            type="button"
            whileHover={
                disabled
                    ? {}
                    : {
                          y: -2,
                          scale: 1.01,
                      }
            }
            whileTap={
                disabled
                    ? {}
                    : {
                          scale: 0.98,
                      }
            }
            transition={{
                duration: 0.15,
            }}
            onClick={onClick}
            disabled={disabled}
            className={`
                relative
                flex
                w-full
                flex-col
                items-center
                justify-center
                gap-4
                rounded-2xl
                border-2
                p-6
                text-center
                transition-all
                duration-200

                ${
                    selected
                        ? `
                            border-blue-600
                            bg-blue-50
                            shadow-lg
                            shadow-blue-100
                          `
                        : `
                            border-slate-200
                            bg-white
                            hover:border-blue-300
                            hover:bg-slate-50
                          `
                }

                ${
                    disabled
                        ? "cursor-not-allowed opacity-60"
                        : "cursor-pointer"
                }

                ${className}
            `}
        >

            {selected && (

                <motion.div
                    initial={{
                        scale: 0,
                    }}
                    animate={{
                        scale: 1,
                    }}
                    className="
                        absolute
                        right-4
                        top-4
                    "
                >

                    <CheckCircle2
                        size={22}
                        className="text-blue-600"
                    />

                </motion.div>

            )}

            {icon && (

                <div
                    className={`
                        rounded-2xl
                        p-4

                        ${
                            selected
                                ? "bg-blue-100 text-blue-600"
                                : "bg-slate-100 text-slate-600"
                        }
                    `}
                >

                    {icon}

                </div>

            )}

            <div>

                <h3
                    className={`
                        font-semibold

                        ${
                            selected
                                ? "text-blue-700"
                                : "text-slate-900"
                        }
                    `}
                >

                    {title}

                </h3>

                {description && (

                    <p className="mt-2 text-sm text-slate-500">

                        {description}

                    </p>

                )}

            </div>

        </motion.button>

    );

};

export default RadioCard;