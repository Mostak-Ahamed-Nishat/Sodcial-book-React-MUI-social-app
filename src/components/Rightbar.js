import { Box } from "@mui/material";
import React from "react";

export default function Rightbar() {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
      flex={2}
      bgcolor="lightblue"
      p={2}
    >
      <h1>This is Right bar</h1>
    </Box>
  );
}
