// "use client";
// import { useState } from "react";
// import { PiBell } from "react-icons/pi";
// import { IoHomeOutline } from "react-icons/io5";
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
// import { HiUserCircle } from "react-icons/hi";

// export default function Header() {
//   const [activeTab, setActiveTab] = useState("Problems");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [tabs] = useState([
//     { id: 1, name: "Functions", route: "/functions" },
//     { id: 2, name: "Problems", route: "/problems" },
//     { id: 3, name: "Businesses", route: "/businesses" },
//     { id: 4, name: "Stats", route: "/stats"   },
//   ]);
//   const [notifications] = useState(2);

//   // 🔹 Example user state — you can toggle loggedIn to test
//   const [user] = useState({
//     name: "Abdullah",
//     avatar: "https://i.pravatar.cc/40",
//     loggedIn: true, // change to false to test default avatar
//   });

//   return (
//     <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-30">
//       <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-14">
//           {/* Left Section */}
//           <div className="flex items-center space-x-4">
//             {/* Mobile Menu Button */}
//             <button
//               className="text-gray-700 hover:text-black md:hidden"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               {menuOpen ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
//             </button>

//             {/* Home Icon */}
//             <button className="text-gray-700 hover:text-black">
//               <IoHomeOutline size={22} />
//             </button>

//             {/* Tabs (hidden on mobile) */}
//             <nav className="hidden md:flex space-x-6 h-14">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   // onClick={() => setActiveTab(tab.name)}
//                   onClick={() => setActiveTab(tab.name)}
//                   className={`text-sm font-medium transition-colors ${
//                     activeTab === tab.name
//                       ? "text-blue-600"
//                       : "text-gray-700 hover:text-black"
//                   }`}
//                 >
//                   {tab.name}
//                 </button>
//               ))}
//             </nav>
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center space-x-5">
//             {/* Notification Icon (hidden on mobile) */}
//             <div className="relative hidden md:block">
//               <PiBell
//                 size={22}
//                 className="text-black cursor-pointer hover:text-black 0.3s transition-all"
//               />
//               {notifications > 0 && (
//                 <span className="absolute flex justify-center items-center -top-1.5 -right-1.5 w-4 h-4 bg-blue-600 text-white text-[10px] rounded-full">
//                   {notifications}
//                 </span>
//               )}
//             </div>

//             {/* Avatar or Default Icon */}
//             {!user.loggedIn ? (
//               <img
//                 src={user.avatar}
//                 alt={user.name}
//                 className="w-8 h-8 rounded-full object-cover border border-gray-300 cursor-pointer"
//               />
//             ) : (
//               <HiUserCircle
//                 size={26}
//                 className="text-gray-600 cursor-pointer hover:text-black transition"
//               />
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Drawer */}
//       {menuOpen && (
//         <div className="md:hidden border-t border-gray-200 bg-white">
//           <nav className="flex flex-col py-2 space-y-1">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => {
//                   setActiveTab(tab.name);
//                   setMenuOpen(false);
//                 }}
//                 className={`px-4 py-2 text-left text-sm font-medium ${
//                   activeTab === tab.name
//                     ? "text-blue-600 bg-gray-50"
//                     : "text-gray-700 hover:bg-gray-100"
//                 }`}
//               >
//                 {tab.name}
//               </button>
//             ))}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }


"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiBell } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { HiUserCircle } from "react-icons/hi";

export default function Header() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Functions");
  const [menuOpen, setMenuOpen] = useState(false);

  const [tabs] = useState([
    { id: 1, name: "Functions", route: "functions" },
    { id: 2, name: "Problems", route: "problems" },
    { id: 3, name: "Businesses", route: "businesses" },
    // { id: 4, name: "Stats", route: "stats" },
  ]);

  const [notifications] = useState(2);
  const [user] = useState({
    name: "Abdullah",
    avatar: "https://i.pravatar.cc/40",
    loggedIn: true, // change to false to test
  });

  // 🔹 Tab click handler
  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    navigate(tab.route);
    setMenuOpen(false); // close mobile menu if open
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Left Section */}
          <div className="flex items-center ">
            {/* Mobile Menu Button */}
            <button
              className="text-gray-700 pr-2 hover:text-black md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
            </button>

            {/* Home Icon */}
            <button
              onClick={() => navigate("/dashboard")}
              className="text-gray-700 pr-4 hover:text-black"
            >
              <IoHomeOutline size={22} />
            </button>

            {/* Tabs (hidden on mobile) */}
            <nav className="hidden md:flex space-x-6 h-14">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab)}
                  className={`text-sm font-medium transition-colors ${
                    activeTab === tab.name
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-5">
            {/* Notification Icon (hidden on mobile) */}
            <div className="relative hidden md:block">
              <PiBell
                size={22}
                className="text-black cursor-pointer hover:text-black transition-all duration-300"
              />
              {notifications > 0 && (
                <span className="absolute flex justify-center items-center -top-1.5 -right-1.5 w-4 h-4 bg-blue-600 text-white text-[10px] rounded-full">
                  {notifications}
                </span>
              )}
            </div>

            {/* Avatar or Default Icon */}
            {user.loggedIn ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover border border-gray-300 cursor-pointer"
              />
            ) : (
              <HiUserCircle
                size={26}
                className="text-gray-600 cursor-pointer hover:text-black transition"
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col py-2 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`px-4 py-2 text-left text-sm font-medium ${
                  activeTab === tab.name
                    ? "text-blue-600 bg-gray-50"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
