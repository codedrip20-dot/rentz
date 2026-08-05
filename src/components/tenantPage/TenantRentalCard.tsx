"use client";

import {
  Building2,
  CalendarDays,
  CheckCircle2,
  DoorOpen,
  IndianRupee,
  Landmark,
} from "lucide-react";

import { Property } from "@/types/property";
import { Room } from "@/types/roomTypes";
import { Tenant } from "@/types/tenantTypes";

interface TenantRentalCardProps {
  tenant: Tenant;
  room: Room | null;
  property: Property | null;
}

export default function TenantRentalCard({
  tenant,
  room,
  property,
}: TenantRentalCardProps) {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
      {/* Decorative Glow */}
      <div className="absolute -top-28 -right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-white/10 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-transparent px-8 py-7">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-xl shadow-blue-500/30">
              <Building2 className="h-8 w-8 text-white" />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Rental Overview
              </p>

              <h2 className="mt-1 text-3xl font-bold text-white">
                Current Rental
              </h2>
            </div>
          </div>
        </div>

        <div className="space-y-8 p-8">
          {/* Rent Highlight */}
          <div className="overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
                  Monthly Rent
                </p>

                <h2 className="mt-3 text-5xl font-black text-white">
                  ₹{tenant.monthlyRent.toLocaleString("en-IN")}
                </h2>
              </div>

              <div className="rounded-3xl bg-emerald-500/20 p-5">
                <IndianRupee className="h-10 w-10 text-emerald-300" />
              </div>
            </div>
          </div>

          {/* Property & Room */}
          <div className="grid gap-5 lg:grid-cols-2">
            <DetailCard
              icon={<Building2 className="h-6 w-6 text-blue-400" />}
              title="Property"
              value={property?.details.title ?? "N/A"}
            />

            <DetailCard
              icon={<DoorOpen className="h-6 w-6 text-cyan-400" />}
              title="Room"
              value={room?.roomName ?? "N/A"}
            />
          </div>

          {/* Bottom Information */}
          <div className="grid gap-5 md:grid-cols-3">
            <DetailCard
              icon={<CalendarDays className="h-6 w-6 text-yellow-400" />}
              title="Move In"
              value={tenant.moveInDate.toLocaleDateString()}
            />

            <DetailCard
              icon={<Landmark className="h-6 w-6 text-orange-400" />}
              title="Deposit"
              value={`₹${tenant.securityDeposit.toLocaleString("en-IN")}`}
            />

            <DetailCard
              icon={<CheckCircle2 className="h-6 w-6 text-emerald-400" />}
              title="Status"
              value={
                tenant.status.charAt(0).toUpperCase() +
                tenant.status.slice(1)
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface DetailCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function DetailCard({
  icon,
  title,
  value,
}: DetailCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/10 hover:shadow-xl">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 transition-all duration-300 group-hover:bg-blue-500/10">
        {icon}
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
        {title}
      </p>

      <h3 className="mt-3 break-words text-xl font-bold text-white">
        {value}
      </h3>
    </div>
  );
}