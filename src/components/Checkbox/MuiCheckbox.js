import Checkbox from '@mui/material/Checkbox';

export default function MuiCheckbox({ label, id, ...props}) {
  return (
    <div className='flex items-start'>
      <Checkbox id={id} {...props} sx={{padding: '8px'}}/>
      <label htmlFor={id} className='body-xxs font-regular cursor-pointer' style={{paddingTop: '10px'}}>{label}</label>
    </div>
    
  );
}
