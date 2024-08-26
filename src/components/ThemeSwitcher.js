import { FormControlLabel, Switch } from "@material-ui/core";
import React, { useContext } from "react";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { colorModeContext } from "App";

function ThemeSwitcher() {
  let { mode, toggleMode } = useContext(colorModeContext);

  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            color="primary"
            onChange={toggleMode}
            checked={mode == "dark"}
          />
        }
        label={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      />
    </div>
  );
}

export default ThemeSwitcher;
