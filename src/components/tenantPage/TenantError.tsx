"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

interface TenantErrorProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export default function TenantError({
  title = "Unable to load tenant information",
  message = "Something went wrong while loading your dashboard. Please try again.",
  onRetry,
}: TenantErrorProps) {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-xl">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/20">
          <AlertTriangle className="h-10 w-10 text-red-400" />
        </div>

        <h2 className="mb-3 text-3xl font-bold text-white">
          {title}
        </h2>

        <p className="mb-8 text-base leading-relaxed text-slate-300">
          {message}
        </p>

        {onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
          >
            <RefreshCw className="h-5 w-5" />
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}