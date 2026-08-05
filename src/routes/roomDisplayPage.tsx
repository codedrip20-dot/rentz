"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { RoomDisplay } from "@/components/roomDisplay";

import { getRoomDisplayData } from "@/services/roomDisplay/roomDisplayDataService";

import { RoomDisplayData } from "@/types/roomDisplayTypes";

export default function RoomdisplayPage() {
    const params = useParams();
    console.log("params are",params)

    const roomId = params.roomId as string;
    console.log("room id is", roomId)

    const [data, setData] =
        useState<RoomDisplayData | null>(null);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState<string | null>(null);

    useEffect(() => {
        if (!roomId) {
            setError("Room ID not found.");

            setLoading(false);

            return;
        }

        const fetchRoom = async () => {
            try {
                setLoading(true);

                setError(null);

                const roomData =
                    await getRoomDisplayData(
                        roomId
                    );

                if (!roomData) {
                    setError(
                        "Room not found."
                    );

                    return;
                }

                setData(roomData);
            } catch (error) {
                console.error(error);

                setError(
                    "Failed to load room."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchRoom();
    }, [roomId]);

    return (
        <RoomDisplay
            data={data ?? undefined}
            loading={loading}
            error={error}
        />
    );
}