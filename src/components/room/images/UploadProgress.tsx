"use client";

import {
    CheckCircle2,
    Loader2,
    UploadCloud,
} from "lucide-react";

interface UploadProgressProps {
    progress: number;
    uploading: boolean;
}

export default function UploadProgress({
    progress,
    uploading,
}: UploadProgressProps) {
    if (!uploading && progress <= 0) {
        return null;
    }

    const completed = progress >= 100;

    return (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            {/* Header */}

            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">

                <div className="flex items-center gap-4">

                    <div
                        className={`
                            flex h-12 w-12 items-center justify-center rounded-2xl
                            ${
                                completed
                                    ? "bg-emerald-100 text-emerald-600"
                                    : "bg-blue-100 text-blue-600"
                            }
                        `}
                    >
                        {completed ? (
                            <CheckCircle2 size={24} />
                        ) : (
                            <UploadCloud size={24} />
                        )}
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                            {completed
                                ? "Upload Complete"
                                : "Uploading Room Images"}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                            {completed
                                ? "Your room images have been uploaded successfully."
                                : "Optimizing and securely uploading your images..."}
                        </p>
                    </div>

                </div>

                {!completed && (
                    <Loader2
                        size={22}
                        className="animate-spin text-blue-600"
                    />
                )}

            </div>

            {/* Progress Section */}

            <div className="space-y-5 px-6 py-6">

                <div className="flex items-center justify-between">

                    <span className="text-sm font-medium text-slate-600">
                        Upload Progress
                    </span>

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600">
                        {progress}%
                    </span>

                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                    <div
                        className="
                            h-full
                            rounded-full
                            bg-gradient-to-r
                            from-blue-600
                            via-cyan-500
                            to-sky-400
                            transition-all
                            duration-500
                        "
                        style={{
                            width: `${progress}%`,
                        }}
                    />

                </div>

                <div className="flex items-center justify-between text-xs text-slate-500">

                    <span>
                        {completed
                            ? "Finished"
                            : "Uploading images..."}
                    </span>

                    <span>
                        {completed
                            ? "100%"
                            : `${progress}% Complete`}
                    </span>

                </div>

            </div>

        </div>
    );
}