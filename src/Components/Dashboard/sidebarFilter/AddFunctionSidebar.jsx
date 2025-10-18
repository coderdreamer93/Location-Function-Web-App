import React from "react";

function AddFunctionSidebar({ steps = [], activeStep = 0 }) {
  return (
    <div className="w-64 bg-white border rounded-xl p-4">
      {steps.map((label, index) => (
        <div key={index} className="flex items-start">
          <div className="flex flex-col justify-center items-center">
            <div
              className={`flex items-center justify-center w-6 h-6 border rounded-full text-sm font-semibold ${
                index === activeStep
                  ? "border-blue-500 text-blue-500"
                  : "border-gray-400 text-gray-500"
              }`}
            >
              {index + 1}
            </div>
            {steps.length - 1 !== index && (
              <span className="py-2 text-3xl font-extralight">|</span>
            )}
          </div>
          <div className="ml-3 pt-1 text-sm">
            <p
              className={`${
                index === activeStep
                  ? "text-blue-600 font-medium"
                  : "text-gray-600"
              }`}
            >
              {label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AddFunctionSidebar;
