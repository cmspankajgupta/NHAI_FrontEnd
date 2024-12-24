import "./OtpForm.scss";
import { Box, Link, CircularProgress } from "@mui/material";
import MuiButton from "../../components/Button/MuiButton";
import MuiInput from "../../components/Input/MuiInput";
import { useEffect, useRef } from "react";
import { useFormik } from "formik";
import { OtpSchema } from "../OtpBox/OtpSchema";
import { useDispatch, useSelector } from "react-redux";
import { setMobile, sendOtp, resetMobile, editMobile, setOtp, verifyOtp, resetError, resetOtp } from "../../store/slices/loginSlice";
import { useNavigate } from "react-router-dom";
import useCountdown from "../../hooks/useCountdown";

const initialValuesOTP = {
    otp: '',
}

const OtpForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { formattedTime, reset, restart } = useCountdown(30);
    const { Mobile, error, otp, isResend, loadingVerify } = useSelector((state) => state.login);
    const inputRefs = useRef([]);

    const handleEdit = () => {
        dispatch(editMobile(Mobile));
        dispatch(resetError());
    }
    
    const formik = useFormik({
        initialValues: initialValuesOTP,
        validationSchema: OtpSchema,
        onSubmit: async (values) => {
            try {
                const response = await dispatch(verifyOtp(values.otp)); 
                if (response.payload?.status) {
                    navigate('/dashboard');  
                } else {
                    console.log('OTP verification failed');
                }
            } catch (error) {
                console.error('OTP verification error:', error);
            }
        },
    });

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleResendOtp = async () => {
        // Reset OTP input state and validation
        dispatch(resetOtp());
        dispatch(resetError());
        dispatch(setOtp(['', '', '', '', '']));  // Reset OTP state
        formik.setValues({ otp: '' });  // Clear Formik's OTP value
        formik.setTouched({ otp: false });  // Mark OTP field as untouched
        formik.setErrors({ otp: '' });  // Reset any validation errors
    
        // Trigger Formik validation after clearing OTP
        formik.validateForm();
    
        try {
            const response = await dispatch(sendOtp(Mobile)); 
            if (response.payload?.status) {
                reset();
                restart();
            } else {
                console.log('OTP resend failed');
            }
        } catch (error) {
            console.error('Error during OTP resend:', error);
        }
    };
    



    const handleKeyDown = (event, index) => {
        const value = event.key;
        const newOtp = [...otp];
        if (event.key === "Backspace") {
            dispatch(resetError());
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
            newOtp[index] = "";
            dispatch(setOtp(newOtp));  
        } else if (value >= "0" && value <= "9") {
            newOtp[index] = value;
            dispatch(setOtp(newOtp));
            if (index < otp.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
        formik.setValues({ otp: newOtp.join("") });
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", padding: 6, paddingBottom: 0 }}>
            <div style={{ marginBottom: "14px", cursor: 'pointer' }} onClick={handleEdit}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <mask id="mask0_179_2821" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                        <rect width="32" height="32" fill="#1C1B1F" />
                    </mask>
                    <g mask="url(#mask0_179_2821)">
                        <path d="M9.8307 16.9999L17.4256 24.5948L16 25.9999L6 16L16 6L17.4256 7.4051L9.8307 15H25.9999V16.9999H9.8307Z" fill="#1C1B1F" />
                    </g>
                </svg>
            </div>

            <p className="head-xs head-black">Verify OTP</p>
            <p className="body-xs font-regular" style={{ marginBottom: "40px" }}>
                OTP has been sent to <span className="font-medium">+91 {Mobile} </span>
                <Link sx={{ textDecoration: "none" }} className="medium" style={{ cursor: 'pointer' }} onClick={handleEdit}>Edit</Link>
            </p>

            <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: 16 }}>
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
                    <span className="error" style={{ fontSize: '0.75rem', marginTop:'0.75rem' }}>{formik.errors.otp}</span>
                )}

                {error && (
                    <span className="error" style={{ fontSize: '0.75rem', marginTop:'0.75rem' }}>{error}</span>
                )}

                <p className="body-xs font-regular mt-28">
                    Didn’t receive the OTP?{" "}
                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                        <circle cx="2" cy="2" r="2" fill="#E0E0E0" />
                    </svg>{" "}
                    <span className="body-xs font-medium gray-600">
                        {isResend ? (
                            `Resend in ${formattedTime}`
                        ) : (
                            <Link sx={{ textDecoration: "none" }} className="medium" style={{ cursor: 'pointer' }} onClick={handleResendOtp}>Resend</Link>
                        )}
                    </span>
                </p>

                <MuiButton
                    type="submit"
                    name="Verify OTP"
                    variant="contained"
                    fullWidth
                    endIcon={loadingVerify ? <CircularProgress size={13} color="white" /> : null}
                    sx={{
                        marginTop: "24px",
                        marginBottom: "28px",
                        background: `var(--brand-500)`,
                        borderRadius: "100px",
                        fontWeight: `var(--body-text-medium)`,
                    }}
                />
            </form>
        </Box>
    );
};

export default OtpForm;
