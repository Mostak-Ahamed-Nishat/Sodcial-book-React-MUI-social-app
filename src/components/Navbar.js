import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { AddCard, Email, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

//Search Bar design

const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  color: "red",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
  "&:hover": {
    cursor: "pointer",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

//Change Open Handler

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const changeOpen = (e) => {
    setOpen(true);
    console.log("Open =" + open);
  };

  const handleClose = (e) => {
    setOpen(false);
  };

  return (
    <Box>
      <AppBar position="stick">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            Socialbook
          </Typography>
          <AddCard
            sx={{
              display: { xs: "block", sm: "none" },
              height: "40px",
              width: "40px",
            }}
          />

          <SearchBar>
            <InputBase placeholder="Search.." sx={{ width: "100%" }} />
          </SearchBar>

          <Icons>
            <Badge color="secondary" badgeContent={4}>
              <Email />
            </Badge>
            <Badge color="secondary" badgeContent={4}>
              <Notifications />
            </Badge>

            <Avatar
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={changeOpen}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{
                width: "30ox",
                height: "40px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              src="https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Icons>

          <UserBox>
            <Avatar
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={changeOpen}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{
                width: "30x",
                height: "40px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              src="https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Typography variant="span">Nishat</Typography>
          </UserBox>

          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            // anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              marginTop: "38px",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
