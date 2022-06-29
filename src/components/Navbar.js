import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
// import { alpha } from "@mui/material/styles";
import {
  AddCard,
  AddComment,
  Email,
  Notifications,
  SearchOutlined,
} from "@mui/icons-material";
import { bgcolor, color } from "@mui/system";
// import SearchIcon from "@mui/icons-material/Search";

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
  display: "flex",
  gap: "15px",
  alignItems: "center",
}));

export default function Navbar() {
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
            <InputBase placeholder="Search.." />
          </SearchBar>

          <Icons>
            <Badge color="secondary" badgeContent={4}>
              <Email />
            </Badge>
            <Badge color="secondary" badgeContent={4}>
              <Notifications />
            </Badge>

            <Avatar
              sx={{
                width: "30ox",
                height: "40px",
              }}
              src="https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Icons>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
