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
    <div
      className="
        w-full
        overflow-x-auto
        rounded-xl
        border
        bg-white
        p-4
        shadow-sm

        sm:p-6
      "
    >
      <div
        className="
          flex
          min-w-max
          items-start
          justify-between
          gap-4

          sm:w-full
          sm:min-w-0
          sm:gap-0
        "
      >
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div
              key={step}
              className="
                flex
                min-w-[90px]
                flex-1
                flex-col
                items-center

                sm:min-w-0
              "
            >
              <div
                className={`
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  text-sm
                  font-semibold
                  transition-all

                  sm:h-10
                  sm:w-10

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
                  mt-2
                  max-w-[90px]
                  text-center
                  text-xs
                  font-medium
                  leading-tight

                  sm:mt-3
                  sm:max-w-none
                  sm:text-sm

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
    </div>
  );
};

export default PropertyStepper;