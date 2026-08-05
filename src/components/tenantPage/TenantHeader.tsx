"use client";

import { useRouter } from "next/navigation";
import { Building2, Home } from "lucide-react";

interface TenantHeaderProps {
  tenantName?: string;
}

export default function TenantHeader({
  tenantName,
}: TenantHeaderProps) {
  const router = useRouter();

  return (
    <header className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl lg:p-10">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-500/10" />
      <div className="absolute -top-28 -right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Section */}
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2">
            <Home className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-semibold tracking-wide text-blue-300">
              TENANT DASHBOARD
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
            {tenantName
              ? `Welcome back, ${tenantName} 👋`
              : "Welcome back 👋"}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            View your rental details, access important property information,
            stay connected with your landlord, and manage your tenancy—all
            from one beautifully organized dashboard.
          </p>

          <button
            onClick={() => router.push("/")}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
          >
            <Home className="h-5 w-5" />
            Home
          </button>
        </div>

        {/* Right Card */}
        <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">
              <Building2 className="h-8 w-8 text-white" />
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-slate-400">
                Rentz
              </p>

              <h3 className="text-2xl font-bold text-white">
                Tenant Portal
              </h3>
            </div>
          </div>

          <div className="my-6 h-px bg-white/10" />

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Status
              </p>

              <p className="mt-2 text-lg font-semibold text-emerald-400">
                Active
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Dashboard
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                Ready
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}