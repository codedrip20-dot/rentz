"use client";

export default function TenantLoading() {
  return (
    <main className="min-h-screen animate-pulse">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-8">
        {/* ================= Header ================= */}
        <section className="overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl">
          <div className="mb-6 h-10 w-44 rounded-full bg-gradient-to-r from-white/5 to-white/10" />

          <div className="mb-5 h-14 w-full max-w-lg rounded-2xl bg-gradient-to-r from-white/5 to-white/10" />

          <div className="space-y-3">
            <div className="h-4 w-full rounded-full bg-white/10" />
            <div className="h-4 w-5/6 rounded-full bg-white/10" />
            <div className="h-4 w-3/5 rounded-full bg-white/10" />
          </div>

          {/* Header Stats */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="mb-3 h-4 w-20 rounded-full bg-white/10" />
                <div className="h-8 w-24 rounded-xl bg-white/10" />
              </div>
            ))}
          </div>
        </section>

        {/* ================= Cards ================= */}
        <section className="grid gap-8 xl:grid-cols-2">
          {/* Tenant Profile */}
          <div className="rounded-[28px] border border-white/10 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <div className="mb-8 flex items-center gap-5">
              <div className="h-20 w-20 rounded-full bg-white/10" />

              <div className="flex-1 space-y-3">
                <div className="h-6 w-52 rounded-full bg-white/10" />
                <div className="h-4 w-32 rounded-full bg-white/10" />
              </div>
            </div>

            <div className="space-y-5">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between"
                >
                  <div className="h-4 w-28 rounded-full bg-white/10" />
                  <div className="h-4 w-44 rounded-full bg-white/10" />
                </div>
              ))}
            </div>
          </div>

          {/* Rental Information */}
          <div className="rounded-[28px] border border-white/10 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <div className="mb-8 h-8 w-56 rounded-xl bg-white/10" />

            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between"
                >
                  <div className="h-4 w-32 rounded-full bg-white/10" />
                  <div className="h-4 w-40 rounded-full bg-white/10" />
                </div>
              ))}
            </div>

            <div className="mt-10 h-28 rounded-2xl bg-white/5" />
          </div>
        </section>

        {/* ================= Location ================= */}
        <section className="rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-xl backdrop-blur-2xl">
          <div className="mb-6 h-8 w-60 rounded-xl bg-white/10" />

          <div className="overflow-hidden rounded-3xl bg-white/5 p-3">
            <div className="h-96 w-full rounded-2xl bg-white/10" />
          </div>
        </section>
      </div>
    </main>
  );
}