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
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                hover:shadow-blue-100
                sm:rounded-3xl
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100" />

                {/* Image Number */}

                <div className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur sm:left-4 sm:top-4 sm:px-3 sm:text-xs">

                    #{index + 1}

                </div>

                {/* Cover Badge */}

                {isCover && (
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg sm:right-4 sm:top-4 sm:px-3 sm:text-xs">

                        <Star
                            size={12}
                            fill="currentColor"
                            className="sm:h-3.5 sm:w-3.5"
                        />

                        Cover

                    </div>
                )}

                {/* Actions */}

                <div
                    className="
                        absolute
                        bottom-3
                        left-3
                        right-3
                        flex
                        items-center
                        justify-between
                        gap-2
                        sm:bottom-4
                        sm:left-4
                        sm:right-4
                        sm:translate-y-4
                        sm:opacity-0
                        sm:transition-all
                        sm:duration-300
                        sm:group-hover:translate-y-0
                        sm:group-hover:opacity-100
                    "
                >

                    {!isCover && onSetCover && (
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                onSetCover(image.publicId);
                            }}
                            className="
                                min-h-10
                                rounded-xl
                                bg-white/90
                                px-3
                                py-2
                                text-xs
                                font-semibold
                                text-slate-700
                                shadow-md
                                backdrop-blur
                                transition
                                hover:bg-white
                                active:scale-95
                                sm:min-h-0
                                sm:px-4
                                sm:text-sm
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
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-red-500
                            text-white
                            shadow-lg
                            transition
                            hover:bg-red-600
                            active:scale-95
                            sm:h-auto
                            sm:w-auto
                            sm:p-3
                        "
                        aria-label={`Delete room image ${index + 1}`}
                    >
                        <Trash2 size={17} className="sm:h-[18px] sm:w-[18px]" />
                    </button>

                </div>

            </div>

            {/* Footer */}

            <div className="flex items-center justify-between gap-3 p-4 sm:p-5">

                <div className="min-w-0">

                    <h3 className="truncate font-semibold text-slate-800">
                        Room Image {index + 1}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                        {image.width} × {image.height}px
                    </p>

                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 sm:h-auto sm:w-auto sm:p-3">

                    <ImageIcon
                        size={18}
                        className="text-slate-500"
                    />

                </div>

            </div>

        </div>
    );
}