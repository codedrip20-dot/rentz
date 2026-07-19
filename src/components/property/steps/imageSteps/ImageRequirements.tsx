"use client";

import { motion } from "framer-motion";
import {
    Camera,
    CheckCircle2,
    ImageIcon,
    Info,
    ShieldCheck,
} from "lucide-react";

export default function ImageRequirements() {
    const requirements = [
        "Upload at least 2 property images.",
        "The first image should clearly showcase the property.",
        "Use bright, high-resolution photos for the best results.",
        "Supported formats: JPG, PNG and WEBP.",
        "Maximum file size: 10 MB per image.",
        "Avoid blurry, duplicated or watermarked images.",
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="
                mt-8
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
            "
        >
            <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Info className="h-6 w-6" />
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                        Image Guidelines
                    </h3>

                    <p className="text-sm text-slate-500">
                        Help tenants understand your property by uploading
                        clear and informative images.
                    </p>
                </div>
            </div>

            <div className="mt-6 space-y-4">
                {requirements.map((requirement) => (
                    <div
                        key={requirement}
                        className="flex items-start gap-3"
                    >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />

                        <p className="text-sm leading-6 text-slate-600">
                            {requirement}
                        </p>
                    </div>
                ))}
            </div>

            <div
                className="
                    mt-8
                    grid
                    gap-4
                    md:grid-cols-3
                "
            >
                <div className="rounded-xl bg-slate-50 p-4">
                    <Camera className="mb-3 h-6 w-6 text-blue-600" />

                    <h4 className="font-semibold text-slate-900">
                        High Quality
                    </h4>

                    <p className="mt-2 text-sm text-slate-600">
                        Use bright and sharp images taken in good lighting.
                    </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                    <ImageIcon className="mb-3 h-6 w-6 text-blue-600" />

                    <h4 className="font-semibold text-slate-900">
                        Cover Image
                    </h4>

                    <p className="mt-2 text-sm text-slate-600">
                        Choose your best photo as the property's cover image.
                    </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                    <ShieldCheck className="mb-3 h-6 w-6 text-blue-600" />

                    <h4 className="font-semibold text-slate-900">
                        Authentic Photos
                    </h4>

                    <p className="mt-2 text-sm text-slate-600">
                        Upload real photos of your property to build trust
                        with potential tenants.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}