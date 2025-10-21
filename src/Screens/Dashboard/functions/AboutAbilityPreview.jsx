import React, { useState } from "react";

function AboutAbilityPreview() {


  return (
    <div className="bg-white sm:w-64 md:w-64 w-full">
      <div className="flex flex-col items-center gap-2 p-4">
        <div className="w-12 h-12 border rounded-full">
          <img src="" alt="" />
        </div>
        <span className="text-black text-sm font-semibold">John Adams</span>
        <div className="flex justify-center items-center gap-2 text-[10px] text-black">
          <span>Mechanic</span>
          <span>SLPGarage</span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center bg-blue-400 py-1 text-center text-sm font-medium">
        <span className=" text-black">Ability</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 p-2">
          <span className="text-sm text-black">Execute</span>
        <div className="w-full bg-blue-600 rounded-lg py-2 flex justify-center items-center">
          <span className=" text-white text-sm text-center">Function</span>
        </div>
        <div className="">
          <span className="text-sm text-black">Solve</span>
        </div>
        <div className="w-full bg-red-600 rounded-lg  flex justify-center items-center">
          <span className="text-white text-sm text-center">Problem</span>
        </div>
      </div>
    </div>
  );
}

export default AboutAbilityPreview;
