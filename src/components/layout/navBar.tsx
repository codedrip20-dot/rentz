"use client";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
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
        <Logo />

        <div className="hidden lg:block">
            <NavLinks />
        </div>

        <div className="hidden lg:block">
            <AuthButtons />
        </div>

        <div className="lg:hidden " >
            <MobileMenu />
        </div>
    </div>
</header>
  );
};

export default NavBar;