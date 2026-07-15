"use client";

import { Loader2, MapPin } from "lucide-react";

export default function AddressLoader() {
    return (
        <div
            className="
                absolute
                top-full
                left-0
                right-0
                z-50
                mt-2
                rounded-xl
                border
                border-slate-200
                bg-white
                shadow-xl
            "
        >
            <div
                className="
                    flex
                    items-center
                    gap-3
                    px-4
                    py-4
                "
            >
                <div
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-50
                    "
                >
                    <Loader2
                        size={18}
                        className="
                            animate-spin
                            text-blue-600
                        "
                    />
                </div>

                <div className="flex flex-col">
                    <span
                        className="
                            text-sm
                            font-semibold
                            text-slate-900
                        "
                    >
                        Searching locations...
                    </span>

                    <span
                        className="
                            text-xs
                            text-slate-500
                        "
                    >
                        Fetching suggestions from Google Places
                    </span>
                </div>

                <MapPin
                    size={18}
                    className="
                        ml-auto
                        text-slate-300
                    "
                />
            </div>
        </div>
    );
}