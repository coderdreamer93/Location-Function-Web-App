import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../../Assets/icons/homeIcon.svg";
import { ReactComponent as LosAnglesMap } from "../../../Assets/icons/losanglesmap.svg";
import { ReactComponent as YellowStar } from "../../../Assets/icons/yellowStar.svg";
import { ReactComponent as GrayStar } from "../../../Assets/icons/grayStar.svg";
import { ReactComponent as OffCamera } from "../../../Assets/icons/offCamera.svg";
import { ReactComponent as HoldCamera } from "../../../Assets/icons/holdCamera.svg";
import { ReactComponent as Oncamera } from "../../../Assets/icons/oncamera.svg";
import { ReactComponent as Location } from "../../../Assets/icons/Pin.svg";

function BusinessListView({ data = [] }) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    const selected = data.find((d) => d.id === id);
    if (!selected) return; // ✅ safety check
    navigate(`/dashboard/businesses/${id}`, { state: { business: selected } });
  };

  return (
    <div className="space-y-4 mt-6">
      {data.length === 0 ? (
        <div className="text-center text-gray-500 text-sm py-8">
          No businesses found.
        </div>
      ) : (
        data.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item.id)}
            className="bg-blue-50 rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:border-blue-400 transition-all cursor-pointer"
          >
            {/* Top Section */}
            <div className="flex justify-between items-center p-3 gap-3 flex-wrap md:flex-nowrap">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-14 h-14 border bg-green-800 rounded-full  flex justify-center items-center text-white text-xl font-semibold">
                    {/* {item.name?.charAt(0)?.toUpperCase() || "?"} */}
                    {item.location.includes("Los Angeles") ? (
                      <img
                        src="/PImage.png"
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
                  {item.online && (
                    <span className="absolute bottom-0 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  )}
                </div>

                <div className="flex flex-col justify-center items-start">
                  <span className="text-xs font-bold text-gray-900">
                    {item.shopName || "Unnamed Business"}
                  </span>
                  <span className="text-xs text-gray-700">
                    {item.location || "Location not available"}
                  </span>
                  <span className="text-xs newPrimaryColor">
                    {item.phone || "No phone number"}
                  </span>

                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) =>
                      i < (item.rating || 0) ? (
                        <span key={i} className="text-yellow-500 text-sm">
                          <YellowStar />
                        </span>
                      ) : (
                        <span key={i} className="text-gray-400 text-[14px]">
                          <GrayStar />
                        </span>
                      )
                    )}
                    <span className="text-[10px] newFontColor pl-1">
                      ({item.reviews || 0})
                    </span>
                  </div>
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
                  className={`flex justify-center items-center w-7 h-7 ${
                    item.isProblem
                      ? "bg-red-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  } rounded-full`}
                >
                  {item.isProblem ? <Oncamera /> : <HoldCamera />}
                </span>
                <span className="text-[10px] text-black whitespace-nowrap">
                  Show Problem
                </span>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex justify-between items-center p-3 bg-white border-t gap-3 flex-nowrap">
              <div className="flex items-center gap-2 w-1/2">
                <div className="flex relative flex-col justify-center items-center text-center">
                  {item.location.includes("Los Angeles") ? (
                    <>
                      <LosAnglesMap />
                      <Location className="absolute top-[28%] left-[37%] w-[8px] z-10" />
                    </>
                  ) : (
                    <HomeIcon />
                  )}
                  {/* <HiOutlineHome className="text-5xl text-gray-800" /> */}
                  <span className="text-xs font-bold text-black">
                    {item.branch || "No branch"}
                  </span>
                  <span className="text-[10px] newPrimaryColor cursor-pointer hover:underline">
                    Show Formula Flow
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-1/2">
                <div className="flex flex-col">
                  <span className="text-gray-700 text-xs">Function</span>
                  <span className="text-green-600 text-xs font-bold">
                    {item.function || "N/A"}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-700 text-xs">Problem</span>
                  <span className="text-red-600 text-xs font-bold">
                    {item.problem || "N/A"}
                  </span>
                </div>
              </div>
            </div>

            {/* Distance Footer */}
            <div className="bg-blue-50 border-t p-2 text-[11px] newPrimaryColor font-semibold text-center">
              This function is located {item.distance || "?"} Miles from me
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default BusinessListView;
