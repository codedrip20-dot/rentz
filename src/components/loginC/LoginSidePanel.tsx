import Image from "next/image";
import heroBg from "@/assets/herobg.png";
import {
  LayoutDashboard,
  Building2,
  Bell,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    text: "Access your personalized dashboard",
  },
  {
    icon: Building2,
    text: "Manage all your properties effortlessly",
  },
  {
    icon: Bell,
    text: "Stay updated with bookings & requests",
  },
  {
    icon: ShieldCheck,
    text: "Secure, encrypted and always available",
  },
];

const LoginSidePanel = () => {
  return (
    <aside className="relative hidden h-full w-full overflow-hidden lg:flex rounded-r-3xl">
      {/* Background */}
      <Image
        src={heroBg}
        alt="Luxury Property"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-sky-950/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-12 text-white">
        {/* Top */}
        <div>
          <span className="rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
            Rentz Workspace
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight">
            Welcome
            <br />
            Back.
          </h2>

          <p className="mt-6 max-w-md text-lg leading-8 text-slate-300">
            Continue managing your properties, bookings, tenants and finances
            from one secure workspace.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-4">
          {features.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md"
            >
              <div className="rounded-xl bg-sky-500/10 p-3">
                <Icon className="h-6 w-6 text-sky-400" />
              </div>

              <span className="text-slate-200">
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="rounded-2xl border border-sky-500/20 bg-sky-500/10 p-6 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">
            Trusted Platform
          </p>

          <h3 className="mt-3 text-2xl font-bold">
            Thousands of users rely on Rentz every day.
          </h3>

          <p className="mt-3 text-slate-300">
            One platform to rent, buy, sell and manage properties with complete
            confidence.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default LoginSidePanel;