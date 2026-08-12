"use client";

import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { RoomWizardProvider } from "@/context/RoomWizardContext";

import RoomStepper from "./RoomStepper";
import WizardNavigation from "./WizardNavigation";

// Steps
import BasicInformationStep from "./basic/BasicInformationStep";
import PricingStep from "./pricing/PricingStep";
import AmenitiesStep from "./amenities/AmenitiesStep";
import AvailabilityStep from "./availability/AvailabilityStep";
import ImagesStep from "./steps/ImagesStep";
import ReviewStep from "./steps/ReviewStep";

import { useSearchParams } from "next/navigation";
import { useRoomWizard } from "@/context/RoomWizardContext";
import { useAuth } from "@/context/AuthContext";

const steps = [
    "Basic",
    "Pricing",
    "Amenities",
    "Availability",
    "Images",
    "Review",
] as const;

function RoomWizardContent() {
    const [currentStep, setCurrentStep] = useState(0);

    const searchParams = useSearchParams();

    const propertyId = searchParams.get("propertyId");

    const { updateRoom, room } = useRoomWizard();
    const { currentUser } = useAuth();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [currentStep]);

    useEffect(() => {
        if (propertyId && !room.propertyId && currentUser) {
            updateRoom({
                propertyId,
                ownerId: currentUser.uid,
            });
            console.log("property injected:", propertyId);
        }
    }, [propertyId, room.propertyId]);

    const nextStep = () => {
        setCurrentStep((prev) =>
            Math.min(prev + 1, steps.length - 1)
        );
    };

    const previousStep = () => {
        setCurrentStep((prev) =>
            Math.max(prev - 1, 0)
        );
    };

    const progress = ((currentStep + 1) / steps.length) * 100;

    const currentComponent = useMemo(() => {
        switch (currentStep) {
            case 0:
                return <BasicInformationStep />;

            case 1:
                return <PricingStep />;

            case 2:
                return <AmenitiesStep />;

            case 3:
                return <AvailabilityStep />;

            case 4:
                return <ImagesStep />;

            case 5:
                return <ReviewStep />;

            default:
                return null;
        }
    }, [currentStep]);

    return (
        <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-3 py-5 sm:gap-6 sm:px-4 sm:py-6 md:gap-8 md:px-6 md:py-8 lg:px-8">

                {/* ==========================================================
                    Header
                ========================================================== */}

                <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-xl sm:rounded-3xl sm:p-6 md:p-8">

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                        <div className="min-w-0 space-y-2 sm:space-y-3">

                            <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-blue-700 sm:px-4 sm:text-xs">
                                Room Wizard
                            </span>

                            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                                Create a New Room
                            </h1>

                            <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-relaxed">
                                Configure every aspect of your room including
                                pricing, amenities, availability, and images
                                before publishing it on Rentz.
                            </p>

                        </div>

                        <div className="w-full shrink-0 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-4 sm:px-6 sm:py-5 lg:w-auto">

                            <div className="flex items-center justify-between gap-4 lg:block">

                                <div>
                                    <p className="text-[10px] uppercase tracking-wide text-slate-500 sm:text-xs">
                                        Progress
                                    </p>

                                    <h2 className="mt-1 text-2xl font-bold text-blue-700 sm:text-3xl">
                                        {Math.round(progress)}%
                                    </h2>
                                </div>

                                <p className="text-sm text-slate-500 lg:mt-2">
                                    Step {currentStep + 1} of {steps.length}
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Progress Bar */}

                    <div className="mt-5 sm:mt-6 md:mt-8">
                        <div className="h-2 overflow-hidden rounded-full bg-slate-200 sm:h-3">
                            <motion.div
                                animate={{
                                    width: `${progress}%`,
                                }}
                                transition={{
                                    duration: 0.35,
                                }}
                                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                            />
                        </div>
                    </div>

                </div>

                {/* ==========================================================
                    Stepper
                ========================================================== */}

                <RoomStepper
                    steps={[...steps]}
                    currentStep={currentStep}
                />

                {/* ==========================================================
                    Current Step
                ========================================================== */}

                <div className="flex items-center justify-between gap-4">

                    <div className="min-w-0">
                        <p className="text-xs text-slate-500 sm:text-sm">
                            Current Step
                        </p>

                        <h2 className="mt-0.5 truncate text-xl font-bold text-slate-900 sm:text-2xl">
                            {steps[currentStep]}
                        </h2>
                    </div>

                    <div className="shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md sm:px-5 sm:py-2 sm:text-sm">
                        {currentStep + 1} / {steps.length}
                    </div>

                </div>

                {/* ==========================================================
                    Main Content
                ========================================================== */}

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl sm:rounded-3xl">

                    <AnimatePresence mode="wait">

                        <motion.div
                            key={currentStep}
                            initial={{
                                opacity: 0,
                                y: 15,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -15,
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                            className="p-4 sm:p-6 md:p-8 lg:p-10"
                        >
                            {currentComponent}
                        </motion.div>

                    </AnimatePresence>

                </div>

                {/* ==========================================================
                    Navigation
                ========================================================== */}

                <div className="bottom-5 z-30">

                    <div className="rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-2xl backdrop-blur-xl sm:rounded-3xl sm:p-4 md:p-5">

                        <WizardNavigation
                            currentStep={currentStep}
                            totalSteps={steps.length}
                            onNext={nextStep}
                            onPrevious={previousStep}
                        />

                    </div>

                </div>

            </div>
        </div>
    );
}

export default function RoomWizard() {
    return (
        <RoomWizardProvider>
            <RoomWizardContent />
        </RoomWizardProvider>
    );
}