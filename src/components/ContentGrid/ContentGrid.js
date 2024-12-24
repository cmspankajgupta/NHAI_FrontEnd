import React from "react";
import { Box, Grid, Paper, Skeleton, Typography } from "@mui/material";

const ContentGrid = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",    
          mb: 2,                 
        }}
      >
        Welcome, Nitin Kumar
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {Array.from(new Array(6)).map((_, index) => (
          <Grid
            item
            xs={12}        // Full width on extra-small screens
            sm={6}         // Half-width on small screens
            md={4}         // One-third width on medium and larger screens
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper
              sx={{
                bgcolor: "#f9f9f9",    // Background color
                p: 1,                  // Padding
                height: "170px",       // Fixed height
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Center Skeleton vertically
                alignItems: "center",     // Center Skeleton horizontally
                boxShadow: "none",        // Removed box shadow
                // border: "1px solid #ddd", // Optional light border
                width: "100%",            // Ensure responsiveness
              }}
            >
              {/* Simulated placeholder content */}
              <Skeleton variant="text" height={20} width="80%" />
              <Skeleton variant="text" height={20} width="60%" />
            </Paper>
          </Grid>
        ))}

        
      </Grid>
    </Box>
  );
};

export default ContentGrid;
