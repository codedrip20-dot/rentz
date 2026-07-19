"use client";

import { motion } from "framer-motion";
import { ImagePlus } from "lucide-react";

interface EmptyStateProps {
    minimumImages?: number;
}

export default function EmptyState({
    minimumImages = 2,
}: EmptyStateProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="
                flex
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-dashed
                border-slate-300
                bg-slate-50
                px-8
                py-16
                text-center
            "
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
                "
            >
                <ImagePlus className="h-10 w-10" />
            </div>

            <h3 className="text-2xl font-semibold text-slate-900">
                No Images Uploaded
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
                Upload high-quality photos to showcase your property.
                Listings with multiple clear images receive more
                attention and help tenants make informed decisions.
            </p>

            <div
                className="
                    mt-8
                    rounded-xl
                    bg-white
                    px-6
                    py-4
                    shadow-sm
                    ring-1
                    ring-slate-200
                "
            >
                <p className="text-sm text-slate-600">
                    Minimum Required
                </p>

                <p className="mt-1 text-3xl font-bold text-blue-600">
                    {minimumImages}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                    Property Images
                </p>
            </div>

            <div
                className="
                    mt-8
                    flex
                    flex-wrap
                    justify-center
                    gap-3
                "
            >
                <span className="rounded-full bg-white px-4 py-2 text-sm text-slate-600 ring-1 ring-slate-200">
                    JPG
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-sm text-slate-600 ring-1 ring-slate-200">
                    PNG
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-sm text-slate-600 ring-1 ring-slate-200">
                    WEBP
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-sm text-slate-600 ring-1 ring-slate-200">
                    Max 10 MB
                </span>
            </div>
        </motion.div>
    );
}