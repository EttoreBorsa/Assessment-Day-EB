// React router
import { BrowserRouter as Router } from "react-router-dom";

// Material
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box, Container } from "@mui/material";

// Routing
import AppRoutes from "./routing/AppRouter";

// Components
import Header from "./components/layout/Header";

// Theme
import theme from "./theme/theme"

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box sx={{ height: "100vh", minHeight: "500px", display: "flex", flexDirection: "column" }}
          >
            <Header />
            <Container
              disableGutters
              maxWidth="xl"
              sx={{ flex: "1", minHeight: 0, display: "flex", flexDirection: "column", py: 4, px: 4 }}
            >
              <AppRoutes />
            </Container>
          </Box>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;