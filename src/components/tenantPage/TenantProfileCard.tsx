"use client";

import { Phone, ShieldCheck, User2 } from "lucide-react";

import { Tenant } from "@/types/tenantTypes";

interface TenantProfileCardProps {
  tenant: Tenant;
}

export default function TenantProfileCard({
  tenant,
}: TenantProfileCardProps) {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
      {/* Decorative Glow */}
      <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-white/10 bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-cyan-500/10 px-8 py-8">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 shadow-xl shadow-blue-500/30">
              <User2 className="h-11 w-11 text-white" />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
                Tenant Profile
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                {tenant.officialName}
              </h2>

              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-300">
                  Verified Tenant
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Information */}
        <div className="space-y-5 p-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-blue-400/20 hover:bg-white/10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Full Name
            </p>

            <p className="text-lg font-semibold text-white">
              {tenant.officialName}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-blue-400/20 hover:bg-white/10">
            <div className="mb-2 flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-400" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Phone Number
              </p>
            </div>

            <p className="text-lg font-semibold text-white">
              {tenant.phoneNumber}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}