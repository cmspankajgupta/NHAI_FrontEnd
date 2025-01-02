import React, { useEffect, useRef, useState } from "react";
import { Link, CircularProgress } from "@mui/material";
import MuiInput from "./MuiInput";
import MuiButton from "../Button/MuiButton";

const OtpInput = ({
  formik,
  editable,
  handleBack,
  handleResend,
  formattedTime,
  timeLeft,
  mobile,
  error,
  length,
  ...props
}) => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(new Array(length ? length : 5).fill(""));

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleResendOtp = async () => {
    setOtp(new Array(5).fill(""));
    formik.resetForm();

    handleResend();
  };

  const handleKeyDown = (event, index) => {
    const value = event.key;
    const newOtp = [...otp];
    if (event.key === "Backspace") {
      // dispatch(resetError());
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
      newOtp[index] = "";
      setOtp(newOtp);
      // dispatch(setOtp(newOtp));
    } else if (value >= "0" && value <= "9") {
      newOtp[index] = value;
      // dispatch(setOtp(newOtp));
      setOtp(newOtp);
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
    formik.setValues({ otp: newOtp.join("") });
  };
  return (
    <div
      onSubmit={formik.handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
      {...props}
    >
      <div style={{ display: "inline-flex", gap: "1rem" }}>
        {otp.map((item, index) => (
          <div key={index} style={{ width: "fit-content" }}>
            <MuiInput
              error={formik.touched.otp && formik.errors.otp}
              inputRef={(e) => (inputRefs.current[index] = e)}
              value={item}
              onKeyDown={(e) => handleKeyDown(e, index)}
              sx={{
                marginBottom: "10px",
                width: "3.5rem",
                height: "3.5rem",
                "& .MuiInputBase-input": {
                  fontFamily: "var(--body-font-family)",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  textAlign: "center",
                  fontWeight: 400,
                  lineHeight: "1.5rem",
                  letterSpacing: "-0.08px",
                },
              }}
            />
          </div>
        ))}
      </div>

      {formik.errors.otp && formik.touched.otp && (
        <span
          className="error"
          style={{ fontSize: "0.75rem", marginTop: "0.75rem" }}
        >
          {formik.errors.otp}
        </span>
      )}

      {error && (
        <span
          className="error"
          style={{ fontSize: "0.75rem", marginTop: "0.75rem" }}
        >
          {error}
        </span>
      )}

      <p className="body-xs font-regular gray-800 mt-32">
        Didn’t receive the OTP?{" "}
        <span className="gray-600">
          {formattedTime &&
            (timeLeft ? (
              `Resend in ${formattedTime}`
            ) : (
              <Link
                sx={{ textDecoration: "none" }}
                className="medium"
                style={{ cursor: "pointer" }}
                onClick={handleResendOtp}
              >
                Resend
              </Link>
            ))}
        </span>
      </p>
    </div>
  );
};

export default OtpInput;
