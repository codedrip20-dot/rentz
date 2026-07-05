"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

import {
  getPendingRegistration,
  clearPendingRegistration,
} from "@/lib/storage/registration";

import CompletionLoading from "./CompletionLoading";
import CompletionStatus from "./CompletionStatus";

const CompleteRegistration = () => {
  console.log("CompleteRegistration component mounted");
  const router = useRouter();

  const {
    currentUser,
    refreshCurrentUser,
    completeRegistration,
  } = useAuth();

  const hasStarted = useRef(false);

  const redirectTimer = useRef<NodeJS.Timeout | null>(
    null
  );

  const [loading, setLoading] = useState(true);

  const [success, setSuccess] = useState(false);

  const [message, setMessage] = useState(
    "Preparing your account..."
  );

  useEffect(() => {
    if (hasStarted.current) return;

    hasStarted.current = true;

    let mounted = true;

    const finishRegistration = async () => {
      try {
        // -----------------------------
        // User must exist
        // -----------------------------

        if (mounted) {
          setMessage("Checking your account...");
        }

        const user = await refreshCurrentUser();

        if (!user) {
          router.replace("/register");
          return;
        }

        // -----------------------------
        // Email must be verified
        // -----------------------------

        if (!user.emailVerified) {
          router.replace("/verifyEmail");
          return;
        }

        // -----------------------------
        // Pending registration
        // -----------------------------

        const pending =
          getPendingRegistration();

        if (!pending) {
          router.replace("/register");
          return;
        }

        if (mounted) {
          setMessage(
            "Creating your Rentz account..."
          );
        }
   
        await completeRegistration();
        console.log("Registration completed successfully Navigating....");
          router.replace("/homepage");
        

      } catch (error) {
        console.error(error);

        if (!mounted) return;

        setSuccess(false);

        setMessage(
          "Unable to complete your registration."
        );
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    finishRegistration();

    return () => {
      console.log("CompleteRegistration component unmounted");
      mounted = false;

      if (redirectTimer.current) {
        clearTimeout(redirectTimer.current);
      }
    };
  }, []);

  if (loading) {
    return (
      <CompletionLoading
        message={message}
      />
    );
  }

  return (
    <CompletionStatus
      success={success}
      message={message}
    />
  );
};

export default CompleteRegistration;