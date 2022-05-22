import { Link, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

export const NavBar = () => {
  return (
    <nav>
      <Button
        component={RouterLink}
        color="primary"
        to="/explorer"
        sx={{ my: 1, mx: 1.5 }}
      >
        Explorer
      </Button>
      <Button
        component={RouterLink}
        color="primary"
        to="#"
        sx={{ my: 1, mx: 1.5 }}
      >
        Enterprise
      </Button>
      <Button
        component={RouterLink}
        color="primary"
        to="mailto:father@duck.com"
        sx={{ my: 1, mx: 1.5 }}
      >
        Support
      </Button>
    </nav>
  );
};
