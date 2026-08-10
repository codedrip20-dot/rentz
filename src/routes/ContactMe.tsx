import Link from "next/link";

const whatsappNumber = "8945950843";
const whatsappLink = `https://wa.me/91${whatsappNumber}`;

export default function ContactMe() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[850px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[500px] rounded-full bg-blue-500/5 blur-[130px]" />
      </div>

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Get in touch
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                meaningful.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Whether you want to learn more about Rentz, discuss the future
              of the platform, collaborate on an idea, or work together on a
              technology project, you&apos;re welcome to reach out.
            </p>
          </div>
        </div>
      </section>

      {/* Main contact area */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Founder story */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                The story behind Rentz
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                From a college idea to a rebuilt platform.
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-300">
                <p>
                  Rentz originally started as a startup idea created by a team
                  of engineers during college. The goal was simple: build a
                  technology platform that could make property management and
                  renting easier for both owners and tenants.
                </p>

                <p>
                  As life moved forward, the original team eventually
                  dispersed for various personal and professional reasons.
                  Instead of letting the idea disappear, one of the original
                  engineers decided to take the project forward and rebuild
                  it from scratch.
                </p>

                <p>
                  That engineer is{" "}
                  <span className="font-semibold text-white">
                    Utsav Karki
                  </span>
                  .
                </p>

                <p>
                  Rentz is now being rebuilt and evolved into its next
                  generation. The current version is part of the transition
                  from <span className="text-white">Rentz 2.0</span> to{" "}
                  <span className="font-semibold text-blue-300">
                    Rentz 3.0
                  </span>
                  , with a long-term vision of creating a connected property
                  technology ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Contact card */}
          <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.12] via-white/[0.04] to-transparent p-7 sm:p-10">
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                Contact
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Utsav Karki
              </h2>

              <p className="mt-2 text-sm font-medium text-slate-400">
                Engineer · Builder · Creator of Rentz 3.0
              </p>

              <div className="my-8 h-px bg-white/10" />

              <p className="text-sm leading-7 text-slate-400">
                Looking for a freelance developer, remote IT support, software
                development help, or someone to turn an idea into a working
                product?
              </p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  WhatsApp / Phone
                </p>

                <p className="mt-2 text-xl font-semibold tracking-wide text-white">
                  +91 {whatsappNumber}
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Contact on WhatsApp
                <span aria-hidden="true">↗</span>
              </a>

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                Available for freelance and remote IT opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you can contact about */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Open to conversations
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                What can we talk about?
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Freelance development",
                "Remote IT work",
                "Web applications",
                "Software projects",
                "Startup collaboration",
                "Rentz & product ideas",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-slate-300 transition hover:border-blue-400/20 hover:bg-blue-500/[0.05]"
                >
                  <span className="mr-3 text-blue-400">+</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 sm:py-24">
          <div className="mx-auto h-px w-12 bg-blue-500/60" />

          <h2 className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl">
            Have an idea?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400">
            Sometimes the best projects start with a simple conversation.
            Reach out and let&apos;s see where it goes.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Start a Conversation ↗
            </a>

            <Link
              href="/"
              className="inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}