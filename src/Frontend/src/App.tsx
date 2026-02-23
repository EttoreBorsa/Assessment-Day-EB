// React router
import { BrowserRouter as Router } from "react-router-dom";

// Material
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";

// Routing
import AppRoutes from "./routing/AppRouter";

// Components
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Header />
        <Container sx={{ pl: 1 }}>
          <AppRoutes />
        </Container>
      </Router>
    </>
  );
}

export default App;