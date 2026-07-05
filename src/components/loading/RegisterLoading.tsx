"use client";

import { Loader2, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const RegisterLoading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816]/90 backdrop-blur-md"
    >
      <div className="flex flex-col items-center">

        {/* Logo */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mb-8"
        >
          <Building2
            size={60}
            className="text-cyan-400 drop-shadow-[0_0_20px_#22d3ee]"
          />
        </motion.div>

        {/* Spinner */}
        <Loader2
          size={42}
          className="animate-spin text-cyan-400"
        />

        <h2 className="mt-8 text-2xl font-bold text-white">
          Creating your account...
        </h2>

        <p className="mt-3 text-gray-400">
          Preparing your Rentz workspace
        </p>

      </div>
    </motion.div>
  );
};

export default RegisterLoading;