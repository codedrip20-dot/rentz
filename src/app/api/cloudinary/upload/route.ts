import { NextRequest, NextResponse } from "next/server";
import { UploadApiResponse } from "cloudinary";

import cloudinary from "@/lib/cloudinary/cloudinary";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        const file = formData.get("file");

        if (!(file instanceof File)) {
            return NextResponse.json(
                {
                    success: false,
                    error: "No file provided.",
                },
                {
                    status: 400,
                }
            );
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadResult = await new Promise<UploadApiResponse>(
            (resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    {
                        folder: "rentz/properties",
                        resource_type: "image",
                    },
                    (error, result) => {
                        if (error) {
                            reject(error);
                            return;
                        }

                        if (!result) {
                            reject(new Error("Upload failed."));
                            return;
                        }

                        resolve(result);
                    }
                );

                stream.end(buffer);
            }
        );

        return NextResponse.json({
            success: true,
            image: {
                url: uploadResult.secure_url,
                publicId: uploadResult.public_id,
                width: uploadResult.width,
                height: uploadResult.height,
                format: uploadResult.format,
                bytes: uploadResult.bytes,
            },
        });
    } catch (error) {
        console.error("Cloudinary upload failed:", error);

        return NextResponse.json(
            {
                success: false,
                error: "Failed to upload image.",
            },
            {
                status: 500,
            }
        );
    }
}