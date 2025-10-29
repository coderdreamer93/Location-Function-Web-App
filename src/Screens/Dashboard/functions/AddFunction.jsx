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
import { useNavigate } from "react-router";
import AboutMe from "./AboutMe";

const AddFunction = () => {
  const navigate = useNavigate();

  const steps = [
    "About Me",
    "About My Function",
    "About Problem Solved",
    "About Formula Usage",
    "About Ability",
  ];

  const [formData, setFormData] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (!formData) return;

    const userId = "currentUser";
    const existingData =
      JSON.parse(localStorage.getItem("addFunctionData")) || {};

    const updatedData = {
      ...existingData,
      [userId]: formData,
    };

    localStorage.setItem("addFunctionData", JSON.stringify(updatedData));
  }, [formData]);

  const handleNext = () => {
    const stepKey = steps[activeStep].toLowerCase().replace(/\s/g, "");
    const stepData = formData[stepKey];

    if (!stepData || Object.keys(stepData).length === 0) {
      alert("Please fill out this step before continuing.");
      return;
    }

    localStorage.setItem("addFunctionCurrentStep", activeStep + 1);

    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      const userId = "currentUser";
      const existingData =
        JSON.parse(localStorage.getItem("addFunctionSubmitted")) || {};
      const userForms = Array.isArray(existingData[userId])
        ? existingData[userId]
        : [];

      const newFormEntry = {
        ...formData,
        submittedAt: new Date().toISOString(),
      };

      const updatedData = {
        ...existingData,
        [userId]: [...userForms, newFormEntry],
      };

      localStorage.setItem("addFunctionSubmitted", JSON.stringify(updatedData));

      localStorage.removeItem("addFunctionCurrentStep");
      alert("Form submitted successfully!");
      setFormData({});
      setActiveStep(0);
      navigate("/dashboard/functions");
    }
  };

  const handlePrev = () => {
    if (showPreview) return setShowPreview(false);

    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
      localStorage.setItem("addFunctionCurrentStep", activeStep - 1);
    } else {
      // ✅ Cancel: do not save incomplete data
      localStorage.removeItem("addFunctionCurrentStep");
      navigate("/dashboard/functions");
    }
  };

  const handlePreview = () => setShowPreview(true);
  const handleCloseAbilityPreview = () => setShowPreview(false);

  const stepKey = steps[activeStep].toLowerCase().replace(/\s/g, "");

  return (
    <div className="relative flex flex-col w-full sm:p-4">
      <div className="fixed top-14 left-0 right-0 z-20 bg-white p-4 transition-all duration-300 ease-in-out">
        <NestedHeaderWhite
          title="Add Function"
          breadcrumbs={[
            { label: "Functions", path: "/dashboard/functions" },
            { label: "Create Function", path: "" },
          ]}
        />
      </div>

      <div className="flex h-auto flex-col md:flex-row gap-4 bg-gray-50 mt-24 p-0 sm:p-4">
        <div className="hidden md:block">
          <AddFunctionSidebar steps={steps} activeStep={activeStep} />
        </div>

        <div className="flex flex-col h-full  w-full border sm:rounded-xl rounded-none">
          <div className="w-full h-full md:flex-1 mx-auto rounded-t-xl backdrop-blur-sm ">
            <div className="px-6 pt-6 ">
              <AddFunctionMobileHeader steps={steps} activeStep={activeStep} />
              <p className="text-2xl font-bold sm:flex hidden  newFontColor">
                {steps[activeStep]}
              </p>
            </div>
            {/* Step Components */}
            {activeStep === 0 && (
              <AboutMe
                data={formData[stepKey] || {}}
                updateFormData={(data) =>
                  setFormData((prev) => ({ ...prev, [stepKey]: data }))
                }
                activeStep={activeStep}
                handleNext={handleNext}
                handlePrev={handlePrev}
              />
            )}
            {activeStep === 1 && (
              <AboutMyFunctionForm
                data={formData[stepKey] || {}}
                updateFormData={(data) =>
                  setFormData((prev) => ({ ...prev, [stepKey]: data }))
                }
                activeStep={activeStep}
                handleNext={handleNext}
                handlePrev={handlePrev}
              />
            )}
            {activeStep === 2 && (
              <ProblemSolvedForm
                data={formData[stepKey] || {}}
                updateFormData={(data) =>
                  setFormData((prev) => ({ ...prev, [stepKey]: data }))
                }
                activeStep={activeStep}
                handleNext={handleNext}
                handlePrev={handlePrev}
              />
            )}
            {activeStep === 3 && (
              <AboutFormulaUsage
                data={formData[stepKey] || {}}
                updateFormData={(data) =>
                  setFormData((prev) => ({ ...prev, [stepKey]: data }))
                }
                activeStep={activeStep}
                handleNext={handleNext}
                handlePrev={handlePrev}
              />
            )}
            {activeStep === 4 &&
              (!showPreview ? (
                <AboutAbility
                  handlePreview={handlePreview}
                  data={formData[stepKey] || {}}
                  updateFormData={(data) =>
                    setFormData((prev) => ({ ...prev, [stepKey]: data }))
                  }
                  activeStep={activeStep}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
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
                  activeStep={activeStep}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFunction;
