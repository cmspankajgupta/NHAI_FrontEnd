import Checkbox from '@mui/material/Checkbox';

export default function MuiCheckbox({ label, ...props}) {
  return (
    <div className='flex items-start'>
      <Checkbox {...props} sx={{padding: '0 8px 8px'}}/>
      <label className='body-xxs font-regular'>{label}</label>
    </div>
    
  );
}
