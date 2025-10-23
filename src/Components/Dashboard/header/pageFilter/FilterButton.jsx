// import React from "react";

// function FilterButton({ label, isActive, onClick }) {
//   return (
//     <div
//       className={`flex text-[14px]  text-nowrap rounded-lg  transition-all duration-300 px-3 py-1.5   ${
//         isActive
//           ? "border-2 border-blue-600 font-bold newPrimaryColor bg-blue-50"
//           : "border-2 border-gray-200 font-normal newFontColor hover:newPrimaryBorder hover:newPrimaryColor"
//       }`}
//     >
//       <button
//         onClick={onClick}
//         className={`text-[14px] text-nowrap

//             `}
//       >
//         {label}
//       </button>
//     </div>
//   );
// }

// export default FilterButton;

import React from "react";

function FilterButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center text-[14px] text-nowrap rounded-lg transition-all duration-200 px-3 py-1.5 border-2
    ${
      isActive
        ? "newPrimaryBorder newPrimaryColor bg-blue-50 font-bold"
        : "border-gray-200 text-gray-600 hover:border-gray-400 hover:newPrimaryColor"
    }`}
    >
      {/* Visible Label */}
      <span className={`${isActive ? "font-bold" : "font-normal"}`}>
        {label}
      </span>

      {/* Hidden Bold Label for Width Fix */}
      <span className="absolute invisible font-bold">{label}</span>
    </button>
  );
}

export default FilterButton;
