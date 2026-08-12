"use client";

import { Check } from "lucide-react";

import type { RegistrationStep } from "@/types/registration";

interface RegistrationStepperProps {
    currentStep: RegistrationStep;
}

const steps: {
    id: RegistrationStep;
    title: string;
}[] = [
    {
        id: "basic-information",
        title: "Basic Information",
    },
    {
        id: "plan-selection",
        title: "Choose Plan",
    },
    {
        id: "payment",
        title: "Payment",
    },
    {
        id: "success",
        title: "Complete",
    },
];

export default function RegistrationStepper({
    currentStep,
}: RegistrationStepperProps) {
    const currentIndex = steps.findIndex(
        (step) => step.id === currentStep
    );

    return (
        <div
            className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-sm

                sm:rounded-3xl
                sm:p-6
            "
        >
            <div className="flex items-start justify-between">
                {steps.map(
                    (step, index) => {
                        const completed =
                            index < currentIndex;

                        const active =
                            index === currentIndex;

                        return (
                            <div
                                key={step.id}
                                className="
                                    flex
                                    min-w-0
                                    flex-1
                                    items-start
                                "
                            >
                                {/* Step */}

                                <div
                                    className="
                                        flex
                                        min-w-0
                                        flex-1
                                        flex-col
                                        items-center
                                    "
                                >
                                    <div
                                        className={`
                                            flex
                                            h-9
                                            w-9
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            border-2
                                            text-sm
                                            font-semibold
                                            transition-colors

                                            sm:h-12
                                            sm:w-12
                                            sm:text-base

                                            ${
                                                completed
                                                    ? `
                                                        border-green-600
                                                        bg-green-600
                                                        text-white
                                                      `
                                                    : active
                                                    ? `
                                                        border-blue-600
                                                        bg-blue-600
                                                        text-white
                                                      `
                                                    : `
                                                        border-slate-300
                                                        bg-white
                                                        text-slate-500
                                                      `
                                            }
                                        `}
                                    >
                                        {completed ? (
                                            <Check
                                                className="
                                                    h-4
                                                    w-4

                                                    sm:h-5
                                                    sm:w-5
                                                "
                                            />
                                        ) : (
                                            index + 1
                                        )}
                                    </div>

                                    <p
                                        className={`
                                            mt-2
                                            max-w-[70px]
                                            text-center
                                            text-[10px]
                                            font-medium
                                            leading-tight

                                            sm:mt-3
                                            sm:max-w-none
                                            sm:text-sm
                                            sm:leading-normal

                                            ${
                                                completed
                                                    ? "text-green-600"
                                                    : active
                                                    ? "text-blue-600"
                                                    : "text-slate-500"
                                            }
                                        `}
                                    >
                                        {step.title}
                                    </p>
                                </div>

                                {/* Connector */}

                                {index <
                                    steps.length -
                                        1 && (
                                    <div
                                        className={`
                                            mx-1
                                            mt-4
                                            h-0.5
                                            min-w-2
                                            flex-1
                                            rounded-full

                                            sm:mx-4
                                            sm:mt-6
                                            sm:h-1

                                            ${
                                                completed
                                                    ? "bg-green-600"
                                                    : "bg-slate-200"
                                            }
                                        `}
                                    />
                                )}
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
}