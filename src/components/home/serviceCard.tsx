"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  buttonText,
}: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/8
      backdrop-blur-xl
      transition-all
      duration-500
      hover:border-cyan-400/40
      hover:bg-white/12
      hover:shadow-[0_20px_60px_rgba(56,189,248,.20)]
      "
    >
      {/* Animated Border */}

      <div
        className="
        absolute
        inset-0
        rounded-3xl
        bg-gradient-to-br
        from-cyan-400/0
        via-blue-400/0
        to-cyan-400/0
        opacity-0
        transition-all
        duration-500
        group-hover:opacity-100
      "
      />

      {/* Glow */}

      <div
        className="
        absolute
        -top-20
        -right-20
        h-40
        w-40
        rounded-full
        bg-cyan-400/10
        blur-3xl
        opacity-0
        transition
        duration-500
        group-hover:opacity-100
      "
      />

      {/* Small Decoration */}

      <div className="absolute right-5 top-5 h-2 w-2 rounded-full bg-cyan-300/70" />

      <div className="relative flex h-full flex-col p-5 md:p-7">
        {/* Icon */}

        <div
          className="
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          border
          border-cyan-400/20
          bg-gradient-to-br
          from-cyan-400/15
          to-blue-500/15
          text-cyan-300
          shadow-lg
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:rotate-3
          group-hover:border-cyan-400/50
        "
        >
          {icon}
        </div>

        {/* Title */}

        <h3
          className="
          text-lg
          font-bold
          text-white
          transition-colors
          duration-300
          group-hover:text-cyan-300
        "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
          mt-3
          flex-1
          text-sm
          leading-7
          text-slate-300
        "
        >
          {description}
        </p>

        {/* CTA */}

        <button
          className="
          mt-7
          inline-flex
          items-center
          gap-2
          font-semibold
          text-cyan-300
          transition-all
          duration-300
          group-hover:gap-4
          group-hover:text-white
        "
        >
          {buttonText}

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;