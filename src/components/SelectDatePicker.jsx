import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function SelectDatePicker() {
  return (
    <LocalizationProvider className="" dateAdapter={AdapterDayjs}>
      <DatePicker label="Enter Date" className="w-full " />
    </LocalizationProvider>
  );
}
