"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Building2,
  KeyRound,
  Info,
  Phone,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";

const links = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Find",
    href: "/find",
    icon: Building2,
  },
  {
    title: "List",
    href: "/list",
    icon: KeyRound,
  },
  {
    title: "About",
    href: "/about",
    icon: Info,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: Phone,
  },
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const { currentUser } = useAuth();

  const displayName =
    currentUser?.displayName ?? "Profile";

  const firstName =
    displayName.split(" ")[0];

  const initial =
    displayName.charAt(0).toUpperCase();

  return (
    <>
      {/* Menu Button */}

      <button
        onClick={() => setOpen(true)}
        className="rounded-xl border border-white/10 bg-white/5 p-2 text-white backdrop-blur-lg"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>

        {open && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
            />

            {/* Drawer */}

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 30,
              }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[85%] max-w-sm flex-col border-l border-white/10 bg-[#050816]/95 backdrop-blur-2xl"
            >
              {/* Header */}

              <div className="flex items-center justify-between border-b border-white/10 p-6">

                <h2 className="text-3xl font-black text-white">
                  Rent
                  <span className="text-blue-500">
                    z
                  </span>
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-white/5 p-2 text-white"
                >
                  <X size={24} />
                </button>

              </div>

              {/* Navigation */}

              <nav className="flex-1 px-6 py-8">

                <div className="space-y-2">

                  {links.map(
                    ({
                      title,
                      href,
                      icon: Icon,
                    }) => (
                      <Link
                        key={title}
                        href={href}
                        onClick={() =>
                          setOpen(false)
                        }
                        className="
                          group
                          flex
                          items-center
                          gap-4
                          rounded-2xl
                          border
                          border-transparent
                          px-4
                          py-4
                          text-slate-300
                          transition
                          hover:border-blue-500/20
                          hover:bg-blue-500/10
                          hover:text-white
                        "
                      >
                        <Icon
                          size={20}
                          className="text-blue-400"
                        />

                        <span>{title}</span>

                      </Link>
                    )
                  )}

                </div>

              </nav>

              {/* Bottom */}

              <div className="border-t border-white/10 p-6">

                {currentUser ? (

                  <Link
                    href="/profile"
                    onClick={() =>
                      setOpen(false)
                    }
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      p-4
                      transition-all
                      duration-300
                      hover:border-blue-500/40
                      hover:bg-blue-500/10
                    "
                  >
                    {/* Avatar */}

                    <div className="relative">

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          bg-gradient-to-br
                          from-sky-400
                          via-blue-500
                          to-cyan-400
                          text-lg
                          font-bold
                          text-white
                          shadow-lg
                        "
                      >
                        {initial}
                      </div>

                      <span
                        className="
                          absolute
                          bottom-0
                          right-0
                          h-3.5
                          w-3.5
                          rounded-full
                          border-2
                          border-[#050816]
                          bg-emerald-400
                        "
                      />

                    </div>

                    {/* User Info */}

                    <div>

                      <h3 className="font-semibold text-white">
                        {firstName}
                      </h3>

                      <p className="text-sm text-slate-400">
                        My Profile
                      </p>

                    </div>

                  </Link>

                ) : (

                  <>
                    <Link
                      href="/login"
                      onClick={() =>
                        setOpen(false)
                      }
                      className="
                        mb-3
                        flex
                        w-full
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        py-3
                        text-white
                        transition
                        hover:border-blue-500
                      "
                    >
                      Login
                    </Link>

                    <Link
                      href="/register"
                      onClick={() =>
                        setOpen(false)
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-600
                        py-3
                        font-semibold
                        text-white
                        transition
                        hover:bg-blue-500
                      "
                    >
                      Register
                    </Link>
                  </>

                )}

                {/* Footer */}

                <div className="mt-8 border-t border-white/10 pt-6 text-center">

                  <p className="text-xs text-slate-500">
                    Developed with ❤️ by
                  </p>

                  <p className="mt-2">

                    <span className="font-semibold text-blue-400">
                      @UtsavKarki
                    </span>

                    <span className="mx-2 text-slate-600">
                      ×
                    </span>

                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-bold text-transparent">
                      CodeDrip
                    </span>

                  </p>

                </div>

              </div>

            </motion.aside>
          </>
        )}

      </AnimatePresence>
    </>
  );
};

export default MobileMenu;