"use client";

import Link from "next/link";

import {
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

export default function RegistrationSuccess() {
    return (
        <div
            className="
                w-full
                rounded-2xl
                border
                border-green-200
                bg-white
                p-5
                shadow-sm

                sm:rounded-3xl
                sm:p-10
            "
        >
            <div
                className="
                    flex
                    flex-col
                    items-center
                    text-center
                "
            >
                {/* ==================================================
                    Success Icon
                ================================================== */}

                <div
                    className="
                        mb-5
                        flex
                        h-16
                        w-16
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-green-100

                        sm:mb-6
                        sm:h-20
                        sm:w-20
                    "
                >
                    <CheckCircle2
                        className="
                            h-8
                            w-8
                            text-green-600

                            sm:h-10
                            sm:w-10
                        "
                    />
                </div>

                {/* ==================================================
                    Heading
                ================================================== */}

                <h1
                    className="
                        text-2xl
                        font-bold
                        leading-tight
                        text-slate-900

                        sm:text-3xl
                    "
                >
                    Registration Successful!
                </h1>

                <p
                    className="
                        mt-3
                        max-w-2xl
                        text-sm
                        leading-6
                        text-slate-600

                        sm:mt-4
                        sm:text-base
                        sm:leading-7
                    "
                >
                    Congratulations! Your owner
                    registration has been completed
                    successfully. You can now access
                    your Owner Dashboard, manage your
                    properties, and publish listings
                    on Rentz.
                </p>

                {/* ==================================================
                    What's Next
                ================================================== */}

                <div
                    className="
                        mt-6
                        w-full
                        max-w-md
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        p-4
                        text-left

                        sm:mt-8
                        sm:p-6
                    "
                >
                    <h2
                        className="
                            text-base
                            font-semibold
                            text-slate-900

                            sm:text-lg
                        "
                    >
                        Whats Next?
                    </h2>

                    <ul
                        className="
                            mt-4
                            space-y-3
                            text-sm
                            leading-6
                            text-slate-700

                            sm:text-base
                        "
                    >
                        <li>
                            ✅ Create your first
                            property.
                        </li>

                        <li>
                            ✅ Add rooms and
                            amenities.
                        </li>

                        <li>
                            ✅ Upload property
                            images.
                        </li>

                        <li>
                            ✅ Publish your listing
                            to the marketplace.
                        </li>
                    </ul>
                </div>

                {/* ==================================================
                    Dashboard
                ================================================== */}

                <Link
                    href="/owner/dashBoard"
                    className="
                        mt-6
                        inline-flex
                        min-h-12
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-blue-600
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:bg-blue-700
                        active:scale-[0.98]

                        sm:mt-8
                        sm:w-auto
                        sm:px-6
                        sm:text-base
                    "
                >
                    Go to Owner Dashboard

                    <ArrowRight
                        className="
                            h-5
                            w-5
                            shrink-0
                        "
                    />
                </Link>
            </div>
        </div>
    );
}