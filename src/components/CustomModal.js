import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@material-ui/core";

function CustomModal({ children, open, title, handleClose, actions }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Paper>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>

        {actions?.length && (
          <DialogActions>
            {actions.map((action) => (
              <Button
                onClick={action.onClick}
                color={action.color}
                autoFocus={action.autoFocus}
              >
                {action.title}
              </Button>
            ))}
          </DialogActions>
        )}
      </Paper>
    </Dialog>
  );
}

export default CustomModal;
