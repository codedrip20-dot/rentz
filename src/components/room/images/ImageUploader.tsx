"use client";

import { AlertCircle, ImagePlus } from "lucide-react";

import { RoomImage } from "@/types/roomTypes";
import { useRoomImages } from "@/hooks/useRoomImages";

import UploadZone from "./UploadZone";
import UploadProgress from "./UploadProgress";
import ImageGrid from "./ImageGrid";

interface ImageUploaderProps {
    initialImages?: RoomImage[];
    onImagesChange?: (images: RoomImage[]) => void;
}

export default function ImageUploader({
    initialImages = [],
    onImagesChange,
}: ImageUploaderProps) {
    const {
        images,
        uploading,
        progress,
        errors,
        upload,
        remove,
        clearErrors,
    } = useRoomImages(
        initialImages,
        onImagesChange
    );

    async function handleUpload(files: File[]) {
        clearErrors();
        await upload(files);
    }

    async function handleDelete(publicId: string) {
        await remove(publicId);
    }

    return (
        <div className="space-y-8">
            {/* Header */}

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-white via-slate-50 to-blue-50 p-8 shadow-sm">
                <div className="flex items-start gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-200">
                        <ImagePlus size={30} />
                    </div>

                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-slate-900">
                            Room Image Gallery
                        </h2>

                        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                            Upload clear, high-quality photos of your room.
                            Showcase every important area including the
                            bedroom, washroom, kitchen, balcony, and
                            furniture to attract more tenants.
                        </p>
                    </div>
                </div>
            </div>

            {/* Upload Area */}

            <UploadZone
                uploading={uploading}
                onUpload={handleUpload}
            />

            {/* Upload Progress */}

            <UploadProgress
                uploading={uploading}
                progress={progress}
            />

            {/* Errors */}

            {errors.length > 0 && (
                <div className="rounded-3xl border border-red-200 bg-gradient-to-r from-red-50 to-rose-50 p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                        <div className="rounded-xl bg-red-100 p-2">
                            <AlertCircle
                                size={22}
                                className="text-red-600"
                            />
                        </div>

                        <div className="flex-1">
                            <h3 className="font-semibold text-red-700">
                                Upload Failed
                            </h3>

                            <p className="mt-1 text-sm text-red-500">
                                Please fix the following issues before
                                uploading again.
                            </p>

                            <ul className="mt-4 space-y-2">
                                {errors.map((error, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2 text-sm text-red-700"
                                    >
                                        <span>•</span>

                                        <span>{error}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Gallery */}

            <ImageGrid
                images={images}
                uploading={uploading}
                onDelete={handleDelete}
            />
        </div>
    );
}