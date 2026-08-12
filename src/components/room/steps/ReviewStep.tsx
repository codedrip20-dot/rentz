"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
    AlertTriangle,
    CheckCircle2,
    ClipboardCheck,
    Loader2,
    Sparkles,
} from "lucide-react";

import { useRoomWizard } from "@/context/RoomWizardContext";

import {
    createRoom,
} from "@/lib/firebase/room";

import {
    mapRoomForCreate,
} from "@/lib/firebase/room/roomMapper";

import {
    validateRoom,
} from "@/lib/firebase/room/validation";

import RoomSummary from "../review/RoomSummary";

import { useAuth } from "@/context/AuthContext";

export default function ReviewStep() {
    const router = useRouter();

    const {
        room,
        resetRoom,
    } = useRoomWizard();

    const { currentUser } = useAuth();

    const [publishing, setPublishing] = useState(false);

    const [error, setError] = useState<string | null>(null);

    async function publishRoom() {
        setError(null);

        const validationError = validateRoom(room);

        if (validationError) {
            setError(validationError);
            return;
        }

        console.log({
            ownerId: room.ownerId,
            propertyId: room.propertyId,
            currentUserUid: currentUser?.uid,
        });

        try {
            setPublishing(true);

            console.log(room);

            await createRoom(
                mapRoomForCreate(room)
            );

            resetRoom();

            router.push("/ownerDashboard/properties");
        } catch (err) {
            console.error(err);

            setError(
                "Something went wrong while publishing the room."
            );
        } finally {
            setPublishing(false);
        }
    }

    return (
        <div className="space-y-6 sm:space-y-8">

            {/* ==========================================================
                Hero
            ========================================================== */}

            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 shadow-2xl sm:rounded-3xl">

                <div className="relative p-5 sm:p-8 lg:p-10">

                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl sm:right-0 sm:top-0 sm:h-56 sm:w-56" />

                    <div className="relative flex items-start gap-3 sm:gap-5">

                        <div className="shrink-0 rounded-xl bg-white/20 p-3 backdrop-blur sm:rounded-2xl sm:p-4">

                            <ClipboardCheck className="h-6 w-6 text-white sm:h-8 sm:w-8" />

                        </div>

                        <div className="min-w-0">

                            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium backdrop-blur sm:mb-3 sm:px-4 sm:py-2 sm:text-sm">

                                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />

                                Final Step

                            </div>

                            <h1 className="text-2xl font-bold text-white sm:text-3xl">

                                Review & Publish

                            </h1>

                            <p className="mt-3 max-w-3xl text-sm leading-6 text-emerald-50 sm:leading-7">

                                Everything looks ready. Review your room one
                                final time before publishing it to Rentz.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

            {/* ==========================================================
                Error
            ========================================================== */}

            {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 p-4 sm:p-5">

                    <div className="flex items-start gap-3">

                        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />

                        <div className="min-w-0">

                            <h3 className="font-semibold text-red-800">
                                Validation Error
                            </h3>

                            <p className="mt-1 text-sm leading-6 text-red-700">
                                {error}
                            </p>

                        </div>

                    </div>

                </div>
            )}

            {/* ==========================================================
                Summary
            ========================================================== */}

            <RoomSummary />

            {/* ==========================================================
                Checklist
            ========================================================== */}

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-8">

                <h2 className="mb-5 text-xl font-bold text-slate-900 sm:mb-6 sm:text-2xl">
                    Final Checklist
                </h2>

                <div className="space-y-3 sm:space-y-4">

                    <ChecklistItem text="Basic room information is complete." />

                    <ChecklistItem text="Pricing has been verified." />

                    <ChecklistItem text="Amenities have been selected." />

                    <ChecklistItem text="Availability information is correct." />

                    <ChecklistItem text="Room images accurately represent the room." />

                </div>

                <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 sm:mt-8 sm:rounded-2xl sm:p-6">

                    <div className="flex items-start gap-3 sm:gap-4">

                        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 sm:mt-1 sm:h-6 sm:w-6" />

                        <div className="min-w-0">

                            <h3 className="font-semibold text-amber-900">
                                Before Publishing
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-amber-800 sm:leading-7">
                                Double-check your pricing, amenities,
                                availability, and uploaded images. Accurate
                                information builds tenant trust and improves
                                listing performance.
                            </p>

                        </div>

                    </div>

                </div>

                {/* ==========================================================
                    Publish Button
                ========================================================== */}

                <div className="mt-6 flex w-full sm:mt-10 sm:justify-end">

                    <button
                        type="button"
                        onClick={publishRoom}
                        disabled={publishing}
                        className="
                            inline-flex
                            min-h-12
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-gradient-to-r
                            from-emerald-600
                            to-teal-600
                            px-6
                            py-3.5
                            text-sm
                            font-semibold
                            text-white
                            shadow-lg
                            transition-all
                            active:scale-[0.99]
                            hover:scale-[1.02]
                            hover:shadow-xl
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                            disabled:hover:scale-100
                            sm:w-auto
                            sm:gap-3
                            sm:rounded-2xl
                            sm:px-8
                            sm:py-4
                            sm:text-base
                        "
                    >
                        {publishing ? (
                            <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                Publishing Room...
                            </>
                        ) : (
                            <>
                                <CheckCircle2 className="h-5 w-5" />
                                Publish Room
                            </>
                        )}
                    </button>

                </div>

            </div>

        </div>
    );
}

interface ChecklistItemProps {
    text: string;
}

function ChecklistItem({
    text,
}: ChecklistItemProps) {
    return (
        <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3.5 transition hover:border-emerald-200 hover:bg-emerald-50 sm:items-center sm:gap-4 sm:rounded-2xl sm:p-4">

            <div className="shrink-0 rounded-full bg-emerald-100 p-2">

                <CheckCircle2 className="h-4 w-4 text-emerald-600" />

            </div>

            <span className="min-w-0 text-sm font-medium leading-5 text-slate-700 sm:text-base">
                {text}
            </span>

        </div>
    );
}