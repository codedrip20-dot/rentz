import Image from "next/image";
import rentzLogo from "@/assets/rentz logo.png";

const LoginHeader = () => {
  return (
    <header className="flex flex-col items-center text-center">
      {/* Logo */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-sky-500/30 blur-3xl" />

        <Image
          src={rentzLogo}
          alt="Rentz Logo"
          priority
          className="relative h-20 w-20 object-contain drop-shadow-[0_0_35px_rgba(56,189,248,0.45)]"
        />
      </div>

      {/* Brand */}
      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">
        Welcome Back
      </p>

      {/* Heading */}
      <h1 className="mt-6 text-5xl font-black tracking-tight text-white">
        Sign In
      </h1>

      {/* Subtitle */}
      <p className="mt-5 max-w-md text-center text-lg leading-8 text-slate-400">
        Access your dashboard to manage properties, bookings, tenants, and
        everything that matters—all in one place.
      </p>
    </header>
  );
};

export default LoginHeader;