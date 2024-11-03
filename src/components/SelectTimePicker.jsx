import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
const SelectTimePicker = () => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label="Enter Time"
          className="w-full !border-none"
          views={["hours", "minutes", "seconds"]}
        />
      </LocalizationProvider>
    </div>
  );
};

export default SelectTimePicker;
