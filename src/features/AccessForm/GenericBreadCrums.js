import React from 'react'
import {  Breadcrumbs, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";

const GenericBreadCrums = () => {
    const handleClick = (event) => {
        event.preventDefault();
        console.log("Breadcrumb clicked!");
      };
  return (
    <div sx={{ marginBottom: "1rem" }}>
    <Breadcrumbs sx={{ textAlign: 'center', display: 'flex' }} separator={
      <p
        style={{
          fontSize: `var( --font-size-lg)`, // Adjust size of the separator
          lineHeight: "1.5rem",
          marginRight: "0.667rem",
          color:"#9FB5CE",
        }}
      >
        ›
      </p>
    }>
      <Link
        underline="hover"
        color="#406B9D"
        href="/"
        onClick={handleClick}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <HomeIcon  sx={{ marginRight: "0.667rem", width: "1.5rem", height: "1.5rem",color:"#7090B6" }} />
      </Link>
      <Link
        underline="hover"
        color="#406B9D"
        href="/access-management"
        onClick={handleClick}
        sx={{
          fontSize: "0.8rem", // Adjust size of Access Management text
          width:"10rem",
          height:"1.5rem",
          fontWeight: "500",
          lineHeight: "1.5rem",
          color: "#406B9D", // Adjust color if needed
          marginRight: "0.667rem",
        }}
      >
        Access Management
      </Link>
      <Typography color="text.primary" sx={{
        fontSize: "1rem", // Adjust size of Access Management text
        fontWeight: "500",
        lineHeight: "1.5rem",
        color: "#757575", // Adjust color if needed
        marginRight: "0.667rem",
      }}>Roles</Typography>
    </Breadcrumbs>
  </div>
  )
}

export default GenericBreadCrums