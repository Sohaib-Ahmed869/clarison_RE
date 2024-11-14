import React from "react";
import SelectDatePicker from "../SelectDatePicker";
import SelectTimePicker from "../SelectTimePicker";
import { NavLink } from "react-router-dom";
import Model from "./Model";
const DateTimeSchedule = ({ buttonText="Next", showDateNote=false, showTimeNote=false }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
        <div className="flex items-center h-full w-full flex-col gap-10 p-5">
      <div className="h-5/6 w-full flex items-center py-10 gap-10 flex-col rounded-3xl bg-white">
        <h1 className="text-xl sm:text-3xl text-center w-full font-semibold text-gray-800">
          Change Date & Time
        </h1>

        <div className="flex gap-5 w-5/6">
          <div className="w-full">
            <div className="">
            <h1 className="text-base inline sm:text-lg mb-2 text-gray-800 font-semibold">
              Select Date
            </h1>
            {showDateNote && <p className="sm:text-md text-sm inline"> (Note: eBlasts can only be scheduled for Monday to Friday)</p>}
            </div>
            <SelectDatePicker />
          </div>
          <div className="w-full">
            <div className="">
            <h1 className="text-base inline sm:text-lg mb-2 text-gray-800 font-semibold">
              Select Time
            </h1>
            {showTimeNote && <p className="sm:text-md inline text-sm"> (Note: Please set time within 7 am to 6:30 pm.)</p>}
            </div>
            <SelectTimePicker />
          </div>
        </div>
      </div>

      <div className="flex gap-5 w-full items-center justify-center">
        <NavLink className="w-2/6" to="/my-schedule-flyer">
          <button className="bg-transparent w-full border border-primary text-primary h-14 text-base rounded-lg flex gap-2 items-center justify-center mt-5">
            Cancel
          </button>
        </NavLink>

        <button
          onClick={handleOpen} // Open the modal on click
          className="bg-primary hover:bg-opacity-80 w-2/6 text-white h-14 text-base rounded-lg flex gap-2 items-center justify-center mt-5"
        >
          {buttonText}
        </button>

        {/* model  */}
        <Model
          open={open}
          handleClose={handleClose}
          title="Successfully Changed"
          content="Eblast Date & Time has been Changed!"
        />
      </div>
    </div>
    </>

  );
};

export default DateTimeSchedule;
