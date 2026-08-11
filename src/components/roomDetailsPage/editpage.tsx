"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { getRoom } from "@/lib/firebase/room";
import { Room } from "@/types/roomTypes";

import RoomHeader from "./RoomHeader";
import RoomGallery from "./RoomGallery";
import AvailabilityCard from "./AvailabilityCard";
import BasicInfoCard from "./BasicInfoCard";
import PricingCard from "./PricingCard";
import AmenitiesCard from "./AmenitiesCard";
import TenantCard from "./TenantCard";
import ActionButtons from "./ActionButtons";

import Loading from "./loading";
import ErrorPage from "./error";

export default function EditPage() {
    const { roomId } =
        useParams<{ roomId: string }>();

    const [room, setRoom] =
        useState<Room | null>(null);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState<string | null>(null);

    /**
     * Fetch room from Firestore.
     *
     * This function is also passed to the
     * error screen as the retry action.
     */
    const fetchRoom = useCallback(async () => {
        if (!roomId) {
            setError("Room ID is missing.");
            setRoom(null);
            setLoading(false);
            return;
        }

        try {
            const fetchedRoom =
                await getRoom(roomId);

            if (!fetchedRoom) {
                setRoom(null);
                setError("Room not found.");
                return;
            }

            setRoom(fetchedRoom);
            setError(null);
        } catch (err) {
            console.error(
                "Failed to load room:",
                err
            );

            setRoom(null);
            setError(
                "Failed to load room."
            );
        } finally {
            setLoading(false);
        }
    }, [roomId]);

    /**
     * Fetch room when the room ID changes.
     */
    useEffect(() => {
        let cancelled = false;

        const loadRoom = async () => {
            if (!roomId) {
                if (!cancelled) {
                    setError("Room ID is missing.");
                    setRoom(null);
                    setLoading(false);
                }

                return;
            }

            try {
                const fetchedRoom =
                    await getRoom(roomId);

                if (cancelled) return;

                if (!fetchedRoom) {
                    setRoom(null);
                    setError("Room not found.");
                    return;
                }

                setRoom(fetchedRoom);
                setError(null);
            } catch (err) {
                if (cancelled) return;

                console.error(
                    "Failed to load room:",
                    err
                );

                setRoom(null);
                setError(
                    "Failed to load room."
                );
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };

        loadRoom();

        return () => {
            cancelled = true;
        };
    }, [roomId]);

    /* ==========================================================
       Loading
    ========================================================== */

    if (loading) {
        return <Loading />;
    }

    /* ==========================================================
       Error
    ========================================================== */

    if (error || !room) {
        return (
            <ErrorPage
                error={
                    new globalThis.Error(
                        error ??
                            "Unable to load room details."
                    )
                }
                reset={fetchRoom}
            />
        );
    }

    /* ==========================================================
       Room Details
    ========================================================== */

    return (
        <main
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-slate-950
            "
        >
            {/* Background Glow */}

            <div
                className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.15),transparent_40%)]
                "
            />

            {/* Grid Overlay */}

            <div
                className="
                    absolute
                    inset-0
                    bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
                    bg-[size:40px_40px]
                "
            />

            {/* Content */}

            <div
                className="
                    relative
                    mx-auto
                    flex
                    min-h-screen
                    w-full
                    max-w-7xl
                    flex-col
                    gap-8
                    px-4
                    py-8
                    sm:px-6
                    lg:px-8
                    lg:py-10
                "
            >
                <RoomHeader room={room} />

                <RoomGallery room={room} />

                <AvailabilityCard room={room} />

                <BasicInfoCard room={room} />

                <PricingCard room={room} />

                <AmenitiesCard room={room} />

                <TenantCard room={room} />

                <ActionButtons
                    roomId={room.roomId}
                />
            </div>
        </main>
    );
}