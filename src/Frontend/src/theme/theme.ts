// Font
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

// Material
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#eef5f9"
    },
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: `
          0px 3px 4px 0px rgba(0, 0, 0, 0.03),
          0px 0px 1px 0px rgba(0, 0, 0, 0.1)
        `
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: '#ebf1f6',
        },
      },
    },
    


  },
});

export default theme;