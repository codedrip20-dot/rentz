"use client";

import { Building2 } from "lucide-react";

export default function RegistrationHeader() {
    return (
        <div
            className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm

                sm:rounded-3xl
                sm:p-8
            "
        >
            <div
                className="
                    flex
                    flex-col
                    gap-4

                    sm:gap-6
                    md:flex-row
                    md:items-center
                "
            >
                {/* ==================================================
                    Icon
                ================================================== */}

                <div
                    className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-100

                        sm:h-16
                        sm:w-16
                        sm:rounded-2xl
                    "
                >
                    <Building2
                        className="
                            h-6
                            w-6
                            text-blue-600

                            sm:h-8
                            sm:w-8
                        "
                    />
                </div>

                {/* ==================================================
                    Content
                ================================================== */}

                <div className="min-w-0 flex-1">
                    <h1
                        className="
                            text-2xl
                            font-bold
                            leading-tight
                            text-slate-900

                            sm:text-3xl
                        "
                    >
                        Become a Property Owner
                    </h1>

                    <p
                        className="
                            mt-2
                            max-w-3xl
                            text-sm
                            leading-6
                            text-slate-600

                            sm:text-base
                            sm:leading-7
                        "
                    >
                        Register as a verified property
                        owner to list and manage your
                        properties on Rentz. Complete
                        the registration process by
                        providing your information,
                        selecting a subscription plan,
                        and confirming your payment.
                    </p>
                </div>
            </div>
        </div>
    );
}