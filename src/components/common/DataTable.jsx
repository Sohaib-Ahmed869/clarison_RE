import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
  Tooltip,
  Modal,
} from "@mui/material";
import CustomPagination from "./CustomPagination";
import Update from "../../assets/dataTable/update.png";
import Delete from "../../assets/dataTable/delete.png";
import Divider from "../../assets/dataTable/divider.png";
import searchIcon from "../../assets/dataTable/Search.png";
import filterIcon from "../../assets/dataTable/Filter.png";
import PlusIcon from "../../assets/dataTable/plus-sign.png";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import FilterAudience from "./FilterAudience";

function EnhancedTableHead({ headCells, hiddenColumns }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map(
          (headCell) =>
            !hiddenColumns.includes(headCell.id) && (
              <TableCell
                key={headCell.id}
                align={headCell.numeric ? "right" : "left"}
                className="!bg-[#F7F9FC] !text-[#667085] !text-md md:!text-lg !font-medium"
              >
                {headCell.label}
              </TableCell>
            )
        )}
      </TableRow>
    </TableHead>
  );
}

export function EnhancedTableToolbar({
  title,
  uniqueName,
  onToggleFilter,
  isFilterOpen,
  hiddenColumns,
  headCells,
  onColumnToggle,
  filterRef, // Added ref for filter dropdown
}) {
  return (
    <Toolbar className="flex flex-col gap-5 mb-5 lg:flex-row">
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
        className="text-[#05004E] lg:!text-3xl"
      >
        {title}
      </Typography>

      <div className="flex gap-5">
        {uniqueName === "My-Schedule" && (
          <>
            <Tooltip title="Filter list">
              <button
                className="border px-6 h-11 text-base rounded-lg flex gap-2 items-center justify-center border-gray-500"
                onClick={onToggleFilter}
              >
                <img src={filterIcon} alt="filter icon" />
                Filter
              </button>
            </Tooltip>
            {isFilterOpen && (
              <div ref={filterRef} className="absolute  mt-7 ml-7 p-7 bg-white shadow-lg border rounded-md z-50">
                {headCells.map((column) => (
                  <div key={column.id} className="flex    items-center gap-3">
                    <input
                    className="h-4 w-4 "
                      type="checkbox"
                      checked={!hiddenColumns.includes(column.id)}
                      onChange={() => onColumnToggle(column.id)}
                    />
                    <label className="my-1">{column.label}</label>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {uniqueName === "Targeted-Audience" && (
          <div>
            <Button className="!bg-secondary !text-white !w-28 !h-11 text-base !rounded-lg flex gap-2 items-center justify-center">
              <img src={PlusIcon} alt="plus" />
              Add New
            </Button>
          </div>
        )}

        <Tooltip title="Search">
          <div className="relative rounded-lg">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src={searchIcon} alt="search icon" />
            </div>
            <input
              type="text"
              placeholder="Search…"
              aria-label="search"
              className="pl-10 pr-3 py-2 w-40 border border-gray-400 rounded-md outline-none"
            />
          </div>
        </Tooltip>
      </div>
    </Toolbar>
  );
}

export default function DataTable({ headCells, rows, title, uniqueName }) {
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;
  const [open, setOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [hiddenColumns, setHiddenColumns] = useState(() => {
    const storedColumns = localStorage.getItem("hiddenColumns");
    return storedColumns ? JSON.parse(storedColumns) : [];
  });
  
  const filterRef = useRef(null); // Create a ref for the filter dropdown

  useEffect(() => {
    localStorage.setItem("hiddenColumns", JSON.stringify(hiddenColumns));
  }, [hiddenColumns]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleToggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const handleColumnToggle = (columnId) => {
    setHiddenColumns((prevHiddenColumns) =>
      prevHiddenColumns.includes(columnId)
        ? prevHiddenColumns.filter((id) => id !== columnId)
        : [...prevHiddenColumns, columnId]
    );
  };

  const handleDelete = (id) => {
    console.log("Delete", id);
  };

  const handleDeleteTarget = (id) => {
    console.log("DeleteTarget", id);
  };

  const handleUpdate = (id) => {
    console.log("Update", id);
  };

  const handleUpdateTarget = (id) => {
    console.log("UpdateTarget", id);
    handleOpen();
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const visibleRows = useMemo(
    () => rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage),
    [page, rowsPerPage, rows]
  );
 
  const navigate = useNavigate();
  const handleContinue = () => {
    handleClose();
    navigate("/my-targeted-audience/filter-audience");
  };
  
  return (
    <div className="bg-white shadow-[#EEEEEE] shadow-lg rounded-3xl h-full p-5 relative z-30">
      <EnhancedTableToolbar
        title={title}
        uniqueName={uniqueName}
        onToggleFilter={handleToggleFilter}
        isFilterOpen={isFilterOpen}
        hiddenColumns={hiddenColumns}
        headCells={headCells}
        onColumnToggle={handleColumnToggle}
        filterRef={filterRef} // Pass the ref to the toolbar
      />
      <div className="overflow-x-auto h-full rounded-xl border">
        <TableContainer
          sx={{
            overflowY: { xs: "auto", xl: "visible" },
          }}
        >
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
            stickyHeader
          >
            <EnhancedTableHead headCells={headCells} hiddenColumns={hiddenColumns} />
            <TableBody>
              {visibleRows.map((row) => (
                <TableRow hover key={row.id}>
                  {headCells.map(
                    (headCell, index) =>
                      !hiddenColumns.includes(headCell.id) && (
                        <TableCell
                          key={headCell.id}
                          className={`!text-md  lg:!text-lg ${
                            index === 0 ? "!text-gray-800 !font-semibold" : ""
                          } ${
                            uniqueName === "Targeted-Audience" && index === 1
                              ? "!text-gray-800 !font-semibold"
                              : ""
                          }`}
                        >
                          {headCell.id === "action" ? (
                            <div className="flex space-x-2">
                              {uniqueName === "Saved-Work" ? (
                                <>
                                  <button
                                    onClick={() => handleCompleteOrder(row.id)}
                                    className="flex items-center bg-primary text-white p-4 rounded-lg"
                                  >
                                    Complete Your Order
                                  </button>
                                  <button onClick={() => handleDelete(row.id)}>
                                    <img src={Delete} alt="delete button" />
                                  </button>
                                </>
                              ) : uniqueName === "My-Schedule" ? (
                                <div>
                                  <NavLink to="/my-schedule-flyer/update">
                                    <button onClick={() => handleUpdate(row.id)}>
                                      <img src={Update} alt="update button" />
                                    </button>
                                  </NavLink>
                                  <button className="px-2">
                                    <img src={Divider} alt="divider button" />
                                  </button>
                                  <button onClick={() => handleDelete(row.id)}>
                                    <img src={Delete} alt="delete button" />
                                  </button>
                                </div>
                              ) : uniqueName === "Targeted-Audience" ? (
                                <div>
                                  <button onClick={() => handleUpdateTarget(row.id)}>
                                    <img src={Update} alt="update button" />
                                  </button>
                                  <button
                                    className="px-2"
                                    onClick={() => handleDeleteTarget(row.id)}
                                  >
                                    <img src={Delete} alt="delete button" />
                                  </button>
                                </div>
                              ) : (
                                row[headCell.id]
                              )}
                            </div>
                          ) : headCell.id === "status" ? (
                            <span
                            className={
                              uniqueName === "My-Schedule"
                                ? row.status === "Completed"
                                  ? "text-green-500 font-normal font-roboto"
                                  : row.status === "Pending"
                                  ? "text-orange-500 font-normal font-roboto"
                                  : row.status === "Canceled"
                                  ? "text-red-500 font-normal font-roboto"
                                  : ""
                                : uniqueName === "Saved-Work" && row.status === "Draft"
                                ? "text-orange-500 font-normal font-roboto"
                                : ""
                            }
                          >
                            {row.status}
                          </span>
                        ) : (
                          row[headCell.id]
                        )}
                        </TableCell>
                      )
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <CustomPagination
        rowsPerPage={rowsPerPage}
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
      />
     {/* Modal Component */}
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        className="flex justify-center items-center h-full w-full"
      >
        <Box className="flex justify-center outline-none p-10 rounded-2xl h-3/4 lg:h-2/4 w-5/6 lg:w-2/5 gap-5 flex-col items-center bg-white relative">
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
          <Typography
            className="text-xl md:!text-3xl text-center"
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
          >
            Enter Your Filter Name
          </Typography>
          <Typography
            id="keep-mounted-modal-description"
            className="w-full"
            sx={{ mt: 2 }}
          >
            <input
              type="text"
              className="border outline-none h-12 rounded-xl w-full p-2"
            />
          </Typography>
          
          <button
            className="!bg-secondary !text-white !w-52 !h-11 text-base !rounded-full flex gap-2 items-center justify-center"
            onClick={handleContinue}  // Call handleContinue on button click
            type="submit"
            >
            Continue
          </button>
        
        </Box>
      </Modal>
    </div>
  );
}
