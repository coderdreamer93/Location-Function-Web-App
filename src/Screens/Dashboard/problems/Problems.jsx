import React from 'react'
import { Outlet } from "react-router-dom";

function Problems() {
  return (
       <div>
             <h2 className="text-xl font-bold mb-3">Problems Dashboard</h2>
       
             {/* This outlet will show nested pages like /register, /verify, etc. */}
             <Outlet />
           </div>
   
  )
}

export default Problems