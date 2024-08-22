import React from "react";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";

function StatusRenderer(props) {
  return props.value == "Locked" ? <LockIcon /> : <LockOpenIcon />;
}

export default StatusRenderer;
