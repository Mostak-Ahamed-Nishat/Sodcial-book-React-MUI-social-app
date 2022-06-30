import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
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
      p={2}
    >
      <Box position="fixed">
        <Typography variant="h6">Online Friends</Typography>
        <AvatarGroup total={24}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </AvatarGroup>
      </Box>
    </Box>
  );
}
