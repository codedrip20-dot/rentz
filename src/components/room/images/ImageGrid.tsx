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
            <div className="relative overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-50 via-white to-blue-50 px-8 py-20">

                {/* Background Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />

                <div className="relative flex flex-col items-center text-center">

                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 shadow-lg shadow-blue-100">

                        <ImageIcon
                            size={42}
                            className="text-blue-600"
                        />

                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-slate-900">

                        Your Gallery is Empty

                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">

                        Upload high-quality room images to showcase your
                        property beautifully. Great photos increase bookings
                        and build trust with potential tenants.

                    </p>

                    <div className="mt-8 rounded-full bg-blue-50 px-5 py-2 text-sm font-medium text-blue-600">

                        Upload your first room image

                    </div>

                </div>

            </div>
        );
    }

    return (
        <div className="space-y-8">

            {/* Header */}

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>

                    <h2 className="text-2xl font-bold text-slate-900">

                        Uploaded Images

                    </h2>

                    <p className="mt-2 text-sm text-slate-500">

                        {images.length} image
                        {images.length > 1 ? "s" : ""} uploaded

                    </p>

                </div>

                <div className="flex items-center gap-3">

                    <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">

                        {images.length}/10 Images

                    </div>

                    {uploading && (

                        <div className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-200">

                            <Loader2
                                size={16}
                                className="animate-spin"
                            />

                            Uploading...

                        </div>

                    )}

                </div>

            </div>

            {/* Tip Card */}

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-5">

                <div className="flex items-start gap-3">

                    <div className="rounded-xl bg-blue-100 p-2">

                        <Sparkles
                            size={18}
                            className="text-blue-600"
                        />

                    </div>

                    <div>

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
                    gap-6
                    grid-cols-1
                    sm:grid-cols-2
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