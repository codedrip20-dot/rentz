"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

interface VerifyHeaderProps {
  email: string;
}

const VerifyHeader = ({ email }: VerifyHeaderProps) => {
  return (
    <div className="flex flex-col items-center text-center">

      {/* Animated Mail Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_40px_rgba(34,211,238,0.35)]"
      >
        <Mail
          size={42}
          className="text-cyan-400"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold text-white"
      >
        Verify your email
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="mt-4 max-w-lg text-gray-400"
      >
        We've sent a verification link to the email address below.
        Please verify your account before continuing.
      </motion.p>

      {/* Email Display */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 rounded-xl border border-cyan-500/20 bg-white/5 px-6 py-4 backdrop-blur-md"
      >
        <p className="text-sm text-gray-400">
          Verification email sent to
        </p>

        <p className="mt-1 text-lg font-semibold text-cyan-400 break-all">
          {email}
        </p>
      </motion.div>

    </div>
  );
};

export default VerifyHeader;