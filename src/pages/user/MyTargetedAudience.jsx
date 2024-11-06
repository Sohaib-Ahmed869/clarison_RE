import React from 'react';
import DataTable from '../../components/common/DataTable';
import { Outlet, useLocation } from 'react-router-dom';

const headCells = [
  { id: "targetId", numeric: false, label: "ID" },
  { id: "name", numeric: false, label: "Filter Name" },
  { id: "email", numeric: false, label: "Number of Emails" },
  { id: "date", numeric: false, label: "Schedule Date" },
  { id: "action", numeric: false, label: "Action" },
];

const rows = [
  { id: 1, targetId: "SCH001", name: "Holiday Sale", email: "2024-12-01", date: "10:00 AM" },
  { id: 2, targetId: "SCH002", name: "New Year Blast", email: "2024-12-31", date: "09:00 AM" },
  { id: 3, targetId: "SCH003", name: "Spring Promo", email: "2025-03-01", date: "11:00 AM" },
  { id: 4, targetId: "SCH004", name: "Summer Sale", email: "2025-06-01", date: "01:00 PM" },
  { id: 5, targetId: "SCH005", name: "Fall Festival", email: "2025-09-01", date: "02:00 PM" },
  { id: 6, targetId: "SCH006", name: "Winter Wonderland", email: "2025-12-01", date: "10:00 AM" },
];

const MyTargetedAudience = () => {
  const uniqueName = "Targeted-Audience";
  const location = useLocation();

  return (
    <>
    <div className="rounded lg:p-10">
    {location.pathname === '/user/my-targeted-audience' && (
      <DataTable
        headCells={headCells}
        rows={uniqueName === "Targeted-Audience" ? rows : []} // Conditionally pass rows based on uniqueName
        title="My Targeted Audience"
        uniqueName={uniqueName}
        />
      )}

      {/* Render nested route components like FilterAudience */}
      <Outlet />
    </div>
        </>
  );
};

export default MyTargetedAudience;
