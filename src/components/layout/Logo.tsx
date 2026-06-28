import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/rentz logo.png";

const Logo = () => {
  return (
    <Link
      href="/"
      className="
        group
        flex
        items-center
        gap-3
        shrink-0
        transition-all
        duration-300
        hover:scale-[1.02]
      "
    >
      {/* Logo Icon */}
      <div
        className="
          relative
          h-12
          w-12
          overflow-hidden
          rounded-xl
          bg-white
          shadow-lg
          ring-1
          ring-white/20
          transition-all
          duration-300
          group-hover:shadow-blue-500/20
        "
      >
        <Image
          src={logo}
          alt="Rentz Logo"
          fill
          priority
          className="object-contain p-1.5"
        />
      </div>

      {/* Brand */}
      <div className="leading-tight">
        <h1
          className="
            text-2xl
            font-extrabold
            tracking-tight
            text-white
          "
        >
          Rent
          <span className="text-blue-400">z</span>
        </h1>

        <p
          className="
            hidden
            sm:block
            text-[11px]
            font-medium
            tracking-wide
            uppercase
            text-slate-300
          "
        >
          Find • Buy • Rent • Sell
        </p>
      </div>
    </Link>
  );
};

export default Logo;