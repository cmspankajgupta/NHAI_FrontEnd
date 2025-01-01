import { Box } from "@mui/material";
import OtpForm from "../../features/OtpForm/OtpForm";
import SignUpDetailsCard from "../../features/SignUp/Internal/Permanent/SignUpDetailsCard";
import SignupForm from "../../features/SignUp/Internal/Permanent/SignUpForm";
import FormFooter from "../../components/FormFooter/FormFooter";
import { OtpSchema } from "../../features/OtpForm/OtpSchema";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  sendOtp,
  setIsSapVerified,
  setOtpSent,
  setSapId,
  verifyOtp,
} from "../../store/slices/signUpSlice";
import { useNavigate } from "react-router-dom";
import useCountdown from "../../hooks/useCountdown";
import { setAuthenticated } from "../../store/slices/loginSlice";
import SignUpContratual from "../../features/SignUp/Internal/Contratual/SignUpContratual";
import SignUpInvite from "../../features/SignUp/Internal/Contratual/SignUpInviteAccept";
import ModalContractComReg from "../../features/SignUp/Internal/Contratual/ModalContractComReg";
import EmailOtpForm from "../../features/EmailOtpForm/EmailOtpForm";

function SignUpPage() {
  const { isSapVerified, otpSent, data } = useSelector((state) => state.signUp);
  const { formattedTime, timeLeft, reset, restart } = useCountdown(30);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formikOTP = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: OtpSchema,
    onSubmit: async (values) => {
      try {
        const res = await dispatch(verifyOtp(values.otp));
        if (res.payload?.success) {
          localStorage.setItem('token', res?.payload?.data?.token);
          await dispatch(setAuthenticated(true))
          navigate("/dashboard");
          dispatch(setIsSapVerified(false));
          dispatch(setSapId(""));
          dispatch(setOtpSent(false));
        } else {
          console.log("OTP verification failed");
        }
      } catch (error) {
        console.error("OTP verification error:", error);
      }
    },
  });

  const handleBack = () => {
    dispatch(setIsSapVerified(true));
    dispatch(setOtpSent(false));
  }

  const handleResendOTP = async () => {
    // dispatch(resetOtp());
    // dispatch(resetError());
    try {
      const response = await dispatch(sendOtp(data.mobile));
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

  return (
    <div className="form-page-container">
      <div className="form-page">
        <div className="left-section ">
          <p className="formTitle">
            Welcome to<span className="head-black block">DataLake 3.0</span>
          </p>
        </div>
        <div className="right-section  mt-32">
          <div className="form-container">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "3rem",
                paddingBottom: 0,
              }}
            >
              {/* {!isSapVerified && <SignupForm />}
              {isSapVerified && !otpSent && <SignUpDetailsCard />}
              {isSapVerified && otpSent && <OtpForm formik={formikOTP} handleBack={handleBack} handleResend={handleResendOTP} formattedTime={formattedTime} timeLeft={timeLeft} mobile={data?.mobile}/>} */}
              {/* <SignUpContratual/> */}
              <SignUpInvite/>
              <ModalContractComReg/>
              {/* <EmailOtpForm/> */}
            </Box>
            <FormFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
