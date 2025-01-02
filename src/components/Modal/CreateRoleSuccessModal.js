import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import MuiInput from '../../components/Input/MuiInput';
import MuiButton from '../../components/Button/MuiButton';



export default function CreateRoleSuccessModal({title, content, children, openModal, showModal, ...props}) {

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
          <p  className='body-m font-bold '>{title}</p>
          {children}
          </Box>
          </Modal>
        );
      }
      