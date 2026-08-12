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
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl sm:rounded-3xl">

            {/* Header */}
            <div className="border-b border-slate-100 px-4 py-5 sm:px-6 sm:py-6 md:px-8">
                <div className="flex items-start justify-between gap-4">

                    <div className="min-w-0">
                        <h2 className="text-base font-semibold text-slate-900 sm:text-lg">
                            Room Setup
                        </h2>

                        <p className="mt-1 max-w-md text-xs leading-5 text-slate-500 sm:text-sm">
                            Complete each step before publishing your room.
                        </p>
                    </div>

                    <div className="shrink-0 rounded-full bg-blue-50 px-3 py-1.5 sm:px-4 sm:py-2">
                        <span className="text-xs font-semibold text-blue-700 sm:text-sm">
                            {currentStep + 1} of {steps.length}
                        </span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-200 sm:mt-6 sm:h-2">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-in-out"
                        style={{
                            width: `${progress}%`,
                        }}
                    />
                </div>
            </div>

            {/* Steps */}
            <div className="overflow-x-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8">
                <div className="flex min-w-max items-start">

                    {steps.map((step, index) => {
                        const completed = index < currentStep;
                        const active = index === currentStep;

                        return (
                            <div
                                key={step}
                                className="flex flex-1 items-center"
                            >
                                <div className="flex min-w-[90px] flex-col items-center sm:min-w-[110px]">

                                    {/* Circle */}
                                    <div
                                        className={`
                                            flex h-11 w-11 items-center justify-center
                                            rounded-full
                                            border-2
                                            text-sm font-bold
                                            transition-all duration-300
                                            sm:h-14 sm:w-14 sm:text-base

                                            ${
                                                completed
                                                    ? "border-blue-600 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg"
                                                    : active
                                                      ? "border-blue-600 bg-white text-blue-600 ring-4 ring-blue-100 sm:ring-8"
                                                      : "border-slate-300 bg-slate-50 text-slate-400"
                                            }
                                        `}
                                    >
                                        {completed ? (
                                            <Check className="h-5 w-5 sm:h-6 sm:w-6" />
                                        ) : (
                                            index + 1
                                        )}
                                    </div>

                                    {/* Label */}
                                    <span
                                        className={`
                                            mt-3 max-w-[90px] text-center text-xs font-semibold leading-5 transition-colors sm:mt-4 sm:max-w-[110px] sm:text-sm

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
                                    <div className="mx-3 mb-9 h-[3px] min-w-8 flex-1 overflow-hidden rounded-full bg-slate-200 sm:mx-5 sm:mb-10 sm:min-w-10">
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