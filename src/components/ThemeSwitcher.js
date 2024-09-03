import { FormControlLabel, Switch } from "@material-ui/core";
import React, { useContext } from "react";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { ColorModeContext } from "App";
import { themeNames } from "utils/constants";

function ThemeSwitcher() {
  let { mode, toggleMode } = useContext(ColorModeContext);

  const switchMode = (e) => {
    if (e.target.checked) toggleMode(themeNames.DARK_THEME);
    else toggleMode(themeNames.LIGHT_THEME);
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            color="primary"
            onChange={switchMode}
            checked={mode == themeNames.DARK_THEME}
          />
        }
        label={
          mode === themeNames.DARK_THEME ? (
            <Brightness7Icon nativeColor="#000" />
          ) : (
            <Brightness4Icon />
          )
        }
      />
    </div>
  );
}

export default ThemeSwitcher;
