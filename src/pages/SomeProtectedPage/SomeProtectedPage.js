import React from 'react'
import { Box, CssBaseline } from "@mui/material";
import Sidebar from '../../components/Sidebar/Sidebar';
import TopBar from '../../components/TopBar/TopBar';
import ContentGrid from '../../components/ContentGrid/ContentGrid';

function SomeProtectedPage() {
  return (
    <div>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "white",
          minHeight: "100vh",
        }}
      >
        {/* Top Bar */}
        <TopBar />

        {/* Grid Content */}
        <ContentGrid />
      </Box>
    </Box>
    </div>
  )
}

export default SomeProtectedPage
