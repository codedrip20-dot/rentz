"use client";

import { motion } from "framer-motion";
import { RefreshCcw } from "lucide-react";

interface ResendButtonProps {
  cooldown: number;
  loading: boolean;
  onResend: () => void;
}

const ResendButton = ({
  cooldown,
  loading,
  onResend,
}: ResendButtonProps) => {
  const disabled = cooldown > 0 || loading;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-8 flex flex-col items-center"
    >
      <button
        onClick={onResend}
        disabled={disabled}
        className={`group flex items-center gap-3 rounded-xl px-6 py-3 font-semibold transition-all duration-300
          ${
            disabled
              ? "cursor-not-allowed bg-gray-700 text-gray-400"
              : "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 hover:scale-105 hover:bg-cyan-400"
          }`}
      >
        <RefreshCcw
          size={18}
          className={`${loading ? "animate-spin" : "group-hover:rotate-180"} transition-transform duration-500`}
        />

        {loading
          ? "Sending..."
          : cooldown > 0
          ? `Resend in ${cooldown}s`
          : "Resend Verification Email"}
      </button>

      <p className="mt-4 max-w-md text-center text-sm text-gray-400">
        Didn't receive the email? Check your Spam or Junk folder first.
        If it's still missing, you can request another verification email.
      </p>
    </motion.div>
  );
};

export default ResendButton;