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
          fontSize: `var( --font-size-lg: 1.5rem)`, // Adjust size of the separator
          lineHeight: "1.125rem",
          marginRight: "0.5rem",
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
        <HomeIcon  sx={{ marginRight: "0.5rem", width: "1.125rem", height: "1.125rem", }} />
      </Link>
      <Link
        underline="hover"
        color="#406B9D"
        href="/access-management"
        onClick={handleClick}
        sx={{
          fontSize: "0.75rem", // Adjust size of Access Management text
          width:"7.5rem",
          height:"1.125rem",
          fontWeight: "500",
          lineHeight: "1.125rem",
          color: "#7080B6", // Adjust color if needed
          marginRight: "0.5rem",
        }}
      >
        Access Management
      </Link>
      <Typography color="text.primary" sx={{
        fontSize: "12px", // Adjust size of Access Management text
        fontWeight: "500",
        lineHeight: "1.125rem",
        color: "#757575", // Adjust color if needed
        marginRight: "0.5rem",
      }}>Roles</Typography>
    </Breadcrumbs>
  </div>
  )
}

export default GenericBreadCrums