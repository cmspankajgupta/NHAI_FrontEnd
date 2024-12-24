import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Loader = ({ size = 40, color = "primary" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <CircularProgress size={size} color={color} />
    </Box>
  );
};

export default Loader;
