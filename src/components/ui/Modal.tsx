"use client";

import { ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
    open: boolean;

    onClose: () => void;

    title?: string;

    children: ReactNode;

    width?: "sm" | "md" | "lg" | "xl";

    closeOnOverlayClick?: boolean;

    showCloseButton?: boolean;
}

const widthClasses = {
    sm: "max-w-md",
    md: "max-w-xl",
    lg: "max-w-3xl",
    xl: "max-w-5xl",
};

const Modal = ({
    open,
    onClose,
    title,
    children,
    width = "md",
    closeOnOverlayClick = true,
    showCloseButton = true,
}: ModalProps) => {

    useEffect(() => {

        if (!open) return;

        document.body.style.overflow = "hidden";

        const handleEscape = (event: KeyboardEvent) => {

            if (event.key === "Escape") {
                onClose();
            }

        };

        window.addEventListener("keydown", handleEscape);

        return () => {

            document.body.style.overflow = "";

            window.removeEventListener(
                "keydown",
                handleEscape
            );

        };

    }, [open, onClose]);

    return (

        <AnimatePresence>

            {open && (

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="
                        fixed
                        inset-0
                        z-50
                        flex
                        items-center
                        justify-center
                        bg-black/40
                        backdrop-blur-sm
                        p-6
                    "
                    onClick={() => {

                        if (closeOnOverlayClick) {
                            onClose();
                        }

                    }}
                >

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.95,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.95,
                            y: 20,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className={`
                            w-full
                            rounded-3xl
                            bg-white
                            shadow-2xl
                            ${widthClasses[width]}
                        `}
                    >

                        {(title || showCloseButton) && (

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    border-b
                                    border-slate-200
                                    px-8
                                    py-5
                                "
                            >

                                <h2 className="text-xl font-semibold text-slate-900">

                                    {title}

                                </h2>

                                {showCloseButton && (

                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="
                                            rounded-xl
                                            p-2
                                            transition
                                            hover:bg-slate-100
                                        "
                                    >

                                        <X
                                            size={20}
                                            className="text-slate-600"
                                        />

                                    </button>

                                )}

                            </div>

                        )}

                        <div className="p-8">

                            {children}

                        </div>

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>

    );

};

export default Modal;