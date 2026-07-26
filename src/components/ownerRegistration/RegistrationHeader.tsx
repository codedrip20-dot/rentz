"use client";

import { Building2 } from "lucide-react";

export default function RegistrationHeader() {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                    <Building2 className="h-8 w-8 text-blue-600" />
                </div>

                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-slate-900">
                        Become a Property Owner
                    </h1>

                    <p className="mt-2 max-w-3xl text-slate-600">
                        Register as a verified property owner to list and
                        manage your properties on Rentz. Complete the
                        registration process by providing your information,
                        selecting a subscription plan, and confirming your
                        payment.
                    </p>
                </div>

            </div>
        </div>
    );
}