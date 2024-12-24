import * as Yup from 'yup';

// Define validation for OTP fields
export const OtpSchema = Yup.object().shape({
    otp: Yup.string()
        .matches(/^\d{5}$/, "OTP must be exactly 5 digits")  // Ensures 5 digits only
        .required("OTP is required")
});
