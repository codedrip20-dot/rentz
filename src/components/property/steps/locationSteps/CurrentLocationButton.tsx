"use client";

import { LocateFixed, Loader2 } from "lucide-react";

interface CurrentLocationButtonProps {
    loading: boolean;
    onClick: () => void | Promise<void>;
}

export default function CurrentLocationButton({
    loading,
    onClick,
}: CurrentLocationButtonProps) {
    return (
        <button
            type="button"
            onClick={() => void onClick()}
            disabled={loading}
            className="
                mt-3
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-blue-200
                bg-blue-50
                px-4
                py-3
                text-sm
                font-medium
                text-blue-700
                transition-all
                duration-200
                hover:border-blue-300
                hover:bg-blue-100
                disabled:cursor-not-allowed
                disabled:opacity-60
            "
        >
            {loading ? (
                <>
                    <Loader2
                        size={18}
                        className="animate-spin"
                    />

                    <span>
                        Detecting your location...
                    </span>
                </>
            ) : (
                <>
                    <LocateFixed size={18} />

                    <span>
                        Use Current Location
                    </span>
                </>
            )}
        </button>
    );
}