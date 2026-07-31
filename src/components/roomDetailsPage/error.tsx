"use client";

import { AlertTriangle, ArrowLeft, RotateCw } from "lucide-react";
import { useRouter } from "next/navigation";

interface ErrorProps {
    error: Error & {
        digest?: string;
    };
    reset: () => void;
}

export default function Error({
    error,
    reset,
}: ErrorProps) {
    const router = useRouter();

    console.error(error);

    return (
        <main
            className="
                flex
                min-h-screen
                items-center
                justify-center
                bg-gradient-to-br
                from-slate-950
                via-blue-950
                to-slate-900
                p-6
            "
        >
            <section
                className="
                    w-full
                    max-w-xl
                    rounded-3xl
                    border
                    border-white/20
                    bg-white/10
                    p-8
                    text-center
                    backdrop-blur-2xl
                    shadow-2xl
                "
            >
                <div
                    className="
                        mx-auto
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-full
                        bg-red-500/20
                    "
                >
                    <AlertTriangle
                        size={40}
                        className="text-red-400"
                    />
                </div>

                <h1 className="mt-6 text-3xl font-bold text-white">
                    Something Went Wrong
                </h1>

                <p className="mt-3 text-blue-100">
                    We couldn't load the room details.
                    Please try again. If the problem
                    continues, check your internet
                    connection or try again later.
                </p>

                <div
                    className="
                        mt-8
                        flex
                        flex-col
                        gap-4
                        sm:flex-row
                    "
                >
                    <button
                        type="button"
                        onClick={reset}
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
                        <RotateCw size={18} />

                        Try Again
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            router.back()
                        }
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
                            font-semibold
                            text-white
                            transition-all
                            duration-300
                            hover:bg-white/10
                        "
                    >
                        <ArrowLeft size={18} />

                        Go Back
                    </button>
                </div>

                <p className="mt-8 text-xs text-blue-200">
                    Error Reference:{" "}
                    {error.digest ?? "Unknown"}
                </p>
            </section>
        </main>
    );
}