import React from "react";
import { Outlet } from "react-router-dom";

function Stats() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Stats Dashboard</h2>

      {/* This outlet will show nested pages like /register, /verify, etc. */}
      <Outlet />
    </div>
  );
}

export default Stats;
