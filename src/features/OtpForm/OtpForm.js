import { Link, CircularProgress } from "@mui/material";
import MuiButton from "../../components/Button/MuiButton";
import MuiInput from "../../components/Input/MuiInput";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, resetError, resetOtp } from "../../store/slices/loginSlice";
import { useNavigate } from "react-router-dom";
import useCountdown from "../../hooks/useCountdown";
import ArrowBack from "../../assets/images/logo/arrow_back.svg";
import { boolean } from "yup";

const OtpForm = ({
  formik,
  editable,
  handleBack,
  handleResend,
  formattedTime,
  timeLeft,
  mobile,
  error,
}) => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(new Array(5).fill(""));

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
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 4,
        paddingBottom: 0,
      }}
    >
      <img
        className="cursor-pointer"
        src={ArrowBack}
        alt="Arrow Back"
        style={{ width: "2rem", marginBottom: "0.875rem" }}
        onClick={handleBack}
      />

      <p className="head-xs head-black">Verify OTP</p>
      <p className="body-xs font-regular" style={{ marginBottom: "40px" }}>
        OTP has been sent to <span className="font-medium">{mobile ? `+91 ${mobile}` : null} </span>
        {editable && (
          <Link
            sx={{ textDecoration: "none" }}
            className="medium"
            style={{ cursor: "pointer" }}
            onClick={handleBack}
          >
            Edit
          </Link>
        )}
      </p>

      <form
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
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

        <p className="body-xs font-regular mt-28">
          Didn’t receive the OTP?{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
          >
            <circle cx="2" cy="2" r="2" fill="#E0E0E0" />
          </svg>{" "}
          <span className="body-xs font-medium gray-600">
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

        <MuiButton
          type="submit"
          name="Verify OTP"
          variant="contained"
          fullWidth
          disabled={formik.isSubmitting}
          endIcon={
            formik.isSubmitting ? (
              <CircularProgress size={13} color="white" />
            ) : null
          }
          sx={{
            marginTop: "24px",
            marginBottom: "28px",
            background: `var(--brand-500)`,
            borderRadius: "100px",
            fontWeight: `var(--font-medium)`,
          }}
        />
      </form>
    </div>
  );
};

export default OtpForm;
