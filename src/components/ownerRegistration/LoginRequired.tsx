"use client";

import Link from "next/link";
import { LogIn, ShieldAlert } from "lucide-react";

export default function LoginRequired() {
    return (
        <div className="flex min-h-[70vh] items-center justify-center px-6">
            <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">

                <div className="flex flex-col items-center text-center">

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                        <ShieldAlert className="h-8 w-8 text-amber-600" />
                    </div>

                    <h1 className="text-3xl font-bold text-slate-900">
                        Login Required
                    </h1>

                    <p className="mt-4 text-slate-600 leading-7">
                        You must first sign in with your Rentz account before
                        registering as a property owner.
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                        If you dont have an account yet, create one first and
                        then return here to continue your owner registration.
                    </p>

                    <Link
                        href="/login"
                        className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        <LogIn className="h-5 w-5" />
                        Login to Continue
                    </Link>

                </div>

            </div>
        </div>
    );
}