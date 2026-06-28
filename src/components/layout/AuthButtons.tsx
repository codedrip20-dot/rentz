import Link from "next/link";

const AuthButtons = () => {
  return (
    <div className="hidden lg:flex items-center gap-4">
      {/* Login */}
      <Link
        href="/login"
        className="
          group
          relative
          overflow-hidden
          rounded-xl
          border
          border-white/20
          bg-white/10
          px-6
          py-2.5
          text-sm
          font-semibold
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-sky-400
          hover:bg-white/20
          hover:text-sky-300
          hover:shadow-lg
          hover:shadow-sky-500/20
        "
      >
        Login
      </Link>

      {/* Register */}
      <Link
        href="/register"
        className="
          group
          relative
          overflow-hidden
          rounded-xl
          bg-gradient-to-r
          from-sky-500
          via-blue-600
          to-indigo-600
          px-6
          py-2.5
          text-sm
          font-bold
          text-white
          shadow-lg
          shadow-blue-500/30
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:scale-105
          hover:from-sky-400
          hover:via-blue-500
          hover:to-indigo-500
          hover:shadow-xl
          hover:shadow-blue-500/50
          active:scale-95
        "
      >
        <span className="relative z-10">Register</span>

        {/* Shine Effect */}
        <span
          className="
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
            transition-transform
            duration-700
            group-hover:translate-x-full
          "
        />
      </Link>
    </div>
  );
};

export default AuthButtons;