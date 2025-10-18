import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { PiVideoCameraFill } from "react-icons/pi";
import { HiMiniArrowLeft } from "react-icons/hi2";

export default function BusinessMapView() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const selectedBusiness = location.state?.business;

  if (!selectedBusiness) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <p className="text-gray-500">No business data found.</p>
        <button
          onClick={() => navigate("/dashboard/businesses")}
          className="mt-3 text-blue-600 hover:underline flex items-center gap-1"
        >
          <HiMiniArrowLeft className="text-lg" />
          Go Back
        </button>
      </div>
    );
  }

  const {
    name,
    location: place,
    designation,
    phone,
    function: businessFunction,
    problem,
    distance,
    online,
  } = selectedBusiness;

  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-gray-100">
      {/* ============ MAP SIDE ============ */}
      <div className="flex-1 relative bg-gray-200">
        <iframe
          title="business-map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          // t=m → map, t=p → terrain
          src={`https://www.google.com/maps?hl=en&q=${encodeURIComponent(
            place || "USA"
          )}&t=m&z=14&output=embed`}
        ></iframe>
      </div>

      {/* ============ INFO CARD ============ */}
      <div className="w-full md:w-[420px] bg-white shadow-xl rounded-none md:rounded-l-2xl p-6 flex flex-col justify-between border-l border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-start gap-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-14 h-14 bg-green-700 text-white text-xl font-semibold flex items-center justify-center rounded-full">
                {name?.charAt(0)}
              </div>
              {online && (
                <span className="absolute bottom-0 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              )}
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-900">{name}</span>
              <span className="text-xs text-gray-600 flex items-center gap-1">
                {designation}
              </span>
              <span className="text-xs text-gray-600 flex items-center gap-1">
                {place}
              </span>
              <a
                href={`tel:${phone}`}
                className="text-sm text-blue-600 hover:underline mt-1 flex items-center gap-1"
              >
                {/* <FaPhone size={13} /> */}
                {phone}
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center cursor-pointer gap-1 shrink-0">
            <span
              className={`flex justify-center items-center w-9 h-9 rounded-full ${
                problem ? "bg-red-500 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              <PiVideoCameraFill size={16} />
            </span>
            <span className="text-[11px] text-black whitespace-nowrap">
              Show Problem
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Function and Problem Info */}
        <div className="flex flex-col gap-3">
          <p className="text-sm">
            <span className="font-semibold text-gray-800">Function:</span>{" "}
            <span className="text-green-700 font-medium">
              {businessFunction}
            </span>
          </p>

          <p className="text-sm">
            <span className="font-semibold text-gray-800">Problem:</span>{" "}
            <span className="text-red-600 font-medium">{problem}</span>
          </p>

          <p className="text-sm text-blue-600 mt-2 font-semibold text-center">
            This function is located {distance} Miles from you
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={() => alert("Appointment booked!")}
            className="border border-blue-500 text-blue-600 font-medium py-2 rounded-md hover:bg-blue-50 transition-all"
          >
            📅 Make Appointment
          </button>
          <button
            onClick={() => navigate("/dashboard/businesses")}
            className="text-gray-600 hover:text-blue-600 text-sm flex justify-center items-center gap-1"
          >
            <HiMiniArrowLeft /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
