"use client";

import {
    ArrowLeft,
    Pencil,
    Trash2,
} from "lucide-react";

import { useRouter } from "next/navigation";

interface ActionButtonsProps {
    roomId: string;
}

export default function ActionButtons({
    roomId,
}: ActionButtonsProps) {
    const router = useRouter();

    function handleBack() {
        router.back();
    }

    function handleEdit() {
       
        alert('not yet built')
    }

    function handleDelete() {
        // TODO:
        // Add confirmation modal
        // Delete room from Firestore
        // Redirect to rooms list

        console.log("Delete Room:", roomId);
    }

    return (
        <section
            className="
                rounded-3xl
                border
                border-white/20
                bg-white/10
                backdrop-blur-2xl
                shadow-2xl
                p-5
                sm:p-6
            "
        >
            <div
                className="
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                "
            >
                {/* Back */}

                <button
                    type="button"
                    onClick={handleBack}
                    className="
                        flex
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        rounded-2xl
                        border
                        border-white/20
                        bg-white/5
                        px-5
                        py-3
                        font-medium
                        text-white
                        transition-all
                        duration-300
                        hover:bg-white/10
                    "
                >
                    <ArrowLeft size={18} />

                    Back
                </button>

                {/* Edit */}

                <button
                    type="button"
                    onClick={handleEdit}
                    className="
                        flex
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        rounded-2xl
                        bg-gradient-to-r
                        from-blue-600
                        to-cyan-500
                        px-5
                        py-3
                        font-semibold
                        text-white
                        shadow-lg
                        transition-all
                        duration-300
                        hover:scale-[1.02]
                    "
                >
                    <Pencil size={18} />

                    Edit Room
                </button>

                {/* Delete */}

                <button
                    type="button"
                    onClick={handleDelete}
                    className="
                        flex
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        rounded-2xl
                        border
                        border-red-500/40
                        bg-red-500/10
                        px-5
                        py-3
                        font-semibold
                        text-red-300
                        transition-all
                        duration-300
                        hover:bg-red-500/20
                    "
                >
                    <Trash2 size={18} />

                    Delete Room
                </button>
            </div>
        </section>
    );
}