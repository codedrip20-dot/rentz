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
        })
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
        <div className="space-y-8">
            {/* ==========================================================
                Hero
            ========================================================== */}

            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 shadow-2xl">
                <div className="relative p-8 lg:p-10">
                    <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

                    <div className="relative flex items-start gap-5">
                        <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
                            <ClipboardCheck className="h-8 w-8 text-white" />
                        </div>

                        <div>
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
                                <Sparkles className="h-4 w-4" />
                                Final Step
                            </div>

                            <h1 className="text-3xl font-bold text-white">
                                Review & Publish
                            </h1>

                            <p className="mt-3 max-w-3xl text-emerald-50 leading-7">
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
                <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                    <div className="flex gap-3">
                        <AlertTriangle className="mt-0.5 h-5 w-5 text-red-600" />

                        <div>
                            <h3 className="font-semibold text-red-800">
                                Validation Error
                            </h3>

                            <p className="mt-1 text-sm text-red-700">
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

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                    Final Checklist
                </h2>

                <div className="space-y-4">
                    <ChecklistItem text="Basic room information is complete." />

                    <ChecklistItem text="Pricing has been verified." />

                    <ChecklistItem text="Amenities have been selected." />

                    <ChecklistItem text="Availability information is correct." />

                    <ChecklistItem text="Room images accurately represent the room." />
                </div>

                <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                    <div className="flex gap-4">
                        <AlertTriangle className="mt-1 h-6 w-6 text-amber-600" />

                        <div>
                            <h3 className="font-semibold text-amber-900">
                                Before Publishing
                            </h3>

                            <p className="mt-2 text-sm leading-7 text-amber-800">
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

                <div className="mt-10 flex justify-end">
                    <button
                        type="button"
                        onClick={publishRoom}
                        disabled={publishing}
                        className="
                            inline-flex
                            items-center
                            gap-3
                            rounded-2xl
                            bg-gradient-to-r
                            from-emerald-600
                            to-teal-600
                            px-8
                            py-4
                            text-base
                            font-semibold
                            text-white
                            shadow-lg
                            transition-all
                            hover:scale-[1.02]
                            hover:shadow-xl
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                            disabled:hover:scale-100
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
        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-emerald-200 hover:bg-emerald-50">
            <div className="rounded-full bg-emerald-100 p-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            </div>

            <span className="font-medium text-slate-700">
                {text}
            </span>
        </div>
    );
}