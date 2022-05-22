import { Typography, Link } from "@mui/material";
import React from "react";

export const Copyright = ()=> {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
       
        <Link color="inherit" href="https://franz.media/">
          Franz Krekeler
        </Link>{' '}
        {new Date().getFullYear()}.
      </Typography>
    );
  }
  