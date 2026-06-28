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
        overflow-hidden

        rounded-2xl
        md:rounded-3xl

        border
        border-white/10

        bg-white/[0.05]
        backdrop-blur-2xl

        p-4
        md:p-7

        transition-all
        duration-500

        hover:border-blue-500/40
        hover:bg-white/[0.07]
        hover:shadow-[0_0_40px_rgba(59,130,246,0.18)]
      "
    >
      {/* Glass Reflection */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white/10
          via-transparent
          to-transparent
          pointer-events-none
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
          absolute
          -top-12
          -right-12

          h-32
          w-32

          rounded-full
          bg-blue-500/20
          blur-3xl
        "
      />

      {/* Top Right Dot */}
      <div
        className="
          absolute
          right-4
          top-4

          h-2
          w-2

          rounded-full
          bg-cyan-300

          opacity-40

          transition-all
          duration-500

          group-hover:opacity-100
          group-hover:shadow-[0_0_12px_#38bdf8]
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          z-10

          flex
          h-12
          w-12

          md:h-16
          md:w-16

          items-center
          justify-center

          rounded-xl
          md:rounded-2xl

          border
          border-blue-500/20

          bg-blue-500/10

          text-blue-400

          transition-all
          duration-500

          group-hover:scale-110
          group-hover:bg-blue-500/20
          group-hover:border-blue-400/40
          group-hover:shadow-[0_0_25px_rgba(59,130,246,.35)]
        "
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="
          relative
          z-10

          mt-5

          text-lg
          md:text-2xl

          font-bold

          leading-tight

          text-white

          transition-colors
          duration-300

          group-hover:text-blue-300
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          relative
          z-10

          mt-3

          text-xs
          md:text-base

          leading-6
          md:leading-7

          text-slate-300

          transition-colors
          duration-300

          group-hover:text-white
        "
      >
        {description}
      </p>

      {/* Bottom Accent */}
      <div
        className="
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

          group-hover:w-24
        "
      />

      {/* Border Glow */}
      <div
        className="
          absolute
          inset-0

          rounded-2xl
          md:rounded-3xl

          border
          border-blue-400/0

          transition-all
          duration-500

          group-hover:border-blue-400/20
        "
      />
    </motion.div>
  );
};

export default FeatureCard;