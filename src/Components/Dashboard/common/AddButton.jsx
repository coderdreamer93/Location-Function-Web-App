import React from "react";
import { ReactComponent as AddIcon } from "../../../Assets/icons/AddButton.svg";

/**
 * Reusable AddFunctionButton component
 *
 * Props:
 * - onClick (function): Function to run when clicked
 * - label (string): Optional custom label (default = "Add Function")
 */
export default function AddButton({ onClick, label = "Add Function" }) {
  return (
    <button
      onClick={onClick}
      className="flex text-[18px] w-full justify-center items-center gap-2 px-4 py-3
                 rounded-lg bg-white newPrimaryColor transition-all duration-200
                 hover:border-blue-600 hover:bg-blue-50 hover:newPrimaryColor
                 active:scale-[0.98]"
      style={{
        borderWidth: "1px",
        borderStyle: "dashed",
        borderColor: "#D1D5DB", // Tailwind's gray-300
        borderSpacing: "20px",
        borderImage: "repeating-linear-gradient(90deg, #D1D5DB 0, #D1D5DB 8px, transparent 8px, transparent 14px) 1",
      }}
    >
      <AddIcon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
}
