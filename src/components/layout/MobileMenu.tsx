"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Buy", href: "/buy" },
  { name: "Rent", href: "/rent" },
  { name: "Sell", href: "/sell" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        className="rounded-xl p-2 hover:bg-slate-100 transition"
      >
        {isOpen ? (
          <X size={26} className="text-slate-800" />
        ) : (
          <Menu size={26} className="text-slate-800" />
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-20 w-full bg-white border-t border-slate-200 shadow-xl">
          <nav className="flex flex-col p-6">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-4 border-b border-slate-100 text-slate-700 font-medium hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col gap-3 mt-6">
              <Link
                href="/login"
                className="rounded-xl border border-slate-300 py-3 text-center font-medium hover:bg-slate-100 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-xl bg-blue-600 py-3 text-center text-white font-semibold hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </div>

          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;