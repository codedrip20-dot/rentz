"use client";

import {
    AnimatePresence,
    motion,
} from "framer-motion";

import {
    useMemo,
    useCallback,
} from "react";

import { useRouter } from "next/navigation";

import {
    PropertyWizardProvider,
    usePropertyWizard,
} from "@/context/PropertyWizardContext";

import { useAuth } from "@/context/AuthContext";

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

    const { currentUser } = useAuth();

    const router = useRouter();

    const progress =
        ((currentStep + 1) / steps.length) * 100;

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

    const CurrentStep =
        StepComponents[currentStep];

    const handleFinish = useCallback(
        async () => {
            try {
                setIsSaving(true);

                if (!currentUser) {
                    throw new Error(
                        "User not authenticated."
                    );
                }

                console.log(
                    "Publishing Property..."
                );

                console.log(propertyData);

                await createProperty({
                    ...propertyData,
                    ownerId: currentUser.uid,
                });

                alert(
                    "property published successful"
                );

                router.push(
                    "/owner/dashBoard"
                );
            } catch (error) {
                console.error(
                    "Failed to publish property.",
                    error
                );
            } finally {
                setIsSaving(false);
            }
        },
        [
            propertyData,
            currentUser,
            setIsSaving,
            router,
        ]
    );

    return (
        <div
            className="
                relative
                mx-auto
                flex
                w-full
                max-w-6xl
                flex-col
                gap-5

                sm:gap-8
            "
        >
            {/* ==================================================
                Background
            ================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    -z-10
                    overflow-hidden
                "
            >
                <div
                    className="
                        absolute
                        left-1/2
                        top-0
                        h-[350px]
                        w-[350px]
                        -translate-x-1/2
                        rounded-full
                        bg-gradient-to-br
                        from-blue-600/20
                        via-sky-400/15
                        to-cyan-300/10
                        blur-3xl

                        sm:h-[550px]
                        sm:w-[550px]
                    "
                />
            </div>

            {/* ==================================================
                Stepper
            ================================================== */}

            <section
                className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/90
                    p-4
                    shadow-xl
                    backdrop-blur-md

                    sm:rounded-3xl
                    sm:p-8
                "
            >
                <PropertyStepper
                    steps={steps}
                    currentStep={currentStep}
                />

                {/* Progress */}

                <div className="mt-5 sm:mt-6">
                    <div
                        className="
                            mb-2
                            flex
                            items-center
                            justify-between
                            gap-3
                            text-xs
                            text-slate-600

                            sm:text-sm
                        "
                    >
                        <span className="shrink-0">
                            Step {currentStep + 1}{" "}
                            of {steps.length}
                        </span>

                        <span className="shrink-0">
                            {Math.round(
                                progress
                            )}
                            %
                        </span>
                    </div>

                    <div
                        className="
                            h-1.5
                            overflow-hidden
                            rounded-full
                            bg-slate-200

                            sm:h-2
                        "
                    >
                        <motion.div
                            initial={{
                                width: "20%",
                            }}
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

            {/* ==================================================
                Current Step
            ================================================== */}

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
                        min-h-[480px]
                        w-full
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white/90
                        p-4
                        shadow-xl
                        backdrop-blur-md

                        sm:min-h-[560px]
                        sm:rounded-3xl
                        sm:p-8

                        lg:p-10
                    "
                >
                    <CurrentStep />
                </motion.section>
            </AnimatePresence>

            {/* ==================================================
                Navigation
            ================================================== */}

            <section
                className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/90
                    p-4
                    shadow-xl
                    backdrop-blur-md

                    sm:rounded-3xl
                    sm:p-6
                "
            >
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