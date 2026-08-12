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
      className="
        relative
        overflow-hidden
        py-16

        sm:py-20
        lg:py-32
      "
      style={{
        backgroundImage: `url(${TrustedByBG.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#07111F]/60
          via-[#07111F]/75
          to-[#07111F]/95
        "
      />

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
        className="
          absolute
          left-1/2
          top-32
          h-[280px]
          w-[280px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/20
          blur-[110px]

          sm:top-40
          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[140px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4

          sm:px-6
          lg:px-8
        "
      >
        {/* ==================================================
            Heading
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/10
              px-4
              py-1.5
              text-xs
              font-medium
              tracking-wide
              text-blue-300
              backdrop-blur-md

              sm:px-6
              sm:py-2
              sm:text-sm
            "
          >
            Trusted Across India
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-black
              leading-tight
              text-white

              sm:mt-7
              sm:text-5xl

              lg:mt-8
              lg:text-6xl
            "
          >
            Trusted by{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-300
                via-blue-400
                to-blue-600
                bg-clip-text
                text-transparent
              "
            >
              Property Owners
            </span>
            <br />
            Agencies & Thousands of Tenants
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-slate-300

              sm:mt-6
              sm:text-base
              sm:leading-8

              lg:mt-8
              lg:text-lg
              lg:leading-9
            "
          >
            Helping people buy, rent, sell and manage premium
            properties with secure technology and a seamless
            digital experience.
          </p>
        </motion.div>

        {/* ==================================================
            Glass Container
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
            relative
            mt-10
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            p-4
            shadow-[0_0_50px_rgba(37,99,235,.12)]
            backdrop-blur-2xl

            sm:mt-14
            sm:rounded-3xl
            sm:p-6

            lg:mt-20
            lg:rounded-[32px]
            lg:p-10
            lg:shadow-[0_0_80px_rgba(37,99,235,.15)]
          "
        >
          {/* ==================================================
              Logo Grid
          ================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="
              grid
              grid-cols-2
              gap-3

              sm:gap-5

              lg:grid-cols-5
              lg:gap-6
            "
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
                className="min-w-0"
              >
                <LogoCard
                  logo={company.logo}
                  name={company.name}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}

          <div
            className="
              my-8
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent

              sm:my-10

              lg:my-14
            "
          />

          {/* ==================================================
              Stats
          ================================================== */}

          <div
            className="
              grid
              grid-cols-2
              gap-5

              sm:gap-8

              lg:grid-cols-4
              lg:gap-10
            "
          >
            {stats.map((stat) => (
              <motion.div
                whileHover={{
                  y: -5,
                }}
                key={stat.label}
                className="
                  min-w-0
                  text-center
                "
              >
                <div
                  className="
                    mx-auto
                    mb-3
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-blue-500/20
                    bg-blue-500/10
                    text-blue-400
                    shadow-[0_0_25px_rgba(59,130,246,.20)]

                    sm:mb-4
                    sm:h-14
                    sm:w-14

                    lg:mb-5
                    lg:h-16
                    lg:w-16
                    lg:shadow-[0_0_30px_rgba(59,130,246,.25)]
                  "
                >
                  {stat.icon}
                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    leading-tight
                    text-white

                    sm:text-3xl

                    lg:text-4xl
                  "
                >
                  {stat.value}
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-slate-400

                    sm:mt-2
                    sm:text-sm
                  "
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-24
          w-full
          bg-gradient-to-t
          from-[#07111F]
          to-transparent

          sm:h-32

          lg:h-40
        "
      />
    </section>
  );
};

export default TrustedBy;