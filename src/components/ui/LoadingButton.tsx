"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";

interface LoadingButtonProps
    extends HTMLMotionProps<"button"> {

    children: ReactNode;

    loading?: boolean;

    fullWidth?: boolean;

    leftIcon?: ReactNode;

    rightIcon?: ReactNode;

    variant?: "primary" | "secondary" | "danger";

    size?: "sm" | "md" | "lg";
}

const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
};

const variantClasses = {
    primary:
        "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-200",

    secondary:
        "bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-200",

    danger:
        "bg-red-600 text-white hover:bg-red-700 focus:ring-red-200",
};

const LoadingButton = ({
    children,

    loading = false,

    disabled = false,

    fullWidth = false,

    leftIcon,

    rightIcon,

    variant = "primary",

    size = "md",

    className = "",

    type = "button",

    whileTap,

    transition,

    ...props
}: LoadingButtonProps) => {

    const isDisabled = disabled || loading;

    return (

        <motion.button
            type={type}
            disabled={isDisabled}
            whileTap={
                whileTap ??
                {
                    scale: isDisabled ? 1 : 0.97,
                }
            }
            transition={
                transition ??
                {
                    duration: 0.15,
                }
            }
            className={`
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                font-semibold
                transition-all
                duration-200

                focus:outline-none
                focus:ring-4

                disabled:cursor-not-allowed
                disabled:opacity-60

                ${sizeClasses[size]}

                ${variantClasses[variant]}

                ${fullWidth ? "w-full" : ""}

                ${className}
            `}
            {...props}
        >

            {loading ? (

                <Loader2
                    size={18}
                    className="animate-spin"
                />

            ) : (

                leftIcon

            )}

            <span>

                {children}

            </span>

            {!loading && rightIcon}

        </motion.button>

    );

};

export default LoadingButton;