"use client";

export default function AddressLoader() {
    return (
        <div
            className="
                absolute
                z-50
                mt-2
                w-full
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-white
                shadow-xl
            "
        >
            <div className="space-y-4 p-4">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={index}
                        className="
                            flex
                            items-start
                            gap-3
                            animate-pulse
                        "
                    >
                        <div
                            className="
                                mt-1
                                h-5
                                w-5
                                rounded-full
                                bg-slate-200
                                shrink-0
                            "
                        />

                        <div className="flex-1 space-y-2">
                            <div
                                className="
                                    h-4
                                    w-3/4
                                    rounded
                                    bg-slate-200
                                "
                            />

                            <div
                                className="
                                    h-3
                                    w-1/2
                                    rounded
                                    bg-slate-100
                                "
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}