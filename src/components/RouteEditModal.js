import React from "react";
import CustomModal from "./CustomModal";
import RouteEditForm from "./RouteEditForm";
import color from "@material-ui/core/colors/amber";

function RouteEditModal({ open, handleClose, currData }) {
  return (
    <CustomModal
      open={open}
      title={"Edit Route Data"}
      handleClose={handleClose}
      // actions={[
      //   { title: "Cancel", onClick: handleClose },
      //   { title: "Ok", onClick: handleClose, color: "primary" },
      // ]}
    >
      <RouteEditForm currData={currData} handleClose={handleClose} />
    </CustomModal>
  );
}

export default RouteEditModal;
