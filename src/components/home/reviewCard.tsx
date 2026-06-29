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
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 shadow-[0_0_30px_rgba(37,99,235,0.08)] hover:border-blue-500/30 hover:shadow-[0_0_45px_rgba(59,130,246,0.18)]"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-28 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-blue-500/40">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-white">
              {name}
            </h3>

            <BadgeCheck
              size={18}
              className="text-blue-400"
            />
          </div>

          <p className="text-sm text-blue-300">
            {role}
          </p>
        </div>
      </div>

      {/* Rating */}

      <div className="mt-5 flex gap-1">
        {[...Array(rating)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Review */}

      <p className="mt-5 leading-7 text-gray-300">
        "{review}"
      </p>

      {/* Footer */}

      <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
        <MapPin
          size={16}
          className="text-blue-400"
        />
        {location}
      </div>
    </motion.article>
  );
};

export default ReviewCard;