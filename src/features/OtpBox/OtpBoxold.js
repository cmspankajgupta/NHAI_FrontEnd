import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useDispatch, useSelector } from "react-redux";
import { setOtp, verifyOtp } from "../../store/slices/loginSlice";
import OtpInput from "react-otp-input";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";

const OtpBox = ({ handleEdit, numInputs = 6 }) => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Mobile, loading, otp,error } = useSelector((state) => state.login);

  const [errors, setError] = useState(false);

  const handleChange = (otpValue) => {
    const cleanedValue = otpValue.replace(/[^0-9]/g, '');
    dispatch(setOtp(cleanedValue.split(''))); 
    if (cleanedValue.length === numInputs) {
      setError(false);
    } else {
      setError(true);
    }
  };

//   const handleVerifyClick = () => {
//     const otpString = otp.join('');
//     if (otpString.length === numInputs) {
//       console.log('Entered OTP:', otpString);
//       dispatch(verifyOtp());
//     } else {
//       setError(true);
//     }
//   };


  const handleVerifyClick = async () => {
    const otpString = otp.join('');
    if (otpString.length === numInputs) {
      try {
        await dispatch(verifyOtp());
        // On success, navigate to the dashboard
        navigate("/protected"); // Redirect to the dashboard
      } catch (error) {
        // Handle errors here (e.g., show error message)
        console.error("OTP verification failed:", error);
      }
    } else {
      setError(true);
    }
  };

  const handleKeyPress = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto" }}>
      <Typography
        sx={{
          fontFamily: "Inter",
          fontSize: "24px",
          fontWeight: 900,
        }}
      >
        Verify OTP
      </Typography>
      <Typography color="text.primary" mb={4}>
        OTP has been sent to +91 {Mobile}{" "}
        <FiberManualRecordIcon sx={{ fontSize: "8px", verticalAlign: "middle", color: "gray" }} />{" "}
        <span style={{ color: "#104685", cursor: "pointer" }} onClick={handleEdit}>
          Edit
        </span>
      </Typography>

      <Box sx={{ textAlign: "center", margin: "20px" }}>
        <OtpInput
          value={otp.join('')} // Join OTP array to string for input field
          onChange={handleChange}
          numInputs={numInputs}
          separator={<span style={{ margin: "0 5px" }}>-</span>}
          isInputNum
          shouldAutoFocus
          renderInput={(props, index) => (
            <input
              {...props}
              key={index}
              style={{
                width: "50px",
                height: "50px",
                fontSize: "18px",
                border: `1px solid ${errors ? 'red' : '#ccc'}`,
                borderRadius: "5px",
                textAlign: "center",
                outline: "none",
                marginRight: index < numInputs - 1 ? "10px" : "0",
              }}
              onKeyPress={handleKeyPress}
            />
          )}
          containerStyle={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "nowrap",
            margin: "auto",
            width: "auto",
          }}
        />
        {/* Error message for OTP */}
        {errors && (
          <Typography variant="body2" color="error" sx={{ marginTop: "8px" }}>
            OTP is required .
          </Typography>
        )}
{error && (
                      <Typography
  color="error"
  sx={{
    color: '#d32f2f',  // Error color
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
    textAlign: 'left',
    marginTop: '3px',
    marginRight: '14px',
    marginBottom: '0',
    marginLeft: '14px',
  }}
>
  {error} {/* Display API error */}
</Typography>

                    )}

        <Button
          variant="contained"
          fullWidth
          sx={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007BFF",
            borderRadius: "5px",
            color: "#fff",
            display: "inline-flex",
            alignItems: "center", // Align text and loader vertically
            justifyContent: "center", // Center text and loader horizontally
            "&:hover": {
              backgroundColor: "#0056b3",
            },
          }}
          onClick={handleVerifyClick}
          disabled={loading}
        >
          Verify OTP
          {loading && (
            <Loader size={20} sx={{ marginLeft: "8px", display: "inline-block" }} />
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default OtpBox;
