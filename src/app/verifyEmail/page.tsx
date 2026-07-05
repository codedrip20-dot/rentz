"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

import VerifyHeader from "@/components/verifyEmail/VerifyHeader";
import VerifyStatus from "@/components/verifyEmail/VerifyStatus";
import VerifyTips from "@/components/verifyEmail/VerifyTips";
import ResendButton from "@/components/verifyEmail/ResendButton";

const VerifyEmailPage = () => {
  const router = useRouter();

  const {
    currentUser,
    refreshCurrentUser,
    resendVerificationEmail,
  } = useAuth();

  const [verified, setVerified] = useState(false);
  const [resending, setResending] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  // Redirect if user isn't authenticated
  useEffect(() => {
    if (currentUser === null) {
      router.replace("/register");
    }
  }, [currentUser, router]);

  // Poll Firebase until email becomes verified
  useEffect(() => {
    if (!currentUser) return;

    const interval = setInterval(async () => {
      try {
        const refreshedUser = await refreshCurrentUser();

        if (refreshedUser?.emailVerified) {
          clearInterval(interval);
          setVerified(true);
        }
      } catch (error) {
        console.error(error);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentUser, refreshCurrentUser]);

  // Cooldown timer
  useEffect(() => {
    if (cooldown <= 0) return;

    const timer = setInterval(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldown]);

  const handleResend = async () => {
    if (cooldown > 0) return;

    try {
      setResending(true);

      await resendVerificationEmail();

      setCooldown(60);
    } catch (error) {
      console.error(error);
      alert("Unable to resend verification email.");
    } finally {
      setResending(false);
    }
  };

  const handleContinue = async () => {
    try {
      setRedirecting(true);

      const refreshedUser = await refreshCurrentUser();

      if (!refreshedUser?.emailVerified) {
        setVerified(false);
        return;
      }

      router.push("/completeRegistration");
    } catch (error) {
      console.error(error);
    } finally {
      setRedirecting(false);
    }
  };

  if (!currentUser) return null;

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">

        <VerifyHeader
          email={currentUser.email ?? ""}
        />

        <VerifyStatus
          verified={verified}
        />

        <VerifyTips />

        {!verified ? (
          <ResendButton
            cooldown={cooldown}
            loading={resending}
            onResend={handleResend}
          />
        ) : (
          <button
            onClick={handleContinue}
            disabled={redirecting}
            className="mt-2 w-full rounded-xl bg-emerald-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {redirecting
              ? "Preparing your account..."
              : "Continue Registration"}
          </button>
        )}

      </div>
    </main>
  );
};

export default VerifyEmailPage;