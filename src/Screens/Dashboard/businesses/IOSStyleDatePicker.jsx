// import React, { useState } from "react";
// import DatePicker from "react-date-picker";
// import "react-date-picker/dist/DatePicker.css";
// import "react-calendar/dist/Calendar.css";

// export default function IOSStyleDatePicker() {
//   const [value, setValue] = useState(new Date());
//   const [time, setTime] = useState("08:00");
//   const [ampm, setAmpm] = useState("AM");

//   return (
//     <div className="w-[320px] bg-white rounded-2xl shadow-xl border border-gray-200 p-5 flex flex-col gap-4 relative z-[9999]">
//       <h3 className="text-center text-sm font-semibold text-gray-700">
//         Select Appointment Time
//       </h3>

//       {/* Calendar */}
//       <div className="flex justify-center">
//         <DatePicker
//           onChange={setValue}
//           value={value}
//           calendarIcon={null}
//           clearIcon={null}
//           format="MMMM d, yyyy"
//           className="text-center text-sm font-medium"
//         />
//       </div>

//       {/* Time Selector */}
//       <div className="flex items-center justify-between border-t pt-3 text-sm">
//         <span className="text-gray-600 font-medium">Time</span>
//         <div className="flex items-center gap-2">
//           <input
//             type="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             className="border border-gray-300 rounded-md px-2 py-1 w-[80px] text-center text-gray-800 focus:ring-2 focus:ring-blue-200 outline-none"
//           />
//           <div className="flex rounded-md overflow-hidden border border-gray-300">
//             <button
//               className={`px-3 py-1 text-xs font-semibold ${
//                 ampm === "AM"
//                   ? "bg-blue-100 text-blue-600"
//                   : "text-gray-500 hover:bg-gray-100"
//               }`}
//               onClick={() => setAmpm("AM")}
//             >
//               AM
//             </button>
//             <button
//               className={`px-3 py-1 text-xs font-semibold ${
//                 ampm === "PM"
//                   ? "bg-blue-100 text-blue-600"
//                   : "text-gray-500 hover:bg-gray-100"
//               }`}
//               onClick={() => setAmpm("PM")}
//             >
//               PM
//             </button>
//           </div>
//         </div>
//       </div>

//       <button
//         onClick={() => alert(`Appointment: ${value} at ${time} ${ampm}`)}
//         className="mt-3 w-full py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-all"
//       >
//         Confirm Appointment
//       </button>
//     </div>
//   );
// }



import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export default function IOSStyleDatePicker() {
  const [selected, setSelected] = useState(new Date());
  const [time, setTime] = useState("8:00");
  const [ampm, setAmpm] = useState("AM");

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 w-[320px] p-4">
      {/* Calendar */}
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        styles={{
          caption: { textAlign: "center", fontWeight: "600", color: "#111" },
          day_selected: {
            backgroundColor: "#007AFF",
            color: "white",
          },
          day_today: {
            color: "#007AFF",
          },
          head_cell: { color: "#A0A0A0", fontWeight: "500" },
        }}
      />

      {/* Divider */}
      <div className="border-t mt-2 pt-2 flex items-center justify-between text-sm">
        <span className="text-gray-600">Ends</span>
        <div className="flex items-center gap-2">
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border border-gray-200 rounded-md px-2 py-1 w-[70px] text-center text-gray-800"
          />
          <div className="flex rounded-md overflow-hidden border border-gray-200">
            <button
              className={`px-3 py-1 text-xs font-semibold ${
                ampm === "AM"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
              onClick={() => setAmpm("AM")}
            >
              AM
            </button>
            <button
              className={`px-3 py-1 text-xs font-semibold ${
                ampm === "PM"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
              onClick={() => setAmpm("PM")}
            >
              PM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
