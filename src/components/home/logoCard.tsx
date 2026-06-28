"use client";

import { motion } from "framer-motion";

interface LogoCardProps {
  logo: React.ReactNode;
  name: string;
}

const LogoCard = ({ logo, name }: LogoCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="
        group
        relative
        overflow-hidden
        flex
        h-36
        w-full
        flex-col
        items-center
        justify-center
        rounded-3xl

        border
        border-white/10

        bg-white/[0.05]
        backdrop-blur-2xl

        transition-all
        duration-500

        hover:border-blue-400/40
        hover:bg-white/[0.08]

        hover:shadow-[0_0_40px_rgba(59,130,246,0.18)]
      "
    >
      {/* Glass reflection */}
      <div
        className="
          absolute
          inset-0
          rounded-3xl
          bg-gradient-to-br
          from-white/10
          via-transparent
          to-transparent
          opacity-60
          pointer-events-none
        "
      />

      {/* Subtle animated glow */}
      <motion.div
        animate={{
          opacity: [0.2, 0.55, 0.2],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-16
          h-32
          w-32
          rounded-full
          bg-blue-500/20
          blur-3xl
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          z-10
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full

          border
          border-white/10

          bg-white/5

          text-white/90

          transition-all
          duration-500

          group-hover:border-blue-400/40
          group-hover:bg-blue-500/10
          group-hover:text-blue-400
          group-hover:shadow-[0_0_25px_rgba(59,130,246,0.45)]
        "
      >
        {logo}
      </div>

      {/* Name */}
      <p
        className="
          relative
          z-10
          mt-5
          text-sm
          font-semibold
          tracking-[0.15em]
          uppercase

          text-slate-300

          transition-all
          duration-300

          group-hover:text-white
        "
      >
        {name}
      </p>

      {/* Bottom neon line */}
      <div
        className="
          absolute
          bottom-4

          h-1
          w-0

          rounded-full

          bg-gradient-to-r
          from-blue-400
          via-cyan-300
          to-blue-500

          transition-all
          duration-500

          group-hover:w-16
        "
      />
    </motion.div>
  );
};

export default LogoCard;