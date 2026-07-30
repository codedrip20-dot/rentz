import { NextRequest, NextResponse } from "next/server";

import cloudinary from "@/lib/cloudinary/cloudinary";

export const runtime = "nodejs";

export async function DELETE(request: NextRequest) {
    try {
        const { publicId } = await request.json();

        if (!publicId || typeof publicId !== "string") {
            return NextResponse.json(
                {
                    success: false,
                    error: "A valid publicId is required.",
                },
                {
                    status: 400,
                }
            );
        }

        const result = await cloudinary.uploader.destroy(publicId, {
            resource_type: "image",
        });

        if (result.result !== "ok" && result.result !== "not found") {
            return NextResponse.json(
                {
                    success: false,
                    error: "Failed to delete room image.",
                },
                {
                    status: 500,
                }
            );
        }

        return NextResponse.json({
            success: true,
            publicId,
        });
    } catch (error) {
        console.error("Room Image Delete Error:", error);

        return NextResponse.json(
            {
                success: false,
                error: "Failed to delete room image.",
            },
            {
                status: 500,
            }
        );
    }
}