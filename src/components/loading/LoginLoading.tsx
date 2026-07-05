"use client";

const LoginLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-10">

      {/* Spinner */}
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-blue-500" />

      {/* Text */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-white">
          Logging you in...
        </h3>

        <p className="mt-1 text-sm text-gray-400">
          Please wait while we prepare your account.
        </p>
      </div>

    </div>
  );
};

export default LoginLoading;