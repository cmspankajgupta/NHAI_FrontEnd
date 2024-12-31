import React from "react";
import {
  Box,
  Button,
  Paper,
  TableContainer,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import "./AccessForm.scss";
import tickImage from '../../assets/svg/check_small.svg'

const MainContentAdminAccess = () => {
  const modules = [
    "RFI",
    "UCC",
    "Account Management",
    "Road Safety Audit",
    "Toilet Maintenance",
  ];
  return (
    <Box className="admin-main-content-box">
      {/* Permissions Table */}
      <Paper className="admin-permissions-paper">
        <Box
          className="admin-header-box"
        >
          <h6 className="body-m font-bold">
            Admin
          </h6>
          {/* <MuiButton
            type="submit"
            name={
              <div style={{display:"flex",alignItems:"center",}}>
                <EditIcon />
                <label className="body-xs font-medium" color="#104685">Edit</label>
              </div>
            }
            variant="outlined"
            // fullWidth
            sx={{
              marginTop: "2.667rem",
              borderRadius: "8.333rem",
              fontWeight: `var(--font-medium)`
            }}
          /> */}
          <Button
      variant="outlined"
      startIcon={<EditIcon sx={{width:"18px", height:"18px"}} />}
      sx={{
        color: "#104685", // Adjust to match the blue
        borderColor: "#9FB5CE", // Light border color
        textTransform: "none",
        borderRadius: "20px",
        lineHeight:"20px",
        fontSize: "14px",
        fontWeight: "500",
        width:"82px",
        height:"32px",
        ":hover": {
          borderColor: "#003366", // Darker hover color
        },
      }}
    >
      Edit
    </Button>
        </Box> 
        <TableContainer> 
          <div className="table-container"> 
            <table>
              <thead>
                <tr className="admin-table-head">
                  <th className="access-th-text">MODULES</th>
                  <th colSpan={4} className="access-th-text">PERMISSIONS</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((module, index) => (
                  <tr className="admin-table-row" key={index}>
                    <td data-label="Module" className="body-s font-medium">{module}</td>
                    <td data-label="Create" className="body-xxs font-medium py-16" >
                     <div className="admin_table_svg admin-table-color"  >
                      <img src={tickImage} alt=""/>
                      <span>Create</span>
                     </div>
                    </td>
                    <td data-label="Reports"className="body-xxs font-medium">
                     <div className="admin_table_svg admin-table-color">
                      <img src={tickImage} alt=""/>
                      <span>Reports</span>
                     </div>
                    </td>
                    <td data-span="View"className="body-xxs font-medium ">
                     <div className="admin_table_svg admin-table-color">
                      <img src={tickImage} alt=""/>
                      <span>View</span>
                     </div>
                    </td>
                    <td data-span="Delete"className="body-xxs font-medium">
                     <div className="admin_table_svg admin-table-color">
                      <img src={tickImage} alt=""/>
                      <span>Delete</span>
                     </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default MainContentAdminAccess;
