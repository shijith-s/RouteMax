import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";

function CustomModal({ children, open, title, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default CustomModal;
