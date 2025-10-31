"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function IOSCalendar() {
  const [currentMonth, setCurrentMonth] = useState(5); // June (0 = Jan)
  const [currentYear, setCurrentYear] = useState(2024);
  const [selectedDate, setSelectedDate] = useState(26);
  const [time, setTime] = useState("8:00");
  const [period, setPeriod] = useState("AM");

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-4 w-[320px] font-[system-ui] select-none">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <button onClick={prevMonth}>
            <ChevronLeft className="text-[#007AFF]" />
          </button>
          <span className="font-semibold text-lg">
            {monthNames[currentMonth]} {currentYear}
          </span>
          <button onClick={nextMonth}>
            <ChevronRight className="text-[#007AFF]" />
          </button>
        </div>

        {/* Weekdays */}
        <div className="grid grid-cols-7 text-center text-gray-400 text-sm mb-1">
          {daysOfWeek.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-7 text-center text-[15px] text-gray-700">
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`}></div>
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const date = i + 1;
            const isSelected = selectedDate === date;
            const isHighlighted = date === 10; // Example: 10th in blue
            return (
              <div
                key={date}
                className={`py-2 cursor-pointer rounded-full mx-auto w-8 h-8 flex items-center justify-center ${
                  isSelected
                    ? "bg-[#007AFF33] text-[#007AFF]"
                    : isHighlighted
                    ? "text-[#007AFF]"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedDate(date)}
              >
                {date}
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-3 pt-3 flex items-center justify-between">
          <span className="text-gray-500 font-medium">Ends</span>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-14 text-center border border-gray-200 rounded-md py-1 text-sm focus:outline-none"
            />
            <div className="flex space-x-1">
              <button
                onClick={() => setPeriod("AM")}
                className={`px-2 py-1 text-sm rounded-md ${
                  period === "AM"
                    ? "bg-gray-200 text-black font-semibold"
                    : "text-gray-500"
                }`}
              >
                AM
              </button>
              <button
                onClick={() => setPeriod("PM")}
                className={`px-2 py-1 text-sm rounded-md ${
                  period === "PM"
                    ? "bg-gray-200 text-black font-semibold"
                    : "text-gray-500"
                }`}
              >
                PM
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
