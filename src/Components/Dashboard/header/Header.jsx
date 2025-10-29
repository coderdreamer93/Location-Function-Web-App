
"use client";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // 👈 add useLocation
import { HiOutlineX } from "react-icons/hi";
import { ReactComponent as HomeIcon } from "../../../Assets/icons/logo.svg";
import { ReactComponent as LoginIcon } from "../../../Assets/icons/login.svg";
import { ReactComponent as BellIcon } from "../../../Assets/icons/bell.svg";
import { ReactComponent as MenuBarIcon } from "../../../Assets/icons/menuBar.svg";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation(); // 👈 track current route

  const [activeTab, setActiveTab] = useState("functions");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const tabs = [
    { id: 1, name: "Functions", route: "/dashboard/functions" },
    { id: 2, name: "Problems", route: "/dashboard/problems" },
    // { id: 2, name: "Businesses", route: "/dashboard/businesses" },
  ];

  const notifications = 2;
  const user = {
    name: "Abdullah",
    avatar: "/mechanic.jpg",
    loggedIn: true,
  };

  // ✅ Automatically update active tab when route changes
  useEffect(() => {
    const currentTab = tabs.find((tab) =>
      location.pathname.includes(tab.route)
    );
    if (currentTab) setActiveTab(currentTab.name);
    else setActiveTab("");
  }, [location.pathname]);

  // ✅ Tab click handler
  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    navigate(tab.route);
    setMenuOpen(false);
  };

  // ✅ Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    setDropdownOpen(false);
    console.log("User logged out");
    navigate("/login");
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
                <HiOutlineX className="w-[40px] h-[40px]" />
              ) : (
                <span>
                  <MenuBarIcon className="w-[40px] h-[40px]" />
                </span>
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
              <HomeIcon className="w-[40px] h-[40px] newPrimaryColor" />
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
          <div className="flex items-center gap-3 relative" ref={dropdownRef}>
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
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="w-8 h-8 rounded-full object-cover border border-gray-300 cursor-pointer"
                />

                {dropdownOpen && (
                  <div className="absolute flex flex-col justify-center items-start right-0 mt-2 w-40 newFontColor bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 animate-fade-in">
                    <span className="px-4 py-1 text-[14px] newFontColor border-b hover:bg-gray-100">
                      {user.name}
                    </span>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-1 text-[14px] newFontColor hover:bg-gray-100 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-[72px] left-0 w-full bg-white border-t border-gray-200 shadow-md transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-60 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
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
