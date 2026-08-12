"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { RoomImage } from "@/types/roomTypes";

interface GalleryThumbnailsProps {
    images: RoomImage[];
    activeIndex: number;
    onSelect: (index: number) => void;
}

/* ==========================================================
   Gallery Thumbnails
========================================================== */

export default function GalleryThumbnails({
    images,
    activeIndex,
    onSelect,
}: GalleryThumbnailsProps) {
    return (
        <div
            className="
                border-t
                border-white/10
                bg-white/[0.04]
                px-3
                py-3

                sm:px-5
                sm:py-5
            "
        >
            <div
                className="
                    flex
                    gap-2
                    overflow-x-auto
                    overscroll-x-contain
                    px-0.5
                    pb-1
                    touch-pan-x
                    snap-x
                    snap-mandatory

                    [-ms-overflow-style:none]
                    [scrollbar-width:none]
                    [&::-webkit-scrollbar]:hidden

                    sm:gap-3
                    sm:px-0
                    sm:pb-0
                "
            >
                {images.map((image, index) => {
                    const isActive =
                        activeIndex === index;

                    return (
                        <motion.button
                            key={
                                image.publicId ??
                                image.url
                            }
                            type="button"
                            whileHover={{
                                scale: 1.04,
                            }}
                            whileTap={{
                                scale: 0.96,
                            }}
                            onClick={() =>
                                onSelect(index)
                            }
                            aria-label={`View image ${
                                index + 1
                            }`}
                            aria-current={
                                isActive
                                    ? "true"
                                    : undefined
                            }
                            className={`
                                relative
                                h-[64px]
                                w-[86px]
                                flex-shrink-0
                                snap-start
                                overflow-hidden
                                rounded-lg
                                border
                                transition-all
                                duration-300

                                xs:h-[70px]
                                xs:w-[96px]
                                xs:rounded-xl

                                sm:h-24
                                sm:w-36
                                sm:rounded-2xl

                                ${
                                    isActive
                                        ? `
                                            border-blue-500
                                            opacity-100
                                            ring-2
                                            ring-blue-500/60
                                            shadow-lg
                                            shadow-blue-500/30
                                          `
                                        : `
                                            border-white/10
                                            opacity-65
                                            hover:border-white/30
                                            hover:opacity-100
                                          `
                                }
                            `}
                        >
                            {/* Thumbnail */}

                            <Image
                                src={image.url}
                                alt={`Thumbnail ${
                                    index + 1
                                }`}
                                fill
                                sizes="
                                    (max-width: 475px) 86px,
                                    (max-width: 640px) 96px,
                                    144px
                                "
                                className="
                                    object-cover
                                    transition-transform
                                    duration-500
                                    hover:scale-110
                                "
                            />

                            {/* Gradient */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-black/50
                                    to-transparent
                                "
                            />

                            {/* Number */}

                            <div
                                className="
                                    absolute
                                    bottom-1
                                    right-1
                                    flex
                                    h-5
                                    min-w-5
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-black/55
                                    px-1
                                    text-[10px]
                                    font-semibold
                                    text-white
                                    backdrop-blur

                                    sm:bottom-2
                                    sm:right-2
                                    sm:h-6
                                    sm:min-w-6
                                    sm:text-xs
                                "
                            >
                                {index + 1}
                            </div>

                            {/* Active Border */}

                            {isActive && (
                                <motion.div
                                    layoutId="activeThumbnail"
                                    className="
                                        pointer-events-none
                                        absolute
                                        inset-0
                                        rounded-lg
                                        border-2
                                        border-white/40

                                        xs:rounded-xl

                                        sm:rounded-2xl
                                    "
                                />
                            )}
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}