import Image from "next/image";
import heroBg from "@/assets/herobg.png";
import { Building2, ShieldCheck, Hammer, ChartColumnBig } from "lucide-react";

const features = [
  {
    icon: Building2,
    text: "Manage unlimited properties",
  },
  {
    icon: ShieldCheck,
    text: "Find verified tenants & buyers",
  },
  {
    icon: Hammer,
    text: "Hire trusted local freelancers",
  },
  {
    icon: ChartColumnBig,
    text: "Track rent, expenses & profit",
  },
];

const AuthSidePanel = () => {
  return (
    <aside className="relative hidden lg:flex w-full h-full overflow-hidden rounded-3xl">
      {/* Background */}
      <Image
        src={heroBg}
        alt="Luxury apartment"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/70 to-sky-950/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between p-12 text-white">

        <div>
          <span className="rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-2 text-xs font-semibold tracking-widest uppercase text-sky-300">
            Rentz Platform
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight">
            Everything
            <br />
            Property.
            <br />
            One Platform.
          </h2>

          <p className="mt-6 max-w-md text-lg leading-8 text-slate-300">
            Rent, buy, sell, manage properties and connect with trusted
            professionals—all from one modern platform.
          </p>
        </div>

        <div className="space-y-5">
          {features.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4"
            >
              <Icon className="h-6 w-6 text-sky-400" />

              <span className="text-base text-slate-200">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default AuthSidePanel;