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
                    relative
                    overflow-hidden
                    rounded-3xl
                    border-2
                    border-dashed
                    cursor-pointer
                    transition-all
                    duration-300
                    group

                    ${
                        dragging
                            ? "border-blue-600 bg-gradient-to-br from-blue-50 via-white to-cyan-50 shadow-2xl shadow-blue-100 scale-[1.01]"
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

                <div className="relative flex flex-col items-center px-8 py-14">

                    {/* Upload Icon */}

                    <div
                        className={`
                            mb-8
                            flex
                            h-24
                            w-24
                            items-center
                            justify-center
                            rounded-full
                            transition-all
                            duration-300

                            ${
                                dragging
                                    ? "bg-blue-600 text-white shadow-xl shadow-blue-300"
                                    : "bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 group-hover:scale-110"
                            }
                        `}
                    >
                        {dragging ? (
                            <ImagePlus size={42} />
                        ) : (
                            <UploadCloud size={42} />
                        )}
                    </div>

                    {/* Heading */}

                    <h2 className="text-2xl font-bold text-slate-900">

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
                            mt-8
                            rounded-2xl
                            bg-gradient-to-r
                            from-blue-600
                            to-cyan-500
                            px-8
                            py-4
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
                        "
                    >
                        {uploading ? "Uploading Images..." : "Browse Images"}
                    </button>

                    {/* Info */}

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">

                        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-600">

                            <Images size={14} />

                            2–10 Images

                        </div>

                        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-600">

                            <Sparkles size={14} />

                            Max 10 MB

                        </div>

                        <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-600">

                            JPG • PNG • WEBP

                        </div>

                    </div>

                    {/* Footer */}

                    <p className="mt-8 text-center text-xs text-slate-400">

                        High-quality images increase booking conversions and
                        attract more tenants.

                    </p>

                </div>
            </div>
        </>
    );
}