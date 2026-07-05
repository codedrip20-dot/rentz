"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

import LoginSocial from "./LoginSocial";
import LoginLoading from "@/components/loading/LoginLoading";

const LoginForm = () => {
  const router = useRouter();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      await login(email, password);

      router.push("/profile");
    } catch (error) {
      console.error(error);

      setError(
        "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoginLoading />;
  }

  return (
    <section className="w-full max-w-md mx-auto">

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Email */}

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-slate-300"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="john@example.com"
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
          />
        </div>

        {/* Password */}

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-slate-300"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            placeholder="••••••••"
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
          />
        </div>

        {/* Error */}

        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        {/* Remember Me */}

        <div className="flex items-center justify-between text-sm">

          <label className="flex items-center gap-2 text-slate-400 cursor-pointer">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-600 bg-slate-800 accent-sky-500"
            />

            Remember me
          </label>

          <Link
            href="/forgot-password"
            className="font-medium text-sky-400 transition hover:text-sky-300"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Login Button */}

        <button
          type="submit"
          className="w-full rounded-xl bg-sky-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/30 active:scale-[0.98]"
        >
          Sign In
        </button>
      </form>

      {/* Divider */}

      <div className="my-8 flex items-center gap-4">

        <div className="h-px flex-1 bg-slate-700" />

        <span className="text-sm text-slate-500">
          OR
        </span>

        <div className="h-px flex-1 bg-slate-700" />

      </div>

      {/* Google Login */}

      <LoginSocial />

      {/* Register */}

      <p className="mt-8 text-center text-sm text-slate-400">

        Don't have an account?{" "}

        <Link
          href="/register"
          className="font-semibold text-sky-400 hover:text-sky-300"
        >
          Create Account
        </Link>

      </p>

    </section>
  );
};

export default LoginForm;