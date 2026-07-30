"use client";

import { Check } from "lucide-react";

interface RoomStepperProps {
    steps: string[];
    currentStep: number;
}

export default function RoomStepper({
    steps,
    currentStep,
}: RoomStepperProps) {
    const progress =
        ((currentStep + 1) / steps.length) * 100;

    return (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

            {/* Header */}
            <div className="border-b border-slate-100 px-8 py-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-slate-900">
                            Room Setup
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Complete each step before publishing your room.
                        </p>
                    </div>

                    <div className="rounded-full bg-blue-50 px-4 py-2">
                        <span className="text-sm font-semibold text-blue-700">
                            {currentStep + 1} of {steps.length}
                        </span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-in-out"
                        style={{
                            width: `${progress}%`,
                        }}
                    />
                </div>
            </div>

            {/* Steps */}
            <div className="overflow-x-auto px-8 py-8">
                <div className="flex min-w-max items-start">

                    {steps.map((step, index) => {
                        const completed = index < currentStep;
                        const active = index === currentStep;

                        return (
                            <div
                                key={step}
                                className="flex flex-1 items-center"
                            >
                                <div className="flex min-w-[110px] flex-col items-center">

                                    {/* Circle */}
                                    <div
                                        className={`
                                            flex h-14 w-14 items-center justify-center
                                            rounded-full
                                            border-2
                                            text-base font-bold
                                            transition-all duration-300

                                            ${
                                                completed
                                                    ? "border-blue-600 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg"
                                                    : active
                                                      ? "border-blue-600 bg-white text-blue-600 ring-8 ring-blue-100"
                                                      : "border-slate-300 bg-slate-50 text-slate-400"
                                            }
                                        `}
                                    >
                                        {completed ? (
                                            <Check className="h-6 w-6" />
                                        ) : (
                                            index + 1
                                        )}
                                    </div>

                                    {/* Label */}
                                    <span
                                        className={`
                                            mt-4 text-center text-sm font-semibold transition-colors

                                            ${
                                                completed
                                                    ? "text-slate-900"
                                                    : active
                                                      ? "text-blue-600"
                                                      : "text-slate-400"
                                            }
                                        `}
                                    >
                                        {step}
                                    </span>
                                </div>

                                {/* Connector */}
                                {index !== steps.length - 1 && (
                                    <div className="mx-5 mb-10 h-[3px] flex-1 overflow-hidden rounded-full bg-slate-200">
                                        <div
                                            className={`
                                                h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500

                                                ${
                                                    completed
                                                        ? "w-full"
                                                        : "w-0"
                                                }
                                            `}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}