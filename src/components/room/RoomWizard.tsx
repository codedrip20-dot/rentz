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
import {useAuth} from "@/context/AuthContext";

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

    const {updateRoom, room } = useRoomWizard();
    const {currentUser} = useAuth();

    useEffect(() => {
        window.scrollTo( {
            top:0,
            behavior: "smooth",
        });
    }, [currentStep])

    useEffect(() => {
        if(propertyId && !room.propertyId && currentUser) {
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
                {/* ==========================================================
                    Header
                ========================================================== */}

                <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur-xl">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div className="space-y-3">
                            <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
                                Room Wizard
                            </span>

                            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                                Create a New Room
                            </h1>

                            <p className="max-w-2xl text-base leading-relaxed text-slate-600">
                                Configure every aspect of your room including
                                pricing, amenities, availability, and images
                                before publishing it on Rentz.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-blue-100 bg-blue-50 px-6 py-5">
                            <p className="text-xs uppercase tracking-wide text-slate-500">
                                Progress
                            </p>

                            <h2 className="mt-1 text-3xl font-bold text-blue-700">
                                {Math.round(progress)}%
                            </h2>

                            <p className="mt-2 text-sm text-slate-500">
                                Step {currentStep + 1} of {steps.length}
                            </p>
                        </div>
                    </div>

                    {/* Progress Bar */}

                    <div className="mt-8">
                        <div className="h-3 overflow-hidden rounded-full bg-slate-200">
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

                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-slate-500">
                            Current Step
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900">
                            {steps[currentStep]}
                        </h2>
                    </div>

                    <div className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-md">
                        {currentStep + 1} / {steps.length}
                    </div>
                </div>

                {/* ==========================================================
                    Main Content
                ========================================================== */}

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
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
                            className="p-6 sm:p-8 lg:p-10"
                        >
                            {currentComponent}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* ==========================================================
                    Navigation
                ========================================================== */}

                <div className="bottom-5 z-30">
                    <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-2xl backdrop-blur-xl">
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