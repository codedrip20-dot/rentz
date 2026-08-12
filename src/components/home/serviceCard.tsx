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
        w-full
        min-w-0
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.08]
        backdrop-blur-xl
        transition-all
        duration-500

        sm:rounded-3xl

        sm:hover:border-cyan-400/40
        sm:hover:bg-white/[0.12]
        sm:hover:shadow-[0_20px_60px_rgba(56,189,248,.20)]
      "
    >
      {/* Animated Border */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          bg-gradient-to-br
          from-cyan-400/0
          via-blue-400/0
          to-cyan-400/0
          opacity-0
          transition-opacity
          duration-500

          sm:rounded-3xl
          sm:group-hover:opacity-100
        "
      />

      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          bg-cyan-400/10
          opacity-0
          blur-3xl
          transition-opacity
          duration-500

          sm:-right-20
          sm:-top-20
          sm:h-40
          sm:w-40
          sm:group-hover:opacity-100
        "
      />

      {/* Small Decoration */}

      <div
        className="
          pointer-events-none
          absolute
          right-4
          top-4
          h-1.5
          w-1.5
          rounded-full
          bg-cyan-300/70

          sm:right-5
          sm:top-5
          sm:h-2
          sm:w-2
        "
      />

      <div
        className="
          relative
          flex
          h-full
          min-w-0
          flex-col
          p-4

          sm:p-6
          md:p-7
        "
      >
        {/* Icon */}

        <div
          className="
            mb-5
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-cyan-400/20
            bg-gradient-to-br
            from-cyan-400/15
            to-blue-500/15
            text-cyan-300
            shadow-lg
            transition-all
            duration-300

            sm:mb-6
            sm:h-14
            sm:w-14
            sm:rounded-2xl

            sm:group-hover:scale-110
            sm:group-hover:rotate-3
            sm:group-hover:border-cyan-400/50
          "
        >
          {icon}
        </div>

        {/* Title */}

        <h3
          className="
            min-w-0
            break-words
            text-base
            font-bold
            leading-6
            text-white
            transition-colors
            duration-300

            sm:text-lg
            sm:group-hover:text-cyan-300
          "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-2
            min-w-0
            flex-1
            break-words
            text-sm
            leading-6
            text-slate-300

            sm:mt-3
            sm:leading-7
          "
        >
          {description}
        </p>

        {/* CTA */}

        <button
          type="button"
          className="
            mt-5
            inline-flex
            min-h-10
            w-fit
            max-w-full
            items-center
            gap-2
            break-words
            text-left
            text-sm
            font-semibold
            text-cyan-300
            transition-all
            duration-300

            sm:mt-7
            sm:text-base
            sm:group-hover:gap-4
            sm:group-hover:text-white
          "
        >
          <span className="break-words">
            {buttonText}
          </span>

          <ArrowRight
            size={18}
            className="
              shrink-0
              transition-transform
              duration-300

              sm:group-hover:translate-x-1
            "
          />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;