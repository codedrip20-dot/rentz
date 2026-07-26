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
                items-center
                justify-between
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
            "
        >
            <button
                type="button"
                onClick={onPrevious}
                disabled={isFirstStep || isSubmitting}
                className="
                    rounded-xl
                    border
                    border-slate-300
                    px-6
                    py-3
                    font-medium
                    text-slate-700
                    transition
                    hover:bg-slate-100
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "
            >
                Previous
            </button>

            <button
                type="button"
                onClick={handlePrimaryAction}
                disabled={isSubmitting}
                className="
                    rounded-xl
                    bg-blue-600
                    px-6
                    py-3
                    font-medium
                    text-white
                    transition
                    hover:bg-blue-700
                    disabled:cursor-not-allowed
                    disabled:bg-blue-400
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