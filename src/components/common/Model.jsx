import React from "react";
import UpdateModel from "../../assets/dataTable/model-tick.png";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, Box, Modal } from "@mui/material";
const Model = ({ open, handleClose,title, content }) => {
  return (
    <div>
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
          <img
            src={UpdateModel}
            className="w-20 md:w-28"
            alt="update model image"
          />
          <Typography
            className="text-xl md:!text-3xl text-center"
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
          >
           {title}
          </Typography>
          <Typography
            className="!text-base md:!text-lg text-center !font-normal"
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
          >
            {content}
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
  );
};

export default Model;
