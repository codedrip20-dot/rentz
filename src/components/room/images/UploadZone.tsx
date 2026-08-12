"use client";

import { ChangeEvent, DragEvent, useRef, useState } from "react";
import {
    UploadCloud,
    ImagePlus,
    Images,
    Sparkles,
} from "lucide-react";

interface UploadZoneProps {
    onUpload: (files: File[]) => void;
    uploading: boolean;
    disabled?: boolean;
}

export default function UploadZone({
    onUpload,
    uploading,
    disabled = false,
}: UploadZoneProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [dragging, setDragging] = useState(false);

    function handleFiles(files: FileList | null) {
        if (!files) return;

        onUpload(Array.from(files));
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        handleFiles(e.target.files);
        e.target.value = "";
    }

    function handleDrop(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();

        if (disabled || uploading) return;

        setDragging(false);

        handleFiles(e.dataTransfer.files);
    }

    function handleDragOver(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();

        if (disabled || uploading) return;

        setDragging(true);
    }

    function handleDragLeave() {
        setDragging(false);
    }

    function openPicker() {
        if (disabled || uploading) return;

        inputRef.current?.click();
    }

    return (
        <>
            <input
                ref={inputRef}
                hidden
                type="file"
                multiple
                accept="image/jpeg,image/jpg,image/png,image/webp"
                onChange={handleChange}
            />

            <div
                onClick={openPicker}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`
                    group
                    relative
                    cursor-pointer
                    overflow-hidden
                    rounded-2xl
                    border-2
                    border-dashed
                    transition-all
                    duration-300
                    sm:rounded-3xl

                    ${
                        dragging
                            ? "scale-[1.01] border-blue-600 bg-gradient-to-br from-blue-50 via-white to-cyan-50 shadow-2xl shadow-blue-100"
                            : "border-slate-300 bg-white hover:border-blue-500 hover:shadow-xl hover:shadow-blue-50"
                    }

                    ${
                        disabled || uploading
                            ? "pointer-events-none opacity-60"
                            : ""
                    }
                `}
            >
                {/* Background Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-400/5" />

                <div className="relative flex flex-col items-center px-4 py-10 sm:px-8 sm:py-14">

                    {/* Upload Icon */}

                    <div
                        className={`
                            mb-6
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-full
                            transition-all
                            duration-300
                            sm:mb-8
                            sm:h-24
                            sm:w-24

                            ${
                                dragging
                                    ? "bg-blue-600 text-white shadow-xl shadow-blue-300"
                                    : "bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 group-hover:scale-110"
                            }
                        `}
                    >
                        {dragging ? (
                            <ImagePlus
                                size={36}
                                className="sm:h-[42px] sm:w-[42px]"
                            />
                        ) : (
                            <UploadCloud
                                size={36}
                                className="sm:h-[42px] sm:w-[42px]"
                            />
                        )}
                    </div>

                    {/* Heading */}

                    <h2 className="text-center text-xl font-bold text-slate-900 sm:text-2xl">

                        {dragging
                            ? "Drop your images here"
                            : "Upload Room Images"}

                    </h2>

                    <p className="mt-3 max-w-xl text-center text-sm leading-6 text-slate-500">

                        Drag & drop high-quality room photos or click below to
                        browse your device.

                    </p>

                    {/* CTA */}

                    <button
                        type="button"
                        disabled={disabled || uploading}
                        className="
                            mt-6
                            w-full
                            max-w-xs
                            rounded-xl
                            bg-gradient-to-r
                            from-blue-600
                            to-cyan-500
                            px-6
                            py-3.5
                            font-semibold
                            text-white
                            shadow-lg
                            shadow-blue-300/40
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:shadow-xl
                            hover:shadow-blue-300/60
                            active:scale-95
                            disabled:opacity-60
                            sm:mt-8
                            sm:w-auto
                            sm:max-w-none
                            sm:rounded-2xl
                            sm:px-8
                            sm:py-4
                        "
                    >
                        {uploading ? "Uploading Images..." : "Browse Images"}
                    </button>

                    {/* Info */}

                    <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-3">

                        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] font-medium text-slate-600 sm:px-4 sm:text-xs">

                            <Images
                                size={13}
                                className="shrink-0 sm:h-3.5 sm:w-3.5"
                            />

                            2–10 Images

                        </div>

                        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] font-medium text-slate-600 sm:px-4 sm:text-xs">

                            <Sparkles
                                size={13}
                                className="shrink-0 sm:h-3.5 sm:w-3.5"
                            />

                            Max 10 MB

                        </div>

                        <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] font-medium text-slate-600 sm:px-4 sm:text-xs">

                            JPG • PNG • WEBP

                        </div>

                    </div>

                    {/* Footer */}

                    <p className="mt-6 max-w-md text-center text-xs leading-5 text-slate-400 sm:mt-8">

                        High-quality images increase booking conversions and
                        attract more tenants.

                    </p>

                </div>
            </div>
        </>
    );
}