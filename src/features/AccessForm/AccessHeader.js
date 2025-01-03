import NEmblem from "../../assets/images/logo/National-Emblem.svg";
import NHAI from "../../assets/images/logo/NHAI.svg";
import MenuIcon from '@mui/icons-material/Menu';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import {
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Paper } from '@mui/material';
import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { Block } from "@mui/icons-material";
import './AccessForm.scss'
import { light } from "@mui/material/styles/createPalette";

const AccessHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [options] = useState(['Apple', 'Banana', 'Cherry', 'Date', 'Grapes', 'Orange']); // Example options
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event, value) => {
    setSearchValue(value);
    console.log('Selected/Typed value:', value); // Optional: For debugging or further processing
  };

  return (
    // <header>
    //   <div style={{ backgroundColor: "#ECF1F6", width: "100%", height: "72px", padding: "0px 40px", display: 'flex', justifyContent: 'space-between' }}>
    //     <div style={{ display: "flex", alignItems: 'center', height: "40px", marginTop: '16px' }}>
    //       <MenuIcon sx={{ width: "24px", height: "24px" }} />
    //       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginRight: "56px" }}>
    //         <img
    //           src={NEmblem}
    //           alt="National Emblem Logo"
    //           style={{ width: "24.75px", height: "40px", margin: "0 11px 0 40px" }}
    //         />
    //         <Typography sx={{ marginRight: '16px', fontSize: '18px', color: "#BDC1C5" }}>|</Typography>
    //         <img src={NHAI} alt="NHAI Logo" style={{ width: "48.52px", height: "40px", marginRight: "12.48px" }} />
    //         <div style={{ width: "103px", height: "34px" }}>
    //           <Typography variant="h6" fontWeight={500} fontSize={12}>
    //             NHAI
    //           </Typography>
    //           <Typography fontWeight={700} fontSize={16}>
    //             Data Lake 3.0
    //           </Typography>
    //         </div>
    //       </div>
    //       <Paper
    //         elevation={3}
    //         sx={{
    //           display: 'flex',
    //           alignItems: 'center',
    //           padding: '4px',
    //           borderRadius: '8px',
    //           width: "528px",
    //           margin: '0 auto',
    //         }}
    //         className="paper-classss"
    //       >
    //         <Autocomplete
    //           freeSolo
    //           options={options}
    //           inputValue={searchValue}
    //           onInputChange={handleSearchChange}
    //           renderInput={(params) => (
    //             <TextField
    //               {...params}
    //               placeholder="Search"
    //               variant="outlined"
    //               size="small"
    //               sx={{
    //                 '& .MuiOutlinedInput-root': {
    //                   '& fieldset': {
    //                     border: 'none', // Remove the outline
    //                   },
    //                   '&:hover fieldset': {
    //                     border: 'none', // Remove outline on hover
    //                   },
    //                   '&.Mui-focused fieldset': {
    //                     border: 'none', // Remove outline on focus
    //                   },
    //                   '& input::placeholder': {
    //                     fontSize: '14px', // Adjust font size (affects width)
    //                     width: "57px",
    //                     height: '16px', // Adjust height
    //                     fontWeight: "500px",
    //                     lineHeight: '16.94px', // Match line height
    //                     color: '#000000', // Adjust placeholder color
    //                   },
    //                 },
    //               }}
    //               InputProps={{
    //                 ...params.InputProps,
    //                 startAdornment: (
    //                   <InputAdornment position="start">
    //                     <SearchIcon />
    //                   </InputAdornment>
    //                 ),
    //               }}
    //             />
    //           )}
    //           sx={{ flexGrow: 1 }}
    //         />
    //       </Paper>
    //     </div>
    //     <div style={{ display: "flex", alignItems: 'center' }}>
    //       <NotificationsNoneIcon sx={{ width: "24px", height: "24px", marginRight: "24px" }} />
    //       <ContactSupportOutlinedIcon sx={{ width: "24px", height: "24px", marginRight: "24px" }} />
    //       <div
    //         style={{
    //           width: 32, // Diameter of the circle
    //           height: 32, // Diameter of the circle
    //           borderRadius: "50%", // Makes it circular
    //           backgroundColor: "#034EA2", // Background color
    //           color: "#ffffff", // Text color
    //           display: "flex", // Use flexdiv for centering
    //           alignItems: "center", // Vertical alignment
    //           justifyContent: "center", // Horizontal alignment
    //           fontSize: "12px", // Font size
    //           fontWeight: `--font-semibold: 600`, // Bold text
    //           textTransform: "uppercase", // Ensure uppercase letters
    //         }}
    //       >
    //         AS
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <header>
    <div
      style={{
        backgroundColor: "#ECF1F6",
        width: "100%",
        height: isMobile ? "auto" : "72px",
        padding: isMobile ? "10px 20px" : "0px 40px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "start" : "center",
        justifyContent: "space-between",
      }}
    >
      {/* Left Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: isMobile ? "10px" : "0",
          // width: "100%",
          justifyContent: isMobile ? "space-between" : "flex-start",
        }}
      >
        <MenuIcon sx={{ width: "24px", height: "24px" }} />
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", marginLeft: "2.41rem" }}>
            <img
              src={NEmblem}
              alt="National Emblem Logo"
              style={{ width: "24.75px", height: "40px", margin: "0 11px" }}
            />
            <span style={{ marginRight: "16px", width:"1px",height:"17px", color: "#BDC1C5" }}>|</span>
            <img
              src={NHAI}
              alt="NHAI Logo"
              style={{ width: "48.52px", height: "40px", marginRight: "12.48px" }}
            />
            <div style={{display:'flex',flexDirection:"column",minWidth:"110px"}}>
              <h6 style={{fontWeight:'500',fontSize:'12px'}}>
                NHAI
              </h6>
              <spam style={{fontWeight:'700',fontSize:'16px',lineHeight:"19px"}}>
                Data Lake 3.0
              </spam>
            </div>
          </div>
        )}
      </div>

      {/* Search Bar */}
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "4px",
          borderRadius: "8px",
          width: isMobile ? "100%" : "528px",
          margin: isMobile ? "10px 0" : "0 369px 0 56px",
        }}
      >
        <Autocomplete
          freeSolo
          options={options}
          inputValue={searchValue}
          onInputChange={handleSearchChange}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search"
              variant="outlined"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
          sx={{ flexGrow: 1 }}
        />
      </Paper>
      {/* Right Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "space-between" : "flex-end",
          width: isMobile ? "100%" : "auto",
        }}
      >
        <NotificationsNoneIcon sx={{ width: "24px", height: "24px", marginRight: "24px" }} />
        <ContactSupportOutlinedIcon sx={{ width: "24px", height: "24px", marginRight: "24px" }} />
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            backgroundColor: "#034EA2",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          AS
        </div>
      </div>
    </div>
  </header>
  );
};

export default AccessHeader;
