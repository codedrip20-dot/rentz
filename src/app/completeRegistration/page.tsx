"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

import CompleteRegistration from "@/components/completeRegistration/CompleteRegistration";
import CompletionLoading from "@/components/completeRegistration/CompletionLoading";

const CompleteRegistrationPage = () => {
  const router = useRouter();

  const {
    currentUser,
    authLoading,
  } = useAuth();

    console.log("page useEffect", {
        authLoading,
        currentUser: !!currentUser,
    });
  useEffect(() => {
    if (!authLoading && !currentUser) 
        console.log("Redirecting to /register");{
      router.replace("/register");
    }
  }, [
    authLoading,
    currentUser,
    router,
  ]);

  if (authLoading) {
    return (
      <CompletionLoading
        message="Checking authentication..."
      />
    );
  }

 
  return <CompleteRegistration />;
};

export default CompleteRegistrationPage;