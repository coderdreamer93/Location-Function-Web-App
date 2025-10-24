import React from "react";

function AddFunctionSidebar({ steps = [], activeStep = 0 }) {
  return (
    <div className="w-64 bg-white border rounded-xl p-4 h-full">
      {steps.map((label, index) => {
        // step state check
        const isCompleted = index < activeStep;
        const isActive = index === activeStep;

        return (
          <div key={index} className="flex items-start">
            <div className="flex flex-col justify-center items-center">
              {/* Step Circle */}
              <div
                className={`flex items-center justify-center w-7 h-7 rounded-full text-sm font-semibold border
                  ${
                    isCompleted
                      ? "bg-blue-600 text-white border-blue-600"
                      : isActive
                      ? "border-blue-500 text-blue-500 ring-1 ring-blue-600"
                      : "border-gray-400 text-gray-500"
                  }`}
              >
                {index + 1}
              </div>

              {/* Step Connector */}
              {steps.length - 1 !== index && (
                <span
                  className={`py-2 text-3xl font-extralight ${
                    isCompleted ? "newPrimaryColor" : "text-gray-300"
                  }`}
                >
                  |
                </span>
              )}
            </div>

            {/* Step Label */}
            <div className="ml-3 pt-1 text-sm">
              <p
                className={`${
                  isCompleted
                    ? "newPrimaryColor font-medium"
                    : isActive
                    ? "newPrimaryColor font-medium"
                    : "text-gray-600"
                }`}
              >
                {label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AddFunctionSidebar;

