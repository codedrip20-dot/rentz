"use client";

import Image from "next/image";

import {
    AnimatePresence,
    motion,
} from "framer-motion";

import {
    ChevronLeft,
    ChevronRight,
    Expand,
} from "lucide-react";

import { RoomImage } from "@/types/roomTypes";

interface GalleryMainImageProps {
    image: RoomImage;
    activeIndex: number;
    totalImages: number;
    onPrevious: () => void;
    onNext: () => void;
}

/* ==========================================================
   Gallery Main Image
========================================================== */

export default function GalleryMainImage({
    image,
    activeIndex,
    totalImages,
    onPrevious,
    onNext,
}: GalleryMainImageProps) {
    return (
        <div
            className="
                relative
                h-[240px]
                w-full
                overflow-hidden

                xs:h-[260px]
                sm:h-[380px]
                md:h-[460px]
                lg:h-[560px]
            "
        >
            {/* Main Image */}

            <AnimatePresence mode="wait">
                <motion.div
                    key={image.url}
                    initial={{
                        opacity: 0,
                        scale: 1.05,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.98,
                    }}
                    transition={{
                        duration: 0.35,
                    }}
                    className="absolute inset-0"
                >
                    <Image
                        src={image.url}
                        alt={`Room Image ${
                            activeIndex + 1
                        }`}
                        fill
                        priority={activeIndex === 0}
                        sizes="
                            (max-width: 640px) 100vw,
                            (max-width: 1024px) 90vw,
                            1200px
                        "
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Bottom Gradient */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/75
                    via-black/20
                    to-transparent
                "
            />

            {/* Top Gradient */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0
                    h-24
                    bg-gradient-to-b
                    from-black/45
                    to-transparent

                    sm:h-32
                "
            />

            {/* Image Counter */}

            <div
                className="
                    absolute
                    bottom-3
                    left-3
                    rounded-full
                    border
                    border-white/20
                    bg-black/45
                    px-2.5
                    py-1
                    text-[11px]
                    font-semibold
                    text-white
                    backdrop-blur-xl

                    sm:bottom-5
                    sm:left-5
                    sm:px-4
                    sm:py-2
                    sm:text-sm
                "
            >
                {activeIndex + 1} / {totalImages}
            </div>

            {/* Expand */}

            <button
                type="button"
                aria-label="Expand image"
                className="
                    absolute
                    right-3
                    top-3
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/45
                    text-white
                    backdrop-blur-xl
                    transition-all
                    duration-300

                    active:scale-95
                    hover:scale-105
                    hover:bg-blue-600/70

                    sm:right-5
                    sm:top-5
                    sm:h-11
                    sm:w-11
                "
            >
                <Expand
                    size={17}
                    className="sm:h-[19px] sm:w-[19px]"
                />
            </button>

            {/* Previous */}

            {totalImages > 1 && (
                <button
                    type="button"
                    onClick={onPrevious}
                    aria-label="Previous image"
                    className="
                        absolute
                        left-2
                        top-1/2
                        flex
                        h-9
                        w-9
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-black/45
                        text-white
                        backdrop-blur-xl
                        transition-all
                        duration-300

                        active:scale-95
                        hover:scale-110
                        hover:bg-blue-600/70

                        sm:left-5
                        sm:h-12
                        sm:w-12
                    "
                >
                    <ChevronLeft
                        size={20}
                        className="sm:h-[22px] sm:w-[22px]"
                    />
                </button>
            )}

            {/* Next */}

            {totalImages > 1 && (
                <button
                    type="button"
                    onClick={onNext}
                    aria-label="Next image"
                    className="
                        absolute
                        right-2
                        top-1/2
                        flex
                        h-9
                        w-9
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-black/45
                        text-white
                        backdrop-blur-xl
                        transition-all
                        duration-300

                        active:scale-95
                        hover:scale-110
                        hover:bg-blue-600/70

                        sm:right-5
                        sm:h-12
                        sm:w-12
                    "
                >
                    <ChevronRight
                        size={20}
                        className="sm:h-[22px] sm:w-[22px]"
                    />
                </button>
            )}
        </div>
    );
}