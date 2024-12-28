import "./LoginForm.scss";
import { Box, Divider, CircularProgress } from "@mui/material";
import MuiInput from "../../components/Input/MuiInput";
import MuiButton from "../../components/Button/MuiButton";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import {
  setMobile,
  sendOtp,
  editMobile,
  verifyOtp,
  resetError,
  resetOtp,
} from "../../store/slices/loginSlice";
import { LoginSchema } from "./LoginSchema";
import OtpForm from "../OtpForm/OtpForm";
import { Link, useNavigate } from "react-router-dom";
import FormFooter from "../../components/FormFooter/FormFooter";
import { OtpSchema } from "../OtpForm/OtpSchema";
import useCountdown from "../../hooks/useCountdown";
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Mobile, isPhone, error } = useSelector((state) => state.login);
  const { formattedTime, timeLeft, reset, restart } = useCountdown(30);

  const handleBack = () => {
    dispatch(editMobile(Mobile));
    dispatch(resetError());
  };

  const formikOTP = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: OtpSchema,
    onSubmit: async (values) => {
      try {
        const response = await dispatch(verifyOtp(values.otp));
        if (response.payload?.success) {
          await dispatch(setMobile(""));
          navigate("/dashboard");
        } else {
          console.log("OTP verification failed");
        }
      } catch (error) {
        console.error("OTP verification error:", error);
      }
    },
  });

  const handleResendOTP = async () => {
    dispatch(resetOtp());
    dispatch(resetError());
    try {
      const response = await dispatch(sendOtp(Mobile));
      if (response.payload?.success) {
        reset();
        restart();
      } else {
        console.log("OTP resend failed");
      }
    } catch (error) {
      console.error("Error during OTP resend:", error);
    }
  };

  const formik = useFormik({
    initialValues: { mobile: Mobile || "" },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      try {
        await dispatch(setMobile(values.mobile));
        const res = await dispatch(sendOtp(values.mobile));
        if (res?.payload.success) {
        } else {
          console.log("OTP resend failed");
        }
      } catch (error) {
        console.error("Error during OTP resend:", error);
      } finally {
        formik.setSubmitting(false);
      }
    },
  });

  return (
    <>
      <div className="LoginContainer">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 4,
            paddingBottom: 0,
          }}
        >
          {isPhone ? (
            <>
              <p className="head-xs head-black mb-28">Login</p>

              <form
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                onSubmit={formik.handleSubmit}
              >
                <MuiInput
                  variant="outlined"
                  name="mobile"
                  label="Registered Mobile Number"
                  className="mb-2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
                  type="text"
                  error={
                    formik.touched?.mobile && Boolean(formik.errors?.mobile)
                  }
                  errorText={formik.errors.mobile}
                  // required
                  sx={{
                    marginBottom: "0.4rem",
                  }}
                />
                <MuiButton
                  type="submit"
                  name="Login using OTP"
                  variant="contained"
                  fullWidth
                  endIcon={
                    formik.isSubmitting ? (
                      <CircularProgress size={13} color="white" />
                    ) : null
                  }
                  disabled={formik.isSubmitting}
                  sx={{
                    mt: 2,
                    mb: 2,
                    background: `var(--brand-500)`,
                    borderRadius: "6.25rem",
                    fontWeight: `var(--font-medium)`,
                  }}
                />
              </form>
              <Divider
                sx={{
                  width: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  margin: "0 auto",
                  color: `var(--gray-700)`,
                  mb: 3,
                }}
              >
                OR
              </Divider>

              <p className="separator-text text-center mb-28">
                Don’t have an account?
              </p>
              <MuiButton
                onClick={() => navigate("/signup")}
                name="Sign Up"
                variant="outlined"
                sx={{
                  marginBottom: "32px",
                  borderRadius: "100px",
                  color: "brand-500",
                  borderColor: "brand-200",
                }}
              />
              <p className="text-center getHelpContainer mb-28">
                <span>Having trouble logging in? </span>
                <Link to="#" className="getHelp">
                  Get Help
                </Link>
              </p>
            </>
          ) : (
            <OtpForm
              formik={formikOTP}
              editable={true}
              handleBack={handleBack}
              handleResend={handleResendOTP}
              formattedTime={formattedTime}
              timeLeft={timeLeft}
              mobile={Mobile}
              error={error}
            />
          )}
        </Box>
        <FormFooter />
      </div>
    </>
  );
};

export default LoginForm;
