import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Property Management",
    description:
      "Owners can manage their properties, rooms, availability, and important property information from one centralized platform.",
    status: "Available",
  },
  {
    number: "02",
    title: "Owner Dashboard",
    description:
      "A dedicated workspace gives owners a clear view of their properties, rooms, tenants, and property management activities.",
    status: "Available",
  },
  {
    number: "03",
    title: "Tenant Experience",
    description:
      "Tenants get their own experience for discovering and interacting with rental spaces and managing their rental journey.",
    status: "Available",
  },
  {
    number: "04",
    title: "Property Marketplace",
    description:
      "A future marketplace where people can discover available rooms and properties and find spaces that match their needs.",
    status: "Coming later",
  },
  {
    number: "05",
    title: "Property Sales",
    description:
      "Rentz is planned to expand beyond rentals, allowing owners to advertise properties for sale and connect with potential buyers.",
    status: "Coming later",
  },
  {
    number: "06",
    title: "Financial Tools",
    description:
      "Future financial features will help owners understand rental income, expenses, pricing, and the overall performance of their properties.",
    status: "Coming later",
  },
  {
    number: "07",
    title: "Local Freelancers",
    description:
      "A future network connecting property owners and tenants with local professionals such as plumbers, electricians, and other service providers.",
    status: "Coming later",
  },
  {
    number: "08",
    title: "Connected Property Ecosystem",
    description:
      "The long-term vision is to bring property management, renting, discovery, sales, finances, and property services together in one ecosystem.",
    status: "Coming later",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28 lg:py-32">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              About Rentz
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Building a simpler way to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                experience property.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Rentz is a property technology platform being built to connect
              the different sides of the property ecosystem. Our vision is to
              make managing, discovering, renting, and eventually transacting
              property simpler through one connected platform.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Version update */}
      <section className="px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.12] via-white/[0.04] to-transparent p-7 shadow-2xl shadow-blue-950/20 sm:p-10 lg:p-12">
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
                    Current Development
                  </span>

                  <span className="text-sm text-slate-500">
                    Active evolution
                  </span>
                </div>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Rentz 2.0{" "}
                  <span className="text-blue-400">→</span>{" "}
                  <span className="text-white">Rentz 3.0</span>
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-300">
                  Rentz is currently being upgraded from{" "}
                  <span className="font-semibold text-white">Rentz 2.0</span>{" "}
                  to its next generation,{" "}
                  <span className="font-semibold text-blue-300">
                    Rentz 3.0
                  </span>
                  . This is an ongoing stage of development focused on
                  rebuilding, improving, and expanding the platform.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-300">
                  At the current stage,{" "}
                  <span className="font-semibold text-white">
                    Owner and Tenant services are available
                  </span>
                  . The remaining services are part of the broader Rentz
                  vision and will be introduced gradually as the platform
                  reaches a stronger and more mature position.
                </p>
              </div>

              {/* Version visual */}
              <div className="flex items-center gap-3 lg:pr-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Current
                  </p>
                  <p className="mt-1 text-2xl font-bold text-slate-300">
                    2.0
                  </p>
                </div>

                <div className="text-xl text-blue-400">→</div>

                <div className="rounded-2xl border border-blue-400/30 bg-blue-500/10 px-5 py-4 text-center shadow-lg shadow-blue-500/10">
                  <p className="text-xs uppercase tracking-wider text-blue-300">
                    Building
                  </p>
                  <p className="mt-1 text-2xl font-bold text-white">3.0</p>
                </div>
              </div>
            </div>

            <div className="relative mt-8 border-t border-white/10 pt-6">
              <p className="max-w-4xl text-sm leading-7 text-slate-400">
                We believe in building Rentz step by step — making the
                services available today reliable and useful before expanding
                into the rest of the ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                The vision
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Property should feel simple.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                Managing property can involve listing platforms,
                spreadsheets, payment records, tenant information, service
                providers, and multiple disconnected tools.
              </p>

              <p>
                Rentz is being built with a different approach: bring these
                experiences together gradually, creating one ecosystem where
                property owners and tenants can manage and interact with
                property more efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            The Rentz ecosystem
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            What Rentz is building
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            Some of these services are available today, while others
            represent the direction Rentz will expand into as the platform
            grows.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {features.map((feature) => {
            const available = feature.status === "Available";

            return (
              <article
                key={feature.number}
                className={`group relative overflow-hidden rounded-2xl border p-6 transition duration-300 sm:p-7 ${
                  available
                    ? "border-blue-400/20 bg-blue-500/[0.06] hover:-translate-y-1 hover:border-blue-400/40"
                    : "border-white/10 bg-white/[0.025] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                {/* Card glow */}
                {available && (
                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
                )}

                <div className="relative flex items-start justify-between gap-4">
                  <span
                    className={`text-sm font-semibold ${
                      available ? "text-blue-400" : "text-slate-600"
                    }`}
                  >
                    {feature.number}
                  </span>

                  <span
                    className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                      available
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                        : "border-white/10 bg-white/5 text-slate-500"
                    }`}
                  >
                    {feature.status}
                  </span>
                </div>

                <h3 className="relative mt-7 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 sm:py-20">
          <div className="mx-auto h-px w-12 bg-blue-500/60" />

          <h2 className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl">
            Built gradually. Designed for the bigger picture.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
            Rentz is not trying to launch everything at once. The platform is
            being developed in stages, with the goal of creating a strong
            foundation before expanding into new areas of the property
            ecosystem.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:px-8 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            Rentz 3.0
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
            The journey is still being built.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
            Today, Rentz focuses on its Owner and Tenant experiences. Tomorrow,
            the platform will continue expanding toward the larger vision of a
            connected property ecosystem.
          </p>

          <div className="mt-9">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-white/5 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}