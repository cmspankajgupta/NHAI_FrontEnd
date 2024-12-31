import NEmblem from "../../assets/images/logo/National-Emblem.svg";
import NHAI from "../../assets/images/logo/NHAI.svg";
import MenuIcon from '@mui/icons-material/Menu';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import {
  Typography,
  TextField,
  InputAdornment
} from "@mui/material";
import { Paper } from '@mui/material';
import { useState } from "react";

const AccessHeader = () => {
  const [options] = useState(['Apple', 'Banana', 'Cherry', 'Date', 'Grapes', 'Orange']); // Example options
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event, value) => {
    setSearchValue(value);
    console.log('Selected/Typed value:', value); // Optional: For debugging or further processing
  };

  return (
    <header>
      <div style={{ backgroundColor: "#ECF1F6", width: "100%", height: "72px", padding: "0px 40px 0px 40px", display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: "flex", alignItems: 'center', height: "40px", marginTop: '16px' }}>
          <MenuIcon sx={{ width: "24px", height: "24px" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginRight: "56px" }}>
            <img
              src={NEmblem}
              alt="National Emblem Logo"
              style={{ width: "24.75px", height: "40px", margin: "0 11px 0 40px" }}
            />
            <Typography sx={{ marginRight: '16px', fontSize: '18px', color: "#BDC1C5" }}>|</Typography>
            <img src={NHAI} alt="NHAI Logo" style={{ width: "48.52px", height: "40px", marginRight: "12.48px" }} />
            <div style={{ width: "103px", height: "34px" }}>
              <Typography variant="h6" fontWeight={500} fontSize={12}>
                NHAI
              </Typography>
              <Typography fontWeight={700} fontSize={16}>
                Data Lake 3.0
              </Typography>
            </div>
          </div>
          <Paper
            elevation={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '4px',
              borderRadius: '8px',
              width: "528px",
              margin: '0 auto',
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
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: 'none', // Remove the outline
                      },
                      '&:hover fieldset': {
                        border: 'none', // Remove outline on hover
                      },
                      '&.Mui-focused fieldset': {
                        border: 'none', // Remove outline on focus
                      },
                      '& input::placeholder': {
                        fontSize: '14px', // Adjust font size (affects width)
                        width: "57px",
                        height: '16px', // Adjust height
                        fontWeight: "500px",
                        lineHeight: '16.94px', // Match line height
                        color: '#000000', // Adjust placeholder color
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
        </div>
        <div style={{ display: "flex", alignItems: 'center' }}>
          <NotificationsNoneIcon sx={{ width: "24px", height: "24px", marginRight: "24px" }} />
          <ContactSupportOutlinedIcon sx={{ width: "24px", height: "24px", marginRight: "24px" }} />
          <div
            style={{
              width: 32, // Diameter of the circle
              height: 32, // Diameter of the circle
              borderRadius: "50%", // Makes it circular
              backgroundColor: "#034EA2", // Background color
              color: "#ffffff", // Text color
              display: "flex", // Use flexdiv for centering
              alignItems: "center", // Vertical alignment
              justifyContent: "center", // Horizontal alignment
              fontSize: "12px", // Font size
              fontWeight: `--font-semibold: 600`, // Bold text
              textTransform: "uppercase", // Ensure uppercase letters
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
