"use client";

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

export default function ImagesHeader() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
        >
            <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <ImageIcon className="h-6 w-6" />
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Property Images
                    </h2>

                    <p className="max-w-2xl text-sm leading-6 text-slate-600">
                        Showcase your property with clear, high-quality photos.
                        Great images help tenants understand the space, build
                        trust, and significantly improve the chances of receiving
                        inquiries.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}