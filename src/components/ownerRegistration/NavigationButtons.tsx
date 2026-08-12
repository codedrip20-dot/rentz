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
    const isFirstStep =
        currentStep === "basic-information";

    const isLastStep =
        currentStep === "success";

    return (
        <div
            className="
                flex
                items-center
                justify-between
                gap-3
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-sm

                sm:p-6
            "
        >
            {/* ==================================================
                Previous
            ================================================== */}

            <button
                type="button"
                onClick={onPrevious}
                disabled={isFirstStep}
                className="
                    min-h-11
                    flex-1
                    rounded-xl
                    border
                    border-slate-300
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-slate-700
                    transition

                    active:scale-[0.98]

                    hover:bg-slate-100

                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    disabled:hover:bg-transparent
                    disabled:active:scale-100

                    sm:min-h-12
                    sm:flex-none
                    sm:px-6
                    sm:py-3
                    sm:text-base
                "
            >
                Previous
            </button>

            {/* ==================================================
                Next
            ================================================== */}

            {!isLastStep && (
                <button
                    type="button"
                    onClick={onNext}
                    className="
                        min-h-11
                        flex-1
                        rounded-xl
                        bg-blue-600
                        px-4
                        py-2.5
                        text-sm
                        font-semibold
                        text-white
                        transition

                        active:scale-[0.98]

                        hover:bg-blue-700

                        sm:min-h-12
                        sm:flex-none
                        sm:px-6
                        sm:py-3
                        sm:text-base
                    "
                >
                    Next
                </button>
            )}
        </div>
    );
}