import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";

export default function Navbar() {
  return (
    <Box>
      <AppBar position="stick">
        <Toolbar>Navbar</Toolbar>
      </AppBar>
    </Box>
  );
}
