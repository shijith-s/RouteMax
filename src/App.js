import RoutesView from "pages/RoutesView";
import "./styles/App.css";
import { createContext, useState } from "react";

export const ColorModeContext = createContext();

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode == "light" ? "dark" : "light");
  };
  return (
    <ColorModeContext.Provider value={{ mode, toggleMode }}>
      <div className="App">
        <RoutesView />
      </div>
    </ColorModeContext.Provider>
  );
}

export default App;
