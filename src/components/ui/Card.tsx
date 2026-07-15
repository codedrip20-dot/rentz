"use client";

import { forwardRef, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type Padding = "none" | "sm" | "md" | "lg";

interface CardProps extends HTMLMotionProps<"div"> {
    children: ReactNode;

    hover?: boolean;

    glass?: boolean;

    shadow?: boolean;

    border?: boolean;

    padding?: Padding;
}

const paddingStyles: Record<Padding, string> = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
};

const Card = forwardRef<HTMLDivElement, CardProps>(
    (
        {
            children,

            hover = false,

            glass = false,

            shadow = true,

            border = true,

            padding = "md",

            className = "",

            ...props
        },
        ref
    ) => {

        return (

            <motion.div
                ref={ref}
                whileHover={
                    hover
                        ? {
                              y: -4,
                              scale: 1.01,
                          }
                        : undefined
                }
                transition={{
                    duration: 0.2,
                    ease: "easeOut",
                }}
                className={`
                    rounded-3xl

                    ${border ? "border border-slate-200" : ""}

                    ${
                        glass
                            ? `
                                bg-white/80
                                backdrop-blur-xl
                              `
                            : `
                                bg-white
                              `
                    }

                    ${
                        shadow
                            ? `
                                shadow-lg
                                shadow-slate-200/60
                              `
                            : ""
                    }

                    ${paddingStyles[padding]}

                    transition-all
                    duration-300

                    ${className}
                `}
                {...props}
            >

                {children}

            </motion.div>

        );

    }
);

Card.displayName = "Card";

export default Card;