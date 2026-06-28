"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Hotel,
  Landmark,
  Warehouse,
  ShieldCheck,
  Users,
  BadgeCheck,
  Star,
} from "lucide-react";

import TrustedByBG from "@/assets/TrustedbyBG.png";
import LogoCard from "./logoCard";

const companies = [
  {
    name: "Prime Estates",
    logo: <Building2 size={34} strokeWidth={1.8} />,
  },
  {
    name: "Urban Homes",
    logo: <Home size={34} strokeWidth={1.8} />,
  },
  {
    name: "Skyline Realty",
    logo: <Hotel size={34} strokeWidth={1.8} />,
  },
  {
    name: "Capital Group",
    logo: <Landmark size={34} strokeWidth={1.8} />,
  },
  {
    name: "RentHub",
    logo: <Warehouse size={34} strokeWidth={1.8} />,
  },
];

const stats = [
  {
    icon: <BadgeCheck size={28} />,
    value: "12K+",
    label: "Verified Listings",
  },
  {
    icon: <Users size={28} />,
    value: "6K+",
    label: "Happy Tenants",
  },
  {
    icon: <ShieldCheck size={28} />,
    value: "98%",
    label: "Customer Satisfaction",
  },
  {
    icon: <Star size={28} />,
    value: "4.9/5",
    label: "Average Rating",
  },
];

const TrustedBy = () => {
  return (
    <section
      className="relative overflow-hidden py-32"
      style={{
        backgroundImage: `url(${TrustedByBG.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07111F]/55 via-[#07111F]/70 to-[#07111F]/90" />

      {/* Animated Glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.55, 0.3],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-40 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-sm font-medium tracking-wide text-blue-300 backdrop-blur-md">
            Trusted Across India
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Property Owners
            </span>
            <br />
            Agencies & Thousands of Tenants
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
            Helping people buy, rent, sell and manage premium properties with
            secure technology and a seamless digital experience.
          </p>
        </motion.div>

        {/* Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative mt-20 rounded-[32px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl shadow-[0_0_80px_rgba(37,99,235,.15)]"
        >
          {/* Logo Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5"
          >
            {companies.map((company) => (
              <motion.div
                key={company.name}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
              >
                <LogoCard logo={company.logo} name={company.name} />
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="my-14 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Stats */}
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={stat.label}
                className="text-center"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,.25)]">
                  {stat.icon}
                </div>

                <h3 className="text-4xl font-bold text-white">
                  {stat.value}
                </h3>

                <p className="mt-2 text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#07111F] to-transparent" />
    </section>
  );
};

export default TrustedBy;