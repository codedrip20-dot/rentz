"use client";

import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@/context/AuthContext";
import RegisterLoading from "../loading/RegisterLoading";
import { useState } from "react";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await googleLogin();

    } catch (error) {
      console.error("Error during Google login:", error);
      alert(error.message || "An error occurred during Google login.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <RegisterLoading />;
  }
  return (
    <div className="w-full" onClick={handleGoogleLogin}>
      <button
        type="button"
        className="
          group
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          border
          border-slate-700
          bg-slate-900/60
          px-4
          py-3.5
          transition-all
          duration-300
          hover:border-sky-500/50
          hover:bg-slate-800
          hover:shadow-lg
          hover:shadow-sky-500/10
        "
      >
        <FcGoogle size={24} />

        <span className="font-medium text-slate-200 transition-colors group-hover:text-white">
          Continue with Google
        </span>
      </button>
    </div>
  );
};

export default SocialLogin;