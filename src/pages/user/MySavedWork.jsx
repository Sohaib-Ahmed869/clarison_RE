import React from 'react';
import DataTable from '../../components/common/DataTable'; // Make sure to import your DataTable component

const headCells = [
  { id: "eBlastId", numeric: false, label: "eBlast ID" },
  { id: "eBlastName", numeric: false, label: "eBlast Name" },
  { id: "status", numeric: false, label: "Status" },
  { id: "action", numeric: false, label: "Action" },
];

const rows = [
  {
    id: 1,
    eBlastId: "EB001",
    eBlastName: "Holiday Sale",
    status: "Draft",
  },
  {
    id: 2,
    eBlastId: "EB002",
    eBlastName: "New Year Blast",
    status: "Draft",
  },
  {
    id: 3,
    eBlastId: "EB003",
    eBlastName: "Spring Promo",
    status: "Draft",
  },
  {
    id: 4,
    eBlastId: "EB004",
    eBlastName: "Summer Sale",
    status: "Draft",
  },
  {
    id: 5,
    eBlastId: "EB005",
    eBlastName: "Fall Festival",
    status: "Draft",
  },
  {
    id: 6,
    eBlastId: "EB006",
    eBlastName: "Winter Wonderland",
    status: "Draft",
  },
];

const MySavedWork = () => {
  const uniqueName = "Saved-Work";

  return (
    <div className="rounded lg:p-10">
      <DataTable
        headCells={headCells}
        rows={uniqueName === "Saved-Work" ? rows : []} // Conditionally pass rows based on uniqueName
        title={"My Saved Work"}
        uniqueName={uniqueName}
      />
    </div>
  );
}

export default MySavedWork;
