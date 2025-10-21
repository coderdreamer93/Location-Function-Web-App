import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhone, FaRegMessage } from "react-icons/fa6";

export default function ProblemGridView({ data = [] }) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/dashboard/problems/${id}`, {
      state: { business: data.find((d) => d.id === id) },
    });
  };

  return (
    <div className="grid gap-3 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => handleCardClick(item.id)}
          className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all cursor-pointer overflow-hidden"
        >
          {/* Image Section */}
          <div className="relative">
            <img
              src="/mechanic.jpg"
              alt={item.name}
              className="w-full h-32 object-cover"
            />
            {item.online && (
              <span className="absolute top-3 right-3 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            )}
          </div>

          {/* Content Section */}
          <div className="p-3 flex flex-col justify-between gap-1">
            <div>
              <span className="text-sm font-semibold text-gray-900 truncate">
                {item.name}
              </span>
              <p className="text-xs text-gray-600">{item.location}</p>
            </div>

            <div className="text-xs grid grid-cols-2 gap-y-1 mt-2">
              <span className="text-gray-700">Date</span>
              <span className="text-green-600 font-bold">{item.date}</span>

              <span className="text-gray-700">Problem</span>
              <span className="text-red-600 font-bold">{item.problem}</span>

              <span className="text-gray-700">Status</span>
              <span
                className={`font-bold ${
                  item.problemStatus === "Pending"
                    ? "text-yellow-600"
                    : item.problemStatus === "Resolved"
                    ? "text-green-600"
                    : "text-blue-600"
                }`}
              >
                {item.problemStatus}
              </span>
            </div>

            <div className="flex justify-end items-center gap-2 mt-3">
              <span
                className={`flex justify-center items-center w-7 h-7 rounded-full ${
                  item.isProblem
                    ? "bg-white text-blue-600 border border-blue-600"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <FaRegMessage size={14} />
              </span>
              <span
                className={`flex justify-center items-center w-7 h-7 rounded-full ${
                  item.isProblem
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <FaPhone size={14} />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
