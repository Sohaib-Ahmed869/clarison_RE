import React from "react";
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
import { NavLink } from "react-router-dom";

function EnhancedTableHead({ headCells }) {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              className="!bg-[#F7F9FC] text-gray-700 font-semibold"
            >
              {headCell.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  

function EnhancedTableToolbar({ title, uniqueName }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Toolbar className="flex flex-col gap-5 mb-5   lg:flex-row">
      {/* title  */}
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
        className="text-[#05004E]  lg:!text-3xl"
      >
        {title}
      </Typography>

      <div className="flex gap-5 ">
        {/* filter button  */}
        {uniqueName === "My-Schedule" && (
          <Tooltip title="Filter list">
            <button className="border px-6  h-11 text-base rounded-lg flex gap-2 items-center justify-center border-gray-500 ">
              <img src={filterIcon} alt="filter icon" />
              Filter
            </button>
          </Tooltip>
        )}

        {/* add new button  */}
        {uniqueName === "Targeted-Audience" && (
          <div>
            <Button
              className="!bg-secondary !text-white  !w-28 !h-11 text-base !rounded-lg flex gap-2 items-center justify-center"
              onClick={handleOpen}
            >
              <img src={PlusIcon} alt="plus" />
              Add New
            </Button>

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
                  onClick={handleClose}
                  type="submit"
                >
                  Continue
                </button>
              </Box>
            </Modal>
          </div>
        )}

        {/* Search baar  */}
        <Tooltip title="Search">
          <div className="relative   rounded-lg">
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
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 5;

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const visibleRows = React.useMemo(
    () => rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage),
    [page, rowsPerPage, rows]
  );

  return (
    <div className="bg-white rounded-3xl h-full p-5 relative z-30">
      <EnhancedTableToolbar title={title} uniqueName={uniqueName} />
      <div className="overflow-x-auto h-full  rounded-xl border">
        <TableContainer
          sx={{
            // maxHeight: { xs: "350px", xl: "auto" }, // Fixed height below xl breakpoint
            overflowY: { xs: "auto", xl: "visible" }, // Enable vertical scroll below xl
          }}
       
        >
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
            stickyHeader
          >
            <EnhancedTableHead headCells={headCells} />
            <TableBody>
              {visibleRows.map((row) => (
                <TableRow hover key={row.id}>
                  {headCells.map((headCell) => (
                    <TableCell key={headCell.id}>
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
                              <NavLink to="/user/my-schedule-flyer/update">
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
                              <NavLink
                                className="pr-2"
                                to="/user/my-schedule-flyer/update"
                              >
                                <button onClick={() => handleUpdate(row.id)}>
                                  <img src={Update} alt="update button" />
                                </button>
                              </NavLink>
                              <button onClick={() => handleDelete(row.id)}>
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
                                ? "text-green-500 font-semibold"
                                : row.status === "Pending"
                                ? "text-orange-500 font-semibold"
                                : row.status === "Canceled"
                                ? "text-red-500 font-semibold"
                                : ""
                              : uniqueName === "Saved-Work" &&
                                row.status === "Draft"
                              ? "text-orange-500 font-semibold"
                              : ""
                          }
                        >
                          {row[headCell.id]}
                        </span>
                      ) : (
                        row[headCell.id]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <CustomPagination
        count={rows.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
      />
    </div>
  );
}
