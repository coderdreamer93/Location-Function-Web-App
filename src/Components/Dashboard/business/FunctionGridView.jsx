import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhone, FaRegMessage } from "react-icons/fa6";

function FunctionGridView({ data = [], selectedFilter }) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/dashboard/problems/${id}`, {
      state: { business: data.find((d) => d.id === id) },
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => handleCardClick(item.id)}
          className="bg-blue-50 rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:border-blue-400 transition-all cursor-pointer flex flex-col"
        >
          {/* === Bottom Section === */}
          <div className="flex flex-col justify-start p-3 bg-white gap-3 flex-grow">
            <div className="w-full rounded-lg">
              <div className="flex flex-col border rounded-lg">
                {/* Header */}
                <div className="flex justify-start rounded-t-lg items-center gap-2 border border-gray-100 py-1 px-2 bg-blue-50">
                  <img
                    src="/mechanic.jpg"
                    alt=""
                    className="rounded-full w-6 h-6"
                  />
                  <span className="text-black text-sm font-semibold">
                    John Thompson
                  </span>
                </div>

                {/* Rows */}
                {[
                  {
                    label: "Function",
                    value: item.date,
                    color: "text-green-600",
                    showImage: true,
                  },
                  {
                    label: "Problem Solved",
                    value: item.date,
                    color: "text-red-600",
                    showImage: true,
                  },
                  {
                    label: "Location",
                    value: item.location,
                    color: "text-black",
                    showImage: false,
                  },
                  {
                    label: "Formula Usage",
                    value: item.location,
                    color: "text-blue-600",
                    showImage: false,
                  },
                ].map((row, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center gap-2 border border-gray-100 py-1 px-2 ${
                      index === 3 ? "rounded-b-lg" : ""
                    }`}
                    style={{ minHeight: "30px" }}
                  >
                    <div className="w-full grid grid-cols-2">
                      <span className="text-gray-700 text-xs">{row.label}</span>
                      <span
                        className={`${row.color} text-xs font-bold truncate`}
                      >
                        {row.value}
                      </span>
                    </div>
                    {row.showImage && (
                      <img
                        src="/mechanic.jpg"
                        alt=""
                        className="w-6 h-6 rounded-md"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Section */}
              <div className="mt-4">
                <div className="flex gap-2 px-2">
                  <span className="text-black text-sm">Unique Identifier</span>
                  <span className="text-black text-sm font-semibold truncate">
                    12345678-ASDF3ASD213SDF15-ASD3F21ASDF51
                  </span>
                </div>
                <div className="mt-2">
                  <button className="w-full border-2 border-blue-600 text-blue-600 bg-gray-50 p-1 rounded-lg">
                    Rate Function
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FunctionGridView;
