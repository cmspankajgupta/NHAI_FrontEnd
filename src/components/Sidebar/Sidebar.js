import React from "react";
import { Drawer, List, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { 
          width: drawerWidth, 
          boxSizing: "border-box", 
          bgcolor: '#f9f9f9',
        },
      }}
    >

      <Toolbar 
        variant="h6" 
        sx={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          mt: 3, 
        }}
      >
        <Typography noWrap>
          Datalake 3.0
        </Typography>
      </Toolbar>

      <List> {/* List background color */}
        {[
          "Home",
          "Dashboard",
          "Reports",
          "Teams & Users",
          "Activity Management",
          "Highway Operations Management",
          "AMS",
          "Road Safety",
          "Help",
          "Settings",
        ].map((text) => (
          <ListItemButton key={text}>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
