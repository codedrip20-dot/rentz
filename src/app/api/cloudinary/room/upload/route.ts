// src/app/api/cloudinary/room/upload/route.ts

import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary/cloudinary";
import { ROOM_UPLOAD_CONFIG } from "@/lib/cloudinary/room/roomConstants";

export const runtime = "nodejs";

interface CloudinaryUploadResult {
    secure_url: string;
    public_id: string;
    width: number;
    height: number;
    format: string;
    bytes: number;
}

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        const file = formData.get("file");

        if (!(file instanceof File)) {
            return NextResponse.json(
                {
                    success: false,
                    error: "No image file was provided.",
                },
                {
                    status: 400,
                }
            );
        }

        const buffer = Buffer.from(await file.arrayBuffer());

        const uploadedImage =
            await new Promise<CloudinaryUploadResult>(
                (resolve, reject) => {
                    cloudinary.uploader
                        .upload_stream(
                            {
                                folder: ROOM_UPLOAD_CONFIG.FOLDER,

                                resource_type: "image",

                                overwrite: false,

                                unique_filename: true,

                                quality:
                                    ROOM_UPLOAD_CONFIG.QUALITY,

                                fetch_format:
                                    ROOM_UPLOAD_CONFIG.FETCH_FORMAT,
                            },
                            (error, result) => {
                                if (error || !result) {
                                    reject(error);
                                    return;
                                }

                                resolve(
                                    result as CloudinaryUploadResult
                                );
                            }
                        )
                        .end(buffer);
                }
            );

        return NextResponse.json({
            success: true,

            image: {
                url: uploadedImage.secure_url,

                publicId: uploadedImage.public_id,

                width: uploadedImage.width,

                height: uploadedImage.height,

                format: uploadedImage.format,

                bytes: uploadedImage.bytes,
            },
        });
    } catch (error) {
        console.error(
            "Room Image Upload Error:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                error:
                    "Failed to upload room image.",
            },
            {
                status: 500,
            }
        );
    }
}