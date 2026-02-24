// React router
import { NavLink } from "react-router-dom";

// Material
import { AppBar, Container, Toolbar, Box, Typography } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";

export default function Header() {
  return (
    <AppBar position="static">
      <Container
        disableGutters
        maxWidth="xl"
        sx={{ px: 4 }}
      >
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", alignItems: "center", gap: 2 }}
        >
          <HomeButton />
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <HeaderButton to="/SupplierList">Suppliers</HeaderButton>
            <HeaderButton to="/CustomerList">Customers</HeaderButton>
            {/* <HeaderButton to="/EmployeeList">Employees</HeaderButton> */}
            <HeaderLinkButton href="/swagger">Swagger UI</HeaderLinkButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function HomeButton() {
  return (
    <Typography
      component={NavLink}
      to="/"
      variant="h6"
      sx={{ color: "#ffffff", textDecoration: "none" }}
    >
      Test Application
    </Typography>
  );
}

interface HeaderButtonProps extends ButtonProps {
  to: string;
}

function HeaderButton(props: HeaderButtonProps) {
  const { to, ...other } = props; // cosa fa?

  return (
    <Button
      component={NavLink}
      to={to}
      disableRipple
      {...other}
      sx={{
        display: "block",
        p: 0,
        color: "rgba(255, 255, 255, 0.8)",
        "&:hover": {
          color: "#ffffff",
        },
        "&.active": {
          color: "#ffffff",
        },
      }}
    ></Button>
  );
}

function HeaderLinkButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      sx={{
        display: "block",
        p: 0,
        color: "rgba(255, 255, 255, 0.8)",
        "&:hover": {
          color: "#ffffff",
        },
      }}
    ></Button>
  );
}