import { Box, Typography } from '@mui/material'
import React from 'react'
import FormFooter from '../../components/FormFooter/FormFooter'

export default function SignUpDetailsCard() {
  return (
    <div className="signUpContainer">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: '3rem',
          paddingBottom: 0,
        }}
      >
       <p className="head-xs head-black mb-32">Sign Up</p>
        <Typography>
            We have found an account with SAP ID/Employee ID 76898763
        </Typography>
      </Box>
      <FormFooter/>
    </div>
  )
}
