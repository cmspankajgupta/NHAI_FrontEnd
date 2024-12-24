import * as React from 'react';
import TextField from '@mui/material/TextField';
import './MuiInput.scss'

function MuiInput({variant, label, className, sx,...props}){
    return (
      <TextField
        {...props}
        sx={sx}
        id="outlined-basic"  
        variant={variant} 
        label={label} 
        placeholder={label}
        className="muiInput"
       />
    )
  }
  
  export default MuiInput;