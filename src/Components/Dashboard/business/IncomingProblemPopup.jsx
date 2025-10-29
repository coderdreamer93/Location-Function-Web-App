import React from "react";
import { FaCircle } from "react-icons/fa";

const IncomingProblemPopup = ({ name = "Michael David", problem = "Bad Radiator", onAnswer, onDecline }) => {
  return (
    <div className="fixed bottom-5 right-5 bg-white shadow-xl border border-gray-200 rounded-2xl w-84 p-3 flex flex-col transition-all animate-slide-up z-50">
      {/* Top Section */}
      <div className="flex items-start gap-2">
        {/* Avatar */}
        <img
          src="/mechanic.jpg"
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center text-nowrap gap-1 text-xs font-semibold text-gray-900">
            {name}
            <span className="text-gray-600 text-[10px]  font-normal">• Show Problem • now</span>
          </div>
          <div className="text-xs text-gray-800 mt-1">
            Problem 
            <span className="text-red-600 text-xs font-semibold"> {problem}</span>
          </div>
          <p className="text-xs text-gray-600 mt-1">Incoming Problem Video</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-2">
        <button
          onClick={onAnswer}
          className="flex-1 text-sm bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-all duration-200"
        >
          Answer
        </button>
        <button
          onClick={onDecline}
          className="flex-1 text-sm bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition-all duration-200"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default IncomingProblemPopup;
