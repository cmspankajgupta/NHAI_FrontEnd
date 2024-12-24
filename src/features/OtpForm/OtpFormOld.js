import "./OtpForm.scss";
import { Box, Link, CircularProgress } from "@mui/material";
import MuiButton from "../../components/Button/MuiButton";
import MuiInput from "../../components/Input/MuiInput";
import DigitalIndia from "../../assets/images/logo/DigitalIndia.svg";
import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import { OtpSchema } from "../OtpBox/OtpSchema";
import { useDispatch, useSelector } from "react-redux";
import { setMobile, sendOtp, resetMobile, editMobile, setOtp, verifyOtp, resetError, resetOtp } from "../../store/slices/loginSlice";
import { useNavigate } from "react-router-dom";
import useCountdown from "../../hooks/useCountdown";

const intiaValuesOTP = {
    otp: '',
}

const OtpForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { formattedTime, reset, restart } = useCountdown(3);
    const { Mobile, isPhone, loading, error, otp, isResend } = useSelector((state) => state.login);
    console.log(otp,'staterudex')
    const inputRefs = useRef([]);

    const handleEdit = () => {
        dispatch(editMobile(Mobile));
    }

    const formik = useFormik({
        initialValues: intiaValuesOTP,
        validationSchema: OtpSchema,
        onSubmit: async (values) => {
            console.log(values,'inside formik')
            try {
                const response = await dispatch(verifyOtp(values));
                if (response.payload?.status) {
                    navigate('/protected');
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

    const handleResendotp = async (e) => {
        dispatch(resetOtp());
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
    
    // Function to focus on next input field
    const focusNextInput = (index) => {
        if (index < 5 - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    // Function to focus on previous input field
    const focusPreviousInput = (index) => {
        const newOtp = [...otp];
        newOtp[index] = "";
        dispatch(setOtp(newOtp));
        dispatch(resetError());
        if (index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    // Function to handle key presses
    const handleKeyDown = (event, index) => {
        const value = event.key;
        const newOtp = [...otp];
        console.log(newOtp)

        if (event.key == "Backspace") {
            return focusPreviousInput(index);
        }

        // Check if the key pressed is a number and the maximum length of the input field is reached
        if (event.key >= "0" && event.key <= "9" && value.length === 1) {
            newOtp[index] = value;
            dispatch(setOtp(newOtp));
            focusNextInput(index);
        }

        if (index + 1 == 5) {
            return formik.setValues({ ...formik.values, otp: newOtp.join("") });
        }
    };
    return (

        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                padding: 6,
                paddingBottom: 0,
            }}
        >
            <div style={{ marginBottom: "14px", cursor: 'pointer' }} onClick={handleEdit}>
                {" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                >
                    <mask
                        id="mask0_179_2821"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="32"
                        height="32"
                    >
                        <rect width="32" height="32" fill="#1C1B1F" />
                    </mask>
                    <g mask="url(#mask0_179_2821)">
                        <path
                            d="M9.8307 16.9999L17.4256 24.5948L16 25.9999L6 16L16 6L17.4256 7.4051L9.8307 15H25.9999V16.9999H9.8307Z"
                            fill="#1C1B1F"
                        />
                    </g>
                </svg>
            </div>
            <p className="head-xs head-black">Verify OTP</p>
            <p className="body-xs font-regular" style={{ marginBottom: "40px" }}>
                OTP has been sent to{" "}
                <span className="font-medium">+91 {Mobile} </span>
                <Link sx={{ textDecoration: "none" }} className="medium" style={{ cursor: 'pointer' }} onClick={handleEdit}>
                    Edit
                </Link>
            </p>
            <form
                style={{ width: "100%", display: "flex", flexDirection: "column" }} onSubmit={(e) => formik.handleSubmit(e)}
            >
                <div style={{ display: "flex", gap: 16 }}>
                    {otp.map((item, index) => (
                        <div key={index} style={{ width: "fit-content" }}>
                            <MuiInput
                                error={formik.errors.otp && formik.touched.otp || error}
                                inputRef={(e) => {
                                    inputRefs.current[index] = e;
                                }}
                                value={item}
                                variant="outlined"
                                // label="Registered Mobile Number"
                                className="mb-2"
                                type="text"
                                //   required
                                sx={{
                                    marginBottom: "10px",
                                    width: "56px",
                                    height: "56px",
                                    "& .MuiInputBase-input": {
                                        fontFamily: "var(--body-font-family)",
                                        fontSize: "16px",
                                        fontStyle: "normal",
                                        textAlign: "center",
                                        fontWeight: 400,
                                        lineHeight: "24px",
                                        /* 150% */
                                        letterSpacing: "-0.08px",
                                    },
                                }}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                            />
                        </div>
                    ))}
                </div>
                {formik.touched.otp && formik.errors.otp && (
                    <span className="error" style={{ fontSize: '12px' }}>{formik.errors.otp}</span>)}
                {error && (<span className="error" style={{ fontSize: '12px' }}>{error}</span>)}




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
                        {isResend?(`Resend in ${formattedTime}`):(

<Link sx={{ textDecoration: "none" }} className="medium" style={{ cursor: 'pointer' }} onClick={handleResendotp}>
Resend
</Link>
                        )}
                    </span>
                </p>
                <MuiButton
                    type="submit"
                    name="Verify OTP"
                    variant="contained"
                    fullWidth
                    endIcon={loading ? <CircularProgress size={13} color="white" /> : null}
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






