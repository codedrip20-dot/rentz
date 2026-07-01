"use client";

import { FcGoogle } from "react-icons/fc";

const LoginSocial = () => {
  return (
    <div className="w-full">
      <button
        type="button"
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