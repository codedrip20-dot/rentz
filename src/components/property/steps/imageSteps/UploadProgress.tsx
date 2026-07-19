"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface UploadProgressProps {
    progress: number;
}

export default function UploadProgress({
    progress,
}: UploadProgressProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 12,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                y: 12,
            }}
            transition={{
                duration: 0.25,
            }}
            className="space-y-3 rounded-2xl border border-blue-100 bg-blue-50 p-5"
        >
            <div className="flex items-center gap-3">
                <Loader2 className="h-5 w-5 animate-spin text-blue-600" />

                <div>
                    <p className="font-medium text-slate-900">
                        Uploading Images...
                    </p>

                    <p className="text-sm text-slate-600">
                        Please dont close this page while your images are being uploaded.
                    </p>
                </div>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                <motion.div
                    className="h-full rounded-full bg-blue-600"
                    initial={{
                        width: 0,
                    }}
                    animate={{
                        width: `${progress}%`,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                />
            </div>

            <div className="flex justify-between text-sm">
                <span className="text-slate-500">
                    Upload Progress
                </span>

                <span className="font-semibold text-blue-600">
                    {progress}%
                </span>
            </div>
        </motion.div>
    );
}