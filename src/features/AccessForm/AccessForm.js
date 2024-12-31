import React from "react";
import {
  Box,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AccessHeader from "./AccessHeader";
import SidebarAccessForm from "./SidebarAccessForm";
import MainContentAdminAccess from "./MainContentAdminAccess";
import GenericBreadCrums from "./GenericBreadCrums";

const RolesManagement = () => {
  return (
    <>
      <AccessHeader />
      <Box sx={{ backgroundColor: "#ECF1F6", width: "100%", padding: "40px" }}>
        <GenericBreadCrums/>
        <div  style={{ justifyContent: "space-between", display:"flex", alignItems: 'center' }}>
          <h6 className="body-l font-bold">Roles </h6>
          <Button
            variant="contained"
            // startIcon={}
            sx={{ bgcolor: "#104685", gap: '8px', color: "#ffffff", borderRadius: "100px", padding: '0px 10px', fontSize: '14px', width: "141px", height: "32px", lineHeight: "20px", fontWeight: "500", marginBottom: "18px" }}
          >
            <AddIcon sx={{ width: "18px", height: "18px" }} />
            Create Role
          </Button>
        </div>
        <Box display="flex" >
          {/* Sidebar */}
          <SidebarAccessForm />
          {/* Main Content */}
          <MainContentAdminAccess />
        </Box>
      </Box>
    </>
  );
};

export default RolesManagement;
