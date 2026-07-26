"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useCallback } from "react";

import {
    PropertyWizardProvider,
    usePropertyWizard,
} from "@/context/PropertyWizardContext";

import PropertyStepper from "./PropertyStepper";
import WizardNavigation from "./WizardNavigation";

import LocationStep from "./steps/LocationStep";
import DetailsStep from "./steps/DetailsStep";
import InformationStep from "./steps/InformationStep";
import ImagesStep from "./steps/ImagesStep";
import ReviewStep from "./steps/ReviewStep";
import { createProperty } from "@/lib/firebase/property";

const steps = [
    "Location",
    "Details",
    "Information",
    "Images",
    "Review",
];

function PropertyWizardContent() {
    const {
        currentStep,
        nextStep,
        previousStep,
        propertyData,
        isSaving,
        setIsSaving,
    } = usePropertyWizard();

    const progress = ((currentStep + 1) / steps.length) * 100;

    const StepComponents = useMemo(
        () => [
            LocationStep,
            DetailsStep,
            InformationStep,
            ImagesStep,
            ReviewStep,
        ],
        []
    );

    const CurrentStep = StepComponents[currentStep];

    const handleFinish = useCallback(async () => {
        try {
            setIsSaving(true);

            console.log("Publishing Property...");
            console.log(propertyData);

            /**
             * Next Mission
             *
             * await publishProperty(propertyData);
             */
            await createProperty(propertyData)
            alert("Property is ready to publish.");
        } catch (error) {
            console.error(
                "Failed to publish property.",
                error
            );
        } finally {
            setIsSaving(false);
        }
    }, [propertyData, setIsSaving]);

    return (
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8">

            {/* Background */}

            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

                <div
                    className="
                        absolute
                        left-1/2
                        top-0
                        h-[550px]
                        w-[550px]
                        -translate-x-1/2
                        rounded-full
                        bg-gradient-to-br
                        from-blue-600/20
                        via-sky-400/15
                        to-cyan-300/10
                        blur-3xl
                    "
                />

            </div>

            {/* Stepper */}

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur-md">

                <PropertyStepper
                    steps={steps}
                    currentStep={currentStep}
                />

                <div className="mt-6">

                    <div className="mb-2 flex items-center justify-between text-sm text-slate-600">

                        <span>
                            Step {currentStep + 1} of {steps.length}
                        </span>

                        <span>
                            {Math.round(progress)}%
                        </span>

                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">

                        <motion.div
                            initial={{ width: "20%" }}
                            animate={{
                                width: `${progress}%`,
                            }}
                            transition={{
                                duration: 0.35,
                                ease: "easeInOut",
                            }}
                            className="
                                h-full
                                rounded-full
                                bg-gradient-to-r
                                from-blue-600
                                via-sky-500
                                to-cyan-500
                            "
                        />

                    </div>

                </div>

            </section>

            {/* Current Step */}

            <AnimatePresence mode="wait">

                <motion.section
                    key={currentStep}
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: -20,
                    }}
                    transition={{
                        duration: 0.25,
                    }}
                    className="
                        min-h-[560px]
                        rounded-3xl
                        border
                        border-slate-200
                        bg-white/90
                        p-8
                        shadow-xl
                        backdrop-blur-md
                        lg:p-10
                    "
                >
                    <CurrentStep />
                </motion.section>

            </AnimatePresence>

            {/* Navigation */}

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl backdrop-blur-md">

                <WizardNavigation
                    currentStep={currentStep}
                    totalSteps={steps.length}
                    onNext={nextStep}
                    onPrevious={previousStep}
                    onFinish={handleFinish}
                    isSubmitting={isSaving}
                />

            </section>

        </div>
    );
}

export default function PropertyWizard() {
    return (
        <PropertyWizardProvider>
            <PropertyWizardContent />
        </PropertyWizardProvider>
    );
}