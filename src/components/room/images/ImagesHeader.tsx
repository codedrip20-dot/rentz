"use client";

import {
    Camera,
    CheckCircle2,
    ImagePlus,
    Sparkles,
} from "lucide-react";

interface ImagesHeaderProps {
    imageCount: number;
    minImages?: number;
    maxImages?: number;
}

export default function ImagesHeader({
    imageCount,
    minImages = 2,
    maxImages = 10,
}: ImagesHeaderProps) {
    const completed = imageCount >= minImages;

    return (
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-4 shadow-sm sm:rounded-3xl sm:p-6 lg:p-8">

            {/* Background Glow */}

            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl sm:h-48 sm:w-48" />

            <div className="relative">

                {/* Top Row */}

                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-6">

                    <div className="flex min-w-0 gap-3 sm:gap-5">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-200 sm:h-16 sm:w-16 sm:rounded-2xl">

                            <Camera size={24} className="sm:h-[30px] sm:w-[30px]" />

                        </div>

                        <div className="min-w-0">

                            <div className="flex flex-wrap items-center gap-2">

                                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                                    Room Images
                                </h2>

                                <Sparkles
                                    size={18}
                                    className="text-amber-500 sm:h-5 sm:w-5"
                                />

                            </div>

                            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-3 sm:leading-7">

                                Upload bright, high-quality photos that
                                showcase every important part of your room.
                                Great photos help tenants trust your listing
                                and increase booking requests.

                            </p>

                        </div>

                    </div>

                    <div className="flex w-full flex-wrap gap-2 sm:gap-3 lg:w-auto">

                        <div className="min-w-[110px] flex-1 rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 sm:min-w-0 sm:flex-none sm:rounded-2xl sm:px-5 sm:py-3">

                            <p className="text-[10px] uppercase tracking-wide text-slate-500 sm:text-xs">
                                Uploaded
                            </p>

                            <p className="mt-1 text-lg font-bold text-blue-600 sm:text-xl">
                                {imageCount}/{maxImages}
                            </p>

                        </div>

                        <div
                            className={`
                                flex
                                min-w-0
                                flex-1
                                items-center
                                rounded-xl
                                border
                                px-4
                                py-2.5
                                sm:flex-none
                                sm:rounded-2xl
                                sm:px-5
                                sm:py-3
                                ${
                                    completed
                                        ? "border-emerald-200 bg-emerald-50"
                                        : "border-amber-200 bg-amber-50"
                                }
                            `}
                        >
                            <div className="flex items-center gap-2">

                                {completed ? (
                                    <CheckCircle2
                                        size={17}
                                        className="shrink-0 text-emerald-600"
                                    />
                                ) : (
                                    <ImagePlus
                                        size={17}
                                        className="shrink-0 text-amber-600"
                                    />
                                )}

                                <span
                                    className={`
                                        text-xs
                                        font-semibold
                                        sm:text-sm
                                        ${
                                            completed
                                                ? "text-emerald-700"
                                                : "text-amber-700"
                                        }
                                    `}
                                >
                                    {completed
                                        ? "Requirement Met"
                                        : `${minImages - imageCount} More Needed`}
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Tips */}

                <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 md:grid-cols-3">

                    <div className="rounded-xl bg-white/70 p-4 backdrop-blur sm:rounded-2xl">

                        <p className="font-semibold text-slate-800">
                            📸 Best Quality
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Use bright, high-resolution photos taken during
                            daylight.
                        </p>

                    </div>

                    <div className="rounded-xl bg-white/70 p-4 backdrop-blur sm:rounded-2xl">

                        <p className="font-semibold text-slate-800">
                            🛏️ Show Everything
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Include the bedroom, washroom, kitchen,
                            balcony, and furniture.
                        </p>

                    </div>

                    <div className="rounded-xl bg-white/70 p-4 backdrop-blur sm:rounded-2xl">

                        <p className="font-semibold text-slate-800">
                            ⭐ Cover Photo
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Your first uploaded image becomes the cover
                            photo for the listing.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}