import * as React from "react";
import TextField from "@mui/material/TextField";
import "./MuiInput.scss";
import { Typography } from "@mui/material";

function MuiInput({
  variant,
  label,
  className,
  sx,
  error,
  errorText,
  ...props
}) {
  return (
    <>
      <TextField
        {...props}
        sx={sx}
        id="outlined-basic"
        variant={variant}
        label={label}
        // placeholder={label}
        error={error}
        className="muiInput"
      />
      {error && (
        <Typography
          color="error"
          sx={{
            color: "#d32f2f", // Error color
            fontWeight: 400,
            fontSize: "0.75rem",
            letterSpacing: "0.03333em",
            textAlign: "left",
            marginRight: "14px",
            marginBottom: "0",
            marginLeft: "1px",
          }}
        >
          {errorText}
        </Typography>
      )}
    </>
  );
}

export default MuiInput;
