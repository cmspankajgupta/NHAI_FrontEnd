import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NEmblem from "../../assets/images/logo/National-Emblem.svg";
import NHAI from "../../assets/images/logo/NHAI.svg";
import "./Header.scss";
import { HorizontalRule } from "@mui/icons-material";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <div className="DesktopMenu-section">
    <AppBar
      sx={{ backgroundColor: "#ecf0f5", boxShadow: "none", color: "black",}}
    >
      <Toolbar justify="flex-end"
        sx={{
          justifyContent: "space-between",
          padding: isMobile ? "0 8px" : "0",
          maxWidth: '90%',
          marginLeft: '5%',
           marginRight: '5%'
          // margin: '0 auto'
        }}
      >
        <Box display="flex" alignItems="center">
          <img
            src={NEmblem}
            alt="National Emblem Logo"
            style={{ height: "30px", marginRight: "10px" }}
          />
<Divider orientation="vertical" sx={{height:"20px", mr:1, width:'4px' }}/>
          <img
            src={NHAI}
            alt="NHAI Logo"
            style={{ height: "30px"}}
          />
          <MenuItem className="header-text" sx={{fontWeight:600}}>
            National Highway Authority of India
          </MenuItem>
        </Box>

        {/* Menu button for mobile */}
        {isMobile && (
          <IconButton onClick={handleDrawerToggle} sx={{ color: "black" }}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Desktop Menu */}
        {!isMobile && (
          <Box display="flex" alignItems="center">
            <Box sx={{ mx: 2, cursor: "pointer" }} className="header-text">
              What's New
            </Box>

            <Box sx={{ mx: 2, cursor: "pointer" }} className="header-text">
              Notices
            </Box>

            <Box>
              <Box
                onClick={handleMenuOpen}
                sx={{
                  mx: 2,
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                className="header-text"
              >
                Help Center
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8 10.036L4.231 6.267l0.703-0.703L8 8.631l3.066-3.067 0.703 0.703L8 10.036z"
                    fill="#1C1B1F"
                  />
                </svg>
              </Box>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose} className="header-text">
                  FAQ
                </MenuItem>
                <MenuItem onClick={handleMenuClose} className="header-text">
                  Contact Support
                </MenuItem>
              </Menu>
            </Box>

            <Box sx={{ mx: 2 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g>
                  <path
                    d="M11.5 5.423V2h1v3.423h-1ZM17 7.711l-0.708-0.727 2.402-2.408 0.708 0.732-2.402 2.403ZM18.577 12.5V11.5H22v1h-3.423ZM18.69 19.398l-2.402-2.402 0.727-0.727 2.408 2.397-0.733 0.732ZM7.023 7.73L4.583 5.29l0.732-0.694 2.416 2.427-0.708 0.708ZM6.577 19.116h4.115c0.545 0 1.015-0.197 1.41-0.591 0.394-0.394 0.591-0.864 0.591-1.409 0-0.545-0.19-1.011-0.569-1.399-0.38-0.388-0.842-0.582-1.386-0.582h-0.967l-0.365-0.873c-0.259-0.602-0.661-1.078-1.206-1.428-0.545-0.351-1.149-0.526-1.813-0.526-0.923 0-1.705 0.32-2.346 0.961-0.641 0.641-0.962 1.423-0.962 2.346 0 0.975 0.34 1.801 1.019 2.481 0.68 0.68 1.507 1.02 2.481 1.02ZM6.577 20.116c-1.243 0-2.303-0.439-3.182-1.318-0.878-0.878-1.317-1.938-1.317-3.181 0-1.204 0.417-2.223 1.251-3.057 0.834-0.834 1.853-1.251 3.057-1.251 0.91 0 1.736 0.258 2.478 0.774 0.741 0.516 1.267 1.2 1.577 2.053 0.838 0 1.586 0.253 2.245 0.758 0.658 0.505 0.994 1.251 1.007 2.238-0.008 0.822-0.301 1.525-0.88 2.109-0.579 0.584-1.286 0.876-2.121 0.876H6.577ZM13.654 16.746c-0.045-0.166-0.089-0.328-0.135-0.485a15.518 15.518 0 0 1-0.135-0.484c0.789-0.33 1.422-0.832 1.9-1.505 0.477-0.673 0.716-1.43 0.716-2.273 0-1.1-0.392-2.042-1.175-2.825C14.042 8.392 13.1 8 12 8c-1.038 0-1.938 0.347-2.701 1.042-0.763 0.695-1.186 1.562-1.268 2.6a11.34 11.34 0 0 0-1.511-0.129c0.157-1.262 0.71-2.308 1.66-3.139 0.949-0.83 2.056-1.246 3.321-1.246 1.385 0 2.565 0.487 3.539 1.461C17.513 9.436 18 10.615 18 12c0 1.065-0.306 2.027-0.917 2.885-0.611 0.858-1.42 1.478-2.428 1.86Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
            </Box>
          </Box>
        )}

        {/* Mobile Drawer Menu */}
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
          <List>
            <ListItem button onClick={handleDrawerToggle}>
              <ListItemText primary="What's New" />
            </ListItem>
            <ListItem button onClick={handleDrawerToggle}>
              <ListItemText primary="Notices" />
            </ListItem>
            <ListItem button onClick={handleDrawerToggle}>
              <ListItemText primary="Help Center" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default Header;