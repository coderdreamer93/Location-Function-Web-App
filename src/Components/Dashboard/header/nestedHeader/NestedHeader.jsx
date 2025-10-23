// import React from "react";
// import { ReactComponent as GridIcon } from "../../../../Assets/icons/gridGrayView.svg";
// import { ReactComponent as ListIcon } from "../../../../Assets/icons/listGrayView.svg";

// function NestedHeader({ title, view, setView }) {
//   return (
//     <div className="flex justify-between items-center mb-2 z-999">
//       <p className="text-[24px] font-semibold text-gray-800">{title}</p>

//       <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
//         {view && (
//           <>
//             <button
//               type="button"
//               onClick={() => setView("list")}
//               className={`flex items-center justify-center w-6 h-8 transition-colors ${
//                 view === "list"
//                   ? "bg-blue-100 newPrimaryColor"
//                   : "text-gray-600 hover:bg-blue-50 hover:newPrimaryColor"
//               }`}
//             >
//               <ListGrayIcon className="w-[40px]" />
//             </button>
//             <button
//               type="button"
//               onClick={() => setView("grid")}
//               className={`flex items-center justify-center w-6 h-8 transition-colors ${
//                 view === "grid"
//                   ? "bg-blue-100 newPrimaryColor"
//                   : "text-gray-600 hover:bg-blue-50 hover:newPrimaryColor"
//               }`}
//             >
//               <GridGrayIcon className="w-[40px]"/>
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NestedHeader;
import React from "react";
import { ReactComponent as ListBlueIcon } from "../../../../Assets/icons/listBlueIcon.svg";
import { ReactComponent as ListGrayIcon } from "../../../../Assets/icons/listGrayIcon.svg";
import { ReactComponent as GridBlueIcon } from "../../../../Assets/icons/gridBlueIcon.svg";
import { ReactComponent as GridGrayIcon } from "../../../../Assets/icons/gridGrayIcon.svg";

function NestedHeader({ title, view, setView }) {
  return (
    <div className="flex justify-between items-center mb-2 z-50">
      <h1 className="text-[24px] font-bold text-black">{title}</h1>

      <div className="flex items-center border border-gray-200 rounded-md overflow-hidden bg-white">
        {/* List View Button */}
        <button
          type="button"
          onClick={() => setView("list")}
          className={`flex items-center justify-center px-2 py-2 transition-colors duration-200
            ${
              view === "list"
                ? "bg-blue-50 text-blue-600"
                : "bg-white text-gray-400 hover:bg-blue-50 hover:text-blue-600"
            }`}
        >
          {view === "list" ? (
            <ListBlueIcon className="w-[18px] h-[18px]" />
          ) : (
            <ListGrayIcon className="w-[18px] h-[18px]" />
          )}
        </button>

        {/* Grid View Button */}
        <button
          type="button"
          onClick={() => setView("grid")}
          className={`flex items-center justify-center px-2 py-2 transition-colors duration-200
            ${
              view === "grid"
                ? "bg-blue-50 text-blue-600"
                : "bg-white text-gray-400 hover:bg-blue-50 hover:text-blue-600"
            }`}
        >
          {view === "grid" ? (
            <GridBlueIcon className="w-[14px] h-[14px]" />
          ) : (
            <GridGrayIcon className="w-[14px] h-[14px]" />
          )}
        </button>
      </div>
    </div>
  );
}

export default NestedHeader;
