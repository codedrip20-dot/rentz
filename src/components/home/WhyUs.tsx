"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  ShieldCheck,
  Calculator,
  House,
  Wrench,
  Building2,
} from "lucide-react";

import TrustedByBG from "@/assets/whyUsbg.png";
import FeatureCard from "./featureCard";

const features = [
  {
    icon: <LayoutDashboard size={30} />,
    title: "Owner Dashboard",
    description:
      "Manage listings, bookings, tenants, analytics and rental income from one premium dashboard.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Verified Listings",
    description:
      "Every property is verified to ensure a transparent and trustworthy renting experience.",
  },
  {
    icon: <Calculator size={30} />,
    title: "Finance Calculator",
    description:
      "Instantly calculate EMI, ROI, rental yield and investment returns before making decisions.",
  },
  {
    icon: <House size={30} />,
    title: "Tenant Portal",
    description:
      "Pay rent, request maintenance, manage bookings and track rental history effortlessly.",
  },
  {
    icon: <Wrench size={30} />,
    title: "Freelancer Marketplace",
    description:
      "Find trusted plumbers, electricians, painters and other local professionals instantly.",
  },
  {
    icon: <Building2 size={30} />,
    title: "Property Management",
    description:
      "Monitor occupancy, expenses, maintenance history and overall property performance.",
  },
];

const WhyUs = () => {
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
      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#07111F]/60
          via-[#07111F]/75
          to-[#07111F]
        "
      />

      {/* Animated Glow */}

      <motion.div
        animate={{
          opacity: [0.2, 0.45, 0.2],
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
          h-[300px]
          w-[300px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/20
          blur-[110px]

          sm:top-48
          sm:h-[450px]
          sm:w-[450px]
          sm:blur-[150px]
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
          className="
            mx-auto
            max-w-3xl
            text-center
          "
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
            Everything You Need
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
            Why Choose{" "}
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
              Rentz?
            </span>
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
            Rentz combines property management, renting, buying,
            selling, financial planning and local services into one
            modern platform built for owners and tenants alike.
          </p>
        </motion.div>

        {/* ==================================================
            Feature Grid
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
                staggerChildren: 0.12,
              },
            },
          }}
          className="
            mt-8
            grid
            grid-cols-1
            gap-4

            sm:mt-12
            sm:grid-cols-2
            sm:gap-5

            lg:grid-cols-3
            lg:gap-8
          "
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="min-w-0"
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
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

export default WhyUs;