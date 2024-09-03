import RoutesView from "pages/RoutesView";
import "./styles/App.css";
import { createContext, useState } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { darkTheme, lightTheme } from "customTheme";
import { themeNames } from "utils/constants";

export const ColorModeContext = createContext();

function App() {
  const [mode, setMode] = useState(themeNames.LIGHT_THEME);
  const [theme, setTheme] = useState(lightTheme);

  const toggleMode = (mode) => {
    setMode(mode);
    let themeObj = mode == themeNames.LIGHT_THEME ? lightTheme : darkTheme;
    setTheme(themeObj);
  };
  return (
    <MuiThemeProvider theme={theme}>
      <ColorModeContext.Provider value={{ mode, toggleMode }}>
        <div className="App">
          <RoutesView />
        </div>
      </ColorModeContext.Provider>
    </MuiThemeProvider>
  );
}

export default App;
