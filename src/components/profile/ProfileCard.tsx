"use client";

interface ProfileCardProps {
  fullName: string;
  role: string;
  emailVerified: boolean;
  children: React.ReactNode;
}

const ProfileCard = ({
  fullName,
  role,
  emailVerified,
  children,
}: ProfileCardProps) => {
  const initial =
    fullName?.trim().charAt(0).toUpperCase() || "U";

  return (
    <div className="mx-auto w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">

      {/* Top Section */}
      <div className="flex flex-col items-center px-8 py-10 border-b border-white/10">

        {/* Avatar */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-4xl font-bold text-white shadow-lg">
          {initial}
        </div>

        {/* Name */}
        <h2 className="mt-5 text-2xl font-bold text-white">
          {fullName || "Rentz User"}
        </h2>

        {/* Role Badge */}
        <span className="mt-3 rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300 border border-blue-500/30 capitalize">
          {role}
        </span>

        {/* Verification Badge */}
        <div
          className={`mt-4 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
            emailVerified
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
              : "bg-red-500/20 text-red-300 border border-red-500/30"
          }`}
        >
          <span className="text-lg">
            {emailVerified ? "✅" : "❌"}
          </span>

          <span>
            {emailVerified
              ? "Email Verified"
              : "Email Not Verified"}
          </span>
        </div>
      </div>

      {/* Form Section */}
      <div className="p-8">
        {children}
      </div>
    </div>
  );
};

export default ProfileCard;