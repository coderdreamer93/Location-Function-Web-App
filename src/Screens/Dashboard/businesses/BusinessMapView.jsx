import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaVideo } from "react-icons/fa";
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
          onClick={() => navigate("/")}
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
    phone,
    function: businessFunction,
    problem,
    distance,
    online,
  } = selectedBusiness;

  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-gray-100">
      {/* ============ MAP SIDE ============ */}
      <div className="flex-1 relative bg-gray-200 flex items-center justify-center">
        <div className="text-gray-600 text-sm font-medium">
          Map showing distance: <b>{distance} miles</b>
        </div>
      </div>

      {/* ============ INFO CARD ============ */}
      <div className="w-full md:w-96 bg-white shadow-lg rounded-lg p-5 flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-gray-900 text-lg">{name}</h2>
            <p className="text-sm text-gray-600">{place}</p>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`w-3 h-3 rounded-full ${
                online ? "bg-green-500" : "bg-gray-400"
              }`}
            />
            <button className="bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full transition-all">
              <FaVideo size={16} />
            </button>
          </div>
        </div>

        {/* Phone */}
        <div className="mt-3">
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 text-blue-600 text-sm font-medium"
          >
            <FaPhone size={14} />
            {phone}
          </a>
        </div>

        {/* Appointment Button */}
        <button
          className="mt-4 border border-blue-500 text-blue-600 font-medium py-2 rounded-md hover:bg-blue-50 transition-all"
          onClick={() => alert("Appointment booked!")}
        >
          Make Appointment
        </button>

        {/* Function & Problem Info */}
        <div className="mt-5 text-sm space-y-1">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt size={14} className="text-blue-600" />
            <p>
              Function{" "}
              <span className="text-green-600 font-medium">
                {businessFunction}
              </span>
            </p>
          </div>
          <p>
            Problem{" "}
            <span className="text-red-600 font-medium">{problem}</span>
          </p>
        </div>

        {/* Distance */}
        <p className="text-xs text-gray-500 mt-5 text-center">
          This function is located {distance} Miles from me
        </p>
      </div>
    </div>
  );
}
