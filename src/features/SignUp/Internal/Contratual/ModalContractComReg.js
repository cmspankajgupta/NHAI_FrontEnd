import React, { useState } from 'react';
import MuiModal from '../../../../components/Modal/MuiModal'
import MuiInput from '../../../../components/Input/MuiInput';
import MuiButton from '../../../../components/Button/MuiButton';

export default function ModalContractComReg() {
  return (
    <>
        <MuiModal title="Complete Registration" content="Enter required details to complete your registration">
          <div className='details-text mt-32 mb-14'>
              <ul className='cardList'>
                <li className='row listItem body-xs font-regular'><span className='col gray-700'>Full Name</span><span className='col font-medium'>Nitin Kumar</span></li>
                <li className='row listItem body-xs font-regular'><span className='col gray-700'>Date of Birth</span><span className='col font-medium'>08/11/1990</span></li>
                <li className='row listItem body-xs font-regular'><span className='col gray-700'>Gender</span><span className='col font-medium'>Male</span></li>
                <li className='row listItem body-xs font-regular'><span className='col gray-700'>Address</span><span className='col font-medium'>H-108, Roorkee, Uttarakhand</span></li>
              </ul>
          </div>
          
        <MuiInput
          variant="outlined"
          name="temp/contract_ID"
          label="Temp/Contract ID"
          fullWidth
          type="text"
          sx={{
            mb: "2rem",
            mt: "2rem",
            borderRadius: '1rem'
          }}
          autoFocus={true}
        />
        
        <MuiInput
          variant="outlined"
          name="email"
          label="Email"
          fullWidth
          type="text"
          sx={{
            mb: "2rem",
          }}
        />
         <MuiButton
          type="submit"
          name="Verify Your Email ID"
          variant="contained"
          fullWidth
          sx={{
            // marginBottom: "1.75rem",
            background: `var(--brand-500)`,
            borderRadius: "6.25rem",
            fontWeight: `var(--font-medium)`,
          }}
        />
        </MuiModal>
        
    </>
  )
}
