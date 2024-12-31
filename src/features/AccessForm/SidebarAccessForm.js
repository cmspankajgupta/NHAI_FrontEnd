import React from "react";
import { Box, Typography, List, ListItem,  } from "@mui/material";
import { Paper } from "@mui/material";

const SidebarAccessForm = () => {
  const roles = ["Admin", "Manager", "Analyst", "Marketer", "Developer"];
  return (
    <Box>
      <Paper
        sx={{
          borderRight: "1px solid #ddd",
          padding: 2,
          width: "245px",
          height: "562px",
          borderRadius: '12px 0 0 12px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: `#212121`,
            lineHeight: "18px",
            fontWeight: "500",
            mt: "36px",
            ml: "24px",
            fontSize: "12px",
          }}
        >
          Roles
        </Typography>
        <List>
          {roles.map((role) => (
            <ListItem
              button
              key={role}
              sx={{
                width: "221px",
                height: "40px",
                borderRadius: "8px",
                "&:hover": {
                  // backgroundColor: 'rgba(0, 0, 0, 0.08)', // Optional hover effect
                  backgroundColor: "#ECF1F6", // Optional hover effect
                },
              }}
            >
              <span className="font-medium body-m">{role}</span>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default SidebarAccessForm;
