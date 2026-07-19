import {
    PropertyImage,
} from "@/types/property";

import {
    UploadedImage,
} from "./uploadImage";

export function mapUploadedImageToPropertyImage(
    image: UploadedImage,
    isCover = false
): PropertyImage {
    return {
        id: crypto.randomUUID(),

        url: image.url,

        publicId: image.publicId,

        isCover,

        status: "uploaded",
    };
}
export function mapPropertyImageToUploadedImage(
    image: PropertyImage
): UploadedImage {
    return {
        url: image.url,
        publicId: image.publicId,
        width: 0,
        height: 0,
        format: "",
        bytes: 0,
    };
}