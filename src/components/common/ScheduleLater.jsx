import React from "react";
import Calender from "../assets/images/calender.png";
const ScheduleLater = () => {
  return (
    <div className="shadow-[#EEEEEE] shadow-md px-10 py-10 bg-white  flex flex-col gap-5 w-96 rounded-lg text-center  items-center justify-center">
      <h1 className="font-semibold text-2xl md:text-3xl text-[#05004E]">Schedule for Later</h1>
      <p className="text-gray-500">
        Tap on the option to schedule your flyer for a later date and time!
      </p>
      <div className="rounded-full p-7 bg-[#EEEEEE] border">
        <img className="w-16 md:w-20" src={Calender} alt="calender image" />
      </div>
    </div>
  );
};

export default ScheduleLater;
