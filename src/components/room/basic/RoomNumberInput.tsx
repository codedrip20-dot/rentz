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
            <div className="flex items-start justify-between">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <Hash className="h-4 w-4 text-blue-600" />

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

                <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
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
                        left-5
                        top-1/2
                        h-5
                        w-5
                        -translate-y-1/2
                        text-slate-400
                        transition-colors
                        duration-200
                        group-focus-within:text-blue-600
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
                        h-16
                        w-full
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        pl-14
                        pr-5

                        text-lg
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
                    "
                />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">

                <p className="text-xs leading-5 text-slate-500">
                    Examples: A-101, B-205, G-01 or STUDIO-7.
                </p>

                {room.roomNumber.length > 0 ? (
                    <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1">
                        <div className="h-2 w-2 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold text-emerald-700">
                            Ready
                        </span>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
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