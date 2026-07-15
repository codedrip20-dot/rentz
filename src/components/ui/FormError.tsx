"use client";

import { AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormErrorProps {
    message?: string;
    className?: string;
}

const FormError = ({
    message,
    className = "",
}: FormErrorProps) => {

    return (

        <AnimatePresence>

            {message && (

                <motion.div
                    initial={{
                        opacity: 0,
                        y: -5,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: -5,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className={`
                        mt-2
                        flex
                        items-start
                        gap-2
                        rounded-xl
                        border
                        border-red-200
                        bg-red-50
                        px-3
                        py-2
                        text-sm
                        text-red-600
                        ${className}
                    `}
                >

                    <AlertCircle
                        size={16}
                        className="mt-0.5 shrink-0"
                    />

                    <span>

                        {message}

                    </span>

                </motion.div>

            )}

        </AnimatePresence>

    );

};

export default FormError;