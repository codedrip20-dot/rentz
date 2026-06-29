"use client";

import { motion } from "framer-motion";
import ReviewCard from "./reviewCard";

import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar1.jpg";

const reviews = [
  {
    name: "Priya Sharma",
    role: "Tenant" as const,
    location: "Bangalore",
    rating: 5,
    avatar: avatar1,
    review:
      "Rentz helped me find a fully furnished apartment in less than three days. The process was smooth and completely transparent.",
  },
  {
    name: "Rahul Verma",
    role: "Property Owner" as const,
    location: "Mumbai",
    rating: 5,
    avatar: avatar2,
    review:
      "Managing my rental properties has never been easier. Listing, rent tracking and tenant management are all in one place.",
  },
  {
    name: "Aisha Khan",
    role: "Tenant" as const,
    location: "Delhi",
    rating: 5,
    avatar: avatar3,
    review:
      "The verified listings gave me confidence. I avoided fake listings and found my dream apartment without any hassle.",
  },
];

export default function Reviews() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-28">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Loved by Property Owners
            <span className="block text-blue-400">& Tenants</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Thousands of users trust Rentz to discover, manage and rent
            properties with complete confidence.
          </p>

          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="text-yellow-400 text-xl">
              ★★★★★
            </span>

            <p className="text-slate-300">
              4.9/5 from 2,000+ verified reviews
            </p>
          </div>
        </motion.div>

        {/* Cards */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: .18,
              },
            },
          }}
          className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}