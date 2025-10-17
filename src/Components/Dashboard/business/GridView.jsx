import React from "react";
import { PiVideoCameraFill } from "react-icons/pi";
import { RxStar, RxStarFilled } from "react-icons/rx";
import { HiOutlineHome } from "react-icons/hi2";

function GridView({ data = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-blue-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col"
        >
          {/* Top Section */}
          <div className="flex justify-between items-start p-3">
            {/* Avatar and Info */}
            <div className="flex items-start gap-3">
              <div className="relative">
                <div className="w-14 h-14 border bg-green-800 rounded-full flex justify-center items-center text-white text-xl font-semibold">
                  {item.name.charAt(0)}
                </div>
                {item.online && (
                  <span className="absolute bottom-0 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                )}
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-900">{item.name}</span>
                <span className="text-xs text-gray-700">{item.location}</span>
                <span className="text-xs text-blue-600">{item.phone}</span>

                <div className="flex items-center">
                  {[...Array(5)].map((_, i) =>
                    i < item.rating ? (
                      <RxStarFilled key={i} className="text-yellow-500 text-sm" />
                    ) : (
                      <RxStar key={i} className="text-gray-400 text-sm" />
                    )
                  )}
                  <span className="text-[10px] text-gray-600 pl-1">
                    ({item.reviews})
                  </span>
                </div>
              </div>
            </div>

            {/* Video Button */}
            <div className="flex flex-col items-center cursor-pointer gap-1">
              <span
                className={`flex justify-center items-center w-7 h-7 ${
                  item.isProblem
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-600"
                } rounded-full`}
              >
                <PiVideoCameraFill size={14} />
              </span>
              <span className="text-[10px] text-black whitespace-nowrap">
                Show Problem
              </span>
            </div>
          </div>

          {/* Branch Section */}
          <div className="flex flex-col items-center justify-center text-center border-t p-3 bg-white">
            <HiOutlineHome className="text-4xl text-gray-800" />
            <span className="text-xs font-bold text-black">{item.branch}</span>
            <span className="text-[10px] text-blue-600 cursor-pointer hover:underline">
              Show Formula Flow
            </span>
          </div>

          {/* Function & Problem */}
          <div className="flex justify-between items-start border-t p-3 bg-white text-xs">
            <div className="flex flex-col">
              <span className="text-gray-700">Function</span>
              <span className="text-green-600 font-bold">{item.function}</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-gray-700">Problem</span>
              <span className="text-red-600 font-bold">{item.problem}</span>
            </div>
          </div>

          {/* Distance Info */}
          <div className="bg-blue-50 border-t p-2 text-[11px] text-blue-600 font-semibold text-center">
            This function is located {item.distance} Miles from me
          </div>
        </div>
      ))}
    </div>
  );
}

export default GridView;
