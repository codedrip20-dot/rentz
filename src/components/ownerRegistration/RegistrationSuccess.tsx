"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function RegistrationSuccess() {
    return (
        <div className="rounded-2xl border border-green-200 bg-white p-10 shadow-sm">
            <div className="flex flex-col items-center text-center">

                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>

                <h1 className="text-3xl font-bold text-slate-900">
                    Registration Successful!
                </h1>

                <p className="mt-4 max-w-2xl text-slate-600 leading-7">
                    Congratulations! Your owner registration has been completed
                    successfully. You can now access your Owner Dashboard,
                    manage your properties, and publish listings on Rentz.
                </p>

                <div className="mt-8 w-full max-w-md rounded-xl border border-slate-200 bg-slate-50 p-6">
                    <h2 className="text-lg font-semibold text-slate-900">
                        Whats Next?
                    </h2>

                    <ul className="mt-4 space-y-3 text-left text-slate-700">
                        <li>✅ Create your first property.</li>
                        <li>✅ Add rooms and amenities.</li>
                        <li>✅ Upload property images.</li>
                        <li>✅ Publish your listing to the marketplace.</li>
                    </ul>
                </div>

                <Link
                    href="/owner/dashBoard"
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                    Go to Owner Dashboard
                    <ArrowRight className="h-5 w-5" />
                </Link>

            </div>
        </div>
    );
}