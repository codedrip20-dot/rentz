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
        <div className="space-y-6 sm:space-y-8">

            {/* Header */}

            <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white via-slate-50 to-blue-50 p-4 shadow-sm sm:rounded-3xl sm:p-6 lg:p-8">

                <div className="flex items-start gap-3 sm:gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-200 sm:h-16 sm:w-16 sm:rounded-2xl">

                        <ImagePlus
                            size={24}
                            className="sm:h-[30px] sm:w-[30px]"
                        />

                    </div>

                    <div className="min-w-0 flex-1">

                        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">

                            Room Image Gallery

                        </h2>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:leading-7">

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
                <div className="rounded-2xl border border-red-200 bg-gradient-to-r from-red-50 to-rose-50 p-4 shadow-sm sm:rounded-3xl sm:p-6">

                    <div className="flex items-start gap-3 sm:gap-4">

                        <div className="shrink-0 rounded-xl bg-red-100 p-2">

                            <AlertCircle
                                size={20}
                                className="text-red-600 sm:h-[22px] sm:w-[22px]"
                            />

                        </div>

                        <div className="min-w-0 flex-1">

                            <h3 className="font-semibold text-red-700">
                                Upload Failed
                            </h3>

                            <p className="mt-1 text-sm leading-6 text-red-500">
                                Please fix the following issues before
                                uploading again.
                            </p>

                            <ul className="mt-3 space-y-2 sm:mt-4">

                                {errors.map((error, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2 text-sm leading-5 text-red-700"
                                    >
                                        <span className="shrink-0">
                                            •
                                        </span>

                                        <span className="min-w-0">
                                            {error}
                                        </span>
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