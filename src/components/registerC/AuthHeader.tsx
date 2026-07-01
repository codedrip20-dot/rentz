import Image from "next/image";
import rentzLogo from "@/assets/rentz logo.png";

const AuthHeader = () => {
  return (
    <header className="flex flex-col items-center">
      {/* Logo */}
      <div className="relative">
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-sky-500/30 blur-3xl" />

        <Image
          src={rentzLogo}
          alt="Rentz Logo"
          priority
          className="relative w-20 h-20 object-contain drop-shadow-[0_0_30px_rgba(56,189,248,.45)]"
        />
      </div>

      {/* Brand */}
      <span className="mt-3 text-sm uppercase tracking-[0.35em] text-sky-400 font-semibold">
        Property Management Platform
      </span>

      {/* Heading */}
      <h1 className="mt-6 text-5xl font-black tracking-tight text-white">
        Create your account
      </h1>

      {/* Subtitle */}
      <p className="mt-5 max-w-lg text-center text-lg leading-8 text-slate-400">
        Join thousands of owners, tenants and buyers managing properties with
        confidence on <span className="text-sky-400 font-semibold">Rentz</span>.
      </p>
    </header>
  );
};

export default AuthHeader;