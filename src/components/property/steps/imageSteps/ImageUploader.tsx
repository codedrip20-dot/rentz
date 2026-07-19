"use client";

import { useEffect, useRef, useState } from "react";

import EmptyState from "./EmptyState";
import ImageGrid from "./ImageGrind"
import ImageRequirements from "./ImageRequirements";
import UploadProgress from "./UploadProgress";
import UploadZone from "./UploadZone";
import {
    mapUploadedImageToPropertyImage,
} from "@/lib/cloudinary/imageMapper";
import {
    uploadImage,
    UploadedImage,
} from "@/lib/cloudinary/uploadImage";

import { usePropertyWizard } from "@/context/PropertyWizardContext";
import {
    mapPropertyImageToUploadedImage,
} from "@/lib/cloudinary/imageMapper";

const MAX_IMAGES = 10;
const MIN_IMAGES = 2;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

const ALLOWED_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
];

export default function ImageUploader() {
    const { propertyData, updateProperty } =
        usePropertyWizard();

    /**
     * Hidden file input reference.
     */
    const fileInputRef =
        useRef<HTMLInputElement>(null);

    /**
     * Local uploader state.
     * We keep uploads locally until they are
     * synchronized with the Property Wizard.
     */
  const [images, setImages] = useState<UploadedImage[]>(
    () =>
        propertyData.images.map(
            mapPropertyImageToUploadedImage
        )
);
    /**
     * Temporary UI state for selecting the cover image.
     * Later this will be persisted during the save flow.
     */
    const [coverImage, setCoverImage] =
        useState<string>("");

    /**
     * Upload status.
     */
    const [isUploading, setIsUploading] =
        useState(false);

    /**
     * Upload percentage (0–100).
     */
    const [progress, setProgress] =
        useState(0);

    /**
     * User-friendly upload error.
     */
    const [error, setError] =
        useState("");

    /**
     * Opens the hidden file picker.
     */
    const openFilePicker = () => {
        fileInputRef.current?.click();
    };

    /**
     * Validates an image before uploading.
     */
    const validateFile = (
        file: File
    ): string | null => {
        if (!ALLOWED_TYPES.includes(file.type)) {
            return "Only JPG, PNG and WEBP images are supported.";
        }

        if (file.size > MAX_FILE_SIZE) {
            return "Each image must be smaller than 10 MB.";
        }

        return null;
    };

    /**
     * Whether the property satisfies the
     * minimum image requirement.
     */
    const hasMinimumImages =
        images.length >= MIN_IMAGES;
        /**
     * Uploads a single image to Cloudinary.
     */
    const handleUpload = async (
        file: File
    ): Promise<UploadedImage | null> => {
        const validationError = validateFile(file);

        if (validationError) {
            setError(validationError);
            return null;
        }

        try {
            setError("");

            const uploadedImage = await uploadImage(file);

            return uploadedImage;
        } catch (error: unknown) {
            console.error(error);

            setError(
                "Failed to upload image. Please try again."
            );

            return null;
        }
    };

    /**
     * Handles image selection from the file picker.
     */
    const handleFileSelection = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const selectedFiles = Array.from(
            event.target.files ?? []
        );

        if (selectedFiles.length === 0) {
            return;
        }

        if (
            images.length + selectedFiles.length >
            MAX_IMAGES
        ) {
            setError(
               ` You can upload a maximum of ${MAX_IMAGES} images.`
            );

            event.target.value = "";

            return;
        }

        setIsUploading(true);
        setProgress(0);
        setError("");

        const uploadedImages: UploadedImage[] = [];

        for (
            let index = 0;
            index < selectedFiles.length;
            index++
        ) {
            const file = selectedFiles[index];

            const uploadedImage =
                await handleUpload(file);

            if (uploadedImage) {
                uploadedImages.push(uploadedImage);
            }

            setProgress(
                Math.round(
                    ((index + 1) /
                        selectedFiles.length) *
                        100
                )
            );
        }

        const updatedImages = [
            ...images,
            ...uploadedImages,
        ];

        setImages(updatedImages);

        /**
         * Automatically select the first uploaded
         * image as the cover image.
         */
        if (
            updatedImages.length > 0 &&
            !coverImage
        ) {
            setCoverImage(
                updatedImages[0].publicId
            );
        }

        setIsUploading(false);

        /**
         * Allows selecting the same image again
         * after deleting it.
         */
        event.target.value = "";
    };
    /**
     * Removes an image from the uploader.
     *
     * NOTE:
     * Cloudinary deletion will be implemented
     * later using deleteImage.ts.
     */
    const handleDelete = (
        publicId: string
    ) => {
        const updatedImages = images.filter(
            (image) => image.publicId !== publicId
        );

        setImages(updatedImages);

        /**
         * If the deleted image was the current
         * cover image, automatically choose the
         * next available image.
         */
        if (coverImage === publicId) {
            const nextCover =
                updatedImages.length > 0
                    ? updatedImages[0].publicId
                    : "";

            setCoverImage(nextCover);
        }
    };

    /**
     * Sets the selected image as the cover image.
     */
    const handleSetCover = (
        publicId: string
    ) => {
        setCoverImage(publicId);
    };

    /**
     * Synchronize uploaded images with the
     * Property Wizard Context.
     *
     * Images are the single source of truth for
     * the wizard. Every upload or deletion is
     * reflected in the global property state.
     */
    useEffect(() => {
       updateProperty({
    images: images.map((image, index) =>
        mapUploadedImageToPropertyImage(
            image,
            image.publicId === coverImage
        )
    ),
});
    }, [
        images,
        updateProperty,
    ]);
    return (
        <div className="space-y-6">
            <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                multiple
                className="hidden"
                onChange={handleFileSelection}
            />

            <UploadZone
                onSelect={openFilePicker}
                disabled={
                    isUploading ||
                    images.length >= MAX_IMAGES
                }
            />

            {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                    <p className="text-sm font-medium text-red-600">
                        {error}
                    </p>
                </div>
            )}

            {isUploading && (
                <UploadProgress
                    progress={progress}
                />
            )}

            {images.length === 0 ? (
                <EmptyState />
            ) : (
                <ImageGrid
                    images={images}
                    coverImage={coverImage}
                    onDelete={handleDelete}
                    onSetCover={handleSetCover}
                />
            )}

            <ImageRequirements />

            {!hasMinimumImages && (
                <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
                    <p className="text-sm text-amber-700">
                        Please upload at least{" "}
                        <span className="font-semibold">
                            {MIN_IMAGES}
                        </span>{" "}
                        images before publishing your
                        property.
                    </p>
                </div>
            )}
        </div>
    );
}