import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { TextField, Button, Typography, Box, Modal } from "@mui/material";
import SelectDatePicker from "../../components/SelectDatePicker";
import SelectTimePicker from "../../components/SelectTimePicker";
import CloseIcon from "@mui/icons-material/Close";
import UpdateModel from "../../assets/dataTable/model-updated.png";
import { NavLink } from "react-router-dom";

const UpdateMySchedule = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdate = () => {
  }

  return (
    <div className="flex items-center h-full w-full flex-col gap-10 p-5">
      <div className="h-5/6 w-full flex items-center py-10 gap-10 flex-col rounded-3xl bg-white">
        <h1 className="text-xl sm:text-3xl text-center w-full font-semibold text-gray-800">
          Change Date & Time
        </h1>

        <div className="flex gap-5 w-5/6">
          <div className="w-full">
            <h1 className="text-base sm:text-lg mb-2 text-gray-800 font-semibold">
              Select Date
            </h1>
            <SelectDatePicker />
          </div>
          <div className="w-full">
            <h1 className="text-base sm:text-lg mb-2 text-gray-800 font-semibold">
              Select Time
            </h1>
            <SelectTimePicker />
          </div>
        </div>
      </div>

      <div className="flex gap-5 w-full items-center justify-center">
        <NavLink className="w-2/6" to="/user/my-schedule-flyer">
        <button className="bg-transparent w-full border border-primary text-primary h-14 text-base rounded-lg flex gap-2 items-center justify-center mt-5">
          Cancel
        </button>
        </NavLink>

        <button
          onClick={handleOpen} // Open the modal on click
          className="bg-primary hover:bg-opacity-80 w-2/6 text-white h-14 text-base rounded-lg flex gap-2 items-center justify-center mt-5"
        >
          Update
        </button>

        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
          className="flex justify-center items-center h-full w-full"
        >
          <Box className="flex justify-center outline-none p-10 rounded-2xl h-3/4 lg:h-2/4 w-5/6  lg:w-2/5 gap-5 flex-col items-center bg-white relative">
            <CloseIcon
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                cursor: "pointer",
                color: "gray",
              }}
            />
            <img src={UpdateModel} className="w-20 md:w-28" alt="update model image" />
            <Typography
              className="text-xl md:!text-3xl text-center"
              id="keep-mounted-modal-title"
              variant="h6"
              component="h2"
            >
              Successfully Changed
            </Typography>
            <Typography
              className="!text-base md:!text-lg text-center !font-normal"
              id="keep-mounted-modal-title"
              variant="h6"
              component="h2"
            >
              Eblast Date & Time has been Chnaged!
            </Typography>

            <button
              className="!bg-secondary !text-white !w-52 !h-12 text-base !rounded-full flex gap-2 items-center justify-center"
              onClick={handleClose}
              type="submit"
            >
              Continue
            </button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default UpdateMySchedule;
