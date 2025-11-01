// // import React, { useState } from "react";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import { BsCalendarDate } from "react-icons/bs";
// // import useCardView from "../../../hook/useCardView";
// // import { ReactComponent as LosAnglesMap } from "../../../Assets/icons/losanglesmap.svg";
// // import { ReactComponent as Location } from "../../../Assets/icons/Pin.svg";

// // import { ReactComponent as RedRecorderIcon } from "../../../Assets/icons/redRecorderIcon.svg";
// // import IOSStyleDatePicker from "./IOSStyleDatePicker";

// // export default function BusinessAppointmentImageView() {
// //   const [openCalender, setOpenCalender] = useState(false);
// //   const [view, setView] = useCardView();
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const selectedBusiness = location.state?.business;

// //   if (!selectedBusiness) return null;

// //   const {
// //     mechanicName,
// //     location: place,
// //     designation,
// //     phone,
// //     function: businessFunction,
// //     problem,
// //     distance,
// //     online,
// //   } = selectedBusiness;

// //   return (
// //     <div className="relative w-screen h-screen bg-gray-50 overflow-hidden flex flex-col">
// //       {/* Header */}

// //       {/* Main Layout */}
// //       <div className="flex flex-col md:flex-row w-full h-full relative">
// //         {/* Map Section */}
// //         <div
// //           className="
// //             relative w-full
// //             md:flex-1
// //             h-1/2 md:h-full
// //             bg-gray-100
// //             overflow-hidden
// //           "
// //         >
// //           <img
// //             src="/fixer.png"
// //             alt="BusinessMap"
// //             className="w-full h-full object-cover"
// //           />
// //         </div>

// //         {/* Info Card */}
// //         <div
// //           className="
// //             w-full sm:w-[360px]
// //             md:static
// //             absolute md:top-auto md:right-auto
// //             bottom-0
// //             bg-white z-40
// //             h-1/2 sm:h-full
// //             rounded-t-2xl md:rounded-2xl
// //             shadow-xl border-t md:border-l border-gray-200
// //             p-6 flex flex-col justify-between
// //             transition-all duration-300
// //           "
// //         >
// //           {/* Mechanic Info */}
// //           <div>
// //             <div className="flex justify-between items-center flex-col border rounded-2xl">
// //               <div className="flex justify-between items-start gap-3 p-3 w-full">
// //                 <div className="flex items-center gap-3">
// //                   <div className="relative">
// //                     <div className="w-14 h-14 flex items-center justify-center rounded-full overflow-hidden">
// //                       <img src="/image/UserImage.png" alt="Mechanic" />
// //                     </div>
// //                     {online && (
// //                       <span className="absolute bottom-0 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
// //                     )}
// //                   </div>

// //                   <div className="flex flex-col">
// //                     <span className="text-[12px] font-bold text-gray-900">
// //                       {mechanicName}
// //                     </span>
// //                     <span className="text-[12px] newFontColor flex items-center gap-1">
// //                       {designation}
// //                     </span>
// //                     <span
// //                       className="text-[12px] newFontColor flex items-center gap-1"
// //                       title={place}
// //                     >
// //                       {place?.length > 15 ? `${place.slice(0, 15)}...` : place}
// //                     </span>
// //                     <span className="text-[12px] newPrimaryColor mt-1 flex items-center gap-1">
// //                       {phone}
// //                     </span>
// //                   </div>
// //                 </div>

// //                 <div className="flex flex-col justify-center items-center cursor-pointer gap-1 shrink-0">
// //                   <div
// //                     className={
// //                       "flex justify-center items-center rounded-full shrink-0"
// //                     }
// //                   >
// //                     <span className="flex justify-center items-center w-[35px] h-[35px] pl-0.5">
// //                       <RedRecorderIcon />
// //                     </span>
// //                   </div>

// //                   <span className="text-[11px] text-black whitespace-nowrap">
// //                     Show Problem
// //                   </span>
// //                 </div>
// //               </div>

// //               <div className="w-full flex justify-center items-center bg-blue-50 rounded-b-2xl">
// //                 <button
// //                   onClick={() =>
// //                     navigate("/dashboard/businesses/appointmentImageView", {
// //                       state: { business: selectedBusiness },
// //                     })
// //                   }
// //                   className="w-full flex justify-center items-center gap-2 font-medium py-2 hover:bg-blue-100 transition-all border-b-2 border-blue-600 rounded-b-2xl"
// //                 >
// //                   <BsCalendarDate size={14} className="newPrimaryColor" />
// //                   <span className="text-black text-[10px]">
// //                     Make Appointment
// //                   </span>
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Divider Section */}
// //             <div className="border rounded-2xl flex justify-between items-center border-gray-200 my-4">
// //               <div className="flex relative flex-col w-1/2 justify-between items-center p-2">
// //                 <LosAnglesMap size={48} className="newFontColor" />
// //                 <Location className="absolute top-[28%] left-[37%] w-[8px]" />

// //                 <span
// //                   className="text-[14px] newFontColor flex items-center gap-1 font-bold"
// //                   title={place}
// //                 >
// //                   {place?.length > 15 ? `${place.slice(0, 15)}...` : place}
// //                 </span>
// //                 <span className="text-[8px] newPrimaryColor">
// //                   Show Formula Flow
// //                 </span>
// //               </div>

// //               <div className="flex flex-col justify-between gap-2 w-1/2">
// //                 <div className="flex gap-2">
// //                   <span className="newFontColor text-[12px]">Function</span>
// //                   <span className="text-green-600 text-[12px] font-bold">
// //                     {businessFunction || "Fix Car"}
// //                   </span>
// //                 </div>
// //                 <div className="flex gap-2">
// //                   <span className="newFontColor text-[12px]">Problem</span>
// //                   <span className="text-red-600 text-[12px] font-bold">
// //                     Bad Radiator
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Bottom Distance */}
// //           <div className="mt-6 flex flex-col gap-3">
// //             <button
// //               onClick={() => setOpenCalender(true)}
// //               className="text-[10px] newPrimaryColor flex justify-center items-center gap-1"
// //             >
// //               The Function is located {distance} Miles from me
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //       {openCalender && (
// //         <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
// //           <div className="relative">
// //             <IOSStyleDatePicker />
// //             <button
// //               onClick={() => setOpenCalender(false)}
// //               className="absolute -top-3 -right-3 bg-white border border-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-100"
// //             >
// //               ✕
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as LosAnglesMap } from "../../../Assets/icons/losanglesmap.svg";
import { ReactComponent as Location } from "../../../Assets/icons/Pin.svg";
import { ReactComponent as RedRecorderIcon } from "../../../Assets/icons/redRecorderIcon.svg";
import IOSStyleDatePicker from "./IOSStyleDatePicker";
import { ReactComponent as DateBlueIcon } from "../../../Assets/icons/dateBlueIcon.svg";

export default function BusinessAppointmentImageView() {
  const [openCalender, setOpenCalender] = useState(false);
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
    distance,
    online,
  } = selectedBusiness;

  return (
    <div className="relative w-screen h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Layout */}
      <div className="flex flex-col md:flex-row w-full h-full relative">
        {/* Map Section */}
        <div className="relative w-full md:flex-1 h-1/2 md:h-full overflow-hidden">
          <img
            src="/fixer.png"
            alt="Business Map"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Card */}
        <div
          className="
            w-full sm:w-[360px]
            absolute md:static bottom-0 md:bottom-auto
            h-1/2 sm:h-full
            bg-white shadow-xl border-t md:border-l border-gray-200
            rounded-t-2xl md:rounded-2xl
            z-10 flex flex-col justify-between p-6
            transition-all duration-300
          "
        >
          {/* Mechanic Info */}
          <div>
                          <div className="flex mb-3 justify-center items-center mx-auto"><span className="bg-gray-300 w-8 h-2 rounded-full"></span></div>
            <div className="border rounded-2xl overflow-hidden shadow-sm">
              <div className="flex justify-between items-start gap-3 p-3 w-full">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <img
                        src="/image/UserImage.png"
                        alt="Mechanic"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    {online && (
                      <span className="absolute bottom-0 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">
                      {mechanicName}
                    </span>
                    <span className="text-xs text-gray-500">{designation}</span>
                    <span
                      className="text-xs text-gray-500 truncate max-w-[140px]"
                      title={place}
                    >
                      {place}
                    </span>
                    <span className="text-xs text-blue-600 mt-1">{phone}</span>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center cursor-pointer gap-1 shrink-0">
                  <div className="flex justify-center items-center rounded-full">
                    <span className="flex justify-center items-center w-[35px] h-[35px]">
                      <RedRecorderIcon />
                    </span>
                  </div>
                  <span className="text-[11px] text-black whitespace-nowrap">
                    Show Problem
                  </span>
                </div>
              </div>

              <span
                onClick={() =>
                  navigate("/dashboard/businesses/addbusinessdetail", {
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

            {/* Divider Section */}
            <div className="border rounded-2xl border-gray-200 flex justify-between items-center my-4 p-3">
              <div className="flex relative flex-col w-1/2 justify-center items-center">
                <LosAnglesMap className="w-12 h-12 text-gray-400" />
                <Location className="absolute top-[35%] left-[45%] w-[8px]" />

                <span
                  className="text-sm text-gray-700 font-semibold truncate max-w-[120px]"
                  title={place}
                >
                  {place}
                </span>
                <span className="text-[10px] text-blue-600 mt-1">
                  Show Formula Flow
                </span>
              </div>

              <div className="flex flex-col gap-2 w-1/2 text-[12px]">
                <div className="flex gap-2">
                  <span className="text-gray-600">Function:</span>
                  <span className="font-semibold text-green-600">
                    {businessFunction || "Fix Car"}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-600">Problem:</span>
                  <span className="font-semibold text-red-600">
                    Bad Radiator
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Distance + Calendar */}
          <div className="mt-6 w-full  flex justify-center">
            <button
              onClick={() => setOpenCalender(true)}
              className="text-[12px] newPrimaryColor flex justify-center items-center gap-1 hover:underline"
            >
              The Function is located {distance} Miles from me
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      {openCalender && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="relative animate-fadeInUp">
            <IOSStyleDatePicker />
            <button
              onClick={() => setOpenCalender(false)}
              className="absolute -top-3 -right-3 bg-white border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-100"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
