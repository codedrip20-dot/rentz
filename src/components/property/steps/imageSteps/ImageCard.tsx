"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Star, Trash2 } from "lucide-react";

import { UploadedImage } from "@/lib/cloudinary/uploadImage";

interface ImageCardProps {
    image: UploadedImage;
    isCover: boolean;
    onDelete: () => void;
    onSetCover: () => void;
}

export default function ImageCard({
    image,
    isCover,
    onDelete,
    onSetCover,
}: ImageCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-shadow
                hover:shadow-lg
            "
        >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                    src={image.url}
                    alt="Property Image"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width:768px) 100vw,
                           (max-width:1200px) 50vw,
                           33vw"
                />

                {isCover && (
                    <div
                        className="
                            absolute
                            left-3
                            top-3
                            flex
                            items-center
                            gap-2
                            rounded-full
                            bg-blue-600
                            px-3
                            py-1
                            text-xs
                            font-semibold
                            text-white
                        "
                    >
                        <Star className="h-3.5 w-3.5 fill-white" />
                        Cover Image
                    </div>
                )}

                <div className="absolute right-3 top-3">
                    <button
                        type="button"
                        onClick={onDelete}
                        className="
                            rounded-full
                            bg-white/90
                            p-2
                            text-red-600
                            shadow
                            transition
                            hover:bg-red-600
                            hover:text-white
                        "
                    >
                        <Trash2 className="h-4 w-4" />
                    </button>
                </div>
            </div>

            <div className="space-y-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold text-slate-900">
                            {image.width} × {image.height}
                        </p>

                        <p className="text-xs text-slate-500 uppercase">
                            {image.format}
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-emerald-600">
                        <CheckCircle2 className="h-5 w-5" />

                        <span className="text-sm font-medium">
                            Uploaded
                        </span>
                    </div>
                </div>

                {!isCover && (
                    <button
                        type="button"
                        onClick={onSetCover}
                        className="
                            w-full
                            rounded-xl
                            border
                            border-blue-200
                            bg-blue-50
                            px-4
                            py-2.5
                            text-sm
                            font-semibold
                            text-blue-700
                            transition
                            hover:bg-blue-100
                        "
                    >
                        Set as Cover Image
                    </button>
                )}
            </div>
        </motion.div>
    );
}