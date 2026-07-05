"use client";

interface ProfileFormProps {
  fullName: string;
  email: string;
  phone: string;

  setFullName: (value: string) => void;
  setPhone: (value: string) => void;

  onSave: () => void;
  onHome: () => void;

  saving?: boolean;
}

const ProfileForm = ({
  fullName,
  email,
  phone,
  setFullName,
  setPhone,
  onSave,
  onHome,
  saving = false,
}: ProfileFormProps) => {
  return (
    <div className="space-y-6">

      {/* Full Name */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Full Name
        </label>

        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Email
        </label>

        <input
          type="email"
          value={email}
          disabled
          className="w-full cursor-not-allowed rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-gray-400"
        />

        <p className="mt-2 text-xs text-gray-500">
          Your email address cannot be changed.
        </p>
      </div>

      {/* Phone */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Phone Number
        </label>

        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3 pt-2 sm:flex-row">

        <button
          onClick={onSave}
          disabled={saving}
          className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>

        <button
          onClick={onHome}
          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;