"use client";

import {
  Building2,
  ExternalLink,
  MapPin,
  MapPinned,
  Navigation,
} from "lucide-react";

import { Property } from "@/types/property";

interface TenantLocationProps {
  property: Property | null;
}

export default function TenantLocation({
  property,
}: TenantLocationProps) {
  if (!property) {
    return null;
  }

  const { location } = property;
  const { address, coordinates } = location;

  const { latitude, longitude } = coordinates;

  /* ==========================================================
     Google Maps
  ========================================================== */

  const openGoogleMaps = () => {
    const url = location.placeId
      ? `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&query_place_id=${location.placeId}`
      : `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const getDirections = () => {
    const url = location.placeId
      ? `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&destination_place_id=${location.placeId}`
      : `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  /* ==========================================================
     Full Address
  ========================================================== */

  const fullAddress = [
    address.street,
    address.area,
    address.city,
    address.state,
    address.pincode,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <section className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
      {/* Decorative Glow */}

      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative z-10">
        {/* ======================================================
            Header
        ====================================================== */}

        <div className="border-b border-white/10 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-transparent px-6 py-7 sm:px-8">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-xl shadow-blue-500/30">
              <MapPinned className="h-8 w-8 text-white" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 sm:text-sm">
                Property Location
              </p>

              <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                Find Your Property
              </h2>

              <p className="mt-2 text-sm text-white/50">
                View your rental location or open it directly in Google Maps.
              </p>
            </div>
          </div>
        </div>

        {/* ======================================================
            Map + Information
        ====================================================== */}

        <div className="grid gap-8 p-6 lg:grid-cols-[1.35fr_0.85fr] sm:p-8">
          {/* ================= Map ================= */}

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 shadow-2xl">
            <iframe
              title="Property Location"
              src={`https://www.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`}
              className="h-[420px] w-full border-0 lg:h-full lg:min-h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* ================= Location Details ================= */}

          <div className="flex flex-col gap-5">
            {/* Full Address */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                    Your Address
                  </p>

                  <h3 className="mt-1 font-semibold text-white">
                    Property Address
                  </h3>
                </div>
              </div>

              <p className="text-base leading-7 text-white/80">
                {fullAddress || "Address not available"}
              </p>
            </div>

            {/* Property Details */}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <LocationDetail
                label="City"
                value={address.city}
              />

              <LocationDetail
                label="State"
                value={address.state}
              />

              <LocationDetail
                label="Area"
                value={address.area}
              />

              <LocationDetail
                label="Pincode"
                value={address.pincode}
              />
            </div>

            {/* Nearby Landmark */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Building2 className="h-5 w-5 text-cyan-400" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                    Nearby Landmark
                  </p>

                  <p className="mt-2 font-semibold leading-6 text-white">
                    {location.nearbyLandmark || "Not specified"}
                  </p>
                </div>
              </div>
            </div>

            {/* Directions Note */}

            {location.directions && (
              <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-5">
                <div className="flex items-start gap-4">
                  <Navigation className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                      Location Note
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/70">
                      {location.directions}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ================= Actions ================= */}

            <div className="mt-auto grid gap-3 pt-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <button
                type="button"
                onClick={openGoogleMaps}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30"
              >
                <ExternalLink className="h-5 w-5" />

                Open Maps
              </button>

              <button
                type="button"
                onClick={getDirections}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-white/10"
              >
                <Navigation className="h-5 w-5 text-cyan-400" />

                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================
   Location Detail
========================================================== */

interface LocationDetailProps {
  label: string;
  value?: string;
}

function LocationDetail({
  label,
  value,
}: LocationDetailProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-blue-400/20 hover:bg-white/[0.07]">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
        {label}
      </p>

      <p className="mt-2 break-words font-semibold text-white">
        {value || "Not available"}
      </p>
    </div>
  );
}