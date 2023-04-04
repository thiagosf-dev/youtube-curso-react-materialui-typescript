import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    background: {
      default: "#202124",
      paper: "#303134",
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
