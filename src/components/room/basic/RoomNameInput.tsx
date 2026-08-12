"use client";

import { ChangeEvent } from "react";
import { Building2 } from "lucide-react";

import { useRoomWizard } from "@/hooks/useRoomWizard";

const MAX_LENGTH = 100;

export default function RoomNameInput() {
    const { room, updateRoom } = useRoomWizard();

    const handleChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        updateRoom({
            roomName: event.target.value.replace(/^\s+/, ""),
        });
    };

    return (
        <div className="space-y-4">

            {/* Header */}
            <div className="flex items-start justify-between gap-3">

                <div className="min-w-0">
                    <label
                        htmlFor="roomName"
                        className="text-sm font-semibold text-slate-900"
                    >
                        Room Name
                    </label>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                        Choose a clear and attractive name for this room.
                    </p>
                </div>

                <div className="shrink-0 rounded-full bg-slate-100 px-3 py-1">
                    <span className="text-xs font-semibold text-slate-600">
                        {room.roomName.length}/{MAX_LENGTH}
                    </span>
                </div>

            </div>

            {/* Input */}
            <div className="group relative">

                <Building2
                    className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        h-5
                        w-5
                        -translate-y-1/2
                        text-slate-400
                        transition-colors
                        duration-200
                        group-focus-within:text-blue-600
                        sm:left-5
                    "
                />

                <input
                    id="roomName"
                    type="text"
                    maxLength={MAX_LENGTH}
                    value={room.roomName}
                    onChange={handleChange}
                    placeholder="e.g. Deluxe Mountain View Room"
                    className="
                        h-14
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        pl-12
                        pr-4
                        text-base
                        font-medium
                        text-slate-900
                        shadow-sm
                        transition-all
                        duration-200

                        placeholder:text-slate-400

                        hover:border-slate-300

                        focus:border-blue-600
                        focus:ring-4
                        focus:ring-blue-100
                        focus:outline-none

                        sm:h-16
                        sm:rounded-2xl
                        sm:pl-14
                        sm:pr-5
                    "
                />
            </div>

            {/* Footer */}
            <div className="flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:gap-4">

                <span className="leading-5 text-slate-500">
                    This name will appear on your marketplace listing.
                </span>

                {room.roomName.length > 0 && (
                    <span className="shrink-0 font-medium text-blue-600">
                        Looking good 👌
                    </span>
                )}

            </div>

        </div>
    );
}