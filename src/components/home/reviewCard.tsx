"use client";

import { motion } from "framer-motion";
import { Star, MapPin, BadgeCheck } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ReviewCardProps {
  name: string;
  role: "Tenant" | "Property Owner";
  location: string;
  review: string;
  rating: number;
  avatar: StaticImageData | string;
}

const ReviewCard = ({
  name,
  role,
  location,
  review,
  rating,
  avatar,
}: ReviewCardProps) => {
  return (
    <motion.article
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
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
        bg-white/5
        p-4
        shadow-[0_0_25px_rgba(37,99,235,0.08)]
        backdrop-blur-xl
        transition-all
        duration-300

        sm:rounded-3xl
        sm:p-6

        sm:hover:border-blue-500/30
        sm:hover:shadow-[0_0_45px_rgba(59,130,246,0.18)]
      "
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500

          sm:group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            -top-20
            left-1/2
            h-40
            w-40
            -translate-x-1/2
            rounded-full
            bg-blue-500/10
            blur-3xl

            sm:-top-28
            sm:h-56
            sm:w-56
          "
        />
      </div>

      {/* Header */}

      <div
        className="
          relative
          flex
          min-w-0
          items-center
          gap-3

          sm:gap-4
        "
      >
        {/* Avatar */}

        <div
          className="
            relative
            h-12
            w-12
            shrink-0
            overflow-hidden
            rounded-full
            ring-2
            ring-blue-500/40

            sm:h-16
            sm:w-16
          "
        >
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        {/* Identity */}

        <div className="min-w-0 flex-1">
          <div
            className="
              flex
              min-w-0
              items-center
              gap-1.5

              sm:gap-2
            "
          >
            <h3
              className="
                min-w-0
                truncate
                text-base
                font-semibold
                text-white

                sm:text-lg
              "
            >
              {name}
            </h3>

            <BadgeCheck
              size={16}
              className="
                shrink-0
                text-blue-400

                sm:h-[18px]
                sm:w-[18px]
              "
            />
          </div>

          <p
            className="
              mt-0.5
              truncate
              text-xs
              text-blue-300

              sm:text-sm
            "
          >
            {role}
          </p>
        </div>
      </div>

      {/* Rating */}

      <div
        className="
          relative
          mt-4
          flex
          gap-0.5

          sm:mt-5
          sm:gap-1
        "
      >
        {[...Array(rating)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className="
              fill-yellow-400
              text-yellow-400

              sm:h-[18px]
              sm:w-[18px]
            "
          />
        ))}
      </div>

      {/* Review */}

      <p
        className="
          relative
          mt-4
          break-words
          text-sm
          leading-6
          text-gray-300

          sm:mt-5
          sm:text-base
          sm:leading-7
        "
      >
        "{review}"
      </p>

      {/* Footer */}

      <div
        className="
          relative
          mt-5
          flex
          min-w-0
          items-start
          gap-2
          text-xs
          leading-5
          text-gray-400

          sm:mt-6
          sm:items-center
          sm:text-sm
        "
      >
        <MapPin
          size={15}
          className="
            mt-0.5
            shrink-0
            text-blue-400

            sm:mt-0
            sm:h-4
            sm:w-4
          "
        />

        <span className="min-w-0 break-words">
          {location}
        </span>
      </div>
    </motion.article>
  );
};

export default ReviewCard;