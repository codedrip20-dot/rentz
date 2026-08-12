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
                min-h-12
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
                text-center
                text-sm
                font-medium
                leading-5
                text-blue-700
                transition-all
                duration-200

                hover:border-blue-300
                hover:bg-blue-100

                focus:outline-none
                focus:ring-4
                focus:ring-blue-100

                disabled:cursor-not-allowed
                disabled:opacity-60
            "
        >
            {loading ? (
                <>
                    <Loader2
                        size={18}
                        className="shrink-0 animate-spin"
                    />

                    <span className="min-w-0">
                        Detecting your location...
                    </span>
                </>
            ) : (
                <>
                    <LocateFixed
                        size={18}
                        className="shrink-0"
                    />

                    <span className="min-w-0">
                        Use Current Location
                    </span>
                </>
            )}
        </button>
    );
}