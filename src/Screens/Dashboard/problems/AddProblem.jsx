"use client";
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as UploadIcon } from "../../../Assets/icons/uploadIcon.svg";
import { ReactComponent as CheckIcon } from "../../../Assets/icons/check.svg";
import { ReactComponent as CalenderIcon } from "../../../Assets/icons/Calander.svg";
import NestedHeaderWhite from "../../../Components/Dashboard/header/nestedHeader/NestedHeaderWhite";
import AddDescriptionModal from "../../../Components/Dashboard/modals/AddDescriptionModal";
import { useNavigate } from "react-router-dom";
import AddressInput from "../functions/AddressInput";
import FormNavigationButtons from "../../../Components/Dashboard/form/FormNavigationButtons";

export default function AddProblem() {
  const suppressSaveRef = useRef(false);
  // const [isFocused, setIsFocused] = useState(false);
  const [fileName, setFileName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState("");
  const [filePreview, setFilePreview] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    problemName: "",
    problemDate: "",
    problemStatus: "",
    problemVisibility: "",
    problemLocation: "",
    problemVideo: "",
    privacy: "",
  });

  // ✅ Load saved data on mount
  useEffect(() => {
    const savedData = localStorage.getItem("addProblemFormData");
    const savedDescription = localStorage.getItem("addProblemDescription");
    const savedFile = localStorage.getItem("addProblemFileName");

    if (savedData) setFormData(JSON.parse(savedData));
    if (savedDescription) setDescription(savedDescription);
    if (savedFile) setFileName(savedFile);
  }, []);

  // ✅ Save to localStorage whenever formData, description, or file changes
  useEffect(() => {
    if (suppressSaveRef.current) return;
    localStorage.setItem("addProblemFormData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    if (suppressSaveRef.current) return;
    localStorage.setItem("addProblemDescription", description);
  }, [description]);

  useEffect(() => {
    if (suppressSaveRef.current) return;
    if (fileName) localStorage.setItem("addProblemFileName", fileName);
  }, [fileName]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);

      // ✅ Create image preview
      if (file.type.startsWith("image/")) {
        const previewURL = URL.createObjectURL(file);
        setFilePreview(previewURL);

        // 🧠 Store preview (optional, only base64)
        const reader = new FileReader();
        reader.onload = () => {
          localStorage.setItem("addProblemFilePreview", reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
        localStorage.removeItem("addProblemFilePreview");
      }
    }
  };

  useEffect(() => {
    const savedPreview = localStorage.getItem("addProblemFilePreview");
    if (savedPreview) setFilePreview(savedPreview);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveDescription = (content) => {
    setDescription(content);
  };

  const handleCancel = () => {

    suppressSaveRef.current = true;

    setFormData({
      problemName: "",
      problemDate: "",
      problemStatus: "",
      problemVisibility: "",
      problemLocation: "",
      problemVideo: "",
      privacy: "",
    });
    setDescription("");
    setFileName("");
    setFilePreview(null);

    localStorage.removeItem("addProblemFormData");
  localStorage.removeItem("addProblemDescription");
  localStorage.removeItem("addProblemFileName");
  localStorage.removeItem("addProblemFilePreview");

    setTimeout(() => {
      suppressSaveRef.current = false;
    }, 0);


    const addFrom = localStorage.getItem("addFrom");
    if (addFrom === "function") {
      localStorage.removeItem("addFrom"); 
      navigate("/dashboard/functions/addFunction");
    } else {
      navigate("/dashboard/problems");
    }
  };


  const handleSaveProblem = () => {
  const newProblem = {
    ...formData,
    description,
    fileName,
    dateSaved: new Date().toISOString(),
  };

  const addFrom = localStorage.getItem("addFrom");

  if (addFrom === "function") {
    const existingFunctionData =
      JSON.parse(localStorage.getItem("addFunctionFormData")) || {};

    const updatedFunctionData = {
      ...existingFunctionData,
      linkedProblem: newProblem,
    };

    localStorage.setItem(
      "addFunctionFormData",
      JSON.stringify(updatedFunctionData)
    );

    localStorage.removeItem("addFrom");
    //  Clear Add Problem local data after save
    localStorage.removeItem("addProblemFormData");
    localStorage.removeItem("addProblemDescription");
    localStorage.removeItem("addProblemFileName");
    localStorage.removeItem("addProblemFilePreview");

    navigate("/dashboard/functions/addFunction");
  } else {
    const existing = JSON.parse(localStorage.getItem("problemsList")) || [];
    const updated = [...existing, newProblem];
    localStorage.setItem("problemsList", JSON.stringify(updated));

    // ✅ Clear Add Problem local data after save
    localStorage.removeItem("addProblemFormData");
    localStorage.removeItem("addProblemDescription");
    localStorage.removeItem("addProblemFileName");
    localStorage.removeItem("addProblemFilePreview");

    navigate("/dashboard/problems");
  }
};


  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("addFunctionFormData"));
    if (saved?.linkedProblem) {
      console.log("Linked Problem Data:", saved.linkedProblem);
    }
  }, []);

  return (
    <div className="relative flex flex-col w-full bg-gray-50">
      <div className="flex flex-col w-full mx-auto">
        {/* Fixed Header */}
        <div className="fixed top-14 left-0 right-0 z-20 bg-white p-4 shadow-sm">
          <NestedHeaderWhite
            title="Add Problem"
            breadcrumbs={[
              // { label: "Dashboard", path: "/dashboard" },
              { label: "Problems", path: "/dashboard/problems" },
              { label: "Create Problem", path: "" },
            ]}
          />
        </div>

        {/* Form */}
        <div className="flex flex-col bg-gray-50 max-w-4xl w-full mx-auto mt-32 rounded-lg shadow-inner border border-gray-200">
          <div className="grid grid-cols-1 gap-4  p-6">
            {/* Problem Name */}
            <div className="flex flex-col">
              <label className="text-[14px] newFontColor mb-1">
                Problem Name
              </label>
              <input
                type="text"
                name="problemName"
                value={formData.problemName}
                onChange={handleChange}
                placeholder="Enter problem name"
                className="border border-gray-300 text-black rounded-lg px-3 py-2 text-[14px] focus:ring-1 focus:ring-blue-500 outline-none placeholder-gray-400"
              />
            </div>


            <div className="">
              <label className="text-[14px] font-medium newFontColor">
                Problem Location
              </label>
              <AddressInput formData={formData} setFormData={setFormData} />
            </div>

            <div className="flex flex-col relative">
              <label className="text-[14px] newFontColor mb-1">
                Problem Date
              </label>

              <input
                type="text"
                name="problemDate"
                value={formData.problemDate}
                onChange={handleChange}
                placeholder="Select Date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                className="w-full border border-gray-300 text-black rounded-lg px-3 py-2 text-[14px] pr-10
      focus:ring-1 focus:ring-blue-500 outline-none appearance-none
      [&::-webkit-calendar-picker-indicator]:opacity-0
      [&::-webkit-inner-spin-button]:appearance-none
      [&::-webkit-clear-button]:appearance-none"
              />

              <CalenderIcon className="absolute right-3 top-9 w-4 h-4 text-blue-500 pointer-events-none" />
            </div>

            <div className="flex flex-col relative">
              <label className="text-[14px] newFontColor mb-1">
                Problem Status
              </label>

              <div className="flex flex-col mt-1">
                {["Solved", "Not Solved"].map((option, idx) => (
                  <div
                    key={option}
                    onClick={() =>
                      setFormData({ ...formData, problemStatus: option })
                    }
                    className={`relative w-full border newFontColor px-3 bg-white py-2 text-[14px] cursor-pointer transition-all
                     ${
                       formData.problemStatus === option
                         ? "border-blue-500 bg-white"
                         : "border-gray-300 bg-white hover:bg-blue-50"
                     }
                     ${
                       idx === 0
                         ? "rounded-t-lg rounded-b-none"
                         : "rounded-t-none rounded-b-lg"
                     }`}
                  >
                    <span>{option}</span>
                    {formData.problemStatus === option && (
                      <CheckIcon className="absolute top-2 right-2 text-blue-600 text-lg" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col relative">
              <label className="text-[14px] newFontColor mb-1">
                Problem Visibility
              </label>

              <div className="flex flex-col mt-1">
                {["Public", "Private"].map((option, idx) => (
                  <div
                    key={option}
                    onClick={() =>
                      setFormData({ ...formData, problemVisibility: option })
                    }
                    className={`relative w-full border newFontColor px-3 bg-white py-2 text-[14px] cursor-pointer transition-all
                     ${
                       formData.problemVisibility === option
                         ? "border-blue-500 bg-white"
                         : "border-gray-300 bg-white hover:bg-blue-50"
                     }
                     ${
                       idx === 0
                         ? "rounded-t-lg rounded-b-none"
                         : "rounded-t-none rounded-b-lg"
                     }`}
                  >
                    <span>{option}</span>
                    {formData.problemVisibility === option && (
                      <CheckIcon className="absolute top-2 right-2 text-blue-600 text-lg" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col relative">
              <label className="text-[14px] newFontColor mb-1">
                Upload Problem Image
              </label>

              <label
                htmlFor="fileUpload"
                className="relative flex flex-col items-center justify-center bg-white w-full h-28 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-all overflow-hidden"
              >
                {fileName && filePreview ? (
                  <img
                    src={filePreview}
                    alt="Uploaded preview"
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                ) : (
                  <div className="flex flex-col gap-2 justify-center items-center z-10">
                    <UploadIcon className="text-[18px] newPrimaryColor" />
                    <span className="text-[14px] newPrimaryColor">
                      Upload the file here
                    </span>
                    <span className="text-[14px] text-gray-500">
                      (Only .jpg, .png, & .pdf files will be accepted)
                    </span>
                  </div>
                )}

                <input
                  type="file"
                  id="fileUpload"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png"
                />
              </label>

              <p className="text-[14px] text-gray-400 mt-1 p-0 m-0 w-full text-center">
                {fileName ? fileName : "no files uploaded yet"}
              </p>
            </div>

            <div className="flex flex-col">
              <label className="text-[14px] newFontColor mb-1">
                Video Link
              </label>
              <input
                type="text"
                name="problemVideo"
                value={formData.problemVideo}
                onChange={handleChange}
                placeholder="YouTube link"
                className="border border-gray-300 text-black rounded-lg px-3 py-2 text-[14px] focus:ring-1 focus:ring-blue-500 outline-none placeholder-gray-400"
              />
            </div>
          </div>

          <div className="w-full flex mt-6 px-6">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="flex items-center justify-center gap-2 border-2 newPrimaryBorder newPrimaryColor w-full py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all"
            >
              <span>
                {description
                  ? "Edit Problem Description"
                  : "Add Problem Description"}
              </span>
            </button>
          </div>
    <FormNavigationButtons
        handlePrev={handleCancel}
        handleNext={handleSaveProblem}
        // activeStep={activeStep}
        prevButton="Cancel"
        rightTitle="Save Problem"
      />
         
        </div>
      </div>

      {showModal && (
        <AddDescriptionModal
          onClose={() => setShowModal(false)}
          onSave={handleSaveDescription}
        />
      )}
    </div>
  );
}
