import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import MuiInput from '../../components/Input/MuiInput';
import CloseIcon from '@mui/icons-material/Close';
import MuiButton from '../../components/Button/MuiButton';



export default function DashboardModal({title, content, children, openModal, showModal, ...props}) {

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

  return (
      <Modal
        open={openModal}
        onClose={() => showModal(false)}
        aria-labelledby="modal-modal-title" 
        aria-describedby="modal-modal-description" 
        disableAutoFocus
        >
        <Box {...props}  sx={style}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center", margin:"2rem"}}>
          <p  className='body-m font-bold '>{title}</p>
          <CloseIcon onClick={()=>showModal(false)} style={{cursor: 'pointer'}}sx={{fontSize:"1.5rem"}}/>
          </div>
          <Divider />
          <MuiInput
          variant="outlined"
          label="Name of the role"
          type="text"
          sx={{
            margin: '2rem 3.33rem 0',
            borderRadius: '1rem',
            width:"27.667rem",
            height:"4.667rem",
          }}
          autoFocus={true}
        />
          {children}
          <Divider sx={{pt:"2rem",}}/>
          <div style={{width: '100%', display: 'flex', justifyContent: 'end'}}>
          <MuiButton
          type="submit"
          name="Create Role"
          variant="contained"
          sx={{
            background: `var(--brand-500)`,
            borderRadius: "6.25rem",
            fontWeight: `var(--font-medium)`,
            width:"9.167rem",
            my:"1.33rem",
            mx:"2rem",
          }}
          />
          </div>
          </Box>
          </Modal>
        );
      }
      