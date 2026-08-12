"use client";

import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

interface WizardNavigationProps {
    currentStep: number;
    totalSteps: number;
    onPrevious: () => void;
    onNext: () => void;
}

export default function WizardNavigation({
    currentStep,
    totalSteps,
    onPrevious,
    onNext,
}: WizardNavigationProps) {
    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === totalSteps - 1;
    const isReviewStep = currentStep === totalSteps - 2;

    return (
        <div className="border-t border-slate-200 bg-white px-3 py-4 sm:px-6 sm:py-5 md:px-8">
            <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">

                {/* Previous */}

                <button
                    type="button"
                    onClick={onPrevious}
                    disabled={isFirstStep}
                    className="
                        inline-flex min-h-12 w-full items-center justify-center gap-2
                        rounded-xl
                        border border-slate-300
                        bg-white
                        px-5 py-3
                        text-sm font-semibold text-slate-700
                        transition-all duration-200
                        hover:border-slate-400
                        hover:bg-slate-50
                        hover:shadow-sm
                        active:scale-[0.98]
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                        sm:w-auto
                    "
                >
                    <ArrowLeft className="h-4 w-4 shrink-0" />

                    Previous

                </button>

                {/* Step Counter + Next */}

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-5">

                    <div className="text-center sm:text-right">

                        <p className="text-xs uppercase tracking-wide text-slate-500">
                            Step
                        </p>

                        <p className="text-sm font-semibold text-slate-800">
                            {currentStep + 1} of {totalSteps}
                        </p>

                    </div>

                    <button
                        type="button"
                        onClick={onNext}
                        className="
                            inline-flex min-h-12 w-full items-center justify-center gap-2
                            rounded-xl
                            bg-gradient-to-r
                            from-blue-600
                            to-indigo-600
                            px-6 py-3
                            text-sm font-semibold text-white
                            shadow-lg
                            transition-all duration-200
                            hover:shadow-xl
                            hover:scale-[1.02]
                            active:scale-[0.98]
                            sm:w-auto
                        "
                    >
                        {isLastStep ? (
                            <>
                                <CheckCircle2 className="h-5 w-5 shrink-0" />
                                Create Room
                            </>
                        ) : isReviewStep ? (
                            <>
                                Review Room
                                <ArrowRight className="h-4 w-4 shrink-0" />
                            </>
                        ) : (
                            <>
                                Continue
                                <ArrowRight className="h-4 w-4 shrink-0" />
                            </>
                        )}
                    </button>

                </div>

            </div>
        </div>
    );
}