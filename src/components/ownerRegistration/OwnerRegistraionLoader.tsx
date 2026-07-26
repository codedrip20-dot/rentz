"use client";

import { Loader2, ShieldCheck } from "lucide-react";

export default function OwnerRegistrationLoader() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
        <div className="flex flex-col items-center text-center">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <ShieldCheck className="h-8 w-8 text-blue-600" />
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            Verifying Your Account
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Please wait while we verify your account and registration status.
          </p>

          <Loader2 className="mt-8 h-8 w-8 animate-spin text-blue-600" />

          <p className="mt-4 text-sm text-slate-500">
            This will only take a few seconds...
          </p>
        </div>
      </div>
    </div>
  );
}