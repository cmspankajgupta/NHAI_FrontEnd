import React from 'react'
import { Box, Card, CardContent, Divider, Typography, TextField, Button, Link, Grid } from "@mui/material";
import LoginCard from '../../features/LoginCard/LoginCard'



function Login() {
  return (
    <>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh", 
          backgroundColor: "#ECF1F6", 
          margin: 0, 
          padding: 2,
        }}
      >

        <Grid container sx={{ width: "100%", maxWidth: "1200px" }}>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start", 
              flexDirection: "column",
              textAlign: "center",
              marginTop: { xs: 1, md: 0 },
              padding: { xs: 1, sm: 3 }, 
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "normal", color: "black" }}>
              Welcome to
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "black" }}>
              <strong>DataLake 3.0</strong>
            </Typography>
          </Grid>

          <LoginCard />
        </Grid>
      </Box>

    </>
  )
}

export default Login
