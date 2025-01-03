import React from 'react'
import MuiButton from '../../../../components/Button/MuiButton'
import MuiInput from '../../../../components/Input/MuiInput'

export default function AddSpocExAgency() {
  return (
    <>
        <p className='body-m font-bold'>Add SPOC</p>
        <p className='body-xs font-regular'>Enter required details to complete your registration</p>
        <div className="mt-32 mb-24">
            <MuiInput
            type="text"
                variant="outlined"
                name="SPOC Name"
                label="SPOC Name"
                fullWidth
            />
        </div>
        <div className="mb-24">
            <MuiInput
            type="text"
                variant="outlined"
                name="Designation"
                label="Designation"
                fullWidth
            />
        </div>
        <div className="mb-24">
            <MuiInput
            type="text"
                variant="outlined"
                name="E-mail"
                label="E-mail"
                fullWidth
            />
        </div>
        <div className="mb-24">
            <MuiInput
            type="text"
                variant="outlined"
                name="Mobile Number"
                label="Mobile Number"
                fullWidth
            />
        </div>
        <MuiButton
            type="submit"
            name="Add SPOC"
            variant="contained"
            fullWidth
            sx={{
            marginBottom: "1.75rem",
            background: `var(--brand-500)`,
            borderRadius: "6.25rem",
            fontWeight: `var(--font-medium)`,
            }}
        />
    </>
  )
}
