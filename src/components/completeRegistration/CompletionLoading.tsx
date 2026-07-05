"use client";

import { Loader2 } from "lucide-react";

interface CompletionLoadingProps {
  message: string;
}

const CompletionLoading = ({
  message,
}: CompletionLoadingProps) => {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16 flex items-center justify-center">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-10 text-center shadow-2xl">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-sky-500/10">
          <Loader2
            size={50}
            className="animate-spin text-sky-400"
          />
        </div>

        <h1 className="mt-8 text-3xl font-bold text-white">
          Completing Registration
        </h1>

        <p className="mt-4 text-slate-400">
          {message}
        </p>

        <div className="mt-10 h-2 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-sky-500" />
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Please don't close this window while we prepare your Rentz account.
        </p>

      </div>
    </main>
  );
};

export default CompletionLoading;