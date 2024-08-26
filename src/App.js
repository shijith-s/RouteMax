import RoutesView from "pages/RoutesView";
import "./styles/App.css";
import { createContext, useState } from "react";

export const colorModeContext = createContext();

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((mode) => (mode == "light" ? "dark" : "light"));
  };
  return (
    <colorModeContext.Provider value={{ mode, toggleMode }}>
      <div className="App">
        <RoutesView />
      </div>
    </colorModeContext.Provider>
  );
}

export default App;
