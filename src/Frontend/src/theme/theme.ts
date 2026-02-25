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
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiSvgIcon-root": {
            fontSize: "20px",
          },
          "& .MuiInputBase-input": {
            color: theme.palette.text.secondary,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#dee2e6",
            transition: 'border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
          },
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: "#ebf1f6",
        },
      },
    },
  },
});

export default theme;