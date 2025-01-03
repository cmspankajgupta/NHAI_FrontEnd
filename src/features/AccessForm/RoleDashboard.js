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
import { useDispatch, useSelector } from "react-redux";
import { updateConfirmModalState, updateCreateModalState } from "../../store/slices/accessManagementSlice";
import CreateRoleSuccess from "./CreateRole/CreateRoleSuccess";


const RoleDashboard = () => {
  const dispatch = useDispatch();
  const {openConfirmationModal, openCreateModal} = useSelector(state=> state.accessManagement)
  const handleOpenModal = () => {
    dispatch(updateCreateModalState(!openCreateModal));
  };
  const handleOpenConfirm = () => {
    dispatch(updateConfirmModalState(!openConfirmationModal));
  };

  const style ={
    position: 'absolute', // Required for centering
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -50%)', // Adjust position to center
    width: '1198px', // Set width
    height: '673px', // Set height
    bgcolor: 'background.paper', // Background color
    borderRadius: '1rem', // Rounded corners
    boxShadow: 24, // Material-UI shadow preset
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '90vw', // Make it responsive for smaller screens
    maxHeight: '90vh', // Handle small viewport heights
  };
  const style2 ={
    position: 'absolute', // Required for centering
    top: '30vh', // Center vertically
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -50%)', // Adjust position to center // Set height
    bgcolor: 'background.paper', // Background color
    borderRadius: '1rem', // Rounded corners
    boxShadow: 24, // Material-UI shadow preset
    width: '424px',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '90vw', // Make it responsive for smaller screens
    maxHeight: '90vh', // Handle small viewport heights
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
        <DashboardModal title={'Create Role'} content={"Content"} openModal={openCreateModal} children={<CreateRoleAccess/>} showModal={handleOpenModal} style={style}/>
        <DashboardModal content={"Success One"} children={<CreateRoleSuccess/>} openModal={openConfirmationModal} showModal={handleOpenConfirm} style={style2}/>
      </Box>
      
    </>
  );
};

export default RoleDashboard;
