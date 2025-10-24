// "use client";
// import React, { useState } from "react";
// import { ReactComponent as CheckIcon } from "../../../Assets/icons/check.svg";


// export default function AboutAbility({ handlePreview }) {
//   const [selected, setSelected] = useState("");
//   const options = ["Yes", "No"];

//   return (
//     <div className="w-full mx-auto">
//       <label className="block text-sm font-medium text-black mb-1">
//        About Ability
//       </label>

//       <div className="flex flex-col mt-1">
//         {options.map((option, idx) => (
//           <div
//             key={option}
//             onClick={() => setSelected(option)}
//             className={`relative w-full border newFontColor px-3 bg-white py-2 text-[14px] cursor-pointer transition-all
//               ${
//                 selected === option
//                   ? "border-blue-500 bg-white"
//                   : "border-gray-300 bg-white hover:bg-blue-50"
//               }
//               ${
//                 idx === 0
//                   ? "rounded-t-lg rounded-b-none" // top button (Yes)
//                   : "rounded-t-none rounded-b-lg" // bottom button (No)
//               }`}
//           >
//             <span>{option}</span>
//             {selected === option && (
//               <CheckIcon className="absolute top-2 right-2 text-blue-600 text-lg" />
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Preview Button */}
//       <div className="md:col-span-2 flex gap-4 mt-4">
//         <button
//           type="button"
//           onClick={handlePreview}
//           className="w-full border-2 border-blue-600 py-2 rounded-lg newPrimaryColor text-[14px] hover:bg-blue-50 transition-all"
//         >
//           Preview
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState, useEffect } from "react";
import { ReactComponent as CheckIcon } from "../../../Assets/icons/check.svg";

export default function AboutAbility({ handlePreview, formData, setFormData }) {
  const [selected, setSelected] = useState(formData?.ability || "");
  const options = ["Yes", "No"];

  const handleSelect = (option) => {
    setSelected(option);
  };

  // Save ability selection to formData and localStorage
  useEffect(() => {
    if (!selected) return;

    const updatedData = { ...formData, ability: selected };
    setFormData(updatedData);

    const existingData = JSON.parse(localStorage.getItem("addFunctionData")) || {};
    localStorage.setItem(
      "addFunctionData",
      JSON.stringify({ ...existingData, aboutAbility: updatedData })
    );
  }, [selected]);

  return (
    <div className="w-full mx-auto">
      <label className="block text-sm font-medium text-black mb-1">
       About Ability
      </label>

      <div className="flex flex-col mt-1">
        {options.map((option, idx) => (
          <div
            key={option}
            onClick={() => handleSelect(option)}
            className={`relative w-full border newFontColor px-3 bg-white py-2 text-[14px] cursor-pointer transition-all
              ${
                selected === option
                  ? "border-blue-500 bg-white"
                  : "border-gray-300 bg-white hover:bg-blue-50"
              }
              ${
                idx === 0
                  ? "rounded-t-lg rounded-b-none" 
                  : "rounded-t-none rounded-b-lg"
              }`}
          >
            <span>{option}</span>
            {selected === option && (
              <CheckIcon className="absolute top-2 right-2 text-blue-600 text-lg" />
            )}
          </div>
        ))}
      </div>

      {/* Preview Button */}
      <div className="md:col-span-2 flex gap-4 mt-4">
        <button
          type="button"
          onClick={handlePreview}
          className="w-full border-2 border-blue-600 py-2 rounded-lg newPrimaryColor text-[14px] hover:bg-blue-50 transition-all"
        >
          Preview
        </button>
      </div>
    </div>
  );
}
