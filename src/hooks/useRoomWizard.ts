import { useMemo } from "react";

import { useRoomWizard as useRoomWizardContext } from "@/context/RoomWizardContext";

export const useRoomWizard = () => {
    const context = useRoomWizardContext();

    const canSubmit = useMemo(() => {
        const { room } = context;

        return (
            room.roomName.trim().length > 0 &&
            room.roomNumber.trim().length > 0 &&
            room.propertyId.trim().length > 0 &&
            room.ownerId.trim().length > 0 &&
            room.pricing.rent > 0 &&
            room.images.length >= 2
        );
    }, [context.room]);

    const isAvailable = context.room.status === "available";

    const imageCount = context.room.images.length;

    const hasImages = imageCount > 0;

    return {
        ...context,

        // Derived State
        canSubmit,
        isAvailable,
        hasImages,
        imageCount,
    };
};