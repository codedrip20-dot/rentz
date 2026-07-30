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
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-8 shadow-sm">

            {/* Background Glow */}

            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-100/40 blur-3xl" />

            <div className="relative">

                {/* Top Row */}

                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                    <div className="flex gap-5">

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-200">

                            <Camera size={30} />

                        </div>

                        <div>

                            <div className="flex items-center gap-2">

                                <h2 className="text-3xl font-bold text-slate-900">
                                    Room Images
                                </h2>

                                <Sparkles
                                    size={20}
                                    className="text-amber-500"
                                />

                            </div>

                            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">

                                Upload bright, high-quality photos that
                                showcase every important part of your room.
                                Great photos help tenants trust your listing
                                and increase booking requests.

                            </p>

                        </div>

                    </div>

                    <div className="flex flex-wrap gap-3">

                        <div className="rounded-2xl border border-blue-100 bg-blue-50 px-5 py-3">

                            <p className="text-xs uppercase tracking-wide text-slate-500">
                                Uploaded
                            </p>

                            <p className="mt-1 text-xl font-bold text-blue-600">
                                {imageCount}/{maxImages}
                            </p>

                        </div>

                        <div
                            className={`
                                rounded-2xl
                                border
                                px-5
                                py-3
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
                                        size={18}
                                        className="text-emerald-600"
                                    />
                                ) : (
                                    <ImagePlus
                                        size={18}
                                        className="text-amber-600"
                                    />
                                )}

                                <span
                                    className={`
                                        text-sm
                                        font-semibold
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

                <div className="mt-8 grid gap-4 md:grid-cols-3">

                    <div className="rounded-2xl bg-white/70 p-4 backdrop-blur">

                        <p className="font-semibold text-slate-800">
                            📸 Best Quality
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Use bright, high-resolution photos taken during
                            daylight.
                        </p>

                    </div>

                    <div className="rounded-2xl bg-white/70 p-4 backdrop-blur">

                        <p className="font-semibold text-slate-800">
                            🛏️ Show Everything
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Include the bedroom, washroom, kitchen,
                            balcony, and furniture.
                        </p>

                    </div>

                    <div className="rounded-2xl bg-white/70 p-4 backdrop-blur">

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