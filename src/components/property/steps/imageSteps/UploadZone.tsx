"use client";

import { motion } from "framer-motion";
import { ImagePlus, UploadCloud } from "lucide-react";

interface UploadZoneProps {
    onSelect: () => void;
    disabled?: boolean;
}

export default function UploadZone({
    onSelect,
    disabled = false,
}: UploadZoneProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.3,
            }}
            onClick={!disabled ? onSelect : undefined}
            className={`
                group
                flex
                min-h-[320px]
                flex-col
                items-center
                justify-center
                rounded-2xl
                border-2
                border-dashed
                border-slate-300
                bg-slate-50
                p-8
                text-center
                transition-all
                duration-300

                ${
                    disabled
                        ? "cursor-not-allowed opacity-60"
                        : "cursor-pointer hover:border-blue-500 hover:bg-blue-50"
                }
            `}
        >
            <div
                className="
                    mb-6
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-100
                    text-blue-600
                    transition-transform
                    duration-300
                    group-hover:scale-110
                "
            >
                {disabled ? (
                    <UploadCloud className="h-10 w-10 animate-pulse" />
                ) : (
                    <ImagePlus className="h-10 w-10" />
                )}
            </div>

            <h3 className="text-xl font-semibold text-slate-900">
                {disabled
                    ? "Uploading Images..."
                    : "Upload Property Images"}
            </h3>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                Drag and drop your images here or click anywhere in this
                area to browse from your device.
            </p>

            <div className="mt-8 rounded-xl bg-white px-5 py-3 shadow-sm ring-1 ring-slate-200">
                <span className="text-sm font-medium text-blue-600">
                    Browse Files
                </span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-slate-500">
                <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                    JPG
                </span>

                <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                    PNG
                </span>

                <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                    WEBP
                </span>

                <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                    Max 10 MB
                </span>
            </div>
        </motion.div>
    );
}