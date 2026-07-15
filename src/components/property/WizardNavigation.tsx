"use client";

interface WizardNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
}

const WizardNavigation = ({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
}: WizardNavigationProps) => {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className="flex items-center justify-between rounded-xl border bg-white p-6 shadow-sm">

      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstStep}
        className="
          rounded-lg
          border
          border-slate-300
          px-6
          py-2.5
          font-medium
          text-slate-700
          transition-all
          hover:bg-slate-100
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        Previous
      </button>

      <button
        type="button"
        onClick={onNext}
        className="
          rounded-lg
          bg-blue-600
          px-6
          py-2.5
          font-medium
          text-white
          transition-all
          hover:bg-blue-700
        "
      >
        {isLastStep ? "Finish" : "Next"}
      </button>

    </div>
  );
};

export default WizardNavigation;