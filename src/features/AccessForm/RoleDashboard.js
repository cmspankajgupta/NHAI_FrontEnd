import React, { useState } from "react";
import {
  Box,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AccessHeader from "./AccessHeader";
import SidebarAccessForm from "./SidebarAccessForm";
import MainContentAdminAccess from "./RoleUserList";
import GenericBreadCrums from "./GenericBreadCrums";
import DashboardModal from "../../components/Modal/DashboardModal";
import CreateRoleAccess from './CreateRole/CreateRoleAccess';


const RoleDashboard = () => {
  const [open, setOpen] = useState(false);
  const [openSucess, setOpenSucess] = useState(false);
  const handleOpenModal = () => {
    setOpen(open => !open)
  };

  return (
    <>
      <AccessHeader />
      <Box sx={{ backgroundColor: "#ECF1F6", width: "100%", padding: "40px" }}>
        <GenericBreadCrums />
        <div style={{ justifyContent: "space-between", display: "flex", alignItems: 'center' }}>
          <h6 className="body-l font-bold">Roles </h6>
          <Button
            variant="contained"
            sx={{ bgcolor: "#104685", gap: '8px', color: "#ffffff", borderRadius: "100px", padding: '0px 10px', fontSize: '14px', width: "141px", height: "32px", lineHeight: "20px", fontWeight: "500", marginBottom: "18px" }}
            onClick={handleOpenModal}
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
        <DashboardModal title={'Create Role'} content={"Content"} openModal={open} children={<CreateRoleAccess/>} showModal={setOpen}/>
        <DashboardModal title={'Success Screen'} content={"Success One"} openModal={openSucess} children={<CreateRoleAccess/>} showModal={setOpen}/>
      </Box>
      
    </>
  );
};

export default RoleDashboard;
