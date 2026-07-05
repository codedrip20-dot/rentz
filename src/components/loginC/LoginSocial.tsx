"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

import { useAuth } from "@/context/AuthContext";
import LoginLoading from "@/components/loading/LoginLoading";

const LoginSocial = () => {
  const router = useRouter();

  const { googleLogin } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      await googleLogin();

      router.push("/profile");
    } catch (error) {
      console.error(error);

      setError(
        "Unable to sign in with Google. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoginLoading />;
  }

  return (
    <div className="w-full space-y-3">

      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <button
        type="button"
        onClick={handleGoogleLogin}
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
          active:scale-[0.98]
        "
      >
        <FcGoogle size={24} />

        <span className="font-medium text-slate-200 transition-colors duration-300 group-hover:text-white">
          Sign in with Google
        </span>
      </button>

    </div>
  );
};

export default LoginSocial;