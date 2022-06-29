import { Box } from "@mui/material";
import React from "react";

export default function Sidebar() {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
      flex={1}
      bgcolor="lightpink"
    >
      <h1>This is Sidebar</h1>
    </Box>
  );
}
