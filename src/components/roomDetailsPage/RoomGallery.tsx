"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, Images } from "lucide-react";

import { Room } from "@/types/roomTypes";

interface RoomGalleryProps {
    room: Room;
}

export default function RoomGallery({
    room,
}: RoomGalleryProps) {
    const images = room.images;

    const [selectedImage, setSelectedImage] =
        useState(0);

    if (images.length === 0) {
        return (
            <section
                className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/20
                    bg-white/10
                    backdrop-blur-2xl
                    shadow-2xl
                "
            >
                <div className="flex flex-col items-center justify-center px-6 py-16 text-center sm:px-8 sm:py-20">

                    <div
                        className="
                            mb-6
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-full
                            bg-white/10
                            ring-1
                            ring-white/20
                        "
                    >
                        <Camera
                            size={34}
                            className="text-white"
                        />
                    </div>

                    <h2 className="text-2xl font-bold text-white">
                        No Room Images
                    </h2>

                    <p className="mt-3 max-w-md text-sm leading-6 text-blue-100 sm:text-base">
                        Upload room photos from the
                        Room Wizard. They'll
                        automatically appear here for
                        owners and future tenants.
                    </p>

                </div>
            </section>
        );
    }

    return (
        <section
            className="
                overflow-hidden
                rounded-3xl
                border
                border-white/20
                bg-white/10
                backdrop-blur-2xl
                shadow-2xl
            "
        >
            {/* Header */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    px-4
                    py-4
                    sm:px-6
                    sm:py-5
                "
            >
                <div>

                    <div className="flex items-center gap-2">

                        <Images
                            size={20}
                            className="text-white"
                        />

                        <h2 className="text-lg font-bold text-white sm:text-xl">
                            Room Gallery
                        </h2>

                    </div>

                    <p className="mt-1 text-xs text-blue-100 sm:text-sm">
                        Browse uploaded room photos
                    </p>

                </div>

                <div
                    className="
                        rounded-full
                        border
                        border-white/20
                        bg-white/10
                        px-3
                        py-1.5
                        text-xs
                        font-semibold
                        text-white
                        sm:px-4
                        sm:py-2
                        sm:text-sm
                    "
                >
                    {selectedImage + 1} / {images.length}
                </div>

            </div>

            {/* Hero Image */}

            <div className="p-4 sm:p-6">

                <div
                    className="
                        relative
                        aspect-[16/9]
                        overflow-hidden
                        rounded-2xl
                        ring-1
                        ring-white/20
                    "
                >
                    <Image
                        src={images[selectedImage].url}
                        alt={`Room Image ${
                            selectedImage + 1
                        }`}
                        fill
                        priority
                        className="
                            object-cover
                            transition-all
                            duration-500
                        "
                    />
                </div>

            </div>

            {/* Thumbnails */}

            <div className="px-4 pb-4 sm:px-6 sm:pb-6">

                <div
                    className="
                        flex
                        gap-3
                        overflow-x-auto
                        pb-2
                        [-ms-overflow-style:none]
                        [scrollbar-width:none]
                        [&::-webkit-scrollbar]:hidden
                    "
                >
                    {images.map((image, index) => (
                        <button
                            key={image.publicId}
                            type="button"
                            aria-label={`View image ${
                                index + 1
                            }`}
                            onClick={() =>
                                setSelectedImage(index)
                            }
                            className={`
                                relative
                                h-20
                                w-28
                                flex-shrink-0
                                overflow-hidden
                                rounded-xl
                                transition-all
                                duration-300

                                sm:h-24
                                sm:w-36

                                ${
                                    selectedImage ===
                                    index
                                        ? "scale-105 ring-2 ring-blue-400 shadow-xl"
                                        : "opacity-80 hover:opacity-100 hover:ring-2 hover:ring-white/40"
                                }
                            `}
                        >
                            <Image
                                src={image.url}
                                alt={`Thumbnail ${
                                    index + 1
                                }`}
                                fill
                                loading="lazy"
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>

            </div>
        </section>
    );
}