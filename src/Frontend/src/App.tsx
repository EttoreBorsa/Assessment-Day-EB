// React router
import { BrowserRouter as Router } from "react-router-dom";

// Material
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";

// Routing
import ShellHeader from "./routing/ShellHeader";
import AppRoutes from "./routing/AppRouter";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <ShellHeader />
        <Container sx={{ pl: 1 }}>
          <AppRoutes />
        </Container>
      </Router>
    </>
  );
}

export default App;