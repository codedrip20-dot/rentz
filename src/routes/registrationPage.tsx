import AuthHeader from "@/components/registerC/AuthHeader";
import AuthSidePanel from "@/components/registerC/AuthSidePannel";
import RegistrationForm from "@/components/registerC/RegistrationForm";

const RegistrationPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* Background Glow */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-sky-500/20 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-[170px]" />

      {/* Container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-12">

        {/* Card */}
        <div className="grid w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-2xl backdrop-blur-xl lg:grid-cols-2">

          {/* Left */}
          <div className="flex flex-col justify-center px-8 py-14 sm:px-12 lg:px-16">

            <AuthHeader />

            <div className="mt-10">
              <RegistrationForm />
            </div>

          </div>

          {/* Right */}
          <AuthSidePanel />

        </div>

      </div>

    </main>
  );
};

export default RegistrationPage;