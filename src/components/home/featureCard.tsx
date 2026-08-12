"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="
        group
        relative
        w-full
        min-w-0
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.05]
        p-4
        backdrop-blur-2xl
        transition-all
        duration-500

        sm:rounded-3xl
        sm:p-6

        lg:p-7

        sm:hover:border-blue-500/40
        sm:hover:bg-white/[0.07]
        sm:hover:shadow-[0_0_40px_rgba(59,130,246,0.18)]
      "
    >
      {/* Glass Reflection */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-white/10
          via-transparent
          to-transparent
        "
      />

      {/* Ambient Glow */}

      <motion.div
        animate={{
          opacity: [0.15, 0.45, 0.15],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-28
          w-28
          rounded-full
          bg-blue-500/20
          blur-3xl

          sm:-right-12
          sm:-top-12
          sm:h-32
          sm:w-32
        "
      />

      {/* Top Right Dot */}

      <div
        className="
          pointer-events-none
          absolute
          right-3
          top-3
          h-1.5
          w-1.5
          rounded-full
          bg-cyan-300
          opacity-40
          transition-all
          duration-500

          sm:right-4
          sm:top-4
          sm:h-2
          sm:w-2

          sm:group-hover:opacity-100
          sm:group-hover:shadow-[0_0_12px_#38bdf8]
        "
      />

      {/* Icon */}

      <div
        className="
          relative
          z-10
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-blue-500/20
          bg-blue-500/10
          text-blue-400
          transition-all
          duration-500

          sm:h-14
          sm:w-14

          lg:h-16
          lg:w-16
          lg:rounded-2xl

          sm:group-hover:scale-110
          sm:group-hover:bg-blue-500/20
          sm:group-hover:border-blue-400/40
          sm:group-hover:shadow-[0_0_25px_rgba(59,130,246,.35)]
        "
      >
        {icon}
      </div>

      {/* Title */}

      <h3
        className="
          relative
          z-10
          mt-4
          min-w-0
          break-words
          text-lg
          font-bold
          leading-6
          text-white
          transition-colors
          duration-300

          sm:mt-5
          sm:text-xl
          sm:leading-7

          lg:text-2xl
          lg:leading-tight

          sm:group-hover:text-blue-300
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          relative
          z-10
          mt-2.5
          min-w-0
          break-words
          text-sm
          leading-6
          text-slate-300
          transition-colors
          duration-300

          sm:mt-3
          sm:text-base
          sm:leading-7

          sm:group-hover:text-white
        "
      >
        {description}
      </p>

      {/* Bottom Accent */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-[3px]
          w-0
          -translate-x-1/2
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-blue-700
          transition-all
          duration-500

          sm:group-hover:w-24
        "
      />

      {/* Border Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          border
          border-blue-400/0
          transition-all
          duration-500

          sm:rounded-3xl
          sm:group-hover:border-blue-400/20
        "
      />
    </motion.div>
  );
};

export default FeatureCard;