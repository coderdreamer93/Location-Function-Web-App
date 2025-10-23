"use client";
import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { IoLocationOutline, IoLocation } from "react-icons/io5";

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Function Name
          </label>
          <input
            type="text"
            name="functionName"
            value={formData.functionName}
            onChange={handleChange}
            placeholder="ex: Fix Car"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Function Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Function Location
          </label>
          <div className="relative">
            <select
              name="functionLocation"
              value={formData.functionLocation}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-8 appearance-none text-sm focus:ring-1 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Location</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
            </select>
            <IoLocationOutline className="absolute right-3 top-2.5 text-gray-500 text-lg" />
          </div>
        </div>

        {/* Business Name */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Name
          </label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="ex: IBM"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Upload Function Image */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Function Image
          </label>
          <label
            htmlFor="fileUpload"
            className="flex flex-col items-center bg-white justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all"
          >
            <FiUploadCloud className="text-2xl text-blue-500 mb-1" />
            <p className="text-sm newPrimaryColor">Upload the file here</p>
            <p className="text-xs text-gray-500 mt-1">
              (Only .jpg, .png, & .pdf files will be accepted)
            </p>
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png,.pdf"
            />
          </label>
          <p className="text-xs text-gray-400 mt-1 text-center">
            {fileName ? fileName : "no files uploaded yet"}
          </p>
        </div>

        {/* Function Video */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Function Video
          </label>
          <input
            type="text"
            name="functionVideo"
            value={formData.functionVideo}
            onChange={handleChange}
            placeholder="Enter YouTube Link"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
