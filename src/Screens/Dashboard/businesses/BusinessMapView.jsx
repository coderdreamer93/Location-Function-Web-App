

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useCardView from "../../../hook/useCardView";
import NestedHeader from "../../../Components/Dashboard/header/nestedHeader/NestedHeader";
import { ReactComponent as Oncamera } from "../../../Assets/icons/oncamera.svg";
import { ReactComponent as LosAnglesMap } from "../../../Assets/icons/losanglesmap.svg";
import { ReactComponent as Location } from "../../../Assets/icons/Pin.svg";
import { ReactComponent as ArrowIcon } from "../../../Assets/icons/arrow.svg";
import { ReactComponent as DateBlueIcon } from "../../../Assets/icons/dateBlueIcon.svg";
import { ReactComponent as CircleIcon } from "../../../Assets/icons/circle.svg";
import { ReactComponent as BlueCircle } from "../../../Assets/icons/blueCircle.svg";

export default function BusinessMapView() {
  const [view, setView] = useCardView();
  const location = useLocation();
  const navigate = useNavigate();
  const selectedBusiness = location.state?.business;

  if (!selectedBusiness) return null;

  const {
    mechanicName,
    location: place,
    designation,
    phone,
    function: businessFunction,
    problem,
    distance,
    online,
  } = selectedBusiness;

  return (
    <div className="relative w-screen h-screen bg-gray-50 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="w-full  p-4 shadow-sm z-20">
        <NestedHeader title="" view={view} setView={setView} />
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row w-full h-full relative">
        {/* Map Section */}
        <div
          className="
            relative w-full 
            md:flex-1 
            h-1/2 md:h-full 
            bg-gray-100 
            overflow-hidden
          "
        >
          <img
            src="/businessMap.png"
            alt="BusinessMap"
            className="w-full h-full object-cover"
          />

          {/* Mechanic Icon - TOP */}
          <div
            className="
              absolute 
              flex flex-col items-center 
              left-[20%] 
              top-[20%] 
              -translate-x-1/2
               sm:top-[20%] sm:left-[20%] rounded-full
              z-20
            "
          >
            <div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] rounded-full flex justify-center items-center">
              {/* <MechanicIcon className="w-full h-full" /> */}
              <img
                src={"/circleMechanic.png"}
                alt={"/circleMechanic.png"}
                className=""
              />
            </div>
          </div>

          {/* Arrow (center between Mechanic and User) */}
          <div
            className="
              absolute 
              left-[30%] -translate-x-2/3
              top-[40%] sm:top-[40%]
              z-10 
              w-[80px] h-[80px] sm:w-[170px] sm:h-[170px] 
              rotate-[6deg] sm:rotate-[10deg] 
              flex justify-center items-center
            "
          >
            <ArrowIcon className="w-full h-full opacity-90" />
          </div>

          {/* Distance Label (middle of arrow) */}
          <div
            className="
              absolute 
              left-1/4 -translate-x-1/3 
              top-[45%] md:top-[50%] 
              bg-white text-blue-500 text-[14px] sm:text-lg 
              font-semibold px-2 py-1 rounded shadow flex items-center
              z-20
            "
          >
            {/* <DistanceIcon className="w-3 h-3 md:w-4 md:h-4" /> */}
            <span className="ml-1">{distance || "200"} mile</span>
          </div>

          {/* User Location - BOTTOM */}
          <div
            className="
    absolute 
    flex flex-col items-center
    left-1/3 -translate-x-5/8
    bottom-[10%] md:bottom-[10%]
    z-20
  "
          >
            <div className="relative w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] flex justify-center items-center">
              {/* Blue Circle (background layer) */}
              <BlueCircle className="w-full h-full" />

              {/* CircleIcon (smaller & centered on top) */}
              <CircleIcon className="absolute w-[98%] h-[98%] top-[2px]" />
              <span className="bg-white rounded-full absolute  w-[20%] h-[20%]" />
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div
          className="
            w-full sm:w-[360px] 
            md:static
            absolute md:top-auto md:right-auto 
            bottom-0 
            bg-white z-40 
            h-1/2 sm:h-[calc(100%-1%)] overflow-y-scroll scrollbar-hidden
            rounded-t-2xl md:rounded-2xl 
            shadow-xl border-t md:border-l border-gray-200 
            p-6 flex flex-col justify-between
            transition-all duration-300
          "
        >
          {/* Mechanic Info */}
          <div>
              <div className="flex mb-3 justify-center items-center mx-auto"><span className="bg-gray-300 w-8 h-2 rounded-full"></span></div>
            <div className="flex justify-between items-center flex-col border rounded-2xl">
              <div className="flex justify-between items-start gap-3 p-3 w-full">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full overflow-hidden">
                      <img src="/image/UserImage.png" alt="Mechanic" />
                    </div>
                    {online && (
                      <span className="absolute bottom-0 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-gray-900">
                      {mechanicName}
                    </span>
                    <span className="text-[12px] newFontColor flex items-center gap-1">
                      {designation}
                    </span>
                    <span
                      className="text-[12px] newFontColor flex items-center gap-1"
                      title={place}
                    >
                      {place?.length > 15 ? `${place.slice(0, 15)}...` : place}
                    </span>
                    <span className="text-[12px] newPrimaryColor mt-1 flex items-center gap-1">
                      {phone}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center cursor-pointer gap-1 shrink-0">
                  <div
                    className={`flex justify-center items-center w-7 h-7 rounded-full shrink-0 ${
                      problem
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 newFontColor"
                    }`}
                  >
                    <span className="flex justify-center items-center w-[14px] h-[14px] pl-0.5">
                      <Oncamera />
                    </span>
                  </div>

                  <span className="text-[11px] text-black whitespace-nowrap">
                    Show Problem
                  </span>
                </div>
              </div>

              <div className="w-full flex justify-center items-center newPrimaryBorder bg-blue-50 rounded-b-2xl">
                <span
                  onClick={() =>
                    navigate("/dashboard/businesses/appointment", {
                      state: { business: selectedBusiness },
                    })
                  }
                  className="w-full flex justify-center items-center gap-2 font-medium py-2 hover:bg-blue-100 transition-all border newPrimaryBorder rounded-b-2xl"
                >
                  <DateBlueIcon size={14} className="newPrimaryColor" />
                  <span className="newFontColor text-[10px]">
                    Make Appointment
                </span>
                  </span>
              </div>
            </div>

            {/* Divider Section */}
            <div className="border rounded-2xl flex justify-between items-center border-gray-200 my-4">
              <div className="flex relative flex-col w-1/2 justify-between items-center p-2">
                <LosAnglesMap size={48} className="newFontColor" />
                <Location className="absolute top-[28%] left-[37%] w-[8px]" />

                <span
                  className="text-[14px] newFontColor flex items-center gap-1 font-bold"
                  title={place}
                >
                  {place?.length > 15 ? `${place.slice(0, 15)}...` : place}
                </span>
                <span className="text-[8px] newPrimaryColor">
                  Show Formula Flow
                </span>
              </div>

              <div className="flex flex-col justify-between gap-2 w-1/2">
                <div className="flex gap-2">
                  <span className="newFontColor text-[12px]">Function</span>
                  <span className="text-green-600 text-[12px] font-bold">
                    {businessFunction || "Fix Car"}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="newFontColor text-[12px]">Problem</span>
                  <span className="text-red-600 text-[12px] font-bold">
                    {problem || "Bad Radiator"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Distance */}
          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => navigate("/dashboard/businesses")}
              className="text-[12px] newPrimaryColor flex justify-center items-center gap-1 hover:underline"

            >
              The Function is located {distance} Miles from me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
