import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { PiVideoCameraFill } from "react-icons/pi";
import { HiMiniArrowLeft } from "react-icons/hi2";
import { BsCalendarDate } from "react-icons/bs";
import { PiMapPinAreaThin } from "react-icons/pi";
import useCardView from "../../../hook/useCardView";
import NestedHeader from "../../../Components/Dashboard/header/nestedHeader/NestedHeader";

export default function BusinessMapView() {
  const [view, setView] = useCardView();
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const selectedBusiness = location.state?.business;

  // if (!selectedBusiness) {
  //   return (
  //     <div className="flex flex-col items-center justify-center h-screen text-center">
  //       <p className="text-gray-500">No business data found.</p>
  //       <button
  //         onClick={() => navigate("/dashboard/businesses")}
  //         className="mt-3 newPrimaryColor hover:underline flex items-center gap-1"
  //       >
  //         <HiMiniArrowLeft className="text-lg" />
  //         Go Back
  //       </button>
  //     </div>
  //   );
  // }

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
    <div className="relative w-screen h-screen bg-gray-50 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="w-full bg-white p-4 shadow-sm z-20">
        <NestedHeader title="" view={view} setView={setView} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Map Section */}
        <div className="flex-1 relative bg-gray-50 hidden md:block">
          {/* Map removed for now, you can enable when needed */}
        </div>

        {/* Info Card */}
        <div
          className="w-full sm:w-[360px] absolute md:static top-[90px] right-0 
          bg-white z-40 h-[calc(100%-10%)] rounded-2xl shadow-xl border-l border-gray-200 p-6 flex flex-col justify-between"
        >
          {/* Header */}
          <div>
            <div className="flex justify-between items-center flex-col border rounded-2xl ">
              <div className="flex justify-between items-start gap-3 p-3 w-full">
                <div className="flex items-center gap-3 ">
                  <div className="relative">
                    <div className="w-14 h-14 bg-green-700 text-white text-xl font-semibold flex items-center justify-center rounded-full">
                      {name?.charAt(0)}
                    </div>
                    {online && (
                      <span className="absolute bottom-0 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-900">
                      {name}
                    </span>
                    <span className="text-xs text-gray-600 flex items-center gap-1">
                      {designation}
                    </span>
                    <span className="text-xs text-gray-600 flex items-center gap-1">
                      {place}
                    </span>
                    <span className="text-xs newPrimaryColor mt-1 flex items-center gap-1">
                      {phone}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center cursor-pointer gap-1 shrink-0">
                  <span
                    className={`flex justify-center items-center w-7 h-7 rounded-full ${
                      problem
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    <PiVideoCameraFill size={14} />
                  </span>
                  <span className="text-[11px] text-black whitespace-nowrap">
                    Show Problem
                  </span>
                </div>
              </div>
              <div className="w-full flex justify-center items-center  rounded-2xl rounded-b-2xl bg-blue-50">
                <button
                  onClick={() =>
                    navigate("/dashboard/businesses/appointment", {
                      state: { business: selectedBusiness },
                    })
                  }
                  className=" w-full flex justify-center items-center gap-2 shadow-none border-blue-600 font-medium py-2 hover:bg-blue-50 transition-all border-b-2 border-b-blue-600 rounded-2xl border-t rounded-t-none bg-blue-50"
                >
                  <BsCalendarDate size={14} className="newPrimaryColor" />
                  <span className="text-black text-[10px]">
                    Make Appointment
                  </span>
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="border rounded-2xl flex justify-between items-center border-gray-200 my-4">
              <div className="flex flex-col w-1/2 justify-between items-center p-2">
                <PiMapPinAreaThin size={48} className="text-gray-400" />
                <span className="text-xs text-black font-bold">{place}</span>
                <span className="text-[8px] newPrimaryColor">
                  Show Formula Flow
                </span>
              </div>
              <div className="flex flex-col justify-between gap-2 w-1/2">
                <div className="flex gap-2">
                  <span className="text-gray-700 text-xs">Function</span>
                  <span className="text-green-600 text-xs font-bold">
                    Fix Car
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-700 text-xs">Problem</span>
                  <span className="text-red-600 text-xs font-bold">
                    Bed Radiator
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons */}
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => navigate("/dashboard/businesses")}
              className="text-[10px] newPrimaryColor flex justify-center items-center gap-1"
            >
              The Function is located {distance} Miles from me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
