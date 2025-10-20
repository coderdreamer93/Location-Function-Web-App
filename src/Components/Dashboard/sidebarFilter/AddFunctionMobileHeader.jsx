import React from "react";

const AddFunctionMobileHeader = ({ steps = [], activeStep = 0 }) => {
  const totalSteps = steps.length;
  const progressPercent = ((activeStep + 1) / totalSteps) * 100;
  const nextStep =
    activeStep + 1 < steps.length ? steps[activeStep + 1] : null;

  const radius = 28;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex items-center space-x-4 mb-6 md:hidden">
      {/* Circular Progress */}
      <div className="relative w-16 h-16">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background Circle */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="#E5E7EB"
            strokeWidth="5"
            fill="none"
          />
          {/* Progress Circle */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="#2563EB"
            strokeWidth="5"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (progressPercent / 100) * circumference}
            strokeLinecap="round"
            className="transition-all duration-500 ease-in-out"
          />
        </svg>

        {/* Step Count */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-xs font-semibold text-gray-800">
          <span>{activeStep + 1}</span>
          <span className="text-gray-500 text-[10px]">of {totalSteps}</span>
        </div>
      </div>

      {/* Step Title */}
      <div>
        <h3 className="text-base font-semibold text-gray-800">
          {steps[activeStep]}
        </h3>
        {nextStep && (
          <p className="text-sm text-gray-500">
            Next: <span className="text-gray-700">{nextStep}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AddFunctionMobileHeader;
