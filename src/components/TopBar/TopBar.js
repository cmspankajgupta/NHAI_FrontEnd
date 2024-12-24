import React from "react";
import { AppBar, Toolbar, Box, InputBase, Avatar, Divider, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"; // Bell Icon

const TopBar = () => {
  return (
    <Box >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "white",
          color: "black",
          boxShadow: "none",
        }}
      >
        {/* Centered Search and Profile Section */}
        <Toolbar sx={{
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: { xs: "50px", sm: "50px" },  // Min height 50px for all screen sizes, adjust if needed
          px: 1
        }}>
          {/* Empty Box for Left Spacing */}
          <Box sx={{ flex: 1 }} />

          {/* Centered Search Box */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "white",
              border: "1px solid #f0f0f0",
              borderRadius: 1,
              minWidth: "300px",
              px: 1, // Padding for input
            }}
          >
            <InputBase
              placeholder="Search text"
              sx={{ flex: 1 }}
            />
            <SearchIcon sx={{ color: "gray", ml: 1 }} /> {/* Search Icon on the right */}
          </Box>

          {/* Profile Section */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 2 }}>
            <IconButton color="inherit">
              <NotificationsNoneIcon sx={{ color: '#757575' }} /> {/* Bell Icon */}
            </IconButton>
            <Avatar sx={{ bgcolor: "#ccc" }}>N</Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Divider below the header */}
      <Divider />
    </Box>
  );
};

export default TopBar;
