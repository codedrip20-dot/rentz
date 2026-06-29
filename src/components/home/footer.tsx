"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">

      {/* Blue Glow */}

      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-14">

        {/* Logo */}

        <h2 className="text-4xl font-black tracking-tight text-white">
          Rent<span className="text-blue-500">z</span>
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Find • Rent • Sell • Manage
        </p>

        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Copyright */}

        <p className="text-sm text-slate-500">
          © {year} Rentz. All rights reserved.
        </p>

        {/* Signature */}

        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.25 }}
          className="mt-5 rounded-full border border-blue-500/20 bg-white/5 px-6 py-3 backdrop-blur-xl"
        >
          <span className="text-slate-300">
            Developed with ❤️ by{" "}
          </span>

          <span className="font-semibold text-blue-400">
            @UtsavKarki
          </span>

          <span className="mx-2 text-slate-500">×</span>

          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text font-bold text-transparent">
            CodeDrip
          </span>
        </motion.div>

      </div>
    </footer>
  );
}