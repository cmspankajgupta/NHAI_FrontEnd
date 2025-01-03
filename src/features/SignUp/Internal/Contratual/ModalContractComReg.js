import React, { useEffect, useState } from "react";
import MuiModal from "../../../../components/Modal/MuiModal";
import MuiInput from "../../../../components/Input/MuiInput";
import MuiButton from "../../../../components/Button/MuiButton";
import verified from "../../../../assets/images/logo/verified.svg";
import MuiCheckbox from "../../../../components/Checkbox/MuiCheckbox";
import check_circle from "../../../../assets/images/logo/check_circle.svg";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import OtpInput from "../../../../components/Input/OtpInput";
import { OtpSchema } from "../../../OtpForm/OtpSchema";
import useCountdown from "../../../../hooks/useCountdown";
import {
  acceptConsent,
  completeRegDigi,
  sendOtp,
  setCompleteReg,
  setCompleteRegVerify,
  setIsDigiAuthCompleted,
  setRegConsent,
  setRegSuccessfull,
  verifyOtp,
} from "../../../../store/slices/signUpSlice";
import { CircularProgress } from "@mui/material";

// Define validation for complete reg form fields
export const CompleteRegSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  contract_ID: Yup.string()
    .matches(/^\d{5}$/, "invalid value") // Ensures 5 digits only
    .required("field is required"),
});

export default function ModalContractComReg() {
  const {
    isDigiAuthCompleted,
    completeReg,
    regConsent,
    completeRegVerify,
    regSuccessfull,
  } = useSelector((state) => state.signUp);
  const dispatch = useDispatch();
  const { formattedTime, timeLeft, reset, restart } = useCountdown(30);
  const formikReg = useFormik({
    initialValues: {
      contract_ID: "",
      email: "",
    },
    validationSchema: CompleteRegSchema,
    onSubmit: async (values) => {
      try {
        formikReg.setSubmitting(true);
        const res = await dispatch(completeRegDigi(values));
        if (res.payload?.success) {
          dispatch(setCompleteReg(false));
          dispatch(setCompleteRegVerify(true));
        } else {
          console.log("OTP verification failed");
        }
      } catch (error) {
        console.error("OTP verification error:", error);
      } finally {
        formikReg.setSubmitting(false);
      }
    },
  });

  const formikOTP = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: OtpSchema,
    onSubmit: async (values) => {
      try {
        formikOTP.setSubmitting(true);
        const res = await dispatch(verifyOtp(values.otp));
        if (res.payload?.success) {
          dispatch(setCompleteReg(false));
          dispatch(setCompleteRegVerify(false));
          dispatch(setRegConsent(true));
        } else {
          console.log("OTP verification failed");
        }
      } catch (error) {
        console.error("OTP verification error:", error);
      } finally {
        formikOTP.setSubmitting(false);
      }
    },
  });

  const formikConsent = useFormik({
    initialValues: {
      terms: false,
      getUpdates: false,
    },
    onSubmit: async (values) => {
      try {
        formikConsent.setSubmitting(true);
        const res = await dispatch(acceptConsent(values));
        if (res.payload?.success) {
          dispatch(setRegConsent(false));
          dispatch(setRegSuccessfull(true));
        } else {
          console.log("OTP verification failed");
        }
      } catch (error) {
        console.error("OTP verification error:", error);
      } finally {
        formikConsent.setSubmitting(false);
      }
    },
  });

  const handleResendOTP = async () => {
    // dispatch(resetOtp());
    // dispatch(resetError());
    try {
      const response = await dispatch(sendOtp(""));
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

  const handleClose = () => {
    dispatch(setIsDigiAuthCompleted(true));
  };

  useEffect(() => {
    if (!isDigiAuthCompleted) {
      dispatch(setCompleteReg(true));
    }
  }, []);
  return (
    <>
      <MuiModal
        title={`${completeReg || regConsent ? "Complete Registration" : ""}`}
        content={`${
          completeReg || regConsent
            ? "Enter required details to complete your registration"
            : ""
        }`}
        open={!isDigiAuthCompleted}
        handleClose={regSuccessfull ? handleClose : null}
      >
        {(completeReg || regConsent) && (
          <div className="details-text mt-32 mb-14">
            <ul className="cardList">
              <li className="row listItem body-xs font-regular">
                <span className="col gray-700">Full Name</span>
                <span className="col font-medium gray-800">Nitin Kumar</span>
              </li>
              <li className="row listItem body-xs font-regular">
                <span className="col gray-700">Date of Birth</span>
                <span className="col font-medium gray-800">08/11/1990</span>
              </li>
              <li className="row listItem body-xs font-regular">
                <span className="col gray-700">Gender</span>
                <span className="col font-medium gray-800">Male</span>
              </li>
              <li className="row listItem body-xs font-regular">
                <span className="col gray-700">Address</span>
                <span className="col font-medium gray-800">
                  H-108, Roorkee, Uttarakhand
                </span>
              </li>
            </ul>
          </div>
        )}

        {completeReg && (
          <form className="secValidateEmail" onSubmit={formikReg.handleSubmit}>
            <div className="mt-32 mb-32">
              <MuiInput
                type="text"
                variant="outlined"
                name="contract_ID"
                label="Temp/Contract ID"
                fullWidth
                value={formikReg.values.contract_ID}
                onChange={formikReg.handleChange}
                onBlur={formikReg.handleBlur}
                error={
                  formikReg.touched.contract_ID && formikReg.errors.contract_ID
                }
                errorText={formikReg.errors.contract_ID}
                autoFocus={true}
              />
            </div>
            <div className="mb-32">
              <MuiInput
                variant="outlined"
                name="email"
                label="Email"
                type="text"
                fullWidth
                value={formikReg.values.email}
                onChange={formikReg.handleChange}
                onBlur={formikReg.handleBlur}
                error={formikReg.touched.email && formikReg.errors.email}
                errorText={formikReg.errors.email}
              />
            </div>
            <MuiButton
              type="submit"
              name="Verify Your Email ID"
              variant="contained"
              fullWidth
              sx={{
                background: `var(--brand-500)`,
                borderRadius: "6.25rem",
                fontWeight: `var(--font-medium)`,
              }}
              disabled={formikReg.isSubmitting}
              endIcon={
                formikReg.isSubmitting ? (
                  <CircularProgress size={13} color="white" />
                ) : null
              }
            />
          </form>
        )}

        {completeRegVerify && (
          <form onSubmit={formikOTP.handleSubmit} className="secEmailOTPVerify">
            <p className="body-m font-bold mb-14 gray-800">Verify Email Id</p>
            <p className="body-xs font-regular gray-800">
              OTP has been sent to
            </p>
            <p className="body-s font-medium gray-800">nitin.kumar@gmail.com</p>
            <OtpInput
              formik={formikOTP}
              formattedTime={formattedTime}
              timeLeft={timeLeft}
              className="mt-32"
              handleResend={handleResendOTP}
            />
            {/* <p className="body-xs font-regular gray-800 mt-32">Didn’t receive the OTP? <span className="gray-600">Resend in 00:21</span></p> */}
            <MuiButton
              type="submit"
              name="Verify Your Email ID"
              variant="contained"
              fullWidth
              sx={{
                // marginBottom: "1.75rem",
                background: `var(--brand-500)`,
                borderRadius: "6.25rem",
                fontWeight: `var(--font-medium)`,
                mt: 4,
              }}
              disabled={formikOTP.isSubmitting}
              endIcon={
                formikOTP.isSubmitting ? (
                  <CircularProgress size={13} color="white" />
                ) : null
              }
            />
          </form>
        )}

        {regConsent && (
          <form className="seCompleteReg" onSubmit={formikConsent.handleSubmit}>
            <div className="success-card mt-32 mb-14 body-xs row mb-32">
              <p className="col gray-700 font-regular ">
                Email
                <br />
                <span className="font-medium gray-800">
                  nitin.kumar@gmail.com
                </span>
              </p>
              <p className="col font-medium gray-800 text-right center-vrt-rgt">
                <img src={verified} alt="Verified" /> VERIFIED
              </p>
            </div>

            <MuiCheckbox
              id="terms"
              name="terms"
              checked={formikConsent.values.terms}
              onChange={formikConsent.handleChange}
              label="I agree to the Terms & Conditions and Privacy Policy"
            />
            <MuiCheckbox
              id="getUpdates"
              name="getUpdates"
              checked={formikConsent.values.getUpdates}
              onChange={formikConsent.handleChange}
              label="Get updates on WhatsApp"
            />
            <MuiButton
              type="submit"
              name="Complete Registration"
              variant="contained"
              fullWidth
              sx={{
                // marginBottom: "1.75rem",
                background: `var(--brand-500)`,
                borderRadius: "6.25rem",
                fontWeight: `var(--font-medium)`,
                mt: 4,
              }}
              disabled={
                !formikConsent.values.terms || formikConsent.isSubmitting
              }
              endIcon={
                formikConsent.isSubmitting ? (
                  <CircularProgress size={13} color="white" />
                ) : null
              }
            />
          </form>
        )}
        {regSuccessfull && (
          <section className="sec-success">
            <img
              src={check_circle}
              alt="Check Icon"
              style={{
                width: "5rem",
                marginLeft: "-.5rem",
                marginBottom: "2.5rem",
              }}
            />
            <p className="body-m font-bold mb-14">Registration Successful!</p>
            <p className="body-xs font-regular">
              You are now a verified user of NHAI
            </p>
          </section>
        )}
      </MuiModal>
    </>
  );
}
