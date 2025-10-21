import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";

function ProblemListView({ data = [] }) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/dashboard/problems/${id}`, {
      state: { business: data.find((d) => d.id === id) },
    });
  };

  return (
    <div className="space-y-4 mt-6">
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => handleCardClick(item.id)}
          className="bg-blue-50 rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:border-blue-400 transition-all cursor-pointer"
        >
          {/* Top Section */}
          <div className="flex justify-between items-center p-3 gap-3 flex-wrap md:flex-nowrap">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-14 h-14 border  rounded-full flex justify-center items-center text-white text-xl font-semibold">
                  {/* {item.name.charAt(0)} */}
                  <img src="/user.png" alt="userImage" />
                </div>
                {item.online && (
                  <span className="absolute bottom-0 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                )}
              </div>

              <div className="flex flex-col justify-center items-start">
                <span className="text-xs font-bold text-gray-900">
                  {item.name}
                </span>
                <span className="text-xs text-gray-700">{item.location}</span>
               
              </div>
            </div>

            <div className="flex justify-center items-center cursor-pointer gap-2 shrink-0">
              <span
                className={`flex justify-center bg-white items-center w-7 h-7 ${
                  item.isProblem
                    ? "bg-white text-blue-600 border border-blue-600"
                    : "bg-gray-200 text-gray-600"
                }  rounded-full`}
              >
                <FaRegMessage size={14} />
              </span>
              <span
                className={`flex justify-center items-center w-7 h-7 ${
                  item.isProblem
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }  rounded-full`}
              >
                <FaPhone size={14} />
              </span>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col justify-start p-3 bg-white gap-3 flex-nowrap">
            <div className="sm:w-1/4 w-full ">
              <div className="flex flex-col gap-2">
              <div className="grid grid-cols-2">
                <span className="text-gray-700 text-xs">Date</span>
                <span className="text-green-600 text-xs font-bold">
                  {item.date}
                </span>
              </div>
              <div className="grid grid-cols-2">
                <span className="text-gray-700 text-xs">Problem</span>
                <span className="text-red-600 text-xs font-bold">
                  {item.problem}
                </span>
              </div>
              <div className="grid grid-cols-2">
                <span className="text-gray-700 text-xs">Problem Status</span>
                <span className="text-blue-600 text-xs font-bold">
                  {item.problemStatus}
                </span>
              </div>
            </div>
            </div>
            <div className="w-full">
              <img
                src="/mechanic.jpg"
                alt={item.name}
                className="rounded-lg border-2 border-gray-100 w-full h-24 object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProblemListView;
