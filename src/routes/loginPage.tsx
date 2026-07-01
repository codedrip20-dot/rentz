import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import LoginHeader from "@/components/loginC/LoginHeader";
import LoginForm from "@/components/loginC/LoginForm";
import LoginSidePanel from "@/components/loginC/LoginSidePanel";

const LoginPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* Background Glow */}
      <div className="absolute -left-52 top-10 h-[420px] w-[420px] rounded-full bg-sky-500/20 blur-[170px]" />

      <div className="absolute -right-44 bottom-0 h-[380px] w-[380px] rounded-full bg-blue-700/20 blur-[170px]" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-[180px]" />

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />

      {/* Back Button */}
      <div className="absolute left-6 top-6 z-30">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
        >
          <ArrowLeft size={16} />
          Continue Exploring
        </Link>
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">

        <div className="grid w-full max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:grid-cols-2">

          {/* Left Section */}
          <section className="flex flex-col justify-center px-8 py-14 sm:px-12 lg:px-16">

            <LoginHeader />

            <div className="mt-10">
              <LoginForm />
            </div>

          </section>

          {/* Right Section */}
          <LoginSidePanel />

        </div>

      </div>

    </main>
  );
};

export default LoginPage;