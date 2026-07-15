"use client";

interface PropertyStepperProps {
  steps: string[];
  currentStep: number;
}

const PropertyStepper = ({
  steps,
  currentStep,
}: PropertyStepperProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-white p-6 shadow-sm">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div
            key={step}
            className="flex flex-1 flex-col items-center"
          >
            <div
              className={`
                flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all
                ${
                  isCompleted
                    ? "border-blue-600 bg-blue-600 text-white"
                    : isActive
                    ? "border-blue-600 bg-white text-blue-600"
                    : "border-gray-300 bg-gray-100 text-gray-500"
                }
              `}
            >
              {index + 1}
            </div>

            <span
              className={`
                mt-3 text-sm font-medium
                ${
                  isActive || isCompleted
                    ? "text-slate-900"
                    : "text-slate-400"
                }
              `}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default PropertyStepper;