"use client";

import { ChangeEvent } from "react";
import { DoorOpen, Hash } from "lucide-react";

import { useRoomWizard } from "@/hooks/useRoomWizard";

const MAX_LENGTH = 20;

export default function RoomNumberInput() {
    const { room, updateRoom } = useRoomWizard();

    const handleChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        updateRoom({
            roomNumber: event.target.value
                .replace(/^\s+/, "")
                .toUpperCase(),
        });
    };

    return (
        <div className="space-y-5">

            {/* Header */}
            <div className="flex items-start justify-between gap-3">

                <div className="min-w-0 space-y-1">

                    <div className="flex items-center gap-2">

                        <Hash className="h-4 w-4 shrink-0 text-blue-600" />

                        <label
                            htmlFor="roomNumber"
                            className="text-sm font-semibold text-slate-900"
                        >
                            Room Number
                        </label>

                    </div>

                    <p className="text-sm leading-6 text-slate-500">
                        Assign a unique room number or identifier for easy
                        management.
                    </p>

                </div>

                <div className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1">

                    <span className="text-xs font-semibold text-slate-600">
                        {room.roomNumber.length}/{MAX_LENGTH}
                    </span>

                </div>

            </div>

            {/* Input */}
            <div className="group relative">

                <DoorOpen
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
                    id="roomNumber"
                    type="text"
                    value={room.roomNumber}
                    maxLength={MAX_LENGTH}
                    onChange={handleChange}
                    placeholder="A-101"
                    autoComplete="off"
                    spellCheck={false}
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
                        font-semibold
                        uppercase
                        tracking-wider
                        text-slate-900

                        shadow-sm
                        transition-all
                        duration-200

                        placeholder:normal-case
                        placeholder:tracking-normal
                        placeholder:text-slate-400

                        hover:border-slate-300
                        hover:shadow-md

                        focus:border-blue-600
                        focus:ring-4
                        focus:ring-blue-100
                        focus:outline-none

                        sm:h-16
                        sm:rounded-2xl
                        sm:pl-14
                        sm:pr-5
                        sm:text-lg
                    "
                />

            </div>

            {/* Footer */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">

                <p className="min-w-0 text-xs leading-5 text-slate-500">
                    Examples: A-101, B-205, G-01 or STUDIO-7.
                </p>

                {room.roomNumber.length > 0 ? (
                    <div className="flex w-fit shrink-0 items-center gap-2 rounded-full bg-emerald-50 px-3 py-1">

                        <div className="h-2 w-2 rounded-full bg-emerald-500" />

                        <span className="text-xs font-semibold text-emerald-700">
                            Ready
                        </span>

                    </div>
                ) : (
                    <div className="flex w-fit shrink-0 items-center gap-2 rounded-full bg-slate-100 px-3 py-1">

                        <div className="h-2 w-2 rounded-full bg-slate-400" />

                        <span className="text-xs font-semibold text-slate-500">
                            Required
                        </span>

                    </div>
                )}

            </div>

        </div>
    );
}