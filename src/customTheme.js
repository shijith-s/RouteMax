import { createMuiTheme } from "@material-ui/core/styles";

export const lightTheme = createMuiTheme({
  // palette values for light mode
  palette: {
    primary: {
      main: "#05A792",
      contrastText: "#000000",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      paper: "#FFFFFF",
      default: "#fafafa",
    },
    text: {
      primary: "#000000",
    },
    divider: "#05A792",
  },
});

export const darkTheme = createMuiTheme({
  // palette values for dark mode
  palette: {
    primary: {
      main: "#05A792",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF",
    },
    background: {
      paper: "#424242",
      default: "#fafafa",
    },
    text: {
      primary: "#FFFFFF",
    },
    divider: "#05A792",
  },
});
