"use client";

import { ImageIcon, Loader2, Sparkles } from "lucide-react";

import { RoomImage } from "@/types/roomTypes";

import ImageCard from "./ImageCard";

interface ImageGridProps {
    images: RoomImage[];
    uploading?: boolean;
    onDelete: (publicId: string) => void;
    onSetCover?: (publicId: string) => void;
}

export default function ImageGrid({
    images,
    uploading = false,
    onDelete,
    onSetCover,
}: ImageGridProps) {
    if (images.length === 0) {
        return (
            <div className="relative overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-14 sm:rounded-3xl sm:px-8 sm:py-20">

                {/* Background Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />

                <div className="relative flex flex-col items-center text-center">

                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 shadow-lg shadow-blue-100 sm:h-24 sm:w-24">

                        <ImageIcon
                            size={36}
                            className="text-blue-600 sm:h-[42px] sm:w-[42px]"
                        />

                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-900 sm:mt-8 sm:text-2xl">

                        Your Gallery is Empty

                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 sm:leading-7">

                        Upload high-quality room images to showcase your
                        property beautifully. Great photos increase bookings
                        and build trust with potential tenants.

                    </p>

                    <div className="mt-6 rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-600 sm:mt-8 sm:px-5 sm:text-sm">

                        Upload your first room image

                    </div>

                </div>

            </div>
        );
    }

    return (
        <div className="space-y-6 sm:space-y-8">

            {/* Header */}

            <div className="flex flex-col gap-4 sm:gap-5 md:flex-row md:items-center md:justify-between">

                <div className="min-w-0">

                    <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">

                        Uploaded Images

                    </h2>

                    <p className="mt-2 text-sm text-slate-500">

                        {images.length} image
                        {images.length > 1 ? "s" : ""} uploaded

                    </p>

                </div>

                <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:gap-3">

                    <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 sm:px-4 sm:text-sm">

                        {images.length}/10 Images

                    </div>

                    {uploading && (

                        <div className="flex items-center gap-2 rounded-full bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-200 sm:px-4 sm:text-sm">

                            <Loader2
                                size={15}
                                className="animate-spin sm:h-4 sm:w-4"
                            />

                            Uploading...

                        </div>

                    )}

                </div>

            </div>

            {/* Tip Card */}

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-4 sm:p-5">

                <div className="flex items-start gap-3">

                    <div className="shrink-0 rounded-xl bg-blue-100 p-2">

                        <Sparkles
                            size={18}
                            className="text-blue-600"
                        />

                    </div>

                    <div className="min-w-0">

                        <h4 className="font-semibold text-slate-800">

                            Pro Tip

                        </h4>

                        <p className="mt-1 text-sm leading-6 text-slate-600">

                            Upload bright, landscape-oriented images that
                            clearly show the room, washroom, kitchen, and
                            furniture. High-quality photos receive more
                            inquiries.

                        </p>

                    </div>

                </div>

            </div>

            {/* Image Grid */}

            <div
                className="
                    grid
                    grid-cols-1
                    gap-4
                    sm:grid-cols-2
                    sm:gap-6
                    lg:grid-cols-3
                    xl:grid-cols-4
                "
            >
                {images.map((image, index) => (
                    <ImageCard
                        key={image.publicId || image.url || index}
                        image={image}
                        index={index}
                        onDelete={onDelete}
                        onSetCover={onSetCover}
                    />
                ))}
            </div>

        </div>
    );
}