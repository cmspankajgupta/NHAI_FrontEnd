import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '26.5rem',
  maxWidth: '100%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function MuiModal({title, content, children,...props}) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>  
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" 
        >
        <Box sx={style}>
          <p id="modal-modal-title" className='body-m font-bold mb-14'>{title}</p>
          <p id="modal-modal-description" className='body-xs font-regular'>{content}</p>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
