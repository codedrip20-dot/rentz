"use client";

import { motion } from "framer-motion";
import {
  Search,
  Building2,
  Wrench,
  BriefcaseBusiness,
  Landmark,
  Home,
} from "lucide-react";

import ServiceCard from "./serviceCard";
import serviceBG from "@/assets/serviceBG.png";

const services = [
  {
    icon: <Search size={26} />,
    title: "Find a Rental",
    description:
      "Explore verified apartments, PGs and homes with a secure booking experience.",
    buttonText: "Explore Rentals",
  },
  {
    icon: <Building2 size={26} />,
    title: "List My Property",
    description:
      "Advertise your rooms, manage bookings and grow your rental income.",
    buttonText: "Become an Owner",
  },
  {
    icon: <Wrench size={26} />,
    title: "Find a Freelancer",
    description:
      "Hire trusted plumbers, electricians, painters and local professionals.",
    buttonText: "Browse Freelancers",
  },
  {
    icon: <BriefcaseBusiness size={26} />,
    title: "Register as Freelancer",
    description:
      "Offer your services and receive bookings from nearby customers.",
    buttonText: "Start Earning",
  },
  {
    icon: <Landmark size={26} />,
    title: "Sell My Property",
    description:
      "List residential or commercial properties for verified buyers.",
    buttonText: "Sell Property",
  },
  {
    icon: <Home size={26} />,
    title: "Buy Property",
    description:
      "Browse premium verified homes and investment opportunities.",
    buttonText: "Browse Properties",
  },
];

const Services = () => {
  return (
    <section
      className="relative overflow-hidden py-28"
      style={{
        backgroundImage: `url(${serviceBG.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Premium Overlay */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#081827]/55 via-[#0B2340]/70 to-[#081827]/55" />

      {/* Soft vignette */}

      <div className="absolute inset-0 bg-black/15" />

      {/* Decorative Glow */}

      <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[170px]" />

      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300 backdrop-blur-xl">
            Choose Your Journey
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            How can{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Rentz
            </span>{" "}
            help you today?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Whether you're searching for a rental, listing your
            property, hiring professionals or buying your dream home,
            Rentz brings every real-estate service together in one
            premium platform.
          </p>
        </motion.div>

        {/* Service Cards */}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .45,
                delay: index * .08,
              }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                buttonText={service.buttonText}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;