import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';


export default function DashboardModal({ title, content, children, openModal, showModal, style, ...props }) {

  return (
    <Modal
      open={openModal}
      onClose={() => showModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableAutoFocus
    >
      <Box {...props} sx={style}>
        <div style={{position: 'relative', padding: title ? '24px': 0}}>
          {title && <p className='body-m font-bold'>{title}</p>}
          {/* <p id="modal-modal-description" className="body-xs font-regular">
            {content}
          </p> */}
          <CloseIcon onClick={() => showModal(false)} style={{ cursor: 'pointer' }} sx={{ fontSize: "1.5rem", position: 'absolute', top: '1rem', right: '1rem' }} />
        </div>
        {children}
      </Box>
    </Modal>
  );
}
