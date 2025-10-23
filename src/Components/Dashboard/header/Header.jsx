"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { ReactComponent as HomeIcon } from "../../../Assets/icons/logo.svg";
import { ReactComponent as LoginIcon } from "../../../Assets/icons/login.svg";
import { ReactComponent as BellIcon } from "../../../Assets/icons/bell.svg";

export default function Header() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Functions");
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { id: 1, name: "Functions", route: "functions" },
    // { id: 2, name: "Problems", route: "problems" },
    // { id: 3, name: "Businesses", route: "businesses" },
  ];

  const notifications = 2;
  const user = {
    name: "Abdullah",
    avatar: "https://i.pravatar.cc/40",
    loggedIn: true, // change to false to test
  };

  // 🔹 Tab click handler
  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    navigate(tab.route);
    setMenuOpen(false); // close mobile menu
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          {/* Left Section */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              className="text-gray-700 pr-2 hover:text-black md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <HiOutlineX size={22} />
              ) : (
                <HiOutlineMenu size={22} />
              )}
            </button>

            {/* Home Icon */}
            <button
              onClick={() => {
                navigate("/dashboard");
                setMenuOpen(false);
              }}
              className="text-gray-700 pr-4 hover:text-black"
            >
              <HomeIcon className="w-[40px] newPrimaryColor" />
            </button>

            {/* Tabs (Desktop Only) */}
            <nav className="hidden md:flex space-x-6 h-14">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab)}
                  className={`text-[14px] font-bold transition-colors ${
                    activeTab === tab.name
                      ? "newPrimaryColor"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Notification Icon */}
            <div className="relative hidden md:block">
              <BellIcon className="w-[40px] text-black" />
              {notifications > 0 && (
                <span className="absolute flex justify-center items-center -top-2 right-0.5 w-[18px] h-[18px] bg-blue-600 text-white text-[11px] rounded-full">
                  {notifications}
                </span>
              )}
            </div>

            {/* User / Login */}
            {!user.loggedIn ? (
              <div className="flex justify-center items-center cursor-pointer">
                <LoginIcon className="w-[30px] text-gray-800" />
                <span className="ml-1 text-black text-[14px]">Log in</span>
              </div>
            ) : (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover border border-gray-300 cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide Down) */}
      <div
        className={`md:hidden absolute top-[72px] left-0 w-full bg-white border-t border-gray-200 shadow-md transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col py-2 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className={`text-[14px] font-bold px-4 py-2 text-left transition-all ${
                activeTab === tab.name
                  ? "newPrimaryColor bg-gray-50"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
