"use client";
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import NestedHeader from "../../../Components/Dashboard/header/nestedHeader/NestedHeader";
import AddFunctionSidebar from "../../../Components/Dashboard/sidebarFilter/AddFunctionSidebar";

const AddFunction = () => {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    location: "",
    privacy: "Public",
  });

  const steps = [
    "About Me",
    "About My Function",
    "About Problem Solved",
    "About Formula Usage",
    "About Ability",
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      alert("Form submitted!");
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative flex flex-col w-full">
      <div
        className={"fixed top-14 left-0 right-0 z-20 bg-gray-50 p-4 transition-all duration-300 ease-in-out"}
      >
        <NestedHeader title="Add Functions" />
      </div>
      <div className="flex bg-gray-50 mt-24">
        {/* Sidebar Steps */}

        <AddFunctionSidebar steps={steps} activeStep={activeStep} />

        {/* Main Content */}
        <div className="flex-1 bg-white ml-6 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">{steps[activeStep]}</h2>

          {/* Step 1 Example */}
          {activeStep === 0 && (
            <div>
              <div className="flex flex-col items-center mb-6">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="avatar"
                  className="w-16 h-16 rounded-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className="w-full mt-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Enter job title"
                    className="w-full mt-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium text-gray-700">
                  Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Select location"
                    className="w-full mt-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <IoLocationOutline className="absolute right-3 top-3 text-gray-500" />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium text-gray-700">
                  Select Privacy
                </label>
                <select
                  name="privacy"
                  value={formData.privacy}
                  onChange={handleChange}
                  className="w-full mt-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option>Public</option>
                  <option>Private</option>
                </select>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrev}
              disabled={activeStep === 0}
              className={`px-4 py-2 border rounded-lg text-sm ${
                activeStep === 0
                  ? "text-gray-400 border-gray-300"
                  : "text-gray-700 border-gray-400 hover:bg-gray-100"
              }`}
            >
              Cancel
            </button>

            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
            >
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFunction;
