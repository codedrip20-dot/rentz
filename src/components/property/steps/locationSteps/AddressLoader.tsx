"use client";

export default function AddressLoader() {
    return (
        <div
            className="
                absolute
                left-0
                right-0
                z-50
                mt-2
                w-full
                max-w-full
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-white
                shadow-xl
            "
        >
            <div className="space-y-3 p-3 sm:space-y-4 sm:p-4">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={index}
                        className="
                            flex
                            min-w-0
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
                                shrink-0
                                rounded-full
                                bg-slate-200
                            "
                        />

                        <div className="min-w-0 flex-1 space-y-2">
                            <div
                                className="
                                    h-4
                                    w-3/4
                                    max-w-full
                                    rounded
                                    bg-slate-200
                                "
                            />

                            <div
                                className="
                                    h-3
                                    w-1/2
                                    max-w-full
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