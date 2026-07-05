"use client";

import Link from "next/link";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";
import MobileMenu from "./MobileMenu";

import { useAuth } from "@/context/AuthContext";

const NavBar = () => {
  const { currentUser } = useAuth();

  const displayName =
    currentUser?.displayName ?? "Profile";

  const firstName =
    displayName.split(" ")[0];

  const initial =
    displayName.charAt(0).toUpperCase();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-0 lg:px-6">
      <div
        className="
          mt-0 lg:mt-4
          h-20
          w-full
          rounded-none lg:rounded-3xl
          border border-white/20
          bg-slate-900/35
          backdrop-blur-2xl
          shadow-2xl
          px-6 lg:px-12
          flex items-center justify-between
          transition-all duration-300
        "
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavLinks />
        </div>

        {/* Desktop Right Side */}
        <div className="hidden lg:block">
          {currentUser ? (
            <Link
              href="/profile"
              className="
                group
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-3
                py-2
                transition-all
                duration-300
                hover:border-sky-500/40
                hover:bg-sky-500/10
                hover:shadow-lg
                hover:shadow-sky-500/20
              "
            >
              {/* Avatar */}
              <div className="relative">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-sky-400
                    via-blue-500
                    to-cyan-400
                    text-base
                    font-bold
                    text-white
                    shadow-lg
                  "
                >
                  {initial}
                </div>

                {/* Online Indicator */}
                <span
                  className="
                    absolute
                    bottom-0
                    right-0
                    h-3.5
                    w-3.5
                    rounded-full
                    border-2
                    border-slate-900
                    bg-emerald-400
                    shadow-[0_0_10px_rgba(74,222,128,.9)]
                  "
                />
              </div>

              {/* User Details */}
              <div className="leading-tight">
                <p className="font-semibold text-white transition group-hover:text-sky-300">
                  {firstName}
                </p>

                <p className="text-xs text-slate-400 transition group-hover:text-slate-300">
                  My Profile
                </p>
              </div>
            </Link>
          ) : (
            <AuthButtons />
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default NavBar;