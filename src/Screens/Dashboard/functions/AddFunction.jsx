"use client";
import React, { useEffect, useState } from "react";
import AddFunctionSidebar from "../../../Components/Dashboard/sidebarFilter/AddFunctionSidebar";
import NestedHeaderWhite from "../../../Components/Dashboard/header/nestedHeader/NestedHeaderWhite";
import AddFunctionMobileHeader from "../../../Components/Dashboard/sidebarFilter/AddFunctionMobileHeader";
import AboutMyFunctionForm from "./AboutMyFunctionForm";
import ProblemSolvedForm from "./ProblemSolvedForm";
import AboutFormulaUsage from "./AboutFormulaUsage";
import AboutAbility from "./AboutAbility";
import AboutAbilityPreview from "./AboutAbilityPreview";
import { ReactComponent as LocationIcon } from "../../../Assets/icons/Pin.svg";
import { ReactComponent as CheckIcon } from "../../../Assets/icons/check.svg";
import { useNavigate } from "react-router";
import AboutMe from "./AboutMe";

const AddFunction = () => {
  const navigate = useNavigate();

  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({});

  const steps = [
    "About Me",
    "About My Function",
    "About Problem Solved",
    "About Formula Usage",
    "About Ability",
  ];

  const handlePreview = () => setShowPreview(true);
  const handleCloseAbilityPreview = () => setShowPreview(false);
  const [activeStep, setActiveStep] = useState(0);

  // --- Utility function to save current step data ---
  const saveStepData = (stepKey, stepData) => {
    const userId = "currentUser"; // Replace with actual user ID if available
    const existingData =
      JSON.parse(localStorage.getItem("addFunctionData")) || {};
    const updatedData = {
      ...existingData,
      [userId]: {
        ...existingData[userId],
        [stepKey]: stepData,
      },
    };
    localStorage.setItem("addFunctionData", JSON.stringify(updatedData));
  };

  const handleNext = () => {
    // Save current step data to localStorage
    const stepKey = steps[activeStep].toLowerCase().replace(/\s/g, "");
    saveStepData(stepKey, formData);

    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      alert("Form submitted!");
    }
  };

  const handlePrev = () => {
    if (showPreview === false) {
      if (activeStep > 0) {
        setActiveStep(activeStep - 1);
      } else {
        // 👇 Go back when activeStep is 0
        navigate("/dashboard/functions");
      }
    } else {
      setShowPreview(false);
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  return (
    <div className="relative flex flex-col w-full sm:p-4">
      {/* Fixed Header */}
      <div className="fixed top-14 left-0 right-0 z-20 bg-white p-4 transition-all duration-300 ease-in-out">
        <NestedHeaderWhite
          title="Add Function"
          breadcrumbs={[
            // { label: "Dashboard", path: "/dashboard" },
            { label: "Functions", path: "/dashboard/functions" },
            { label: "Create Function", path: "" },
          ]}
        />
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-4 bg-gray-50 mt-24 p-0 sm:p-4">
        {/* Sidebar (Desktop only) */}
        <div className="hidden md:block">
          <AddFunctionSidebar steps={steps} activeStep={activeStep} />
        </div>

        <div className="flex flex-col w-full border sm:rounded-xl rounded-none">
          {/* Main Content */}
          <div
            className="w-full md:flex-1 mx-auto md:mx-0 p-6 rounded-t-xl backdrop-blur-sm
                      max-w-full sm:max-w-lg md:max-w-none"
          >
            {/* Mobile Header (Circle Progress) */}
            <AddFunctionMobileHeader steps={steps} activeStep={activeStep} />

            {/* Step Title */}
            <p className="text-2xl sm:flex hidden mb-6 newFontColor">
              {steps[activeStep]}
            </p>

            {/* Step 1: About Me */}
            {activeStep === 0 && (
              <div>
                <AboutMe formData={formData} setFormData={setFormData} />
              </div>
            )}

            {/* Step 2 */}
            {activeStep === 1 && (
              <div>
                <AboutMyFunctionForm
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
            )}

            {/* Step 3 */}
            {activeStep === 2 && (
              <div>
                <ProblemSolvedForm
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
            )}

            {/* Step 4 */}
            {activeStep === 3 && (
              <div>
                <AboutFormulaUsage
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
            )}

            {/* Step 5 */}
            {activeStep === 4 && (
              <div>
                {!showPreview ? (
                  <AboutAbility
                    handlePreview={handlePreview}
                    formData={formData}
                    setFormData={setFormData}
                  />
                ) : (
                  <AboutAbilityPreview
                    onClose={handleCloseAbilityPreview}
                    users={[
                      {
                        mechanicName: "John Thompson",
                        designation: "Auto Engineer",
                        function: "Mechanic Function",
                        image: "/image/UserImage.png",
                      },
                    ]}
                  />
                )}
              </div>
            )}
          </div>
          {/* Buttons */}
          <div className="w-full flex justify-between items-center gap-2 p-4  border-t sm:border-none rounded-b-xl bg-[#ffffff] sm:bg-[#F9FAFB] relative z-10  max-w-full sm:max-w-lg md:max-w-none mx-auto">
            <button
              onClick={handlePrev}
              disabled={activeStep === 0}
              className={`md:px-5 px-4 py-2.5 rounded-lg text-[14px] font-medium transition-all duration-200 border-2 shadow-sm hover:shadow-md focus:outline-none ${
                activeStep === 0
                  ? "border-blue-600 newPrimaryColor cursor-not-allowed bg-white"
                  : "border-blue-600 newPrimaryColor bg-white hover:bg-blue-100 active:bg-blue-100"
              }`}
            >
              {activeStep === 0 ? "Cancle" : "Previous"}
            </button>

            <button
              onClick={handleNext}
              className="md:px-5 px-4 py-2.5 rounded-lg text-[14px] border-2 newPrimaryBorder  newPrimaryBg text-white shadow-sm hover:shadow-md  transition-all duration-200 focus:outline-none"
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFunction;
