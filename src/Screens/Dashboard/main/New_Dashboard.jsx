import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../Components/Dashboard/header/Header";
import IncomingProblemPopup from "../../../Components/Dashboard/business/IncomingProblemPopup";

function New_Dashboard() {
    const [showPopup, setShowPopup] = useState(true);
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <div className="flex flex-1 transition-all duration-300">
        <div className="h-screen flex items-center justify-center bg-gray-100">
          {showPopup && (
            <IncomingProblemPopup
              name="Michael David"
              problem="Bad Radiator"
              onAnswer={() => alert("Answered")}
              onDecline={() => setShowPopup(false)}
            />
          )}
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default New_Dashboard;
