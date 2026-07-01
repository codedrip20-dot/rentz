"use client";

import Link from "next/link";
import SocialLogin from "./ScocialLogin"

const RegistrationForm = () => {
  return (
    <section className="w-full max-w-md mx-auto">
      <form className="space-y-5">

        {/* Full Name */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-slate-300"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
          />
        </div>

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
            placeholder="john@example.com"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
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
            placeholder="••••••••"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
          />
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <label
            htmlFor="confirmPassword"
            className="text-sm font-medium text-slate-300"
          >
            Confirm Password
          </label>

          <input
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-xl bg-sky-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/30"
        >
          Create Account
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

      <SocialLogin />

      {/* Login Redirect */}
      <p className="mt-8 text-center text-sm text-slate-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-sky-400 hover:text-sky-300"
        >
          Sign In
        </Link>
      </p>
    </section>
  );
};

export default RegistrationForm;