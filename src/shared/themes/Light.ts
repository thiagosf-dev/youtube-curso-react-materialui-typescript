import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    background: {
      default: "#f7f6f3",
      paper: "#ffffff",
    },
    primary: {
      contrastText: "#ffffff",
      dark: yellow[800],
      light: yellow[500],
      main: yellow[700],
    },
    secondary: {
      contrastText: "#ffffff",
      dark: cyan[400],
      light: cyan[300],
      main: cyan[500],
    },
  },
});
