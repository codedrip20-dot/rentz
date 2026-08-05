"use client";

import { useMemo, useState } from "react";

import Image from "next/image";

import {
    AnimatePresence,
    motion,
} from "framer-motion";

import {
    ChevronLeft,
    ChevronRight,
    Expand,
    ImageIcon,
} from "lucide-react";

import { RoomImage } from "@/types/roomTypes";

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

    const activeIndex = useMemo(() => {
        if (!images.length) return 0;

        return Math.min(
            selectedIndex,
            images.length - 1
        );
    }, [selectedIndex, images.length]);

    const currentImage =
        images[activeIndex];

    const previousImage = () =>
        setSelectedIndex((current) =>
            current === 0
                ? images.length - 1
                : current - 1
        );

    const nextImage = () =>
        setSelectedIndex((current) =>
            current === images.length - 1
                ? 0
                : current + 1
        );

    if (!images.length) {
        return (
            <section
                className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                "
            >
                <div
                    className="
                        flex
                        h-[260px]
                        sm:h-[360px]
                        lg:h-[560px]
                        items-center
                        justify-center
                        px-6
                    "
                >
                    <div className="text-center">
                        <ImageIcon
                            className="
                                mx-auto
                                mb-4
                                h-12
                                w-12
                                sm:h-16
                                sm:w-16
                                text-blue-300
                            "
                        />

                        <h2
                            className="
                                text-xl
                                font-bold
                                text-white
                                sm:text-2xl
                            "
                        >
                            No Images Available
                        </h2>

                        <p
                            className="
                                mt-2
                                text-sm
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
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    shadow-2xl
                    backdrop-blur-xl
                "
            >
                <div
                    className="
                        relative
                        h-[260px]
                        sm:h-[380px]
                        lg:h-[560px]
                        overflow-hidden
                    "
                >
                {/* ------------------------------------------
                        Main Image
                    ------------------------------------------- */}

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImage.url}
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
                                src={currentImage.url}
                                alt={`Room Image ${
                                    activeIndex + 1
                                }`}
                                fill
                                priority
                                sizes="100vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Gradient Overlay */}

                    <div
                        className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/70
                            via-black/20
                            to-transparent
                        "
                    />

                    <div
                        className="
                            absolute
                            inset-x-0
                            top-0
                            h-24
                            bg-gradient-to-b
                            from-black/40
                            to-transparent
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
                            bg-black/40
                            px-3
                            py-1.5
                            text-xs
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
                        {activeIndex + 1} / {images.length}
                    </div>

                    {/* Expand Button */}

                    <button
                        type="button"
                        className="
                            absolute
                            right-3
                            top-3
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/20
                            bg-black/40
                            text-white
                            backdrop-blur-xl
                            transition-all
                            duration-300

                            hover:scale-105
                            hover:bg-blue-600/70

                            sm:right-5
                            sm:top-5
                            sm:h-11
                            sm:w-11
                        "
                    >
                        <Expand size={18} />
                    </button>

                    {/* Previous */}

                    <button
                        type="button"
                        onClick={previousImage}
                        className="
                            absolute
                            left-3
                            top-1/2
                            flex
                            h-10
                            w-10
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/20
                            bg-black/40
                            text-white
                            backdrop-blur-xl
                            transition-all
                            duration-300

                            hover:scale-110
                            hover:bg-blue-600/70

                            sm:left-5
                            sm:h-12
                            sm:w-12
                        "
                    >
                        <ChevronLeft size={22} />
                    </button>

                    {/* Next */}

                    <button
                        type="button"
                        onClick={nextImage}
                        className="
                            absolute
                            right-3
                            top-1/2
                            flex
                            h-10
                            w-10
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/20
                            bg-black/40
                            text-white
                            backdrop-blur-xl
                            transition-all
                            duration-300

                            hover:scale-110
                            hover:bg-blue-600/70

                            sm:right-5
                            sm:h-12
                            sm:w-12
                        "
                    >
                        <ChevronRight size={22} />
                    </button>
                    </div>

                {/* ------------------------------------------
                    Thumbnail Gallery
                ------------------------------------------- */}

                <div
                    className="
                        border-t
                        border-white/10
                        bg-white/5
                        p-3
                        sm:p-5
                    "
                >
                    <div
                        className="
                            flex
                            gap-3
                            overflow-x-auto
                            pb-2
                            scrollbar-thin
                            scrollbar-thumb-white/20
                            scrollbar-track-transparent
                        "
                    >
                        {images.map(
                            (image, index) => (
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
                                        setSelectedIndex(
                                            index
                                        )
                                    }
                                    className={`
                                        relative
                                        h-20
                                        w-28
                                        flex-shrink-0
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        transition-all
                                        duration-300

                                        sm:h-24
                                        sm:w-36

                                        ${
                                            activeIndex ===
                                            index
                                                ? `
                                                    border-blue-500
                                                    ring-2
                                                    ring-blue-500/60
                                                    shadow-lg
                                                    shadow-blue-500/30
                                                  `
                                                : `
                                                    border-white/10
                                                    opacity-70
                                                    hover:opacity-100
                                                    hover:border-white/30
                                                  `
                                        }
                                    `}
                                >
                                    <Image
                                        src={image.url}
                                        alt={`Thumbnail ${
                                            index + 1
                                        }`}
                                        fill
                                        sizes="160px"
                                        className="
                                            object-cover
                                            transition-transform
                                            duration-500
                                            hover:scale-110
                                        "
                                    />

                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            bg-gradient-to-t
                                            from-black/40
                                            to-transparent
                                        "
                                    />

                                    <div
                                        className="
                                            absolute
                                            bottom-2
                                            right-2
                                            flex
                                            h-6
                                            w-6
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-black/50
                                            text-xs
                                            font-semibold
                                            text-white
                                            backdrop-blur
                                        "
                                    >
                                        {index + 1}
                                    </div>

                                    {activeIndex ===
                                        index && (
                                        <motion.div
                                            layoutId="activeThumbnail"
                                            className="
                                                absolute
                                                inset-0
                                                rounded-2xl
                                                border-2
                                                border-white/40
                                            "
                                        />
                                    )}
                                </motion.button>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}