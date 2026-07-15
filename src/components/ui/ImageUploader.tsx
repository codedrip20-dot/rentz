"use client";

import Image from "next/image";
import { ChangeEvent } from "react";
import { ImagePlus, Star, Trash2 } from "lucide-react";

import FormError from "./FormError";
import FormLabel from "./FormLabel";

export interface UploadedImage {
    id: string;
    file?: File;
    url: string;
    isCover: boolean;
}

interface ImageUploaderProps {
    label?: string;

    images: UploadedImage[];

    onUpload: (files: FileList) => void;

    onRemove: (id: string) => void;

    onSetCover?: (id: string) => void;

    error?: string;

    maxImages?: number;
}

const ImageUploader = ({
    label = "Property Images",
    images,
    onUpload,
    onRemove,
    onSetCover,
    error,
    maxImages = 20,
}: ImageUploaderProps) => {

    const inputId = label
        .toLowerCase()
        .replace(/\s+/g, "-");

    const handleChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {

        if (!event.target.files) return;

        onUpload(event.target.files);

        event.target.value = "";

    };

    return (

        <div className="space-y-6">

            <FormLabel
                htmlFor={inputId}
            >
                {label}
            </FormLabel>

            <label
                htmlFor={inputId}
                className="
                    flex
                    cursor-pointer
                    flex-col
                    items-center
                    justify-center
                    rounded-3xl
                    border-2
                    border-dashed
                    border-slate-300
                    bg-slate-50
                    p-12
                    transition-all
                    duration-200
                    hover:border-blue-500
                    hover:bg-blue-50
                "
            >

                <ImagePlus
                    size={48}
                    className="text-blue-600"
                />

                <h3 className="mt-4 text-lg font-semibold text-slate-900">

                    Upload Property Images

                </h3>

                <p className="mt-2 text-center text-sm text-slate-500">

                    Drag & Drop images here or click to browse

                </p>

                <p className="mt-1 text-xs text-slate-400">

                    PNG • JPG • JPEG • WEBP

                </p>

                <input
                    id={inputId}
                    hidden
                    multiple
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                />

            </label>

            <FormError
                message={error}
            />

            {images.length > 0 && (

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {images.map((image) => (

                        <div
                            key={image.id}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                shadow-sm
                            "
                        >

                            <div className="relative aspect-square">

                                <Image
                                    src={image.url}
                                    alt="Property Image"
                                    fill
                                    className="object-cover"
                                />

                            </div>

                            {image.isCover && (

                                <div
                                    className="
                                        absolute
                                        left-3
                                        top-3
                                        flex
                                        items-center
                                        gap-1
                                        rounded-full
                                        bg-blue-600
                                        px-3
                                        py-1
                                        text-xs
                                        font-semibold
                                        text-white
                                    "
                                >

                                    <Star size={12} />

                                    Cover

                                </div>

                            )}

                            <div
                                className="
                                    absolute
                                    inset-0
                                    flex
                                    items-end
                                    justify-between
                                    bg-gradient-to-t
                                    from-black/70
                                    via-transparent
                                    to-transparent
                                    p-3
                                    opacity-0
                                    transition-opacity
                                    duration-200
                                    group-hover:opacity-100
                                "
                            >

                                {onSetCover && !image.isCover && (

                                    <button
                                        type="button"
                                        onClick={() =>
                                            onSetCover(image.id)
                                        }
                                        className="
                                            rounded-xl
                                            bg-white
                                            px-3
                                            py-2
                                            text-xs
                                            font-medium
                                            text-slate-800
                                            transition
                                            hover:bg-slate-100
                                        "
                                    >

                                        Set Cover

                                    </button>

                                )}

                                <button
                                    type="button"
                                    onClick={() =>
                                        onRemove(image.id)
                                    }
                                    className="
                                        rounded-xl
                                        bg-red-500
                                        p-2
                                        text-white
                                        transition
                                        hover:bg-red-600
                                    "
                                >

                                    <Trash2
                                        size={16}
                                    />

                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            )}

            <div className="flex items-center justify-between text-sm text-slate-500">

                <span>

                    {images.length} of {maxImages} images uploaded

                </span>

                <span>

                    First image or selected cover will appear in search results

                </span>

            </div>

        </div>

    );

};

export default ImageUploader;