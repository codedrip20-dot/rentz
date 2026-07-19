export interface UploadedImage {
    url: string;
    publicId: string;
    width: number;
    height: number;
    format: string;
    bytes: number;
}

interface UploadResponse {
    success: boolean;
    image?: UploadedImage;
    error?: string;
}

export async function uploadImage(
    file: File
): Promise<UploadedImage> {

    const formData = new FormData();

    formData.append("file", file);

    const response = await fetch("/api/cloudinary/upload", {
        method: "POST",
        body: formData,
    });

    const data: UploadResponse = await response.json();

    if (!response.ok || !data.success || !data.image) {
        throw new Error(data.error ?? "Image upload failed.");
    }

    return data.image;
}