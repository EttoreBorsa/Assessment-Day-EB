// React router
import { BrowserRouter as Router } from "react-router-dom";

// Material
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";

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
          <Header />
          <Container
            disableGutters
            maxWidth="xl"
            sx={{ py: 4, px: 4 }}
          >
            <AppRoutes />
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;