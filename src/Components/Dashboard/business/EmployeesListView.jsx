import React from "react";
import { ReactComponent as Threedotwithcircle } from "../../../Assets/icons/threedotwithcircle.svg";
import { ReactComponent as YesWithCircle } from "../../../Assets/icons/yeswithcircle.svg";
import { ReactComponent as CancleWithCircle } from "../../../Assets/icons/canclewithcircle.svg";

function EmployeesListView({ data = [] }) {

  return (
    <div className="space-y-2">
      {data.length === 0 ? (
        <div className="text-center text-gray-500 text-[14px] py-8">
          No businesses found.
        </div>
      ) : (
        data.map((item) => (
          <div
            key={item.id}
            className="bg-white overflow-hidden shadow-xs hover:border-gray-50 transition-all cursor-pointer"
          >
            {/* Top Section */}
            <div className="flex justify-between items-center p-3 gap-3 flex-wrap md:flex-nowrap">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-14 h-14 border bg-green-800 rounded-full  flex justify-center items-center text-white text-xl font-semibold">
                    {/* {item.name?.charAt(0)?.toUpperCase() || "?"} */}
                    {item.location.includes("Los Angeles") ? (
                      <img
                        src="/UserImage.png"
                        alt="PImage"
                        className="rounded-full"
                      />
                    ) : (
                      <img
                        src="/UserImage.png"
                        alt="PImage"
                        className="rounded-full"
                      />
                    )}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start">
                  <span className="text-[14px] font-bold text-gray-900">
                    {item.mechanicName || "Mechanic Name"}
                  </span>
                  <span className="text-[14px] newFontColor">
                    {item.designation || "Designation"}
                  </span>
                  <span className="text-[14px] newFontColor">
                    {item.email || "user@gmail.com"}
                  </span>
                </div>
              </div>

              {/* Show Problem Icon */}
              <div
                className="flex flex-col justify-center items-center cursor-pointer gap-1 shrink-0"
                onClick={(e) => {
                  e.stopPropagation(); // ✅ prevents triggering card click
                  // You can add a custom handler here if needed
                }}
              >
                <span
                  className={`flex justify-center items-center w-7 h-7 mr-4 ${
                    item.isProblem ? "bg-transparent" : "bg-transparent"
                  } rounded-full`}
                >
                  {item.isProblem ? (
                    <Threedotwithcircle />
                  ) : (
                    <div className="flex gap-2">
                      <YesWithCircle /> <CancleWithCircle />
                    </div>
                  )}
                </span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default EmployeesListView;
