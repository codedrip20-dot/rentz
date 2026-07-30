"use client";

import {
    createContext,
    useContext,
    useMemo,
    useState,
    type Dispatch,
    type ReactNode,
    type SetStateAction,
} from "react";

import { initialRoom } from "@/lib/firebase/room/initialRoom";

import type {
    Room,
    RoomAvailability,
    RoomAmenities,
    RoomCapacity,
    RoomImage,
    RoomPricing,
} from "@/types/roomTypes";

interface RoomWizardContextType {
    room: Room;
    setRoom: Dispatch<SetStateAction<Room>>;

    // General
    updateRoom: (updates: Partial<Room>) => void;

    // Nested Updates
    updatePricing: (updates: Partial<RoomPricing>) => void;
    updateAvailability: (
        updates: Partial<RoomAvailability>
    ) => void;
    updateCapacity: (updates: Partial<RoomCapacity>) => void;
    updateAmenities: (updates: Partial<RoomAmenities>) => void;
    updateImages: (images: RoomImage[]) => void;

    // Utilities
    resetRoom: () => void;

    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;

    error: string | null;
    setError: Dispatch<SetStateAction<string | null>>;
}

const RoomWizardContext = createContext<
    RoomWizardContextType | undefined
>(undefined);

interface Props {
    children: ReactNode;
}

export function RoomWizardProvider({
    children,
}: Props) {
    const [room, setRoom] = useState<Room>(initialRoom);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState<string | null>(null);

    /* ==========================================================
       General Update
    ========================================================== */

    const updateRoom = (updates: Partial<Room>) => {
        setRoom((prev) => ({
            ...prev,
            ...updates,
        }));
    };

    /* ==========================================================
       Pricing
    ========================================================== */

    const updatePricing = (
        updates: Partial<RoomPricing>
    ) => {
        setRoom((prev) => ({
            ...prev,
            pricing: {
                ...prev.pricing,
                ...updates,
            },
        }));
    };

    /* ==========================================================
       Availability
    ========================================================== */

    const updateAvailability = (
        updates: Partial<RoomAvailability>
    ) => {
        setRoom((prev) => ({
            ...prev,
            availability: {
                ...prev.availability,
                ...updates,
            },
        }));
    };

    /* ==========================================================
       Capacity
    ========================================================== */

    const updateCapacity = (
        updates: Partial<RoomCapacity>
    ) => {
        setRoom((prev) => ({
            ...prev,
            capacity: {
                ...prev.capacity,
                ...updates,
            },
        }));
    };

    /* ==========================================================
       Amenities
    ========================================================== */

    const updateAmenities = (
        updates: Partial<RoomAmenities>
    ) => {
        setRoom((prev) => ({
            ...prev,
            amenities: {
                ...prev.amenities,
                ...updates,
            },
        }));
    };

    /* ==========================================================
       Images
    ========================================================== */

    const updateImages = (images: RoomImage[]) => {
        setRoom((prev) => ({
            ...prev,
            images,
        }));
    };

    /* ==========================================================
       Reset
    ========================================================== */

    const resetRoom = () => {
        setRoom(initialRoom);
        setLoading(false);
        setError(null);
    };

    const value = useMemo(
        () => ({
            room,
            setRoom,

            updateRoom,
            updatePricing,
            updateAvailability,
            updateCapacity,
            updateAmenities,
            updateImages,

            resetRoom,

            loading,
            setLoading,

            error,
            setError,
        }),
        [room, loading, error]
    );

    return (
        <RoomWizardContext.Provider value={value}>
            {children}
        </RoomWizardContext.Provider>
    );
}

export function useRoomWizard() {
    const context = useContext(RoomWizardContext);

    if (!context) {
        throw new Error(
            "useRoomWizard must be used within a RoomWizardProvider."
        );
    }

    return context;
}