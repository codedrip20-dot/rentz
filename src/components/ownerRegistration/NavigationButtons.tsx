"use client";

type RegistrationStep =
    | "basic-information"
    | "plan-selection"
    | "payment"
    | "success";

interface NavigationButtonsProps {
    currentStep: RegistrationStep;
    onNext: () => void;
    onPrevious: () => void;
}

export default function NavigationButtons({
    currentStep,
    onNext,
    onPrevious,
}: NavigationButtonsProps) {
    const isFirstStep = currentStep === "basic-information";
    const isLastStep = currentStep === "success";

    return (
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <button
                type="button"
                onClick={onPrevious}
                disabled={isFirstStep}
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
                Previous
            </button>

            {!isLastStep && (
                <button
                    type="button"
                    onClick={onNext}
                    className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                    Next
                </button>
            )}
        </div>
    );
}