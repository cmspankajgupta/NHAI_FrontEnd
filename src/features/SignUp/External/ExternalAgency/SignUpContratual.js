import React from 'react'
import MuiButton from '../../../../components/Button/MuiButton'

export default function SignUpContratual() {
  return (
    <>
        <div className='cont-form-container'>
            <h3 className='body-l font-bold mb-28'>You have been invited to Join NHAI DataLake 3.0</h3>
            <p className='body-xs font-regular mb-28 gray-800'>We need to verify your Email as part of the registration process</p>
            <p className='body-xxs font-regular mb-14'>Email</p>
            <p className='body-s font-medium mb-32'>sample@agency.com</p>
            <MuiButton
              type="submit"
              name="Verify Email"
              variant="contained"
              fullWidth
              sx={{
                marginBottom: "1.75rem",
                background: `var(--brand-500)`,
                borderRadius: "6.25rem",
                fontWeight: `var(--font-medium)`,
              }}
            />
        </div>
    </>
  )
}