"use client";

import { motion } from "framer-motion";
import {
  Inbox,
  ShieldAlert,
  Clock3,
  RefreshCw,
} from "lucide-react";

const tips = [
  {
    icon: Inbox,
    title: "Check your Inbox",
    description:
      "Open the verification email we just sent to your registered email address.",
  },
  {
    icon: ShieldAlert,
    title: "Check Spam or Junk",
    description:
      "If you can't find the email, check your Spam, Junk, or Promotions folder.",
  },
  {
    icon: Clock3,
    title: "Wait a Minute",
    description:
      "Email delivery may take up to a few minutes depending on your email provider.",
  },
  {
    icon: RefreshCw,
    title: "Didn't Receive It?",
    description:
      "Use the 'Resend Verification Email' button below to request another verification email.",
  },
];

const VerifyTips = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
    >
      <h3 className="mb-6 text-xl font-semibold text-white">
        Before you continue
      </h3>

      <div className="space-y-5">
        {tips.map((tip, index) => {
          const Icon = tip.icon;

          return (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.15 }}
              className="flex items-start gap-4 rounded-xl border border-cyan-500/10 bg-cyan-500/5 p-4"
            >
              <div className="rounded-lg bg-cyan-500/10 p-3">
                <Icon
                  size={22}
                  className="text-cyan-400"
                />
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">
                  {tip.title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-400">
                  {tip.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
        <p className="text-sm leading-6 text-amber-300">
          <strong>Important:</strong> Do not close this page. Once your email
          has been verified, Rentz will detect the verification and allow you
          to continue to the platform.
        </p>
      </div>
    </motion.div>
  );
};

export default VerifyTips;