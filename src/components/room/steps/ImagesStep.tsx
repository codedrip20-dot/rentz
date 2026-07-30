"use client";

import ImagesHeader from "../images/ImagesHeader";
import ImageUploader from "../images/ImageUploader";

import { useRoomWizard } from "@/context/RoomWizardContext";

export default function ImagesStep() {
    const {
        room,
        updateImages,
    } = useRoomWizard();

    return (
        <div className="space-y-8">

            <ImagesHeader
                imageCount={room.images.length}
                minImages={2}
                maxImages={10}
            />

            <ImageUploader
                initialImages={room.images}
                onImagesChange={updateImages}
            />

        </div>
    );
}