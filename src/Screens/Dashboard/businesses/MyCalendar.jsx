import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export default function MyCalendar() {
  return (
    <div className="p-4 bg-white rounded-xl shadow w-[320px]">
      <DayPicker
        mode="single"
        selected={new Date()}
        onSelect={(date) => console.log(date)}
        styles={{
          caption: { textAlign: "center", fontWeight: "bold" },
          day_selected: { backgroundColor: "#007AFF", color: "white" },
        }}
      />
    </div>
  );
}
