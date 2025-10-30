
"use client";
import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as CheckIcon } from "../../../Assets/icons/check.svg";
import { ReactComponent as UploadIcon } from "../../../Assets/icons/uploadIcon.svg";
import AddDescriptionModal from "../../../Components/Dashboard/modals/AddDescriptionModal";
import { useNavigate } from "react-router-dom";
import FormNavigationButtons from "../../../Components/Dashboard/form/FormNavigationButtons";
import AddProblemFromFunction from "./AddProblemFromFunction";

export default function ProblemSolvedForm({
  data,
  updateFormData,
  onStepDataChange,
  activeStep,
  handleNext,
  handlePrev,
}) {
  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState(null);
  const [showAddProblem, setShowAddProblem] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDesc, setOpenDesc] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    problemSolved: "",
    instantBroadcast: "",
    solvedImage: "",
    solvedVideo: "",
    description: "",
    ...data,
  });

  const options = ["Yes", "No", "Connections Only"];


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const isStepValid = () => {
    return (
      formData.problemSolved.trim() &&
      formData.instantBroadcast.trim() &&
      formData.solvedImage.trim() &&
      formData.solvedVideo.trim() &&
      formData.description.trim()
    );
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      const updatedData = {
        ...formData,
        solvedImage: file.name,
        solvedImagePreview: previewUrl, 
      };

      setFileName(file.name);
      setFilePreview(previewUrl);
      setFormData(updatedData);

      if (onStepDataChange) onStepDataChange(updatedData, isStepValid());
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSelect = (option) => {
    const updatedData = { ...formData, instantBroadcast: option };
    setFormData(updatedData);
    if (onStepDataChange) onStepDataChange(updatedData, isStepValid());
    setOpen(false);
  };


  useEffect(() => {
    updateFormData(formData);
  }, [formData]);

  useEffect(() => {
    if (formData.solvedImagePreview) {
      setFilePreview(formData.solvedImagePreview);
      setFileName(formData.solvedImage);
    }
  }, [formData]);



  return (
    <div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
   
          <div>
            <label className="block text-[14px] newFontColor mb-1">
              Problem Solved by Function
            </label>
            <input
              type="text"
              name="problemSolved"
              value={formData.problemSolved}
              onChange={handleChange}
              placeholder="ex: Engine repair completed"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[14px] focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>

       
          <div className="relative" ref={dropdownRef}>
            <label className="block text-[14px] newFontColor mb-1">
              Instant Problem Broadcast
            </label>
            <div
              onClick={() => setOpen(!open)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[14px] bg-white cursor-pointer flex justify-between items-center"
            >
              <span className="text-gray-800">
                {formData.instantBroadcast || "Select Option"}
              </span>
              {formData.instantBroadcast ? (
                <CheckIcon className="text-blue-600 w-5 h-5" />
              ) : (
                <svg
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </div>

            {open && (
              <div className="absolute z-10 mt-1 top-5 w-full bg-white border border-gray-200 rounded-lg shadow-md">
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`flex items-center justify-between px-3 py-2 text-[14px] cursor-pointer hover:bg-gray-50 ${
                      formData.instantBroadcast === option ? "bg-blue-50" : ""
                    }`}
                  >
                    <span className="text-gray-800">{option}</span>
                    {formData.instantBroadcast === option && (
                      <CheckIcon className="text-blue-600 w-5 h-5" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

   

          {/* Solved Image */}
          <div className="md:col-span-2">
            <label className="block text-[14px] newFontColor mb-2">
              Upload Problem Solved Image
            </label>
            <label
              htmlFor="fileUpload"
              className="relative flex flex-col items-center justify-center bg-white w-full h-28 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-all overflow-hidden"
            >
              {fileName && filePreview ? (
                <img
                  src={filePreview}
                  alt="Uploaded preview"
                  className="absolute inset-0 object-cover w-full h-full rounded-lg"
                />
              ) : (
                <div className="flex flex-col gap-2 justify-center items-center z-10">
                  <UploadIcon className="sm:text-[18px] text-[12px] newPrimaryColor" />
                  <span className="md:text-[14px] sm:text-[12px] text-[10px] newPrimaryColor">
                    Upload the file here
                  </span>
                  <span className="md:text-[14px] sm:text-[12px] text-[10px] text-gray-500">
                    (Only .jpg, .png, & .pdf files will be accepted)
                  </span>
                </div>
              )}
              <input
                type="file"
                id="fileUpload"
                className="hidden"
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.pdf"
              />
            </label>
            <p className="text-[14px] text-gray-400 mt-1 text-center">
              {fileName ? fileName : "no files uploaded yet"}
            </p>
          </div>

          <div className="md:col-span-2">
            <label className="block text-[14px] newFontColor mb-1">
              Problem Solved Video
            </label>
            <input
              type="text"
              name="solvedVideo"
              value={formData.solvedVideo}
              onChange={handleChange}
              placeholder="Enter YouTube Link"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[14px] focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Buttons Row */}
          <div className="md:col-span-2 flex flex-col md:flex-row gap-4 mt-4">
            <button
              type="button"
              onClick={() => {
                // localStorage.setItem("addFrom", "function");
                // navigate("/dashboard/problems/addProblem");
                setShowAddProblem(true)
              }}
              className="w-full md:w-1/2 border-2 newPrimaryBorder py-2 rounded-lg newPrimaryColor text-[14px] hover:bg-blue-50 transition-all"
            >
              + Add Problem
            </button>

            <button
              type="button"
              onClick={() => setOpenDesc(true)}
              className="w-full md:w-1/2 border-2 newPrimaryBorder newPrimaryColor py-2 rounded-lg text-[14px] hover:bg-blue-50 transition-all"
            >
              {formData?.description && formData.description.trim() !== ""
                ? "Edit Description"
                : "Add Description"}
            </button>
          </div>
        </div>
      </div>

      <FormNavigationButtons
        handlePrev={handlePrev}
        handleNext={handleNext}
        activeStep={activeStep}
        prevButton="Previous"
        rightTitle="Next"
      />

      {openDesc && (
        <AddDescriptionModal
          onClose={() => setOpenDesc(false)}
          onSave={(text) =>
            setFormData((prev) => ({ ...prev, description: text }))
          }
          initialValue={formData.description}
        />
      )}

      {showAddProblem && (
  <AddProblemFromFunction onClose={() => setShowAddProblem(false)} />
)}

    </div>
  );
}
