import React from 'react'

import SelectStates from "./SelectStates";
import SelectArea from "./SelectArea";
import Model from "./Model";
import { NavLink } from "react-router-dom";
const SelectMarket = ({titleText}) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div className="flex items-center h-full w-full flex-col gap-10 p-5">
      <div className="h-5/6 w-full flex items-center py-10 gap-10 flex-col rounded-3xl bg-white">
        <h1 className="text-xl sm:text-3xl text-center w-full font-semibold text-secondary">
         {titleText}
        </h1>
        <div className='flex flex-col gap-5'>

        <SelectStates />
        <SelectArea />
        </div>

        <div className="flex gap-5 w-5/6">Map</div>
        <div className="flex gap-5 w-full items-center justify-center">
          <NavLink className="w-2/6" to="/my-targeted-audience/filter-audience">
            <button className="bg-transparent w-full border border-primary text-primary h-14 text-base rounded-lg flex gap-2 items-center justify-center mt-5">
              Cancel
            </button>
          </NavLink>

          <button
          onClick={handleOpen} // Open the modal on click
          className="bg-primary hover:bg-opacity-80 w-2/6 text-white h-14 text-base rounded-lg flex gap-2 items-center justify-center mt-5"
        >
         Next
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
    </div>
  )
}

export default SelectMarket
