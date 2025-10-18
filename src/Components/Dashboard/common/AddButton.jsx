import React from "react";
import { IoIosAddCircle } from "react-icons/io";

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
      className="flex w-full bg-white justify-center items-center px-4 py-3 border transition-all duration-150 rounded-lg shadow-sm hover:shadow-md border-gray-200 gap-2 text-blue-600 text-center"
    >
      <IoIosAddCircle size={22} className="text-blue-600" />
      <span>{label}</span>
    </button>
  );
}
