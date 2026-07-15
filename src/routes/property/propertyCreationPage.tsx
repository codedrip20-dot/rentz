"use client";

import PropertyWizard from "@/components/property/PropertyWizard";

const PropertyCreationPage = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                        Create Property
                    </h1>

                    <p className="mt-3 max-w-2xl text-base text-slate-600">
                        Complete the steps below to list your property on Rentz.
                        Your listing will only become visible after all required
                        information has been completed.
                    </p>
                </div>

                {/* Property Creation Wizard */}
                <section
                    className="
                        rounded-3xl
                        border
                        border-slate-200/80
                        bg-white/80
                        p-6
                        shadow-2xl
                        backdrop-blur-sm
                        sm:p-8
                        lg:p-10
                    "
                >
                    <PropertyWizard />
                </section>

            </div>
        </main>
    );
};

export default PropertyCreationPage;