"use client";

import BillingTypeSelector from "./BillingTypeSelector";
import DepositInput from "./DepositInput";
import PriceHeader from "./PriceHeader";
import PriceInput from "./PriceInput";
import UtilitySelector from "./UtilitySelector";

const PricingStep = () => {
    return (
        <section className="relative py-1 sm:py-2">

            {/* Background Decoration */}

            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

                <div className="absolute -left-24 top-0 h-56 w-56 rounded-full bg-blue-100/30 blur-3xl sm:h-72 sm:w-72" />

                <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-indigo-100/30 blur-3xl sm:h-80 sm:w-80" />

            </div>

            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 sm:gap-8 lg:gap-10">

                {/* Header */}

                <PriceHeader />

                {/* Main Content */}

                <div className="grid gap-5 sm:gap-6 lg:gap-8 xl:grid-cols-2">

                    {/* Left Column */}

                    <div className="flex min-w-0 flex-col gap-5 sm:gap-6 lg:gap-8">

                        <PriceInput />

                        <BillingTypeSelector />

                    </div>

                    {/* Right Column */}

                    <div className="flex min-w-0 flex-col gap-5 sm:gap-6 lg:gap-8">

                        <DepositInput />

                        <UtilitySelector />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default PricingStep;