import React, { useState } from "react";
import { ReactComponent as LocationIcon } from "../../../Assets/icons/Pin.svg";
import { ReactComponent as CheckIcon } from "../../../Assets/icons/check.svg";

function AboutMe({}) {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    location: "",
    privacy: "Public",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div className="flex flex-col items-center mb-6">
        <img
          src="/aboutImage.png"
          alt="avatar"
          className="w-16 h-16 rounded-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-[14px] font-medium newFontColor">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="w-full mt-1 border text-black rounded-lg px-3 py-2 text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="text-[14px] font-medium newFontColor">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Enter job title"
            className="w-full mt-1 border text-black rounded-lg px-3 py-2 text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mt-4 ">
        <label className="text-[14px] font-medium newFontColor">Location</label>
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

      <div className="mt-4">
        <label className="text-[14px] font-medium newFontColor">
          Select Privacy
        </label>

        <div className="flex flex-col mt-1">
          {["Public", "Private"].map((option, idx) => (
            <div
              key={option}
              onClick={() => setFormData({ ...formData, privacy: option })}
              className={`relative w-full border newFontColor px-3 bg-white py-2 text-[14px] cursor-pointer transition-all
          ${
            formData.privacy === option
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
              {formData.privacy === option && (
                <CheckIcon className="absolute top-2 right-2 text-blue-600 text-lg" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
