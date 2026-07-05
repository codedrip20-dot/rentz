"use client";

import { CheckCircle2, XCircle } from "lucide-react";

interface CompletionStatusProps {
  success: boolean;
  message: string;
}

const CompletionStatus = ({
  success,
  message,
}: CompletionStatusProps) => {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16 flex items-center justify-center">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-10 text-center shadow-2xl">

        <div
          className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full ${
            success
              ? "bg-emerald-500/10"
              : "bg-red-500/10"
          }`}
        >
          {success ? (
            <CheckCircle2
              size={54}
              className="text-emerald-400"
            />
          ) : (
            <XCircle
              size={54}
              className="text-red-400"
            />
          )}
        </div>

        <h1 className="mt-8 text-3xl font-bold text-white">
          {success
            ? "Registration Complete"
            : "Registration Failed"}
        </h1>

        <p className="mt-4 text-slate-400">
          {message}
        </p>

        {success ? (
          <>
            <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
              <p className="text-sm text-emerald-300">
                Your Rentz account has been created successfully.
                You'll be redirected to the homepage shortly.
              </p>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              Redirecting...
            </p>
          </>
        ) : (
          <>
            <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
              <p className="text-sm text-red-300">
                We couldn't complete your registration.
                Please return to the registration page and
                try again.
              </p>
            </div>

            <button
              onClick={() => window.location.replace("/register")}
              className="mt-8 w-full rounded-xl bg-sky-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-sky-400"
            >
              Back to Registration
            </button>
          </>
        )}

      </div>
    </main>
  );
};

export default CompletionStatus;