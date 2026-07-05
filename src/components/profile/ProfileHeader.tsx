"use client";

interface ProfileHeaderProps {
  fullName: string;
}

const ProfileHeader = ({
  fullName,
}: ProfileHeaderProps) => {
  const firstName =
    fullName.trim().split(" ")[0] || "User";

  return (
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-bold text-white">
        Welcome back,{" "}
        <span className="text-blue-400">
          {firstName}
        </span>
        👋
      </h1>

      <p className="mt-3 text-gray-400 text-sm md:text-base">
        Manage your account information and keep
        your profile up to date.
      </p>
    </div>
  );
};

export default ProfileHeader;