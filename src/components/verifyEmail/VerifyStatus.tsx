"use client";

import { motion } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";

interface VerifyStatusProps {
  verified: boolean;
}

const VerifyStatus = ({ verified }: VerifyStatusProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-10 w-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
    >
      {!verified ? (
        <div className="flex flex-col items-center text-center">
          {/* Loading Spinner */}
          <Loader2
            size={42}
            className="animate-spin text-cyan-400"
          />

          <h2 className="mt-5 text-2xl font-semibold text-white">
            Waiting for verification...
          </h2>

          <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
            We've sent a verification email to your inbox. Once you verify
            your email, this page will automatically detect the change.
          </p>

          <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3">
            <p className="text-sm text-cyan-300">
              Checking verification status...
            </p>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center text-center"
        >
          {/* Success Icon */}
          <CheckCircle2
            size={56}
            className="text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]"
          />

          <h2 className="mt-5 text-2xl font-bold text-white">
            Email Verified!
          </h2>

          <p className="mt-3 max-w-md text-gray-400">
            Your account has been verified successfully. You can now continue
            to Rentz and start exploring the platform.
          </p>

          <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
            <p className="text-sm font-medium text-emerald-300">
              ✓ Verification completed successfully
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default VerifyStatus;