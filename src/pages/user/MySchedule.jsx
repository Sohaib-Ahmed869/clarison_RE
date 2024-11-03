import React from "react";
import DataTable from "../../components/common/DataTable";

const headCells = [
  { id: "scheduleId", numeric: false, label: "Schedule ID" },
  { id: "eBlastName", numeric: false, label: "eBlast Name" },
  { id: "scheduledDate", numeric: false, label: "Scheduled Date" },
  { id: "scheduleTime", numeric: false, label: "Schedule Time" },
  { id: "status", numeric: false, label: "Status" },
  { id: "action", numeric: false, label: "Action" },
];

const rows = [
  {
    id: 1,
    scheduleId: "SCH001",
    eBlastName: "Holiday Sale",
    scheduledDate: "2024-12-01",
    scheduleTime: "10:00 AM",
    status: "Completed",
  },
  {
    id: 2,
    scheduleId: "SCH002",
    eBlastName: "New Year Blast",
    scheduledDate: "2024-12-31",
    scheduleTime: "09:00 AM",
    status: "Pending",
  },
  {
    id: 3,
    scheduleId: "SCH003",
    eBlastName: "Spring Promo",
    scheduledDate: "2025-03-01",
    scheduleTime: "11:00 AM",
    status: "Canceled",
  },
  {
    id: 4,
    scheduleId: "SCH004",
    eBlastName: "Summer Sale",
    scheduledDate: "2025-06-01",
    scheduleTime: "01:00 PM",
    status: "Completed",
  },
  {
    id: 5,
    scheduleId: "SCH005",
    eBlastName: "Fall Festival",
    scheduledDate: "2025-09-01",
    scheduleTime: "02:00 PM",
    status: "Pending",
  },
  {
    id: 6,
    scheduleId: "SCH006",
    eBlastName: "Winter Wonderland",
    scheduledDate: "2025-12-01",
    scheduleTime: "10:00 AM",
    status: "Canceled",
  },
];

const MySchedule = () => {
  const uniqueName = "My-Schedule";

  return (
    <div className="rounded  lg:p-10">
      <DataTable
        headCells={headCells}
        rows={uniqueName === "My-Schedule" ? rows : []} // Conditionally pass rows based on uniqueName
        title={"My Scheduled Flyers"}
        uniqueName={uniqueName}
      />
    </div>
  );
};

export default MySchedule;
