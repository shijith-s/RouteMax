import { amber, deepOrange, grey } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// const lightModePalette = {
//   // palette values for light mode
//   primary: amber,
//   divider: amber[200],
//   text: {
//     primary: grey[900],
//     secondary: grey[800],
//   },
// };

// const darkModePalette = {
//   // palette values for dark mode
//   primary: deepOrange,
//   divider: deepOrange[700],
//   background: {
//     default: "#121212",
//     paper: "#121212",
//   },
//   text: {
//     primary: "#fff",
//     secondary: grey[500],
//   },
// };

const getTheme = (mode) => {
  return createMuiTheme({
    palette: {
      type: mode,
      // ...darkModePalette,
    },
  });
};

export default getTheme;
