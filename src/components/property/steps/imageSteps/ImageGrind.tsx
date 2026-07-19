"use client";

import { motion } from "framer-motion";

import ImageCard from "./ImageCard";
import { UploadedImage } from "@/lib/cloudinary/uploadImage";

interface ImageGridProps {
    images: UploadedImage[];
    coverImage?: string;
    onDelete: (publicId: string) => void;
    onSetCover: (publicId: string) => void;
}

export default function ImageGrid({
    images,
    coverImage,
    onDelete,
    onSetCover,
}: ImageGridProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="
                mt-8
                grid
                grid-cols-1
                gap-6
                sm:grid-cols-2
                lg:grid-cols-3
            "
        >
            {images.map((image) => (
                <ImageCard
                    key={image.publicId}
                    image={image}
                    isCover={coverImage === image.publicId}
                    onDelete={() => onDelete(image.publicId)}
                    onSetCover={() => onSetCover(image.publicId)}
                />
            ))}
        </motion.div>
    );
}