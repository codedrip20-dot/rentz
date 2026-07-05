"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

const LogoutButton = () => {
  const router = useRouter();

  const { logout } = useAuth();

  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);

      await logout();

      router.replace("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Unable to logout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="
        w-full
        rounded-xl
        border
        border-red-500/30
        bg-red-500/10
        py-3
        font-semibold
        text-red-300
        transition-all
        duration-300
        hover:bg-red-500/20
        hover:border-red-500/50
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
};

export default LogoutButton;