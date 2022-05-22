import { Link } from "@mui/material";
import React from "react";

export const NavBar = () => {
  return (
    <nav>
      <Link
        variant="button"
        color="text.primary"
        href="/explorer"
        sx={{ my: 1, mx: 1.5 }}
      >
        Explorer
      </Link>
      <Link
        variant="button"
        color="text.primary"
        href="#"
        sx={{ my: 1, mx: 1.5 }}
      >
        Enterprise
      </Link>
      <Link
        variant="button"
        color="text.primary"
        href="mailto:father@duck.com"
        sx={{ my: 1, mx: 1.5 }}
      >
        Support
      </Link>
    </nav>
  );
};
