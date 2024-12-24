import React from 'react'
import Button from '@mui/material/Button';
import './MuiButton.scss'

function MuiButton({variant, name, className, sx,...props }) {
    return (
      <Button variant={variant} name={name} className="mui-btn" {...props} sx={{...sx,textTransform:"none"}}>{name}</Button>
    )
  }

export default MuiButton