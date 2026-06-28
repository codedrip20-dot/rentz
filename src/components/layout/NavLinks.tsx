import Link from "next/link";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Buy",
    href: "/buy",
  },
  {
    title: "Rent",
    href: "/rent",
  },
  {
    title: "Sell",
    href: "/sell",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const NavLinks = () => {
 return (
  <nav className="hidden lg:flex items-center gap-10">
    {navLinks.map((link) => (
      <Link
        key={link.title}
        href={link.href}
        className="
          group
          relative
          text-[15px]
          font-semibold
          tracking-wide
          text-white/90
          transition-all
          duration-300
          hover:text-sky-400
        "
      >
        {link.title}

        {/* Underline */}
        <span
          className="
            absolute
            -bottom-2
            left-1/2
            h-[2px]
            w-0
            -translate-x-1/2
            rounded-full
            bg-sky-400
            transition-all
            duration-300
            group-hover:w-full
          "
        />

        {/* Glow */}
        <span
          className="
            absolute
            inset-0
            rounded-lg
            opacity-0
            blur-lg
            transition-all
            duration-300
            group-hover:opacity-20
            bg-sky-400
          "
        />
      </Link>
    ))}
  </nav>
);
};

export default NavLinks;