import React, { useContext } from "react";
import CustomModal from "./CustomModal";
import RouteEditForm from "./RouteEditForm";
import { MuiThemeProvider } from "@material-ui/core";
import getTheme from "customTheme";
import { ColorModeContext } from "App";

function RouteEditModal({ open, handleClose, currData }) {
  let { mode } = useContext(ColorModeContext);
  return (
    <MuiThemeProvider theme={() => getTheme(mode)}>
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
    </MuiThemeProvider>
  );
}

export default RouteEditModal;
