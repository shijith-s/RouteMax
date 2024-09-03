import React from "react";
import CustomModal from "./CustomModal";
import RouteEditForm from "./RouteEditForm";

function RouteEditModal({ open, handleClose, currData }) {
  return (
    <CustomModal
      open={open}
      title={"Edit Route Data"}
      handleClose={handleClose}
    >
      <RouteEditForm currData={currData} handleClose={handleClose} />
    </CustomModal>
  );
}

export default RouteEditModal;
