import React from "react";
import {
  Box,
  Paper,
  TableContainer,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import MuiButton from "../../components/Button/MuiButton";
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
          <MuiButton
            type="submit"
            name={
              <>
                <EditIcon />
                Edit
              </>
            }
            variant="outlined"
            // fullWidth
            sx={{
              marginTop: "2rem",
              borderRadius: "6.25rem",
              fontWeight: `var(--font-medium)`
            }}
          />
        </Box>
        
        <TableContainer>
          {/* <Table>
            <TableHead>
              <TableRow>
                <TableCell className="body-xxs ">Modules</TableCell>
                <TableCell colSpan={4} sx={{ paddingLeft: '40px' }}>Permissions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {modules.map((module, index) => (
                <TableRow className="admin-table-row" key={index}>
                  <TableCell>{module}</TableCell>
                  <TableCell>
                    <Checkbox defaultChecked />
                    <label>Create</label>
                  </TableCell>
                  <TableCell>
                    <Checkbox defaultChecked />
                    <label>Reports</label>
                  </TableCell>
                  <TableCell>
                    <Checkbox defaultChecked />
                    <label>View</label>
                  </TableCell>
                  <TableCell>
                    <Checkbox defaultChecked />
                    <label>Delete</label>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> */}
          <div className="table-container"> 
            <table>
              <thead>
                <tr className="admin-table-head">
                  <th className="access-th-text">MODULES</th>
                  <th colSpan={4} style={{ paddingLeft: '40px' }}>Permissions</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((module, index) => (
                  <tr className="admin-table-row" key={index}>
                    <td data-label="Module" className="body-s font-medium">{module}</td>
                    <td data-label="Create" className="body-xxs font-medium py-16" >
                     <div className="admin_table_svg admin-table-color"  >
                      <img src={tickImage} alt=""/>
                      <label>Create</label>
                     </div>
                    </td>
                    <td data-label="Reports"className="body-xxs font-medium">
                     <div className="admin_table_svg admin-table-color">
                      <img src={tickImage} alt=""/>
                      <label>Reports</label>
                     </div>
                    </td>
                    <td data-label="View"className="body-xxs font-medium ">
                     <div className="admin_table_svg admin-table-color">
                      <img src={tickImage} alt=""/>
                      <label>View</label>
                     </div>
                    </td>
                    <td data-label="Delete"className="body-xxs font-medium">
                     <div className="admin_table_svg admin-table-color">
                      <img src={tickImage} alt=""/>
                      <label>Delete</label>
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
