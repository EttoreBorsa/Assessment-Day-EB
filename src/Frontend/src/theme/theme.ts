// Font
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

// Material
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
  },
});

export default theme;