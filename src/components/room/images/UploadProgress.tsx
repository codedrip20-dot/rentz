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
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl">

            {/* Header */}

            <div className="flex items-start justify-between gap-3 border-b border-slate-100 px-4 py-4 sm:items-center sm:px-6 sm:py-5">

                <div className="flex min-w-0 items-start gap-3 sm:gap-4">

                    <div
                        className={`
                            flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 sm:rounded-2xl
                            ${
                                completed
                                    ? "bg-emerald-100 text-emerald-600"
                                    : "bg-blue-100 text-blue-600"
                            }
                        `}
                    >
                        {completed ? (
                            <CheckCircle2
                                size={21}
                                className="sm:h-6 sm:w-6"
                            />
                        ) : (
                            <UploadCloud
                                size={21}
                                className="sm:h-6 sm:w-6"
                            />
                        )}
                    </div>

                    <div className="min-w-0">

                        <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                            {completed
                                ? "Upload Complete"
                                : "Uploading Room Images"}
                        </h3>

                        <p className="mt-1 text-sm leading-5 text-slate-500">
                            {completed
                                ? "Your room images have been uploaded successfully."
                                : "Optimizing and securely uploading your images..."}
                        </p>

                    </div>

                </div>

                {!completed && (
                    <Loader2
                        size={20}
                        className="mt-1 shrink-0 animate-spin text-blue-600 sm:mt-0 sm:h-[22px] sm:w-[22px]"
                    />
                )}

            </div>

            {/* Progress Section */}

            <div className="space-y-4 px-4 py-5 sm:space-y-5 sm:px-6 sm:py-6">

                <div className="flex items-center justify-between gap-3">

                    <span className="text-sm font-medium text-slate-600">
                        Upload Progress
                    </span>

                    <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 sm:text-sm">
                        {progress}%
                    </span>

                </div>

                <div className="h-2.5 overflow-hidden rounded-full bg-slate-200 sm:h-3">

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

                <div className="flex items-center justify-between gap-3 text-[11px] text-slate-500 sm:text-xs">

                    <span>
                        {completed
                            ? "Finished"
                            : "Uploading images..."}
                    </span>

                    <span className="shrink-0">
                        {completed
                            ? "100%"
                            : `${progress}% Complete`}
                    </span>

                </div>

            </div>

        </div>
    );
}