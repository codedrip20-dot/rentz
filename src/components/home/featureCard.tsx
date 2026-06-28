"use client";

import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
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
        y: -10,
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

      rounded-3xl

      border
      border-white/10

      bg-white/[0.04]

      backdrop-blur-2xl

      p-8

      transition-all
      duration-500

      hover:border-blue-500/40

      hover:bg-white/[0.06]

      hover:shadow-[0_0_60px_rgba(59,130,246,.18)]
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

        opacity-60

        pointer-events-none
      "
      />

      {/* Animated Ambient Glow */}
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

        -top-16
        -right-16

        h-36
        w-36

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

        rounded-2xl

        border
        border-blue-500/20

        bg-blue-500/10

        text-blue-400

        transition-all
        duration-500

        group-hover:scale-110

        group-hover:border-blue-400/40

        group-hover:bg-blue-500/20

        group-hover:shadow-[0_0_30px_rgba(59,130,246,.35)]
      "
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="
        relative
        z-10

        mt-8

        text-2xl

        font-bold

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

        mt-4

        leading-8

        text-slate-400

        transition-colors

        duration-300

        group-hover:text-slate-300
      "
      >
        {description}
      </p>

      {/* Bottom Neon Line */}
      <div
        className="
        absolute

        bottom-0
        left-1/2

        h-1

        w-0

        -translate-x-1/2

        rounded-full

        bg-gradient-to-r

        from-cyan-400

        via-blue-500

        to-blue-600

        transition-all

        duration-500

        group-hover:w-28
      "
      />

      {/* Corner Accent */}
      <div
        className="
        absolute

        right-5
        top-5

        h-2
        w-2

        rounded-full

        bg-blue-400

        opacity-30

        transition-all

        duration-500

        group-hover:opacity-100

        group-hover:shadow-[0_0_15px_rgba(59,130,246,.9)]
      "
      />
    </motion.div>
  );
};

export default FeatureCard;