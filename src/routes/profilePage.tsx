"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

import {
  getUserProfile,
  updateUserProfile,
} from "@/lib/firebase/firestore";

import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileCard from "@/components/profile/ProfileCard";
import ProfileForm from "@/components/profile/ProfileForm";
import LogoutButton from "@/components/profile/Logout";

interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  emailVerified: boolean;
}

const ProfilePage = () => {
  const router = useRouter();

  const { currentUser } = useAuth();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [emailVerified, setEmailVerified] =
    useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      if (!currentUser) return;

      try {
        const data =
          (await getUserProfile(
            currentUser.uid
          )) as UserProfile;

        setFullName(data.fullName ?? "");
        setEmail(data.email ?? "");
        setPhone(data.phone ?? "");
        setRole(data.role ?? "");
        setEmailVerified(
          data.emailVerified ?? false
        );
      } catch (error) {
        console.error(
          "Failed to load profile:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [currentUser]);

  const handleSave = async () => {
    if (!currentUser) return;

    try {
      setSaving(true);

      await updateUserProfile(
        currentUser.uid,
        {
          fullName,
          phone,
        }
      );

      alert(
        "Profile updated successfully!"
      );
    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong while updating your profile."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleHome = () => {
    router.push("/");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#070B14] text-white">
        Loading profile...
      </div>
    );
  }

  return (
   <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#050816] via-[#0B1220] to-[#111827] px-6 py-16">

  {/* Background Glow */}
  <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

  {/* Content */}
  <div className="relative z-10 mx-auto flex max-w-2xl flex-col">

    <ProfileHeader
      fullName={fullName}
    />

    <ProfileCard
      fullName={fullName}
      role={role}
      emailVerified={emailVerified}
    >
      <ProfileForm
        fullName={fullName}
        email={email}
        phone={phone}
        setFullName={setFullName}
        setPhone={setPhone}
        onSave={handleSave}
        onHome={handleHome}
        saving={saving}
      />
    </ProfileCard>

    {/* Logout Section */}
    <div className="mt-8 flex justify-center">
      <div className="w-full max-w-sm">
        <LogoutButton />
      </div>
    </div>

  </div>

</main>
  );
};

export default ProfilePage;