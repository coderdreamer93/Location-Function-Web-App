"use client";
import React, { useState } from "react";
import { ReactComponent as LocationIcon } from "../../../Assets/icons/Pin.svg";
import { ReactComponent as UploadIcon } from "../../../Assets/icons/uploadIcon.svg";

export default function AboutMyFunctionForm() {
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    location: "",
    privacy: "Public",
    functionName: "",
    functionLocation: "",
    businessName: "",
    functionVideo: "",
  });

const [filePreview, setFilePreview] = useState(null);

const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setFileName(file.name);
    if (file.type.startsWith("image/")) {
      setFilePreview(URL.createObjectURL(file));
    } else {
      setFilePreview(null); // No preview for non-images
    }
  }
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full mx-auto">
      {/* ============ About Me Section ============ */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Function Name */}
        <div>
          <label className="block text-[14px]  newFontColor mb-1">
            Function Name
          </label>
          <input
            type="text"
            name="functionName"
            value={formData.functionName}
            onChange={handleChange}
            placeholder="ex: Fix Car"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[14px] focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Function Location */}
        <div>
          <label className="block text-[14px]  newFontColor">
            Function Location
          </label>
          <div className="relative items-center">
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Select location"
              className="w-full mt-1 border text-black rounded-lg px-3 py-2 text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
            />
            <LocationIcon className="absolute top-4 right-4 newPrimaryColor" />
          </div>
        </div>

        {/* Business Name */}
        <div className="md:col-span-2">
          <label className="block text-[14px]  newFontColor mb-1">
            Business Name
          </label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="ex: IBM"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[14px] focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Upload Function Image */}
        <div className="md:col-span-2">
          <label className="block text-[14px] newFontColor mb-2">
            Upload Function Image
          </label>

          <label
            htmlFor="fileUpload"
            className="relative flex flex-col items-center justify-center bg-white w-full h-28 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-all overflow-hidden"
          >
            {/* Image Preview */}
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

          <p className="text-[14px] text-gray-400 mt-1 p-0 m-0 w-full text-center">
            {fileName ? fileName : "no files uploaded yet"}
          </p>
        </div>

        {/* Function Video */}
        <div className="md:col-span-2">
          <label className="block text-[14px]  newFontColor mb-1">
            Function Video
          </label>
          <input
            type="text"
            name="functionVideo"
            value={formData.functionVideo}
            onChange={handleChange}
            placeholder="Enter YouTube Link"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[14px] focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
