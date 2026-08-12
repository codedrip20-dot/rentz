"use client";

import { useMemo, useState } from "react";

import { ImageIcon } from "lucide-react";

import { RoomImage } from "@/types/roomTypes";

import GalleryMainImage from "./GalleryMainImage";
import GalleryThumbnails from "./GalleryThumbnails";

interface ImageGalleryProps {
    images: RoomImage[];
}

/* ==========================================================
   Image Gallery
========================================================== */

export default function ImageGallery({
    images,
}: ImageGalleryProps) {
    const [selectedIndex, setSelectedIndex] =
        useState(0);

    /*
     * Protect against:
     * - images being removed
     * - stale selectedIndex
     * - empty image arrays
     */
    const activeIndex = useMemo(() => {
        if (!images.length) return 0;

        return Math.min(
            selectedIndex,
            images.length - 1
        );
    }, [selectedIndex, images.length]);

    const currentImage = images[activeIndex];

    const previousImage = () => {
        if (images.length <= 1) return;

        setSelectedIndex((current) =>
            current === 0
                ? images.length - 1
                : current - 1
        );
    };

    const nextImage = () => {
        if (images.length <= 1) return;

        setSelectedIndex((current) =>
            current === images.length - 1
                ? 0
                : current + 1
        );
    };

    /*
     * Empty state
     */
    if (!images.length) {
        return (
            <section
                className="
                    w-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl

                    sm:rounded-3xl
                "
            >
                <div
                    className="
                        flex
                        min-h-[240px]
                        items-center
                        justify-center
                        px-5
                        py-10

                        sm:min-h-[360px]
                        sm:px-6

                        lg:min-h-[560px]
                    "
                >
                    <div className="text-center">
                        <ImageIcon
                            className="
                                mx-auto
                                mb-4
                                h-11
                                w-11
                                text-blue-300

                                sm:h-16
                                sm:w-16
                            "
                        />

                        <h2
                            className="
                                text-lg
                                font-bold
                                text-white

                                sm:text-2xl
                            "
                        >
                            No Images Available
                        </h2>

                        <p
                            className="
                                mx-auto
                                mt-2
                                max-w-sm
                                text-xs
                                leading-relaxed
                                text-white/70

                                sm:text-base
                            "
                        >
                            Images will appear once
                            the owner uploads them.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full">
            <div
                className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    shadow-2xl
                    backdrop-blur-xl

                    sm:rounded-3xl
                "
            >
                <GalleryMainImage
                    image={currentImage}
                    activeIndex={activeIndex}
                    totalImages={images.length}
                    onPrevious={previousImage}
                    onNext={nextImage}
                />

                <GalleryThumbnails
                    images={images}
                    activeIndex={activeIndex}
                    onSelect={setSelectedIndex}
                />
            </div>
        </section>
    );
}