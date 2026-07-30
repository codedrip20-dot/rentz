"use client";

import Image from "next/image";
import { Star, Trash2, ImageIcon } from "lucide-react";

import { RoomImage } from "@/types/roomTypes";

interface ImageCardProps {
    image: RoomImage;
    index: number;
    onDelete: (publicId: string) => void;
    onSetCover?: (publicId: string) => void;
}

export default function ImageCard({
    image,
    index,
    onDelete,
    onSetCover,
}: ImageCardProps) {
    const isCover = index === 0;

    return (
        <div
            className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                hover:shadow-blue-100
            "
        >
            {/* Image */}

            <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                    src={image.url}
                    alt={`Room Image ${index + 1}`}
                    fill
                    className="
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
                />

                {/* Gradient Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Image Number */}

                <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">

                    #{index + 1}

                </div>

                {/* Cover Badge */}

                {isCover && (
                    <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">

                        <Star
                            size={14}
                            fill="currentColor"
                        />

                        Cover

                    </div>
                )}

                {/* Hover Actions */}

                <div className="absolute bottom-4 left-4 right-4 flex translate-y-4 items-center justify-between opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                    {!isCover && onSetCover && (
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                onSetCover(image.publicId);
                            }}
                            className="
                                rounded-xl
                                bg-white/90
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                text-slate-700
                                backdrop-blur
                                transition
                                hover:bg-white
                            "
                        >
                            Set Cover
                        </button>
                    )}

                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(image.publicId);
                        }}
                        className="
                            ml-auto
                            rounded-xl
                            bg-red-500
                            p-3
                            text-white
                            shadow-lg
                            transition
                            hover:bg-red-600
                        "
                    >
                        <Trash2 size={18} />
                    </button>

                </div>

            </div>

            {/* Footer */}

            <div className="flex items-center justify-between p-5">

                <div>

                    <h3 className="font-semibold text-slate-800">

                        Room Image {index + 1}

                    </h3>

                    <p className="mt-1 text-sm text-slate-500">

                        {image.width} × {image.height}px

                    </p>

                </div>

                <div className="rounded-xl bg-slate-100 p-3">

                    <ImageIcon
                        size={18}
                        className="text-slate-500"
                    />

                </div>

            </div>

        </div>
    );
}