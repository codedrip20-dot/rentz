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
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
                {steps.map((step, index) => {
                    const completed = index < currentIndex;
                    const active = index === currentIndex;

                    return (
                        <div
                            key={step.id}
                            className="flex flex-1 items-center"
                        >
                            <div className="flex flex-col items-center">
                                <div
                                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors ${
                                        completed
                                            ? "border-green-600 bg-green-600 text-white"
                                            : active
                                            ? "border-blue-600 bg-blue-600 text-white"
                                            : "border-slate-300 bg-white text-slate-500"
                                    }`}
                                >
                                    {completed ? (
                                        <Check className="h-5 w-5" />
                                    ) : (
                                        index + 1
                                    )}
                                </div>

                                <p
                                    className={`mt-3 text-center text-sm font-medium ${
                                        completed
                                            ? "text-green-600"
                                            : active
                                            ? "text-blue-600"
                                            : "text-slate-500"
                                    }`}
                                >
                                    {step.title}
                                </p>
                            </div>

                            {index < steps.length - 1 && (
                                <div
                                    className={`mx-4 h-1 flex-1 rounded-full ${
                                        completed
                                            ? "bg-green-600"
                                            : "bg-slate-200"
                                    }`}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}