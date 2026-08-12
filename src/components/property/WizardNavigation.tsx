"use client";

interface WizardNavigationProps {
    currentStep: number;
    totalSteps: number;

    onNext: () => void;
    onPrevious: () => void;
    onFinish: () => void;

    isSubmitting?: boolean;
}

export default function WizardNavigation({
    currentStep,
    totalSteps,
    onNext,
    onPrevious,
    onFinish,
    isSubmitting = false,
}: WizardNavigationProps) {
    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === totalSteps - 1;

    function handlePrimaryAction() {
        if (isSubmitting) return;

        if (isLastStep) {
            onFinish();
            return;
        }

        onNext();
    }

    return (
        <div
            className="
                flex
                w-full
                items-center
                justify-between
                gap-3
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-sm

                sm:gap-4
                sm:p-6
            "
        >
            <button
                type="button"
                onClick={onPrevious}
                disabled={
                    isFirstStep ||
                    isSubmitting
                }
                className="
                    min-h-11
                    rounded-xl
                    border
                    border-slate-300
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    text-slate-700
                    transition
                    hover:bg-slate-100
                    active:scale-[0.98]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    disabled:active:scale-100

                    sm:min-h-12
                    sm:px-6
                    sm:py-3
                    sm:text-base
                "
            >
                Previous
            </button>

            <button
                type="button"
                onClick={handlePrimaryAction}
                disabled={isSubmitting}
                className="
                    min-h-11
                    rounded-xl
                    bg-blue-600
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-blue-700
                    active:scale-[0.98]
                    disabled:cursor-not-allowed
                    disabled:bg-blue-400
                    disabled:active:scale-100

                    sm:min-h-12
                    sm:px-6
                    sm:py-3
                    sm:text-base
                "
            >
                {isSubmitting
                    ? "Publishing..."
                    : isLastStep
                    ? "Publish Property"
                    : "Next"}
            </button>
        </div>
    );
}