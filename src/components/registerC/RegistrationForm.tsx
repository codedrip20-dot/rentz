"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import SocialLogin from "./ScocialLogin";
import RegisterLoading from "../loading/RegisterLoading";

import { useAuth } from "@/context/AuthContext";

const RegistrationForm = () => {
  const router = useRouter();

  const { register } = useAuth();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (loading) return;

    const fullName = formData.fullName.trim();
    const email = formData.email.trim().toLowerCase();
    const phone = formData.phone.trim();
    const password = formData.password;

    // ----------------------------
    // Validation
    // ----------------------------

    if (!fullName) {
      alert("Please enter your full name.");
      return;
    }

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert(
        "Password must be at least 6 characters long."
      );
      return;
    }

    if (password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      await register({
        fullName,
        email,
        phone,
        password,
      });

      router.push("/verifyEmail");
    } catch (error: any) {
      console.error(error);

      alert(
        error?.message ??
          "Unable to create your account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <RegisterLoading />;
  }

  return (
    <section className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Full Name */}
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-slate-300"
          >
            Full Name
          </label>

          <input
            id="fullName"
            type="text"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            autoComplete="name"
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
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
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-slate-300"
          >
            Phone Number
          </label>

          <input
            id="phone"
            type="tel"
            placeholder="+91 9876543210"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
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
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
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
            value={formData.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-sky-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/30 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Create Account
        </button>
      </form>

      <div className="my-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-700" />
        <span className="text-sm text-slate-500">OR</span>
        <div className="h-px flex-1 bg-slate-700" />
      </div>

      <SocialLogin />
      <p className="mt-8 text-center text-sm text-slate-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-sky-400 transition-colors hover:text-sky-300"
        >
          Sign In
        </Link>
      </p>
    </section>
  );
};

export default RegistrationForm;